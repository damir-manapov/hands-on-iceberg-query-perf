# Query Performance Report

**Table:** iceberg.lab.narrow_100_000  
**Generated:** 2025-10-09T20:31:03.555Z  
**Total Rows:** 100,000  
**Table Size:** 3.0 MB

## Summary

- **Total Queries:** 36
- **Average Duration:** 561ms
- **Fastest Query:** 160ms
- **Slowest Query:** 791ms
- **95th Percentile:** 788ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
| no filters | COUNT | - | - | - | 100,000 | 737 | 636 | 787 | 787 | 3 |
| no filters | PAGINATION | first page | No | - | 100 | 785 | 781 | 786 | 786 | 3 |
| no filters | PAGINATION | first page | Yes | - | 100 | 730 | 629 | 783 | 783 | 3 |
| no filters | PAGINATION | 100th page | No | - | 0 | 163 | 162 | 164 | 164 | 3 |
| no filters | PAGINATION | 100th page | Yes | - | 0 | 162 | 160 | 162 | 162 | 3 |
| no filters | AGGREGATION | - | - | status GROUP BY | 4 | 787 | 784 | 789 | 789 | 3 |
| status = 'paid' | COUNT | - | - | - | 25,112 | 734 | 631 | 785 | 785 | 3 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 788 | 784 | 791 | 791 | 3 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 732 | 633 | 784 | 784 | 3 |
| status = 'paid' | PAGINATION | 100th page | No | - | 0 | 164 | 163 | 164 | 164 | 3 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 0 | 162 | 160 | 163 | 163 | 3 |
| status = 'paid' | AGGREGATION | - | - | status GROUP BY | 1 | 784 | 783 | 785 | 785 | 3 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000 `
- **Count/Rows:** 100,000
- **Average Duration:** 737ms
- **Min Duration:** 636ms
- **Max Duration:** 787ms
- **P95 Duration:** 787ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000  LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 785ms
- **Min Duration:** 781ms
- **Max Duration:** 786ms
- **P95 Duration:** 786ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 730ms
- **Min Duration:** 629ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000  LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 163ms
- **Min Duration:** 162ms
- **Max Duration:** 164ms
- **P95 Duration:** 164ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000  ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 162ms
- **Min Duration:** 160ms
- **Max Duration:** 162ms
- **P95 Duration:** 162ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000  GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 787ms
- **Min Duration:** 784ms
- **Max Duration:** 789ms
- **P95 Duration:** 789ms
- **Runs:** 3

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000 WHERE status = 'paid'`
- **Count/Rows:** 25,112
- **Average Duration:** 734ms
- **Min Duration:** 631ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 788ms
- **Min Duration:** 784ms
- **Max Duration:** 791ms
- **P95 Duration:** 791ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 732ms
- **Min Duration:** 633ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000 WHERE status = 'paid' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 164ms
- **Min Duration:** 163ms
- **Max Duration:** 164ms
- **P95 Duration:** 164ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000 WHERE status = 'paid' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 162ms
- **Min Duration:** 160ms
- **Max Duration:** 163ms
- **P95 Duration:** 163ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000 WHERE status = 'paid' GROUP BY status`
- **Count/Rows:** 1
- **Average Duration:** 784ms
- **Min Duration:** 783ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

