/**
 * generate.ts — Generate, load & measure Iceberg/Parquet table
 */

import { SizeRow, TableConfig } from "../types";
import { TrinoClient } from "../TrinoClient";
import {
  buildInsertSQL,
  createFirstRowSQL,
  createLastRowSQL,
  createSchemaSQL,
  createTableSQL,
} from "../sqlHelpers";
import { humanNumber, humanSize, makeBatches } from "../utils";
import { Limiter } from "../Limiter";
import { TABLE_CONFIGS } from "../config/tableConfigs";
import { LOAD } from "../config/load";
import { createTrinoConfig } from "../config/trinoConfig";
import { CONNECTIONS } from "../config/tableQueries";
// Fixed codec setup: always use zstd with level 6
const FIXED_CODEC = "zstd" as const;
const FIXED_LEVEL = 6 as const;

function formatETA(ms: number): string {
  if (ms < 1000) return `${Math.round(ms)}ms`;
  if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
  if (ms < 3600000) return `${(ms / 60000).toFixed(1)}min`;
  return `${(ms / 3600000).toFixed(1)}h`;
}

function calculateBatchETA(
  completedBatches: number,
  totalBatches: number,
  startTime: number,
  currentTime: number
): string {
  if (completedBatches === 0) return "calculating...";

  const elapsed = currentTime - startTime;
  const rate = completedBatches / elapsed; // batches per ms
  const remaining = totalBatches - completedBatches;
  const etaMs = remaining / rate;

  return formatETA(etaMs);
}

async function loadTable(
  client: TrinoClient,
  limiter: Limiter,
  cfg: TableConfig,
  tableName: string,
  startId: number,
  totalRows: number,
  batchRows: number
) {
  // Check current row count in the table
  const fullTableName = `${cfg.catalog}.${cfg.schema}.${tableName}`;
  const countSQL = `SELECT COUNT(*) as count FROM ${fullTableName}`;

  let currentRowCount = 0;
  try {
    const countResult = await client.query(countSQL);
    currentRowCount = (countResult[0] as { count: number })?.count ?? 0;
    console.log(
      `📊 Current row count in ${tableName}: ${currentRowCount.toLocaleString()}`
    );
  } catch {
    console.log(
      `📊 Table ${tableName} doesn't exist yet, starting from 0 rows`
    );
    currentRowCount = 0;
  }

  // Calculate how many more rows we need to generate
  const remainingRows = totalRows - currentRowCount;

  if (remainingRows <= 0) {
    console.log(
      `✓ Table ${tableName} already has ${currentRowCount.toLocaleString()} rows (target: ${totalRows.toLocaleString()})`
    );
    return;
  }

  console.log(
    `📈 Need to generate ${remainingRows.toLocaleString()} more rows (${currentRowCount.toLocaleString()} + ${remainingRows.toLocaleString()} = ${totalRows.toLocaleString()})`
  );

  // Calculate the starting ID for new rows
  const nextId = startId + currentRowCount;

  // Create batches for the remaining rows
  const batches = makeBatches(nextId, remainingRows, batchRows);

  const startTime = Date.now();
  const totalBatches = batches.length;

  console.log(
    `\n📊 Loading ${tableName}: ${totalBatches} batches for remaining ${remainingRows.toLocaleString()} rows`
  );

  await Promise.all(
    batches.map(b =>
      limiter.run(async () => {
        const label = `${tableName} #${b.index}/${batches.length} [${humanNumber(b.start)}..${humanNumber(b.end)}]`;
        const sql = buildInsertSQL(b.start, b.end, cfg, tableName, totalRows);
        const t0 = Date.now();
        try {
          // Calculate ETA before starting the batch
          const eta = calculateBatchETA(
            b.index - 1,
            totalBatches,
            startTime,
            Date.now()
          );
          console.log(`→ INSERT ${label} (ETA: ${eta})`);
          await client.execute(sql);
          const duration = ((Date.now() - t0) / 1000).toFixed(1);
          const progress = ((b.index / totalBatches) * 100).toFixed(1);
          console.log(`✔ OK ${label} in ${duration}s (${progress}% complete)`);
        } catch (e: unknown) {
          const err = e as { message?: string } | string;
          const message = `✖ FAIL ${label}: ${
            typeof err === "string" ? err : err?.message || String(err)
          }\n\nSql:${sql}`;
          console.error(message);
          throw new Error(message);
        }
      })
    )
  );
}

async function optimizeTable(client: TrinoClient, fq: string) {
  const sql = `ALTER TABLE ${fq} EXECUTE optimize`;
  try {
    await client.execute(sql);
  } catch (e: unknown) {
    const err = e as { message?: string } | string;
    const msg = typeof err === "string" ? err : err?.message || String(err);
    console.warn(`(optimize skipped for ${fq}): ${msg}, sql: ${sql}`);
    throw new Error(msg);
  }
}

