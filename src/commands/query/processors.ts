/**
 * Main query processing functions
 */

import { TrinoClient } from "../../TrinoClient";
import { TableConfig } from "../../types";
import {
  SingleTableConfig,
  SeveralTablesConfig,
  TableInfo,
} from "../../config/tableQueries";
import { humanNumber } from "../../utils";
import { QueryResult, MultiTableQueryResult } from "./types";
import { runQuery, runRandomQueries } from "./execution";
import { calculateOverallStats, groupResultsByQuery } from "./statistics";
import { getTableMetadata, formatMs } from "./utils";
import {
  generateMarkdownReport,
  saveReport,
  saveMultiTableReport,
} from "./reporting";
import { buildQueryArgs, buildMultiTableQueryArgs } from "./builders";

export async function processSingleTable(
  client: TrinoClient,
  tableConfig: TableConfig,
  queryConfig: SingleTableConfig,
  tableName: string,
  fullTableName: string,
  querySetName: string,
  iterations: number,
  concurrencySimulationStreams: number,
  connectionDescription: string
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

  console.log(`\n🔍 Building query configurations...`);

  // Build query arguments
  const queryArgs = buildQueryArgs(tableConfig, queryConfig, fullTableName);

  console.log(
    `\n🚀 Executing ${queryArgs.length} query types with ${iterations} iterations each...`
  );
  if (concurrencySimulationStreams > 0) {
    console.log(
      `🎲 Concurrency simulation: ${concurrencySimulationStreams} parallel continuous streams`
    );
  }

  // Create abort controller for concurrency simulation
  const abortController = new AbortController();

  // Start configured number of parallel concurrency simulation workloads in background
  const concurrencySimulationPromises =
    concurrencySimulationStreams > 0
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
  console.log(
    `\n✅ Main queries completed, stopping concurrency simulation workloads`
  );

  // Wait for all concurrency simulation workloads to finish gracefully
  await Promise.all(concurrencySimulationPromises);

  // Calculate overall statistics
  const overallStats = calculateOverallStats(results);

  console.log(`\n🎯 OVERALL STATISTICS for ${tableName}`);
  console.log(`Total queries run: ${results.length}`);
  console.log(`Average duration: ${formatMs(overallStats.avgDuration)}ms`);
  console.log(`Fastest query: ${formatMs(overallStats.minDuration)}ms`);
  console.log(`Slowest query: ${formatMs(overallStats.maxDuration)}ms`);
  console.log(`95th percentile: ${formatMs(overallStats.p95Duration)}ms`);

  // Generate markdown report
  const timestamp = new Date().toISOString();
  const queryStats = groupResultsByQuery(results);

  const markdownReport = generateMarkdownReport(
    fullTableName,
    tableMetadata,
    queryStats,
    overallStats,
    timestamp,
    iterations,
    concurrencySimulationStreams,
    connectionDescription
  );

  // Write report to file
  const reportFile = saveReport(markdownReport, querySetName, tableName);
  console.log(`\n📄 Markdown report saved to: ${reportFile}`);
}

export async function processMultiTable(
  client: TrinoClient,
  queryConfig: SeveralTablesConfig,
  querySetName: string,
  iterations: number,
  concurrencySimulationStreams: number,
  connectionDescription: string
): Promise<void> {
  console.log(`\n🚀 Running multi-table query performance tests`);

  // Build query arguments for multi-table queries
  const queryArgs = buildMultiTableQueryArgs(queryConfig, humanNumber);

  if (queryArgs.length === 0) {
    console.log("⏭️  No queries configured for multi-table test");
    return;
  }

  console.log(
    `\n🚀 Executing ${queryArgs.length} multi-table query types with ${iterations} iterations each...`
  );
  if (concurrencySimulationStreams > 0) {
    console.log(
      `🎲 Concurrency simulation: ${concurrencySimulationStreams} parallel continuous streams`
    );
  }

  // Create abort controller for concurrency simulation
  const abortController = new AbortController();

  // Start configured number of parallel concurrency simulation workloads in background
  const concurrencySimulationPromises =
    concurrencySimulationStreams > 0
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
    const avgDuration =
      runs.reduce((sum, duration) => sum + duration, 0) / runs.length;
    const minDuration = Math.min(...runs);
    const maxDuration = Math.max(...runs);
    const sortedRuns = [...runs].sort((a, b) => a - b);
    const p95Duration = sortedRuns[Math.floor(sortedRuns.length * 0.95)];

    console.log(
      `  📈 Average: ${formatMs(avgDuration)}ms | Min: ${formatMs(minDuration)}ms | Max: ${formatMs(maxDuration)}ms | P95: ${formatMs(p95Duration)}ms`
    );
  }

  // Cancel concurrency simulation as soon as main queries finish
  abortController.abort();
  console.log(
    `\n✅ Main queries completed, stopping concurrency simulation workloads`
  );

  // Wait for all concurrency simulation workloads to finish gracefully
  await Promise.all(concurrencySimulationPromises);

  // Overall statistics
  const allDurations = results.map(r => {
    const durations = r.runs.map(run => run.duration);
    return (
      durations.reduce((sum, duration) => sum + duration, 0) / durations.length
    );
  });
  const overallAvg =
    allDurations.reduce((a, b) => a + b, 0) / allDurations.length;
  const overallMin = Math.min(...allDurations);
  const overallMax = Math.max(...allDurations);
  const sortedDurations = [...allDurations].sort((a, b) => a - b);
  const overallP95 = sortedDurations[Math.floor(sortedDurations.length * 0.95)];

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
    totalRows: queryConfig.tables.reduce(
      (sum: number, table: TableInfo) => sum + table.rowsCount,
      0
    ),
    totalSizeBytes: 0, // We don't have size info for multi-table queries
    totalSizeHuman: "N/A",
  };

  const markdownReport = generateMarkdownReport(
    `Multi-table (${queryConfig.tables.map((t: TableInfo) => t.tableBase).join(", ")})`,
    combinedTableMetadata,
    queryStats,
    overallStats,
    timestamp,
    iterations,
    concurrencySimulationStreams,
    connectionDescription
  );

  // Write report to file
  const reportPath = saveMultiTableReport(markdownReport, querySetName);
  console.log(`\n📄 Report saved: ${reportPath}`);
  console.log(`\n✅ Completed performance tests for multi-table queries`);
}
