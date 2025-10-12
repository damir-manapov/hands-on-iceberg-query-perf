/**
 * Statistics and calculation functions
 */

import { QueryResult, QueryStats, OverallStats } from "./types";

export function calculateAverageDuration(durations: number[]): number {
  return (
    durations.reduce((sum, duration) => sum + duration, 0) / durations.length
  );
}

export function calculatePercentile(
  values: number[],
  percentile: number
): number {
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

export function calculateOverallStats(results: QueryResult[]): OverallStats {
  const allDurations = results.map(r => {
    const durations = r.runs.map(run => run.duration);
    return calculateAverageDuration(durations);
  });

  const overallAvg =
    allDurations.reduce((a, b) => a + b, 0) / allDurations.length;
  const overallMin = Math.min(...allDurations);
  const overallMax = Math.max(...allDurations);
  const overallP95 = calculatePercentile(allDurations, 95);

  return {
    totalQueries: results.length,
    avgDuration: overallAvg,
    minDuration: overallMin,
    maxDuration: overallMax,
    p95Duration: overallP95,
  };
}

export function groupResultsByQuery(results: QueryResult[]): QueryStats[] {
  const queryGroups = new Map<string, QueryResult[]>();
  for (const result of results) {
    const key = result.query;
    if (!queryGroups.has(key)) {
      queryGroups.set(key, []);
    }
    queryGroups.get(key)!.push(result);
  }

  return Array.from(queryGroups.entries()).map(([_query, runs]) => {
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
  });
}
