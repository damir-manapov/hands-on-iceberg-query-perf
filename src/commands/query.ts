/**
 * query.ts — Run performance tests on count queries with sample filters
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { TrinoClient } from "../TrinoClient";
import { TABLE_CONFIGS } from "../config/tableConfigs";
import { createTrinoConfig } from "../config/trinoConfig";
import {
  createTableQueryConfigs,
  TableQueryConfig,
} from "../config/tableQueries";
import { humanNumber } from "../utils";
import { TableConfig } from "../types";
import { PaginationColumn } from "../config/tableQueries";

interface QueryResult {
  query: string;
  duration: number;
  count: number;
  filter: string;
  queryType: "COUNT" | "PAGINATION" | "AGGREGATION";
  paginationType?: string;
  sorted?: boolean;
  aggregationInfo?: string;
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
  return Math.ceil(value).toLocaleString().replaceAll(",", "_");
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
  }
): Promise<QueryResult> {
  console.log(`\n🔍 ${description}`);
  console.log(`SQL: ${sql}`);

  const startTime = Date.now();
  const result = await client.query(sql);
  const duration = Date.now() - startTime;

  // Extract count based on query type
  const count =
    queryType === "COUNT"
      ? ((result[0] as { count: number })?.count ?? 0)
      : result.length;

  const labels = {
    COUNT: "Count",
    PAGINATION: "Rows returned",
    AGGREGATION: "Result rows",
  };

  console.log(
    `✅ ${labels[queryType]}: ${count.toLocaleString()}, Duration: ${duration}ms`
  );

  return {
    query: sql,
    duration,
    count,
    filter: metadata.filter,
    queryType,
    paginationType: metadata.paginationType,
    sorted: metadata.sorted,
    aggregationInfo: metadata.aggregationInfo,
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
  timestamp: string
): string {
  const report = `# Query Performance Report

**Table:** ${tableName}  
**Generated:** ${timestamp}  
**Total Rows:** ${tableMetadata.totalRows.toLocaleString()}  
**Table Size:** ${tableMetadata.totalSizeHuman}

## Summary

- **Total Queries:** ${overallStats.totalQueries}
- **Average Duration:** ${formatMs(overallStats.avgDuration)}ms
- **Fastest Query:** ${formatMs(overallStats.minDuration)}ms
- **Slowest Query:** ${formatMs(overallStats.maxDuration)}ms
- **95th Percentile:** ${formatMs(overallStats.p95Duration)}ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
${queryStats
  .map(stats => {
    const paginationType = stats.paginationType || "-";
    const sorted =
      stats.sorted !== undefined ? (stats.sorted ? "Yes" : "No") : "-";
    const aggregationInfo = stats.aggregationInfo || "-";

    // Calculate statistics from runs array
    const durations = stats.runs.map(r => r.duration);
    const avgDuration = durations.reduce((a, b) => a + b, 0) / durations.length;
    const minDuration = Math.min(...durations);
    const maxDuration = Math.max(...durations);
    const p95Duration = calculatePercentile(durations, 95);

    return `| ${stats.filter} | ${stats.queryType} | ${paginationType} | ${sorted} | ${aggregationInfo} | ${stats.count.toLocaleString()} | ${formatMs(avgDuration)} | ${formatMs(minDuration)} | ${formatMs(maxDuration)} | ${formatMs(p95Duration)} | ${stats.runs.length} |`;
  })
  .join("\n")}

## Query Details

${queryStats
  .map(stats => {
    const durations = stats.runs.map(r => r.duration);
    const avgDuration = durations.reduce((a, b) => a + b, 0) / durations.length;
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
- **Runs:** ${stats.runs.length}
`;
  })
  .join("\n")}
`;

  return report;
}

async function processTable(
  client: TrinoClient,
  tableConfig: TableConfig,
  queryConfig: TableQueryConfig,
  tableName: string,
  fullTableName: string
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

  // const iterations = 1;
  const iterations = 3;
  const results: QueryResult[] = [];

  // Get query configurations for this table
  const filters = queryConfig.filters;
  const aggregationColumns = queryConfig.aggregationColumns;
  const paginationColumns = queryConfig.paginationColumns;

  console.log(`\n🔍 Running ${iterations} iterations for each query...`);

  // Run queries for each filter
  for (const filter of filters) {
    console.log(
      `\n📋 Processing filter: ${filter.description || filter.whereClause}`
    );

    // COUNT queries
    const where = filter.whereClause ? `WHERE ${filter.whereClause}` : "";
    const countSQL = `SELECT COUNT(*) as count FROM ${fullTableName} ${where}`;
    for (let i = 0; i < iterations; i++) {
      const result = await runQuery(
        client,
        countSQL,
        `Count query (${filter.description || filter.whereClause})`,
        "COUNT",
        {
          filter: filter.description || filter.whereClause,
        }
      );
      results.push(result);
      if (i < iterations - 1) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }

    // PAGINATION queries - run for all filters with all pagination columns
    // Build column list for pagination queries
    const paginationColumnList = paginationColumns
      .map((col: PaginationColumn) => col.column)
      .join(", ");

    // First page (no sort)
    const firstPageSQL = `SELECT ${paginationColumnList} FROM ${fullTableName} ${where} LIMIT 100`;
    for (let i = 0; i < iterations; i++) {
      const result = await runQuery(
        client,
        firstPageSQL,
        `First page (${filter.description || filter.whereClause})`,
        "PAGINATION",
        {
          filter: filter.description || filter.whereClause,
          paginationType: "first page",
          sorted: false,
        }
      );
      results.push(result);
      if (i < iterations - 1) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }

    // First page (sorted by idColumn)
    const firstPageSortedSQL = `SELECT ${paginationColumnList} FROM ${fullTableName} ${where} ORDER BY ${tableConfig.idColumn} LIMIT 100`;
    for (let i = 0; i < iterations; i++) {
      const result = await runQuery(
        client,
        firstPageSortedSQL,
        `First page sorted (${filter.description || filter.whereClause})`,
        "PAGINATION",
        {
          filter: filter.description || filter.whereClause,
          paginationType: "first page",
          sorted: true,
        }
      );
      results.push(result);
      if (i < iterations - 1) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }

    // 100th page (no sort)
    const hundredthPageSQL = `SELECT ${paginationColumnList} FROM ${fullTableName} ${where} OFFSET 9900 LIMIT 100`;
    for (let i = 0; i < iterations; i++) {
      const result = await runQuery(
        client,
        hundredthPageSQL,
        `100th page (${filter.description || filter.whereClause})`,
        "PAGINATION",
        {
          filter: filter.description || filter.whereClause,
          paginationType: "100th page",
          sorted: false,
        }
      );
      results.push(result);
      if (i < iterations - 1) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }

    // 100th page (sorted by idColumn)
    const hundredthPageSortedSQL = `SELECT ${paginationColumnList} FROM ${fullTableName} ${where} ORDER BY ${tableConfig.idColumn} OFFSET 9900 LIMIT 100`;
    for (let i = 0; i < iterations; i++) {
      const result = await runQuery(
        client,
        hundredthPageSortedSQL,
        `100th page sorted (${filter.description || filter.whereClause})`,
        "PAGINATION",
        {
          filter: filter.description || filter.whereClause,
          paginationType: "100th page",
          sorted: true,
        }
      );
      results.push(result);
      if (i < iterations - 1) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }

    // AGGREGATION queries
    for (const aggCol of aggregationColumns) {
      const aggregationSQL = `SELECT ${aggCol.column}, COUNT(*) as count FROM ${fullTableName} ${where} GROUP BY ${aggCol.column}`;
      for (let i = 0; i < iterations; i++) {
        const result = await runQuery(
          client,
          aggregationSQL,
          `Aggregation (${filter.description || filter.whereClause}, ${aggCol.column})`,
          "AGGREGATION",
          {
            filter: filter.description || filter.whereClause,
            aggregationInfo: aggCol.column,
          }
        );
        results.push(result);
        if (i < iterations - 1) {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }
    }
  }

  // Overall statistics
  const allDurations = results.map(r => r.duration);
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
        runs: runs.map((run, index) => ({
          duration: run.duration,
          runNumber: index + 1,
        })),
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
    timestamp
  );

  // Write report to file
  const reportDir = "reports";
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }

  const reportFile = path.join(reportDir, `query-performance-${tableName}.md`);
  fs.writeFileSync(reportFile, markdownReport, "utf-8");

  console.log(`\n📄 Markdown report saved to: ${reportFile}`);
}

async function main() {
  // Trino connection
  const trino = createTrinoConfig("query");
  const client = new TrinoClient(trino);

  // Get table query configurations
  const tableQueryConfigs = createTableQueryConfigs();

  console.log(
    `🚀 Running query performance tests on all tables with per-table row counts`
  );

  // Process each table
  for (let i = 0; i < TABLE_CONFIGS.length; i++) {
    if (TABLE_CONFIGS[i].enabled === false) {
      console.log(`⏭️  Skipping disabled table: ${TABLE_CONFIGS[i].tableBase}`);
      continue;
    }
    const tableConfig = TABLE_CONFIGS[i];
    const queryConfig = tableQueryConfigs[i];

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
        fullTableName
      );
    }
  }

  console.log(
    `\n✅ Completed performance tests for all ${TABLE_CONFIGS.length} tables!`
  );
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
