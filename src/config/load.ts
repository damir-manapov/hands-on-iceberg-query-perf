// Load plan
export const LOAD = {
  startId: Number(process.env.START_ID ?? "1"),
  concurrency: Number(process.env.CONCURRENCY ?? "4"),
  createBaseSchema: (process.env.CREATE_BASE_SCHEMA ?? "true") === "true",
  compactAfterLoad: (process.env.COMPACT_AFTER_LOAD ?? "true") === "true",
  includeManifestBytes:
    (process.env.MEASURE_INCLUDE_MANIFESTS ?? "true") === "true",
};

// wide table:
// 1ml -> 300mb, 1.1min
// 10ml -> 3gb, 7min
// 100ml -> 30gb, 50min
// billion -> 300gb, ~10h

// narrow table:
// 1ml -> 30mb, 6sec
// 10ml -> 300mb, 40sec
// 100ml -> 2.9gb, 2.7min
// billion -> 29gb, 26min
