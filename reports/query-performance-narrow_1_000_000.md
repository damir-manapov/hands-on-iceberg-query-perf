# Query Performance Report

**Table:** iceberg.lab.narrow_1_000_000  
**Generated:** 2025-10-10T18:43:50.132Z  
**Total Rows:** 1,000,000  
**Table Size:** 29.3 MB

## Summary

- **Total Queries:** 5
- **Average Duration:** 508ms
- **Fastest Query:** 162ms
- **Slowest Query:** 790ms
- **95th Percentile:** 790ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
| no filters | COUNT | - | - | - | 1,000,000 | 633 | 633 | 633 | 633 | 1 |
| no filters | PAGINATION | first page | No | - | 100 | 790 | 790 | 790 | 790 | 1 |
| no filters | PAGINATION | first page | Yes | - | 100 | 789 | 789 | 789 | 789 | 1 |
| no filters | PAGINATION | 100th page | No | - | 0 | 164 | 164 | 164 | 164 | 1 |
| no filters | PAGINATION | 100th page | Yes | - | 0 | 162 | 162 | 162 | 162 | 1 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 `
- **Count/Rows:** 1,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 633ms
- **Min Duration:** 633ms
- **Max Duration:** 633ms
- **P95 Duration:** 633ms
- **Runs:** 1

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 790ms
- **Min Duration:** 790ms
- **Max Duration:** 790ms
- **P95 Duration:** 790ms
- **Runs:** 1

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 789ms
- **Min Duration:** 789ms
- **Max Duration:** 789ms
- **P95 Duration:** 789ms
- **Runs:** 1

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 164ms
- **Min Duration:** 164ms
- **Max Duration:** 164ms
- **P95 Duration:** 164ms
- **Runs:** 1

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 162ms
- **Min Duration:** 162ms
- **Max Duration:** 162ms
- **P95 Duration:** 162ms
- **Runs:** 1