async function measureSizes(
  client: TrinoClient,
  cfg: TableConfig,
  name: string,
  connectionId: string,
  connectionName: string
): Promise<SizeRow> {
  const filesTbl = `"${name}$files"`;
  const baseSQL = `SELECT SUM(file_size_in_bytes) AS data_bytes, SUM(record_count) AS rows, (SUM(file_size_in_bytes) / NULLIF(SUM(record_count),0)) AS bytes_per_row FROM ${cfg.catalog}.${cfg.schema}.${filesTbl}`;
  const filesRes = await client.query<{
    data_bytes: number;
    rows: number;
    bytes_per_row: number;
  }>(baseSQL);
  const data_bytes = Number(filesRes?.[0]?.data_bytes ?? 0);
  const rows = Number(filesRes?.[0]?.rows ?? 0);
  const bytes_per_row = Number(filesRes?.[0]?.bytes_per_row ?? 0);

  if (!LOAD.includeManifestBytes) {
    return {
      table_name: name,
      codec: FIXED_CODEC,
      level: FIXED_LEVEL,
      rows,
      data_bytes,
      bytes_per_row,
      connection_id: connectionId,
      connection_name: connectionName,
    };
  }

  // manifests (optional)
  let manifest_bytes = 0;
  try {
    const m = await client.query<{ b: number }>(`
      SELECT COALESCE(SUM(length),0) AS b
      FROM ${cfg.catalog}.${cfg.schema}."${name}$manifests"
    `);
    manifest_bytes = Number(m?.[0]?.b ?? 0);
  } catch (e: unknown) {
    throw new Error(String(e));
  }
  const total_bytes = data_bytes + manifest_bytes;
  return {
    table_name: name,
    codec: FIXED_CODEC,
    level: FIXED_LEVEL,
    rows,
    data_bytes,
    bytes_per_row,
    manifest_bytes,
    total_bytes,
    connection_id: connectionId,
    connection_name: connectionName,
  };
}

async function main() {
  const allResults: SizeRow[] = [];

  // Process each connection
  for (const [connectionId, connection] of Object.entries(CONNECTIONS)) {
    console.log(
      `\n🔗 Processing connection: ${connection.description} (${connection.host}:${connection.port})`
    );

    // Trino connection for this specific connection
    const trino = createTrinoConfig("load", connectionId);
    const client = new TrinoClient(trino);
    const limiter = new Limiter(LOAD.concurrency);

    const connectionResults: SizeRow[] = [];

    // Process each table configuration
    for (const tableConfig of TABLE_CONFIGS) {
      if (tableConfig.enabled === false) {
        console.log(`⏭️  Skipping disabled table: ${tableConfig.tableBase}`);
        continue;
      }
      // Process each row count for this table
      for (const totalRows of tableConfig.totalRows) {
        const batchRows = tableConfig.batchRows;

        // Generate dynamic table name with row count
        const rowCountSuffix = humanNumber(totalRows).replace(/,/g, "");
        const name = `${tableConfig.tableBase}_${rowCountSuffix}`;

        console.log(
          `\n🚀 Processing table: ${name} (${humanNumber(totalRows)} rows, batch size: ${humanNumber(batchRows)})`
        );

        // 1) Base schema
        if (LOAD.createBaseSchema) {
          console.log(`Ensuring schema exists for ${name}…`);
          await client.execute(createSchemaSQL(tableConfig));
        }
        console.log(`Creating table ${name}…`);
        await client.execute(createTableSQL(tableConfig, name));

        const t0 = Date.now();
        await loadTable(
          client,
          limiter,
          tableConfig,
          name,
          LOAD.startId,
          totalRows,
          batchRows
        );
        const durationMs = Date.now() - t0;
        const durationMinutes = (durationMs / 60000).toFixed(1);
        console.log(`Load finished for ${name} in ${durationMinutes}min`);

        if (LOAD.compactAfterLoad) {
          await optimizeTable(
            client,
            `${tableConfig.catalog}.${tableConfig.schema}.${name}`
          );
        }

        // Show first and last rows ordered by ID
        const firstRow = await client.query(
          createFirstRowSQL(tableConfig, name)
        );
        console.log(
          `\nFirst row (ordered by ${tableConfig.idColumn}) for ${name}:`
        );
        console.log(JSON.stringify(firstRow, null, 1));

        const lastRow = await client.query(createLastRowSQL(tableConfig, name));
        console.log(
          `\nLast row (ordered by ${tableConfig.idColumn}) for ${name}:`
        );
        console.log(JSON.stringify(lastRow, null, 1));

        // Measure immediately and collect result
        const result = await measureSizes(
          client,
          tableConfig,
          name,
          connectionId,
          connection.name
        );
        connectionResults.push(result);
      }
    }

    // Add results to overall results
    allResults.push(...connectionResults);

    console.log(
      `\n✅ Completed data generation for connection: ${connection.description}`
    );
  }

  // 3) Print results & CSV
  console.log("\n📊 RESULTS (bytes rounded):");
  const prettyResults = allResults.map(result => ({
    connection: result.connection_name,
    table: result.table_name,
    codec: result.codec,
    level: result.level,
    rows: humanNumber(result.rows),
    data_bytes: Math.round(result.data_bytes),
    data_human: humanSize(result.data_bytes),
    bytes_per_row: Math.round(result.bytes_per_row),
    ...(LOAD.includeManifestBytes
      ? {
          manifest_bytes: Math.round(result.manifest_bytes || 0),
          manifest_human: humanSize(result.manifest_bytes || 0),
          total_bytes: Math.round(result.total_bytes || result.data_bytes),
          total_human: humanSize(result.total_bytes || result.data_bytes),
        }
      : {}),
  }));
  console.table(prettyResults);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
