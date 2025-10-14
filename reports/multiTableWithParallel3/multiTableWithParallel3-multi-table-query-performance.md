# Query Performance Report

**Table:** Multi-table (narrow, wide)  
**Generated:** 2025-10-14T02:36:36.107Z  
**Total Rows:** 1,100,000  
**Table Size:** N/A  
**Trino Configuration:** Single-node Trino

## Summary

- **Total Queries:** 5
- **Iterations:** 3
- **Concurrency Simulation Streams:** 3
- **Average Duration:** 313ms
- **Fastest Query:** 264ms
- **Slowest Query:** 355ms
- **95th Percentile:** 355ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| multi-table query | COUNT | - | - | - | 0 | 355 | 319 | 424 | 414 |
| multi-table query | AGGREGATION | - | - | - | 0 | 317 | 311 | 327 | 326 |
| multi-table query | AGGREGATION | - | - | - | 0 | 315 | 308 | 318 | 318 |
| multi-table query | PAGINATION | - | - | - | 0 | 264 | 163 | 315 | 315 |
| multi-table query | AGGREGATION | - | - | - | 0 | 314 | 310 | 320 | 319 |

## Query Details

### multi-table query - COUNT
- **SQL:** `SELECT COUNT(*) FROM iceberg.performance.narrow_1_000_000 JOIN iceberg.performance.wide_100_000 ON iceberg.performance.narrow_1_000_000.id = iceberg.performance.wide_100_000.id`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 355ms
- **Min Duration:** 319ms
- **Max Duration:** 424ms
- **P95 Duration:** 414ms

### multi-table query - AGGREGATION
- **SQL:** `SELECT iceberg.performance.narrow_1_000_000.status, COUNT(*) FROM iceberg.performance.narrow_1_000_000 JOIN iceberg.performance.wide_100_000 ON iceberg.performance.narrow_1_000_000.id = iceberg.performance.wide_100_000.id GROUP BY iceberg.performance.narrow_1_000_000.status`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 317ms
- **Min Duration:** 311ms
- **Max Duration:** 327ms
- **P95 Duration:** 326ms

### multi-table query - AGGREGATION
- **SQL:** `SELECT iceberg.performance.narrow_1_000_000.country, COUNT(*) FROM iceberg.performance.narrow_1_000_000 JOIN iceberg.performance.wide_100_000 ON iceberg.performance.narrow_1_000_000.id = iceberg.performance.wide_100_000.id GROUP BY iceberg.performance.narrow_1_000_000.country`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 315ms
- **Min Duration:** 308ms
- **Max Duration:** 318ms
- **P95 Duration:** 318ms

### multi-table query - PAGINATION
- **SQL:** `SELECT iceberg.performance.narrow_1_000_000.* FROM iceberg.performance.narrow_1_000_000 JOIN iceberg.performance.wide_100_000 ON iceberg.performance.narrow_1_000_000.id = iceberg.performance.wide_100_000.id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 264ms
- **Min Duration:** 163ms
- **Max Duration:** 315ms
- **P95 Duration:** 315ms

### multi-table query - AGGREGATION
- **SQL:** `SELECT iceberg.performance.narrow_1_000_000.status, iceberg.performance.wide_100_000.row_28, COUNT(*) FROM iceberg.performance.narrow_1_000_000 JOIN iceberg.performance.wide_100_000 ON iceberg.performance.narrow_1_000_000.id = iceberg.performance.wide_100_000.id GROUP BY iceberg.performance.narrow_1_000_000.status, iceberg.performance.wide_100_000.row_28`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 314ms
- **Min Duration:** 310ms
- **Max Duration:** 320ms
- **P95 Duration:** 319ms

