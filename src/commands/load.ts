/**
 * load.ts — Generate, load & measure Iceberg/Parquet table
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { SizeRow, TableConfig, TrinoConfig } from "../types";
import { TrinoClient } from "../TrinoClient";
import {
  buildInsertSQL,
  createBaseTableSQL,
  createSchemaSQL,
  createSelectExamplesSQL,
  createVariantTableSQLs,
} from "../sqlHelpers";
import { ensureDir, humanNumber, humanSize, makeBatches } from "../utils";
import { Limiter } from "../Limiter";
import { TABLE_CONFIG } from "../config/tableConfig";
import { LOAD } from "../config/load";
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
  batchRows: number,
  cpFile: string
) {
  const batches = makeBatches(startId, totalRows, batchRows);
  let cp: { completedBatches: number[] } = { completedBatches: [] };
  try {
    cp = JSON.parse(fs.readFileSync(cpFile, "utf-8"));
  } catch {
    // Checkpoint file doesn't exist or is invalid, start fresh
  }
  const pending = batches.filter(b => !cp.completedBatches.includes(b.index));

  if (pending.length === 0) {
    console.log(`✓ All batches already completed for ${tableName}`);
    return;
  }

  const startTime = Date.now();
  const totalBatches = batches.length;

  console.log(
    `\n📊 Loading ${tableName}: ${pending.length}/${totalBatches} batches remaining`
  );

  await Promise.all(
    pending.map(b =>
      limiter.run(async () => {
        const label = `${tableName} #${b.index}/${batches.length} [${humanNumber(b.start)}..${humanNumber(b.end)}]`;
        const sql = buildInsertSQL(b.start, b.end, cfg, tableName);
        const t0 = Date.now();
        try {
          // Calculate ETA before starting the batch
          const eta = calculateBatchETA(
            cp.completedBatches.length,
            totalBatches,
            startTime,
            Date.now()
          );
          console.log(`→ INSERT ${label} (ETA: ${eta})`);
          await client.execute(sql);
          const duration = ((Date.now() - t0) / 1000).toFixed(1);

          // Update completed batches
          cp.completedBatches.push(b.index);
          cp.completedBatches.sort((a, z) => a - z);
          const progress = (
            (cp.completedBatches.length / totalBatches) *
            100
          ).toFixed(1);
          console.log(`✔ OK ${label} in ${duration}s (${progress}% complete)`);
          fs.writeFileSync(cpFile, JSON.stringify(cp), "utf-8");
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
  codec: string,
  level: number
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
    return { table_name: name, codec, level, rows, data_bytes, bytes_per_row };
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
    codec,
    level,
    rows,
    data_bytes,
    bytes_per_row,
    manifest_bytes,
    total_bytes,
  };
}

async function main() {
  // Trino connection
  const trino: TrinoConfig = {
    host: process.env.TRINO_HOST ?? "http://localhost",
    port: Number(process.env.TRINO_PORT ?? "8080"),
    catalog: TABLE_CONFIG.catalog,
    schema: TABLE_CONFIG.schema,
    user: process.env.TRINO_USER ?? "bench",
    source: "ts-bench",
    ...(process.env.TRINO_USERNAME && process.env.TRINO_PASSWORD
      ? {
          basicAuth: {
            username: process.env.TRINO_USERNAME,
            password: process.env.TRINO_PASSWORD,
          },
        }
      : {}),
  };
  const client = new TrinoClient(trino);
  const limiter = new Limiter(LOAD.concurrency);

  // 1) Base schema + base table
  if (LOAD.createBaseSchema) {
    console.log("Ensuring schema + base table exist…");
    await client.execute(createSchemaSQL(TABLE_CONFIG));
    await client.execute(createBaseTableSQL(TABLE_CONFIG));
  }

  ensureDir(LOAD.checkpointDir);

  // 2) Create a table for zstd level 6, load data, and collect results
  const codec = FIXED_CODEC;
  const level = FIXED_LEVEL;
  const suffix = `${codec}_l${String(level).padStart(2, "0")}`;
  const name = `${TABLE_CONFIG.tableBase}_${suffix}`;
  console.log(`Creating table ${name} (codec=${codec}, level=${level})…`);
  const variantTableSQLs = createVariantTableSQLs(
    TABLE_CONFIG,
    name,
    codec,
    level
  );
  for (const sql of variantTableSQLs) {
    await client.execute(sql);
  }
  const cpFile = path.join(LOAD.checkpointDir, `.cp_${name}.json`);
  const t0 = Date.now();
  await loadTable(
    client,
    limiter,
    TABLE_CONFIG,
    name,
    LOAD.startId,
    LOAD.totalRows,
    LOAD.batchRows,
    cpFile
  );
  const durationMs = Date.now() - t0;
  const durationMinutes = (durationMs / 60000).toFixed(1);
  console.log(`Load finished for ${name} in ${durationMinutes}min`);

  if (LOAD.compactAfterLoad) {
    await optimizeTable(
      client,
      `${TABLE_CONFIG.catalog}.${TABLE_CONFIG.schema}.${name}`
    );
  }

  const exampleRow = await client.query(
    createSelectExamplesSQL(TABLE_CONFIG, name)
  );
  console.log("exampleRow");
  console.log(JSON.stringify(exampleRow, null, 1));

  // Measure immediately and collect result
  const result = await measureSizes(
    client,
    TABLE_CONFIG,
    name,
    codec,
    level
  );

  // 3) Print results & CSV
  console.log("\nRESULTS (bytes rounded):");
  const pretty = {
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
  };
  console.table([pretty]);

  const headers = [
    "table_name",
    "codec",
    "level",
    "rows",
    "data_bytes",
    "data_human",
    "bytes_per_row",
    ...(LOAD.includeManifestBytes
      ? ["manifest_bytes", "manifest_human", "total_bytes", "total_human"]
      : []),
  ];
  const row = [
    result.table_name,
    result.codec,
    String(result.level),
    humanNumber(result.rows),
    String(result.data_bytes),
    humanSize(result.data_bytes),
    String(result.bytes_per_row),
    ...(LOAD.includeManifestBytes
      ? [
          String(result.manifest_bytes ?? 0),
          humanSize(result.manifest_bytes ?? 0),
          String(result.total_bytes ?? result.data_bytes),
          humanSize(result.total_bytes ?? result.data_bytes),
        ]
      : []),
  ].join(",");
  const lines = [headers.join(","), row];
  fs.writeFileSync(LOAD.resultsCsv, lines.join("\n"), "utf-8");
  console.log(`\nSaved CSV: ${LOAD.resultsCsv}`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});


