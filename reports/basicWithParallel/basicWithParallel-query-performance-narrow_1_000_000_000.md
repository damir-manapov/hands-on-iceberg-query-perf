# Query Performance Report

**Table:** iceberg.lab.narrow_1_000_000_000  
**Generated:** 2025-10-11T16:58:16.515Z  
**Total Rows:** 1,000,000,000  
**Table Size:** 28.6 GB

## Summary

- **Total Queries:** 18
- **Iterations:** 3
- **Concurrency Simulation Streams:** 5
- **Average Duration:** 14_789ms
- **Fastest Query:** 624ms
- **Slowest Query:** 46_907ms
- **95th Percentile:** 44_062ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 1,000,000,000 | 1_947 | 1_632 | 2_144 | 2_136 |
| no filters | PAGINATION | first page | No | - | 100 | 875 | 638 | 1_346 | 1_276 |
| no filters | PAGINATION | first page | Yes | - | 100 | 32_536 | 14_197 | 43_559 | 43_189 |
| no filters | PAGINATION | 100th page | No | - | 100 | 2_211 | 624 | 3_310 | 3_249 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 41_087 | 34_871 | 46_907 | 46_365 |
| no filters | AGGREGATION | - | - | status | 4 | 10_077 | 9_567 | 10_416 | 10_399 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 `
- **Count/Rows:** 1,000,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_947ms
- **Min Duration:** 1_632ms
- **Max Duration:** 2_144ms
- **P95 Duration:** 2_136ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 875ms
- **Min Duration:** 638ms
- **Max Duration:** 1_346ms
- **P95 Duration:** 1_276ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 32_536ms
- **Min Duration:** 14_197ms
- **Max Duration:** 43_559ms
- **P95 Duration:** 43_189ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 2_211ms
- **Min Duration:** 624ms
- **Max Duration:** 3_310ms
- **P95 Duration:** 3_249ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 41_087ms
- **Min Duration:** 34_871ms
- **Max Duration:** 46_907ms
- **P95 Duration:** 46_365ms

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 10_077ms
- **Min Duration:** 9_567ms
- **Max Duration:** 10_416ms
- **P95 Duration:** 10_399ms

