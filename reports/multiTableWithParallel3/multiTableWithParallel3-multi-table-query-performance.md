# Query Performance Report

**Table:** Multi-table (narrow, wide)  
**Generated:** 2025-10-11T17:47:42.004Z  
**Total Rows:** 1,100,000  
**Table Size:** N/A

## Summary

- **Total Queries:** 5
- **Iterations:** 3
- **Concurrency Simulation Streams:** 3
- **Average Duration:** 351ms
- **Fastest Query:** 337ms
- **Slowest Query:** 379ms
- **95th Percentile:** 379ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| multi-table query | COUNT | - | - | - | 0 | 379 | 332 | 469 | 456 |
| multi-table query | AGGREGATION | - | - | - | 0 | 351 | 324 | 383 | 380 |
| multi-table query | AGGREGATION | - | - | - | 0 | 341 | 329 | 350 | 350 |
| multi-table query | PAGINATION | - | - | - | 0 | 337 | 329 | 343 | 343 |
| multi-table query | AGGREGATION | - | - | - | 0 | 346 | 334 | 353 | 353 |

## Query Details

### multi-table query - COUNT
- **SQL:** `SELECT COUNT(*) FROM iceberg.performance.narrow_1_000_000 JOIN iceberg.performance.wide_100_000 ON iceberg.performance.narrow_1_000_000.id = iceberg.performance.wide_100_000.id`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 379ms
- **Min Duration:** 332ms
- **Max Duration:** 469ms
- **P95 Duration:** 456ms

### multi-table query - AGGREGATION
- **SQL:** `SELECT iceberg.performance.narrow_1_000_000.status, COUNT(*) FROM iceberg.performance.narrow_1_000_000 JOIN iceberg.performance.wide_100_000 ON iceberg.performance.narrow_1_000_000.id = iceberg.performance.wide_100_000.id GROUP BY iceberg.performance.narrow_1_000_000.status`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 351ms
- **Min Duration:** 324ms
- **Max Duration:** 383ms
- **P95 Duration:** 380ms

### multi-table query - AGGREGATION
- **SQL:** `SELECT iceberg.performance.narrow_1_000_000.country, COUNT(*) FROM iceberg.performance.narrow_1_000_000 JOIN iceberg.performance.wide_100_000 ON iceberg.performance.narrow_1_000_000.id = iceberg.performance.wide_100_000.id GROUP BY iceberg.performance.narrow_1_000_000.country`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 341ms
- **Min Duration:** 329ms
- **Max Duration:** 350ms
- **P95 Duration:** 350ms

### multi-table query - PAGINATION
- **SQL:** `SELECT iceberg.performance.narrow_1_000_000.* FROM iceberg.performance.narrow_1_000_000 JOIN iceberg.performance.wide_100_000 ON iceberg.performance.narrow_1_000_000.id = iceberg.performance.wide_100_000.id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 337ms
- **Min Duration:** 329ms
- **Max Duration:** 343ms
- **P95 Duration:** 343ms

### multi-table query - AGGREGATION
- **SQL:** `SELECT iceberg.performance.narrow_1_000_000.status, iceberg.performance.wide_100_000.row_28, COUNT(*) FROM iceberg.performance.narrow_1_000_000 JOIN iceberg.performance.wide_100_000 ON iceberg.performance.narrow_1_000_000.id = iceberg.performance.wide_100_000.id GROUP BY iceberg.performance.narrow_1_000_000.status, iceberg.performance.wide_100_000.row_28`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 346ms
- **Min Duration:** 334ms
- **Max Duration:** 353ms
- **P95 Duration:** 353ms

