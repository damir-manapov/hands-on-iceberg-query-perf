# Query Performance Report

**Table:** iceberg.lab.narrow_1_000_000  
**Generated:** 2025-10-10T20:24:23.170Z  
**Total Rows:** 1,000,000  
**Table Size:** 29.3 MB

## Summary

- **Total Queries:** 15
- **Average Duration:** 767ms
- **Fastest Query:** 632ms
- **Slowest Query:** 792ms
- **95th Percentile:** 789ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
| no filters | COUNT | - | - | - | 1,000,000 | 785 | 784 | 786 | 786 | 3 |
| no filters | PAGINATION | first page | No | - | 100 | 786 | 784 | 787 | 787 | 3 |
| no filters | PAGINATION | first page | Yes | - | 100 | 786 | 785 | 786 | 786 | 3 |
| no filters | PAGINATION | 100th page | No | - | 100 | 788 | 784 | 792 | 792 | 3 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 688 | 632 | 784 | 771 | 3 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 `
- **Count/Rows:** 1,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 785ms
- **Min Duration:** 784ms
- **Max Duration:** 786ms
- **P95 Duration:** 786ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 786ms
- **Min Duration:** 784ms
- **Max Duration:** 787ms
- **P95 Duration:** 787ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 786ms
- **Min Duration:** 785ms
- **Max Duration:** 786ms
- **P95 Duration:** 786ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 788ms
- **Min Duration:** 784ms
- **Max Duration:** 792ms
- **P95 Duration:** 792ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 688ms
- **Min Duration:** 632ms
- **Max Duration:** 784ms
- **P95 Duration:** 771ms
- **Runs:** 3

