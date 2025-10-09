# Query Performance Report

**Table:** iceberg.lab.narrow_1_000_000  
**Generated:** 2025-10-09T20:53:42.295Z  
**Total Rows:** 1,000,000  
**Table Size:** 29.4 MB

## Summary

- **Total Queries:** 36
- **Average Duration:** 560ms
- **Fastest Query:** 158ms
- **Slowest Query:** 789ms
- **95th Percentile:** 788ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
| no filters | COUNT | - | - | - | 1,000,000 | 784 | 782 | 785 | 785 | 3 |
| no filters | PAGINATION | first page | No | - | 100 | 731 | 623 | 785 | 785 | 3 |
| no filters | PAGINATION | first page | Yes | - | 100 | 734 | 632 | 785 | 785 | 3 |
| no filters | PAGINATION | 100th page | No | - | 0 | 164 | 162 | 167 | 167 | 3 |
| no filters | PAGINATION | 100th page | Yes | - | 0 | 160 | 158 | 162 | 162 | 3 |
| no filters | AGGREGATION | - | - | status GROUP BY | 4 | 786 | 784 | 787 | 787 | 3 |
| status = 'paid' | COUNT | - | - | - | 249,979 | 780 | 777 | 783 | 783 | 3 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 685 | 631 | 788 | 773 | 3 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 782 | 780 | 785 | 785 | 3 |
| status = 'paid' | PAGINATION | 100th page | No | - | 0 | 162 | 161 | 163 | 163 | 3 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 0 | 162 | 161 | 162 | 162 | 3 |
| status = 'paid' | AGGREGATION | - | - | status GROUP BY | 1 | 787 | 785 | 789 | 789 | 3 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 `
- **Count/Rows:** 1,000,000
- **Average Duration:** 784ms
- **Min Duration:** 782ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 731ms
- **Min Duration:** 623ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 734ms
- **Min Duration:** 632ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 164ms
- **Min Duration:** 162ms
- **Max Duration:** 167ms
- **P95 Duration:** 167ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 160ms
- **Min Duration:** 158ms
- **Max Duration:** 162ms
- **P95 Duration:** 162ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 786ms
- **Min Duration:** 784ms
- **Max Duration:** 787ms
- **P95 Duration:** 787ms
- **Runs:** 3

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid'`
- **Count/Rows:** 249,979
- **Average Duration:** 780ms
- **Min Duration:** 777ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 685ms
- **Min Duration:** 631ms
- **Max Duration:** 788ms
- **P95 Duration:** 773ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 782ms
- **Min Duration:** 780ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 162ms
- **Min Duration:** 161ms
- **Max Duration:** 163ms
- **P95 Duration:** 163ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 162ms
- **Min Duration:** 161ms
- **Max Duration:** 162ms
- **P95 Duration:** 162ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' GROUP BY status`
- **Count/Rows:** 1
- **Average Duration:** 787ms
- **Min Duration:** 785ms
- **Max Duration:** 789ms
- **P95 Duration:** 789ms
- **Runs:** 3

