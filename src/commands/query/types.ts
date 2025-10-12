/**
 * Query types and interfaces
 */

export interface QueryResult {
  query: string;
  count: number;
  filter: string;
  queryType: "COUNT" | "PAGINATION" | "AGGREGATION";
  paginationType?: string;
  sorted?: boolean;
  aggregationInfo?: string;
  runs: QueryRun[];
}

export interface MultiTableQueryResult {
  query: string;
  count: number;
  filter: string;
  queryType: "COUNT" | "PAGINATION" | "AGGREGATION";
  paginationType?: string;
  sorted?: boolean;
  aggregationInfo?: string;
  runs: QueryRun[];
}

export interface QueryArgs {
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

export interface QueryStats {
  query: string;
  filter: string;
  queryType: "COUNT" | "PAGINATION" | "AGGREGATION";
  paginationType?: string;
  sorted?: boolean;
  aggregationInfo?: string;
  count: number;
  runs: QueryRun[];
}

export interface QueryRun {
  duration: number;
  runNumber: number;
}

export interface TableMetadata {
  totalRows: number;
  totalSizeBytes: number;
  totalSizeHuman: string;
}

export interface OverallStats {
  totalQueries: number;
  avgDuration: number;
  minDuration: number;
  maxDuration: number;
  p95Duration: number;
}
