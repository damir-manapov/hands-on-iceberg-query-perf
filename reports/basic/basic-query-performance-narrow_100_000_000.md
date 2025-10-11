# Query Performance Report

**Table:** iceberg.lab.narrow_100_000_000  
**Generated:** 2025-10-11T17:39:56.627Z  
**Total Rows:** 100,000,000  
**Table Size:** 2.9 GB

## Summary

- **Total Queries:** 6
- **Iterations:** 3
- **Concurrency Simulation Streams:** 0
- **Average Duration:** 1_272ms
- **Fastest Query:** 729ms
- **Slowest Query:** 2_438ms
- **95th Percentile:** 2_380ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 100,000,000 | 729 | 628 | 781 | 781 |
| no filters | PAGINATION | first page | No | - | 100 | 736 | 624 | 797 | 796 |
| no filters | PAGINATION | first page | Yes | - | 100 | 2_204 | 1_923 | 2_685 | 2_617 |
| no filters | PAGINATION | 100th page | No | - | 100 | 781 | 780 | 782 | 782 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 2_438 | 2_414 | 2_474 | 2_470 |
| no filters | AGGREGATION | - | - | status | 4 | 744 | 642 | 797 | 797 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 `
- **Count/Rows:** 100,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 729ms
- **Min Duration:** 628ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 736ms
- **Min Duration:** 624ms
- **Max Duration:** 797ms
- **P95 Duration:** 796ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_204ms
- **Min Duration:** 1_923ms
- **Max Duration:** 2_685ms
- **P95 Duration:** 2_617ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 781ms
- **Min Duration:** 780ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_438ms
- **Min Duration:** 2_414ms
- **Max Duration:** 2_474ms
- **P95 Duration:** 2_470ms

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 744ms
- **Min Duration:** 642ms
- **Max Duration:** 797ms
- **P95 Duration:** 797ms

