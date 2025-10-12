/**
 * Query execution functions
 */

import { TrinoClient } from "../../TrinoClient";
import { QueryResult, QueryArgs, QueryRun } from "./types";

export async function runQuery(
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

export function createRandomQuery(queryArgs: QueryArgs[]): string {
  if (queryArgs.length === 0) {
    throw new Error("Cannot create random query: no query arguments available");
  }

  const randomIndex = Math.floor(Math.random() * queryArgs.length);
  return queryArgs[randomIndex].sql;
}

export async function runRandomQueries(
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
