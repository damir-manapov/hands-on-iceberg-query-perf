/**
 * query.ts — Run performance tests on count queries with sample filters
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { TrinoClient } from "../TrinoClient";
import { TABLE_CONFIGS } from "../config/tableConfigs";
import { createTrinoConfig } from "../config/trinoConfig";
import { createQuerySets, TableQueryConfig, SingleTableConfig, SeveralTablesConfig } from "../config/tableQueries";
import { humanNumber } from "../utils";
import { TableConfig } from "../types";
import { PaginationColumn } from "../config/tableQueries";

interface QueryResult {
  query: string;
  count: number;
  filter: string;
  queryType: "COUNT" | "PAGINATION" | "AGGREGATION";
  paginationType?: string;
  sorted?: boolean;
  aggregationInfo?: string;
  runs: QueryRun[];
}

interface MultiTableQueryResult {
  query: string;
  count: number;
  filter: string;
  queryType: "COUNT" | "PAGINATION" | "AGGREGATION";
  paginationType?: string;
  sorted?: boolean;
  aggregationInfo?: string;
  runs: QueryRun[];
}

interface QueryArgs {
  sql: string;
  description: string;
  queryType: "COUNT" | "PAGINATION" | "AGGREGATION";
  metadata: {
    filter: string;
    paginationType?: string;
    sorted?: boolean;
    aggregationInfo?: string;
  };
}

function calculateAverageDuration(durations: number[]): number {
  return durations.reduce((sum, duration) => sum + duration, 0) / durations.length;
}

interface QueryStats {
  query: string;
  filter: string;
  queryType: "COUNT" | "PAGINATION" | "AGGREGATION";
  paginationType?: string;
  sorted?: boolean;
  aggregationInfo?: string;
  count: number;
  runs: QueryRun[];
}

interface QueryRun {
  duration: number;
  runNumber: number;
}

interface TableMetadata {
  totalRows: number;
  totalSizeBytes: number;
  totalSizeHuman: string;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const thresh = 1024;
  const units = ["B", "KB", "MB", "GB", "TB", "PB"];
  let u = 0;
  let b = bytes;
  while (b >= thresh && u < units.length - 1) {
    b /= thresh;
    u++;
  }
  return `${b.toFixed(1)} ${units[u]}`;
}

function formatMs(value: number): string {
  return Math.ceil(value).toLocaleString().replace(/,/g, "_");
}

function calculatePercentile(values: number[], percentile: number): number {
  if (values.length === 0) return 0;
  if (values.length === 1) return values[0];

  const sorted = [...values].sort((a, b) => a - b);
  const index = (percentile / 100) * (sorted.length - 1);

  if (Number.isInteger(index)) {
    return sorted[index];
  } else {
    const lower = Math.floor(index);
    const upper = Math.ceil(index);
    const weight = index - lower;
    return sorted[lower] * (1 - weight) + sorted[upper] * weight;
  }
}

async function getTableMetadata(
  client: TrinoClient,
  tableName: string
): Promise<TableMetadata> {
  // Get total row count
  const countResult = await client.query<{ count: number }>(
    `SELECT COUNT(*) as count FROM ${tableName}`
  );
  const totalRows = countResult[0]?.count ?? 0;

  // Get table size from files metadata
  const filesTable = `"${tableName.split(".").pop()}$files"`;
  const sizeResult = await client.query<{ total_bytes: number }>(
    `SELECT SUM(file_size_in_bytes) as total_bytes FROM ${tableName.split(".")[0]}.${tableName.split(".")[1]}.${filesTable}`
  );
  const totalSizeBytes = sizeResult[0]?.total_bytes ?? 0;

  return {
    totalRows,
    totalSizeBytes,
    totalSizeHuman: formatBytes(totalSizeBytes),
  };
}

function createRandomQuery(queryArgs: QueryArgs[]): string {
  if (queryArgs.length === 0) {
    throw new Error("Cannot create random query: no query arguments available");
  }
  
  const randomIndex = Math.floor(Math.random() * queryArgs.length);
  return queryArgs[randomIndex].sql;
}

async function runRandomQueries(
  client: TrinoClient,
  queryArgs: QueryArgs[],
  abortSignal: AbortSignal
): Promise<void> {
  const runRandomQuery = async () => {
    try {
      const randomSQL = createRandomQuery(queryArgs);
      await client.query(randomSQL);
    } catch (error) {
      // Silently ignore random query errors to not interfere with main measurements
      console.warn(`Random query failed: ${error}`);
    }
  };
  
  const runContinuously = async () => {
    while (!abortSignal.aborted) {
      await runRandomQuery();
    }
  };
  
  runContinuously();
}

async function runQuery(
  client: TrinoClient,
  sql: string,
  description: string,
  queryType: "COUNT" | "PAGINATION" | "AGGREGATION",
  metadata: {
    filter: string;
    paginationType?: string;
    sorted?: boolean;
    aggregationInfo?: string;
  },
  iterations: number = 1
): Promise<QueryResult> {
  console.log(`\n🔍 ${description}`);
  console.log(`SQL: ${sql}`);

  const runs: QueryRun[] = [];
  let totalCount = 0;

  for (let i = 0; i < iterations; i++) {
    const startTime = Date.now();
    const result = await client.query(sql);
    const duration = Date.now() - startTime;

    runs.push({ duration, runNumber: i + 1 });

    // Extract count based on query type (use first run's count)
    if (i === 0) {
      totalCount =
        queryType === "COUNT"
          ? ((result[0] as { count: number })?.count ?? 0)
          : result.length;
    }

    const labels = {
      COUNT: "Count",
      PAGINATION: "Rows returned",
      AGGREGATION: "Result rows",
    };

    console.log(
      `✅ ${labels[queryType]}: ${totalCount.toLocaleString()}, Duration: ${duration}ms`
    );

    // Add delay between iterations (except for the last iteration)
    if (i < iterations - 1) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  return {
    query: sql,
    count: totalCount,
    filter: metadata.filter,
    queryType,
    paginationType: metadata.paginationType,
    sorted: metadata.sorted,
    aggregationInfo: metadata.aggregationInfo,
    runs,
  };
}

function generateMarkdownReport(
  tableName: string,
  tableMetadata: TableMetadata,
  queryStats: QueryStats[],
  overallStats: {
    totalQueries: number;
    avgDuration: number;
    minDuration: number;
    maxDuration: number;
    p95Duration: number;
  },
  timestamp: string,
  iterations: number,
  concurrencySimulationStreams: number
): string {
  const report = `# Query Performance Report

**Table:** ${tableName}  
**Generated:** ${timestamp}  
**Total Rows:** ${tableMetadata.totalRows.toLocaleString()}  
**Table Size:** ${tableMetadata.totalSizeHuman}

## Summary

- **Total Queries:** ${overallStats.totalQueries}
- **Iterations:** ${iterations}
- **Concurrency Simulation Streams:** ${concurrencySimulationStreams}
- **Average Duration:** ${formatMs(overallStats.avgDuration)}ms
- **Fastest Query:** ${formatMs(overallStats.minDuration)}ms
- **Slowest Query:** ${formatMs(overallStats.maxDuration)}ms
- **95th Percentile:** ${formatMs(overallStats.p95Duration)}ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
${queryStats
  .map(stats => {
    const paginationType = stats.paginationType || "-";
    const sorted =
      stats.sorted !== undefined ? (stats.sorted ? "Yes" : "No") : "-";
    const aggregationInfo = stats.aggregationInfo || "-";

    // Calculate statistics from runs array
    const durations = stats.runs.map(r => r.duration);
    const avgDuration = calculateAverageDuration(durations);
    const minDuration = Math.min(...durations);
    const maxDuration = Math.max(...durations);
    const p95Duration = calculatePercentile(durations, 95);

    return `| ${stats.filter} | ${stats.queryType} | ${paginationType} | ${sorted} | ${aggregationInfo} | ${stats.count.toLocaleString()} | ${formatMs(avgDuration)} | ${formatMs(minDuration)} | ${formatMs(maxDuration)} | ${formatMs(p95Duration)} |`;
  })
  .join("\n")}

## Query Details

${queryStats
  .map(stats => {
    const durations = stats.runs.map(r => r.duration);
    const avgDuration = calculateAverageDuration(durations);
    const minDuration = Math.min(...durations);
    const maxDuration = Math.max(...durations);
    const p95Duration = calculatePercentile(durations, 95);

    return `### ${stats.filter} - ${stats.queryType}
- **SQL:** \`${stats.query}\`
- **Count/Rows:** ${stats.count.toLocaleString()}
- **Pagination Type:** ${stats.paginationType ?? "-"}
- **Sorted:** ${stats.sorted !== undefined ? (stats.sorted ? "Yes" : "No") : "-"}
- **Aggregation:** ${stats.aggregationInfo ?? "-"}
- **Average Duration:** ${formatMs(avgDuration)}ms
- **Min Duration:** ${formatMs(minDuration)}ms
- **Max Duration:** ${formatMs(maxDuration)}ms
- **P95 Duration:** ${formatMs(p95Duration)}ms
`;
  })
  .join("\n")}
`;

  return report;
}

async function processTable(
  client: TrinoClient,
  tableConfig: TableConfig,
  queryConfig: SingleTableConfig,
  tableName: string,
  fullTableName: string,
  querySetName: string,
  iterations: number,
  concurrencySimulationStreams: number
): Promise<void> {
  console.log(`\n🚀 Running query performance tests on ${fullTableName}`);

  // Get table metadata first
  console.log("📊 Gathering table metadata...");
  const tableMetadata = await getTableMetadata(client, fullTableName);
  console.log(
    `📈 Table has ${tableMetadata.totalRows.toLocaleString()} rows (${tableMetadata.totalSizeHuman})`
  );

  // Check if table has data
  if (tableMetadata.totalRows === 0) {
    console.log(
      "⚠️  Table is empty! Run 'yarn generate' first to create data."
    );
    return;
  }

  // Get query configurations for this table
  const filters = queryConfig.filters;
  const aggregationColumns = queryConfig.aggregationColumns;
  const paginationColumns = queryConfig.paginationColumns;

  console.log(`\n🔍 Building query configurations...`);

  // Build array of query arguments (one per query type, not per iteration)
  const queryArgs: QueryArgs[] = [];

  // Build column list for pagination queries
  const paginationColumnList = paginationColumns
    .map((col: PaginationColumn) => col.column)
    .join(", ");

  for (const filter of filters) {
    console.log(
      `📋 Adding query configs for filter: ${filter.description || filter.whereClause}`
    );

    const where = filter.whereClause ? `WHERE ${filter.whereClause}` : "";
    const filterName = filter.description || filter.whereClause;

    // COUNT queries
    const countSQL = `SELECT COUNT(*) as count FROM ${fullTableName} ${where}`;
    queryArgs.push({
      sql: countSQL,
      description: `Count query (${filterName})`,
      queryType: "COUNT",
      metadata: {
        filter: filterName,
      },
    });

    // First page (no sort)
    const firstPageSQL = `SELECT ${paginationColumnList} FROM ${fullTableName} ${where} LIMIT 100`;
    queryArgs.push({
      sql: firstPageSQL,
      description: `First page (${filterName})`,
      queryType: "PAGINATION",
      metadata: {
        filter: filterName,
        paginationType: "first page",
        sorted: false,
      },
    });

    // First page (sorted by idColumn)
    const firstPageSortedSQL = `SELECT ${paginationColumnList} FROM ${fullTableName} ${where} ORDER BY ${tableConfig.idColumn} LIMIT 100`;
    queryArgs.push({
      sql: firstPageSortedSQL,
      description: `First page sorted (${filterName})`,
      queryType: "PAGINATION",
      metadata: {
        filter: filterName,
        paginationType: "first page",
        sorted: true,
      },
    });

    // 100th page (no sort)
    const hundredthPageSQL = `SELECT ${paginationColumnList} FROM ${fullTableName} ${where} OFFSET 9900 LIMIT 100`;
    queryArgs.push({
      sql: hundredthPageSQL,
      description: `100th page (${filterName})`,
      queryType: "PAGINATION",
      metadata: {
        filter: filterName,
        paginationType: "100th page",
        sorted: false,
      },
    });

    // 100th page (sorted by idColumn)
    const hundredthPageSortedSQL = `SELECT ${paginationColumnList} FROM ${fullTableName} ${where} ORDER BY ${tableConfig.idColumn} OFFSET 9900 LIMIT 100`;
    queryArgs.push({
      sql: hundredthPageSortedSQL,
      description: `100th page sorted (${filterName})`,
      queryType: "PAGINATION",
      metadata: {
        filter: filterName,
        paginationType: "100th page",
        sorted: true,
      },
    });

    // AGGREGATION queries
    for (const aggCol of aggregationColumns) {
      const aggregationSQL = `SELECT ${aggCol.column}, COUNT(*) as count FROM ${fullTableName} ${where} GROUP BY ${aggCol.column}`;
      queryArgs.push({
        sql: aggregationSQL,
        description: `Aggregation (${filterName}, ${aggCol.column})`,
        queryType: "AGGREGATION",
        metadata: {
          filter: filterName,
          aggregationInfo: aggCol.column,
        },
      });
    }
  }

  console.log(`\n🚀 Executing ${queryArgs.length} query types with ${iterations} iterations each...`);
  if (concurrencySimulationStreams > 0) {
    console.log(`🎲 Concurrency simulation: ${concurrencySimulationStreams} parallel continuous streams`);
  }

  // Create abort controller for concurrency simulation
  const abortController = new AbortController();

  // Start configured number of parallel concurrency simulation workloads in background
  const concurrencySimulationPromises = concurrencySimulationStreams > 0
    ? Array.from({ length: concurrencySimulationStreams }, () =>
        runRandomQueries(client, queryArgs, abortController.signal)
      )
    : [];

  // Execute all queries with iterations
  const results: QueryResult[] = [];
  for (const args of queryArgs) {
    // Run this query configuration with iterations
    const result = await runQuery(
      client,
      args.sql,
      args.description,
      args.queryType,
      args.metadata,
      iterations
    );
    results.push(result);
  }

  // Cancel concurrency simulation as soon as main queries finish
  abortController.abort();
  console.log(`\n✅ Main queries completed, stopping concurrency simulation workloads`);

  // Wait for all concurrency simulation workloads to finish gracefully
  await Promise.all(concurrencySimulationPromises);

  // Overall statistics
  const allDurations = results.map(r => {
    const durations = r.runs.map(run => run.duration);
    return calculateAverageDuration(durations);
  });
  const overallAvg =
    allDurations.reduce((a, b) => a + b, 0) / allDurations.length;
  const overallMin = Math.min(...allDurations);
  const overallMax = Math.max(...allDurations);
  const overallP95 = calculatePercentile(allDurations, 95);

  console.log(`\n🎯 OVERALL STATISTICS for ${tableName}`);
  console.log(`Total queries run: ${results.length}`);
  console.log(`Average duration: ${overallAvg.toFixed(1)}ms`);
  console.log(`Fastest query: ${overallMin}ms`);
  console.log(`Slowest query: ${overallMax}ms`);
  console.log(`95th percentile: ${overallP95.toFixed(1)}ms`);

  // Generate markdown report
  const timestamp = new Date().toISOString();

  // Group results by query to calculate statistics
  const queryGroups = new Map<string, QueryResult[]>();
  for (const result of results) {
    const key = result.query;
    if (!queryGroups.has(key)) {
      queryGroups.set(key, []);
    }
    queryGroups.get(key)!.push(result);
  }

  const queryStats: QueryStats[] = Array.from(queryGroups.entries()).map(
    ([_query, runs]) => {
      // Use the first run for metadata (they're all the same)
      const firstRun = runs[0];

      return {
        query: firstRun.query,
        filter: firstRun.filter,
        queryType: firstRun.queryType,
        paginationType: firstRun.paginationType,
        sorted: firstRun.sorted,
        aggregationInfo: firstRun.aggregationInfo,
        count: firstRun.count,
        runs: runs.flatMap(run => run.runs),
      };
    }
  );

  const overallStats = {
    totalQueries: results.length,
    avgDuration: overallAvg,
    minDuration: overallMin,
    maxDuration: overallMax,
    p95Duration: overallP95,
  };

  const markdownReport = generateMarkdownReport(
    fullTableName,
    tableMetadata,
    queryStats,
    overallStats,
    timestamp,
    iterations,
    concurrencySimulationStreams
  );

  // Write report to file
  const reportDir = path.join("reports", querySetName);
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }

  const reportFile = path.join(
    reportDir,
    `${querySetName}-query-performance-${tableName}.md`
  );
  fs.writeFileSync(reportFile, markdownReport, "utf-8");

  console.log(`\n📄 Markdown report saved to: ${reportFile}`);
}

async function processMultiTable(
  client: TrinoClient,
  queryConfig: SeveralTablesConfig,
  querySetName: string,
  iterations: number,
  concurrencySimulationStreams: number
): Promise<void> {
  console.log(`\n🚀 Running multi-table query performance tests`);
  
  // Build query arguments for multi-table queries
  const queryArgs: QueryArgs[] = [];
  
  for (const query of queryConfig.queries) {
    // Replace placeholders in SQL with actual table names
    let sql = query.sql;
    queryConfig.tables.forEach((tableInfo, i) => {
      const tableName = `${tableInfo.tableBase}_${humanNumber(tableInfo.rowsCount).replace(/,/g, "")}`;
      const fullTableName = `iceberg.performance.${tableName}`;
      
      // Replace placeholder {table1}, {table2}, etc. with actual table names
      sql = sql.replace(new RegExp(`\\{table${i + 1}\\}`, 'g'), fullTableName);
    });
    
    queryArgs.push({
      sql,
      description: query.description,
      queryType: query.queryType,
      metadata: {
        filter: "multi-table query",
        paginationType: query.queryType === "PAGINATION" ? "multi-table" : undefined,
        sorted: false,
        aggregationInfo: query.queryType === "AGGREGATION" ? "multi-table aggregation" : undefined,
      },
    });
  }
  
  if (queryArgs.length === 0) {
    console.log("⏭️  No queries configured for multi-table test");
    return;
  }
  
  console.log(`\n🚀 Executing ${queryArgs.length} multi-table query types with ${iterations} iterations each...`);
  if (concurrencySimulationStreams > 0) {
    console.log(`🎲 Concurrency simulation: ${concurrencySimulationStreams} parallel continuous streams`);
  }

  // Create abort controller for concurrency simulation
  const abortController = new AbortController();

  // Start configured number of parallel concurrency simulation workloads in background
  const concurrencySimulationPromises = concurrencySimulationStreams > 0
    ? Array.from({ length: concurrencySimulationStreams }, () =>
        runRandomQueries(client, queryArgs, abortController.signal)
      )
    : [];

  // Execute all queries with iterations
  const results: MultiTableQueryResult[] = [];
  for (const args of queryArgs) {
    console.log(`\n📊 Testing ${args.description} (${args.queryType})`);
    
    const result = await runQuery(
      client,
      args.sql,
      args.description,
      args.queryType,
      args.metadata,
      iterations
    );
    
    results.push(result);
    
    // Calculate statistics from runs array for logging
    const runs = result.runs.map(r => r.duration);
    const avgDuration = calculateAverageDuration(runs);
    const minDuration = Math.min(...runs);
    const maxDuration = Math.max(...runs);
    const sortedRuns = [...runs].sort((a, b) => a - b);
    const p95Duration = sortedRuns[Math.floor(sortedRuns.length * 0.95)];
    
    console.log(`  📈 Average: ${formatMs(avgDuration)}ms | Min: ${formatMs(minDuration)}ms | Max: ${formatMs(maxDuration)}ms | P95: ${formatMs(p95Duration)}ms`);
  }

  // Cancel concurrency simulation as soon as main queries finish
  abortController.abort();
  console.log(`\n✅ Main queries completed, stopping concurrency simulation workloads`);

  // Wait for all concurrency simulation workloads to finish gracefully
  await Promise.all(concurrencySimulationPromises);

  // Overall statistics
  const allDurations = results.map(r => {
    const durations = r.runs.map(run => run.duration);
    return calculateAverageDuration(durations);
  });
  const overallAvg =
    allDurations.reduce((a, b) => a + b, 0) / allDurations.length;
  const overallMin = Math.min(...allDurations);
  const overallMax = Math.max(...allDurations);
  const sortedDurations = [...allDurations].sort((a, b) => a - b);
  const overallP95 =
    sortedDurations[Math.floor(sortedDurations.length * 0.95)];

  console.log(`\n📊 Overall Statistics:`);
  console.log(`  Total Queries: ${results.length}`);
  console.log(`  Average Duration: ${formatMs(overallAvg)}ms`);
  console.log(`  Fastest Query: ${formatMs(overallMin)}ms`);
  console.log(`  Slowest Query: ${formatMs(overallMax)}ms`);
  console.log(`  95th Percentile: ${formatMs(overallP95)}ms`);

  // Generate and save report
  const timestamp = new Date().toISOString();
  const queryStats = results.map(result => ({
    query: result.query,
    filter: result.filter,
    count: result.count,
    runs: result.runs,
    queryType: result.queryType,
  }));

  const overallStats = {
    totalQueries: results.length,
    avgDuration: overallAvg,
    minDuration: overallMin,
    maxDuration: overallMax,
    p95Duration: overallP95,
  };

  // Create a combined table metadata for multi-table queries
  const combinedTableMetadata = {
    totalRows: queryConfig.tables.reduce((sum, table) => sum + table.rowsCount, 0),
    totalSizeBytes: 0, // We don't have size info for multi-table queries
    totalSizeHuman: "N/A",
  };

  const markdownReport = generateMarkdownReport(
    `Multi-table (${queryConfig.tables.map(t => t.tableBase).join(', ')})`,
    combinedTableMetadata,
    queryStats,
    overallStats,
    timestamp,
    iterations,
    concurrencySimulationStreams
  );

  // Write report to file
  const reportDir = path.join("reports", querySetName);
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }

  const reportFileName = `${querySetName}-multi-table-query-performance.md`;
  const reportPath = path.join(reportDir, reportFileName);
  fs.writeFileSync(reportPath, markdownReport);

  console.log(`\n📄 Report saved: ${reportPath}`);
  console.log(`\n✅ Completed performance tests for multi-table queries`);
}

async function main() {
  // Trino connection
  const trino = createTrinoConfig("query");
  const client = new TrinoClient(trino);

  // Get query sets
  const querySets = createQuerySets();

  console.log(
    `🚀 Running query performance tests on ${querySets.length} query sets`
  );

  // Process each query set
  for (const querySet of querySets) {
    if (!querySet.enabled) {
      console.log(`⏭️  Skipping disabled query set: ${querySet.name}`);
      continue;
    }

    console.log(`\n📋 Processing query set: ${querySet.name}`);

    // Process each table configuration in this query set
    for (const queryConfig of querySet.tableConfigs) {
      if (queryConfig.type === "singleTable") {
        // Handle single table configuration
        const tableConfig = TABLE_CONFIGS.find(
          config => config.tableBase === queryConfig.tableBase
        );

        if (!tableConfig) {
          console.log(
            `⏭️  No table config found for table: ${queryConfig.tableBase} in set: ${querySet.name}`
          );
          continue;
        }

        if (tableConfig.enabled === false) {
          console.log(
            `⏭️  Skipping disabled table: ${tableConfig.tableBase}`
          );
          continue;
        }

        // Process each row count for this table
        for (const totalRows of tableConfig.totalRows) {
          const rowCountSuffix = humanNumber(totalRows).replace(/,/g, "");

          const tableName = `${tableConfig.tableBase}_${rowCountSuffix}`;
          const fullTableName = `${tableConfig.catalog}.${tableConfig.schema}.${tableName}`;

          await processTable(
            client,
            tableConfig,
            queryConfig,
            tableName,
            fullTableName,
            querySet.name,
            querySet.iterations,
            querySet.concurrencySimulationStreams
          );
        }
      } else if (queryConfig.type === "severalTables") {
        // Handle multi-table configuration
        await processMultiTable(
          client,
          queryConfig,
          querySet.name,
          querySet.iterations,
          querySet.concurrencySimulationStreams
        );
      }
    }
  }

  console.log(`\n✅ Completed performance tests for all query sets!`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
