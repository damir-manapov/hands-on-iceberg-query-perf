/**
 * Report generation functions
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { QueryStats, TableMetadata, OverallStats } from "./types";
import { calculateAverageDuration, calculatePercentile } from "./statistics";
import { formatMs } from "./utils";

export function generateMarkdownReport(
  tableName: string,
  tableMetadata: TableMetadata,
  queryStats: QueryStats[],
  overallStats: OverallStats,
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

export function saveReport(
  reportContent: string,
  querySetName: string,
  tableName: string
): string {
  const reportDir = path.join("reports", querySetName);
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }

  const reportFile = path.join(
    reportDir,
    `${querySetName}-query-performance-${tableName}.md`
  );
  fs.writeFileSync(reportFile, reportContent, "utf-8");

  return reportFile;
}

export function saveMultiTableReport(
  reportContent: string,
  querySetName: string
): string {
  const reportDir = path.join("reports", querySetName);
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }

  const reportFileName = `${querySetName}-multi-table-query-performance.md`;
  const reportPath = path.join(reportDir, reportFileName);
  fs.writeFileSync(reportPath, reportContent);

  return reportPath;
}
