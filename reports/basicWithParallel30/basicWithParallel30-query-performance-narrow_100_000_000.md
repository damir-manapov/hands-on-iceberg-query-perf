# Query Performance Report

**Table:** iceberg.lab.narrow_100_000_000  
**Generated:** 2025-10-11T17:02:56.317Z  
**Total Rows:** 100,000,000  
**Table Size:** 2.9 GB

## Summary

- **Total Queries:** 18
- **Iterations:** 3
- **Concurrency Simulation Streams:** 30
- **Average Duration:** 6_908ms
- **Fastest Query:** 1_321ms
- **Slowest Query:** 14_046ms
- **95th Percentile:** 13_436ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 100,000,000 | 3_504 | 2_438 | 4_551 | 4_448 |
| no filters | PAGINATION | first page | No | - | 100 | 2_121 | 1_321 | 3_382 | 3_210 |
| no filters | PAGINATION | first page | Yes | - | 100 | 11_436 | 9_450 | 14_046 | 13_723 |
| no filters | PAGINATION | 100th page | No | - | 100 | 5_547 | 4_466 | 6_551 | 6_459 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 11_630 | 9_029 | 13_328 | 13_249 |
| no filters | AGGREGATION | - | - | status | 4 | 7_212 | 6_535 | 7_753 | 7_713 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 `
- **Count/Rows:** 100,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 3_504ms
- **Min Duration:** 2_438ms
- **Max Duration:** 4_551ms
- **P95 Duration:** 4_448ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 2_121ms
- **Min Duration:** 1_321ms
- **Max Duration:** 3_382ms
- **P95 Duration:** 3_210ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 11_436ms
- **Min Duration:** 9_450ms
- **Max Duration:** 14_046ms
- **P95 Duration:** 13_723ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 5_547ms
- **Min Duration:** 4_466ms
- **Max Duration:** 6_551ms
- **P95 Duration:** 6_459ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 11_630ms
- **Min Duration:** 9_029ms
- **Max Duration:** 13_328ms
- **P95 Duration:** 13_249ms

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 7_212ms
- **Min Duration:** 6_535ms
- **Max Duration:** 7_753ms
- **P95 Duration:** 7_713ms

