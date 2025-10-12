/**
 * Utility functions for query operations
 */

import { TrinoClient } from "../../TrinoClient";
import { TableMetadata } from "./types";

export function formatBytes(bytes: number): string {
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

export function formatMs(value: number): string {
  return Math.ceil(value).toLocaleString().replace(/,/g, "_");
}

export async function getTableMetadata(
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
