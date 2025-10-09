/**
 * query.ts — Run performance tests on count queries with sample filters
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { TrinoClient } from "../TrinoClient";
import { TABLE_CONFIGS } from "../config/tableConfig";
import { LOAD } from "../config/load";
import { createTrinoConfig } from "../config/trinoConfig";
import {
  createFilterConditions,
  createAggregationColumns,
  createPaginationColumns,
} from "../config/queries";
import { humanNumber } from "../utils";

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
  // queryStats is already in the correct order (same as filters config order)

  const report = `# Query Performance Report

**Table:** ${tableName}  
**Total Rows:** ${tableMetadata.totalRows.toLocaleString()}  
**Table Size:** ${tableMetadata.totalSizeHuman} (${tableMetadata.totalSizeBytes.toLocaleString()} bytes)  
**Generated:** ${timestamp}  
**Total Queries Run:** ${overallStats.totalQueries}

## Summary

- **Average Duration:** ${Math.ceil(overallStats.avgDuration)}ms
- **Fastest Query:** ${overallStats.minDuration}ms
- **Slowest Query:** ${overallStats.maxDuration}ms
- **95th Percentile:** ${Math.ceil(overallStats.p95Duration)}ms

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

    return `| ${stats.filter} | ${stats.queryType} | ${paginationType} | ${sorted} | ${aggregationInfo} | ${stats.count.toLocaleString()} | ${Math.ceil(avgDuration)} | ${minDuration} | ${maxDuration} | ${Math.ceil(p95Duration)} | ${stats.runs.length} |`;
  })
  .join("\n")}

## Query Details

${queryStats
  .map(stats => {
    // Calculate statistics from runs array
    const durations = stats.runs.map(r => r.duration);
    const avgDuration = durations.reduce((a, b) => a + b, 0) / durations.length;
    const minDuration = Math.min(...durations);
    const maxDuration = Math.max(...durations);
    const p95Duration = calculatePercentile(durations, 95);

    return `### ${stats.filter}

\`\`\`sql
${stats.query}
\`\`\`

- **Count/Rows:** ${stats.count.toLocaleString()}
- **Average Duration:** ${Math.ceil(avgDuration)}ms
- **Min Duration:** ${minDuration}ms
- **Max Duration:** ${maxDuration}ms
- **95th Percentile:** ${Math.ceil(p95Duration)}ms
- **Runs:** ${stats.runs.length}

---
`;
  })
  .join("\n")}

*Report generated by hands-on-iceberg-query-perf*
`;

  return report;
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

async function main() {
  // Trino connection
  const trino = createTrinoConfig("query");
  const client = new TrinoClient(trino);

  // Use the first table config and generate dynamic table name
  const tableConfig = TABLE_CONFIGS[0];
  const rowCountSuffix = humanNumber(LOAD.totalRows).replace(/,/g, "");
  const tableName = `${tableConfig.tableBase}_${rowCountSuffix}`;
  const fullTableName = `${tableConfig.catalog}.${tableConfig.schema}.${tableName}`;

  console.log(`🚀 Running query performance tests on ${fullTableName}`);

  // Get table metadata first
  console.log("📊 Gathering table metadata...");
  const tableMetadata = await getTableMetadata(client, fullTableName);
  console.log(
    `📈 Table has ${tableMetadata.totalRows.toLocaleString()} rows (${tableMetadata.totalSizeHuman})`
  );

  // Check if table has data
  if (tableMetadata.totalRows === 0) {
    console.log(
      "⚠️  WARNING: Table has no data! Run 'yarn load' first to generate data."
    );
    return;
  }

  // Get filter conditions, aggregation columns, and pagination columns
  const filters = createFilterConditions();
  const aggregationColumns = createAggregationColumns();
  const paginationColumns = createPaginationColumns();

  const results: QueryResult[] = [];
  const iterations = 3; // Run each query multiple times for better statistics

  // Single loop for all filters
  for (const filter of filters) {
    console.log(`\n🔍 Processing filter: ${filter.description}`);

    // 1. COUNT query for this filter
    const countSql = `SELECT COUNT(*) as count FROM ${fullTableName} ${filter.whereClause}`;
    console.log(`📊 Running COUNT query: ${filter.description}`);

    for (let i = 1; i <= iterations; i++) {
      const result = await runQuery(
        client,
        countSql,
        filter.description,
        "COUNT",
        {
          filter: filter.description,
        }
      );
      results.push(result);

      if (i < iterations) {
        await new Promise(resolve => setTimeout(resolve, 100)); // Small delay between runs
      }
    }

    // 2. PAGINATION queries for selected filters (including no filters)
    const paginationFilters = [
      "",
      "WHERE status = 'paid'",
      "WHERE country = 'US'",
      "WHERE age > 30",
    ];
    const shouldRunPagination = paginationFilters.includes(filter.whereClause);

    if (shouldRunPagination) {
      const columnList = paginationColumns.map(col => col.column).join(", ");
      const paginationQueries = [
        {
          sql: `SELECT ${columnList} FROM ${fullTableName} ${filter.whereClause} LIMIT 100`,
          type: "pagination" as const,
          paginationType: "first page",
          sorted: false,
        },
        {
          sql: `SELECT ${columnList} FROM ${fullTableName} ${filter.whereClause} ORDER BY id LIMIT 100`,
          type: "pagination" as const,
          paginationType: "first page",
          sorted: true,
        },
        {
          sql: `SELECT ${columnList} FROM ${fullTableName} ${filter.whereClause} LIMIT 100 OFFSET 9900`,
          type: "pagination" as const,
          paginationType: "100th page",
          sorted: false,
        },
        {
          sql: `SELECT ${columnList} FROM ${fullTableName} ${filter.whereClause} ORDER BY id LIMIT 100 OFFSET 9900`,
          type: "pagination" as const,
          paginationType: "100th page",
          sorted: true,
        },
      ];

      for (const query of paginationQueries) {
        console.log(
          `📊 Running PAGINATION query: ${filter.description} - ${query.paginationType}`
        );

        for (let i = 1; i <= iterations; i++) {
          const result = await runQuery(
            client,
            query.sql,
            filter.description,
            "PAGINATION",
            {
              filter: filter.description,
              paginationType: query.paginationType,
              sorted: query.sorted,
            }
          );
          results.push(result);

          if (i < iterations) {
            await new Promise(resolve => setTimeout(resolve, 100)); // Small delay between runs
          }
        }
      }
    }

    // 3. AGGREGATION queries for all aggregation columns
    for (const aggColumn of aggregationColumns) {
      const aggSql = `SELECT ${aggColumn.column}, COUNT(*) as count FROM ${fullTableName} ${filter.whereClause} GROUP BY ${aggColumn.column}`;
      const description = `${aggColumn.description} - ${filter.description}`;

      console.log(`📊 Running AGGREGATION query: ${description}`);

      for (let i = 1; i <= iterations; i++) {
        const result = await runQuery(
          client,
          aggSql,
          description,
          "AGGREGATION",
          {
            filter: filter.description,
            aggregationInfo: aggColumn.column,
          }
        );
        results.push(result);

        if (i < iterations) {
          await new Promise(resolve => setTimeout(resolve, 100)); // Small delay between runs
        }
      }
    }
  }

  // Calculate and display statistics
  console.log("\n📈 PERFORMANCE SUMMARY");
  console.log("=".repeat(80));

  for (const result of results) {
    console.log(`\nQuery: ${result.query}`);
    console.log(`Count: ${result.count.toLocaleString()}`);
    console.log(`Duration: ${result.duration}ms`);
  }

  // Overall statistics
  const allDurations = results.map(r => r.duration);
  const overallAvg =
    allDurations.reduce((a, b) => a + b, 0) / allDurations.length;
  const overallMin = Math.min(...allDurations);
  const overallMax = Math.max(...allDurations);
  const overallP95 = calculatePercentile(allDurations, 95);

  console.log(`\n🎯 OVERALL STATISTICS`);
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

  const reportFile = path.join(reportDir, "query-performance.md");
  fs.writeFileSync(reportFile, markdownReport, "utf-8");

  console.log(`\n📄 Markdown report saved to: ${reportFile}`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
