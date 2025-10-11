# Query Performance Report

**Table:** iceberg.lab.narrow_100_000_000  
**Generated:** 2025-10-11T17:29:52.589Z  
**Total Rows:** 100,000,000  
**Table Size:** 2.9 GB

## Summary

- **Total Queries:** 6
- **Iterations:** 3
- **Concurrency Simulation Streams:** 0
- **Average Duration:** 1_251ms
- **Fastest Query:** 731ms
- **Slowest Query:** 2_477ms
- **95th Percentile:** 2_349ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 100,000,000 | 732 | 629 | 787 | 787 |
| no filters | PAGINATION | first page | No | - | 100 | 731 | 627 | 786 | 786 |
| no filters | PAGINATION | first page | Yes | - | 100 | 1_963 | 1_958 | 1_969 | 1_969 |
| no filters | PAGINATION | 100th page | No | - | 100 | 731 | 632 | 783 | 783 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 2_477 | 2_340 | 2_708 | 2_676 |
| no filters | AGGREGATION | - | - | status | 4 | 872 | 819 | 929 | 923 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 `
- **Count/Rows:** 100,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 732ms
- **Min Duration:** 629ms
- **Max Duration:** 787ms
- **P95 Duration:** 787ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 731ms
- **Min Duration:** 627ms
- **Max Duration:** 786ms
- **P95 Duration:** 786ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_963ms
- **Min Duration:** 1_958ms
- **Max Duration:** 1_969ms
- **P95 Duration:** 1_969ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 731ms
- **Min Duration:** 632ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_477ms
- **Min Duration:** 2_340ms
- **Max Duration:** 2_708ms
- **P95 Duration:** 2_676ms

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 872ms
- **Min Duration:** 819ms
- **Max Duration:** 929ms
- **P95 Duration:** 923ms

