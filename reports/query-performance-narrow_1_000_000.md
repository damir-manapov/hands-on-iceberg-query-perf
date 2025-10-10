# Query Performance Report

**Table:** iceberg.lab.narrow_1_000_000  
**Generated:** 2025-10-10T18:56:32.339Z  
**Total Rows:** 1,000,000  
**Table Size:** 29.3 MB

## Summary

- **Total Queries:** 15
- **Average Duration:** 771ms
- **Fastest Query:** 628ms
- **Slowest Query:** 794ms
- **95th Percentile:** 789ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
| no filters | COUNT | - | - | - | 1,000,000 | 735 | 628 | 794 | 793 | 3 |
| no filters | PAGINATION | first page | No | - | 100 | 777 | 775 | 779 | 779 | 3 |
| no filters | PAGINATION | first page | Yes | - | 100 | 781 | 778 | 784 | 784 | 3 |
| no filters | PAGINATION | 100th page | No | - | 100 | 783 | 781 | 786 | 786 | 3 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 780 | 779 | 781 | 781 | 3 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 `
- **Count/Rows:** 1,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 735ms
- **Min Duration:** 628ms
- **Max Duration:** 794ms
- **P95 Duration:** 793ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 781ms
- **Min Duration:** 778ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 783ms
- **Min Duration:** 781ms
- **Max Duration:** 786ms
- **P95 Duration:** 786ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 780ms
- **Min Duration:** 779ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

