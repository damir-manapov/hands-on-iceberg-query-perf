# Query Performance Report

**Table:** iceberg.lab.narrow_100_000_000  
**Generated:** 2025-10-12T15:52:51.282Z  
**Total Rows:** 100,000,000  
**Table Size:** 2.9 GB

## Summary

- **Total Queries:** 6
- **Iterations:** 3
- **Concurrency Simulation Streams:** 30
- **Average Duration:** 7_776ms
- **Fastest Query:** 4_914ms
- **Slowest Query:** 12_212ms
- **95th Percentile:** 12_188ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 100,000,000 | 5_582 | 3_871 | 8_913 | 8_418 |
| no filters | PAGINATION | first page | No | - | 100 | 4_914 | 3_937 | 5_479 | 5_464 |
| no filters | PAGINATION | first page | Yes | - | 100 | 12_114 | 10_136 | 14_278 | 14_043 |
| no filters | PAGINATION | 100th page | No | - | 100 | 5_018 | 4_425 | 5_536 | 5_492 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 12_212 | 10_381 | 13_297 | 13_263 |
| no filters | AGGREGATION | - | - | status | 4 | 6_817 | 6_254 | 7_605 | 7_504 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 `
- **Count/Rows:** 100,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 5_582ms
- **Min Duration:** 3_871ms
- **Max Duration:** 8_913ms
- **P95 Duration:** 8_418ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 4_914ms
- **Min Duration:** 3_937ms
- **Max Duration:** 5_479ms
- **P95 Duration:** 5_464ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 12_114ms
- **Min Duration:** 10_136ms
- **Max Duration:** 14_278ms
- **P95 Duration:** 14_043ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 5_018ms
- **Min Duration:** 4_425ms
- **Max Duration:** 5_536ms
- **P95 Duration:** 5_492ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 12_212ms
- **Min Duration:** 10_381ms
- **Max Duration:** 13_297ms
- **P95 Duration:** 13_263ms

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 6_817ms
- **Min Duration:** 6_254ms
- **Max Duration:** 7_605ms
- **P95 Duration:** 7_504ms

