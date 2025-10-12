# Query Performance Report

**Table:** Multi-table (narrow, wide)  
**Generated:** 2025-10-12T15:52:57.020Z  
**Total Rows:** 1,100,000  
**Table Size:** N/A

## Summary

- **Total Queries:** 5
- **Iterations:** 3
- **Concurrency Simulation Streams:** 3
- **Average Duration:** 315ms
- **Fastest Query:** 305ms
- **Slowest Query:** 335ms
- **95th Percentile:** 335ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| multi-table query | COUNT | - | - | - | 0 | 335 | 324 | 348 | 347 |
| multi-table query | AGGREGATION | - | - | - | 0 | 319 | 315 | 322 | 322 |
| multi-table query | AGGREGATION | - | - | - | 0 | 310 | 305 | 319 | 318 |
| multi-table query | PAGINATION | - | - | - | 0 | 305 | 304 | 306 | 306 |
| multi-table query | AGGREGATION | - | - | - | 0 | 305 | 304 | 306 | 306 |

## Query Details

### multi-table query - COUNT
- **SQL:** `SELECT COUNT(*) FROM iceberg.performance.narrow_1_000_000 JOIN iceberg.performance.wide_100_000 ON iceberg.performance.narrow_1_000_000.id = iceberg.performance.wide_100_000.id`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 335ms
- **Min Duration:** 324ms
- **Max Duration:** 348ms
- **P95 Duration:** 347ms

### multi-table query - AGGREGATION
- **SQL:** `SELECT iceberg.performance.narrow_1_000_000.status, COUNT(*) FROM iceberg.performance.narrow_1_000_000 JOIN iceberg.performance.wide_100_000 ON iceberg.performance.narrow_1_000_000.id = iceberg.performance.wide_100_000.id GROUP BY iceberg.performance.narrow_1_000_000.status`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 319ms
- **Min Duration:** 315ms
- **Max Duration:** 322ms
- **P95 Duration:** 322ms

### multi-table query - AGGREGATION
- **SQL:** `SELECT iceberg.performance.narrow_1_000_000.country, COUNT(*) FROM iceberg.performance.narrow_1_000_000 JOIN iceberg.performance.wide_100_000 ON iceberg.performance.narrow_1_000_000.id = iceberg.performance.wide_100_000.id GROUP BY iceberg.performance.narrow_1_000_000.country`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 310ms
- **Min Duration:** 305ms
- **Max Duration:** 319ms
- **P95 Duration:** 318ms

### multi-table query - PAGINATION
- **SQL:** `SELECT iceberg.performance.narrow_1_000_000.* FROM iceberg.performance.narrow_1_000_000 JOIN iceberg.performance.wide_100_000 ON iceberg.performance.narrow_1_000_000.id = iceberg.performance.wide_100_000.id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 305ms
- **Min Duration:** 304ms
- **Max Duration:** 306ms
- **P95 Duration:** 306ms

### multi-table query - AGGREGATION
- **SQL:** `SELECT iceberg.performance.narrow_1_000_000.status, iceberg.performance.wide_100_000.row_28, COUNT(*) FROM iceberg.performance.narrow_1_000_000 JOIN iceberg.performance.wide_100_000 ON iceberg.performance.narrow_1_000_000.id = iceberg.performance.wide_100_000.id GROUP BY iceberg.performance.narrow_1_000_000.status, iceberg.performance.wide_100_000.row_28`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 305ms
- **Min Duration:** 304ms
- **Max Duration:** 306ms
- **P95 Duration:** 306ms

