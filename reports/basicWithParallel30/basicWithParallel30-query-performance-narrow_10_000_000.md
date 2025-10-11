# Query Performance Report

**Table:** iceberg.lab.narrow_10_000_000  
**Generated:** 2025-10-11T17:00:13.803Z  
**Total Rows:** 10,000,000  
**Table Size:** 293.0 MB

## Summary

- **Total Queries:** 18
- **Iterations:** 3
- **Concurrency Simulation Streams:** 30
- **Average Duration:** 853ms
- **Fastest Query:** 618ms
- **Slowest Query:** 1_193ms
- **95th Percentile:** 1_189ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 10,000,000 | 706 | 619 | 804 | 793 |
| no filters | PAGINATION | first page | No | - | 100 | 801 | 657 | 982 | 961 |
| no filters | PAGINATION | first page | Yes | - | 100 | 864 | 790 | 961 | 949 |
| no filters | PAGINATION | 100th page | No | - | 100 | 764 | 674 | 846 | 839 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 1_184 | 1_169 | 1_193 | 1_193 |
| no filters | AGGREGATION | - | - | status | 4 | 799 | 618 | 1_008 | 985 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 `
- **Count/Rows:** 10,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 706ms
- **Min Duration:** 619ms
- **Max Duration:** 804ms
- **P95 Duration:** 793ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 801ms
- **Min Duration:** 657ms
- **Max Duration:** 982ms
- **P95 Duration:** 961ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 864ms
- **Min Duration:** 790ms
- **Max Duration:** 961ms
- **P95 Duration:** 949ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 674ms
- **Max Duration:** 846ms
- **P95 Duration:** 839ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_184ms
- **Min Duration:** 1_169ms
- **Max Duration:** 1_193ms
- **P95 Duration:** 1_193ms

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 799ms
- **Min Duration:** 618ms
- **Max Duration:** 1_008ms
- **P95 Duration:** 985ms

