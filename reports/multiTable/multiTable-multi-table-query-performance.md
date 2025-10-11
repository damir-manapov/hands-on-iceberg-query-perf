# Query Performance Report

**Table:** Multi-table (narrow, wide)  
**Generated:** 2025-10-11T17:38:15.420Z  
**Total Rows:** 1,100,000  
**Table Size:** N/A

## Summary

- **Total Queries:** 5
- **Iterations:** 3
- **Concurrency Simulation Streams:** 0
- **Average Duration:** 393ms
- **Fastest Query:** 306ms
- **Slowest Query:** 494ms
- **95th Percentile:** 494ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| multi-table query | COUNT | - | - | - | 0 | 306 | 207 | 474 | 451 |
| multi-table query | AGGREGATION | - | - | - | 0 | 392 | 360 | 421 | 419 |
| multi-table query | AGGREGATION | - | - | - | 0 | 494 | 416 | 561 | 556 |
| multi-table query | PAGINATION | - | - | - | 0 | 411 | 373 | 434 | 434 |
| multi-table query | AGGREGATION | - | - | - | 0 | 362 | 345 | 380 | 378 |

## Query Details

### multi-table query - COUNT
- **SQL:** `SELECT COUNT(*) FROM iceberg.performance.narrow_1_000_000 JOIN iceberg.performance.wide_100_000 ON iceberg.performance.narrow_1_000_000.id = iceberg.performance.wide_100_000.id`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 306ms
- **Min Duration:** 207ms
- **Max Duration:** 474ms
- **P95 Duration:** 451ms

### multi-table query - AGGREGATION
- **SQL:** `SELECT iceberg.performance.narrow_1_000_000.status, COUNT(*) FROM iceberg.performance.narrow_1_000_000 JOIN iceberg.performance.wide_100_000 ON iceberg.performance.narrow_1_000_000.id = iceberg.performance.wide_100_000.id GROUP BY iceberg.performance.narrow_1_000_000.status`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 392ms
- **Min Duration:** 360ms
- **Max Duration:** 421ms
- **P95 Duration:** 419ms

### multi-table query - AGGREGATION
- **SQL:** `SELECT iceberg.performance.narrow_1_000_000.country, COUNT(*) FROM iceberg.performance.narrow_1_000_000 JOIN iceberg.performance.wide_100_000 ON iceberg.performance.narrow_1_000_000.id = iceberg.performance.wide_100_000.id GROUP BY iceberg.performance.narrow_1_000_000.country`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 494ms
- **Min Duration:** 416ms
- **Max Duration:** 561ms
- **P95 Duration:** 556ms

### multi-table query - PAGINATION
- **SQL:** `SELECT iceberg.performance.narrow_1_000_000.* FROM iceberg.performance.narrow_1_000_000 JOIN iceberg.performance.wide_100_000 ON iceberg.performance.narrow_1_000_000.id = iceberg.performance.wide_100_000.id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 411ms
- **Min Duration:** 373ms
- **Max Duration:** 434ms
- **P95 Duration:** 434ms

### multi-table query - AGGREGATION
- **SQL:** `SELECT iceberg.performance.narrow_1_000_000.status, iceberg.performance.wide_100_000.row_28, COUNT(*) FROM iceberg.performance.narrow_1_000_000 JOIN iceberg.performance.wide_100_000 ON iceberg.performance.narrow_1_000_000.id = iceberg.performance.wide_100_000.id GROUP BY iceberg.performance.narrow_1_000_000.status, iceberg.performance.wide_100_000.row_28`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 362ms
- **Min Duration:** 345ms
- **Max Duration:** 380ms
- **P95 Duration:** 378ms

