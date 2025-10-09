# Query Performance Report

**Table:** iceberg.lab.narrow_10_000_000  
**Generated:** 2025-10-09T20:54:06.472Z  
**Total Rows:** 10,000,000  
**Table Size:** 293.1 MB

## Summary

- **Total Queries:** 36
- **Average Duration:** 566ms
- **Fastest Query:** 158ms
- **Slowest Query:** 786ms
- **95th Percentile:** 785ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
| no filters | COUNT | - | - | - | 10,000,000 | 783 | 779 | 785 | 785 | 3 |
| no filters | PAGINATION | first page | No | - | 100 | 727 | 626 | 779 | 779 | 3 |
| no filters | PAGINATION | first page | Yes | - | 100 | 775 | 769 | 779 | 779 | 3 |
| no filters | PAGINATION | 100th page | No | - | 0 | 161 | 160 | 162 | 162 | 3 |
| no filters | PAGINATION | 100th page | Yes | - | 0 | 161 | 158 | 162 | 162 | 3 |
| no filters | AGGREGATION | - | - | status GROUP BY | 4 | 780 | 778 | 782 | 782 | 3 |
| status = 'paid' | COUNT | - | - | - | 2,499,518 | 784 | 782 | 786 | 786 | 3 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 781 | 778 | 785 | 785 | 3 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 781 | 780 | 783 | 783 | 3 |
| status = 'paid' | PAGINATION | 100th page | No | - | 0 | 160 | 158 | 161 | 161 | 3 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 0 | 161 | 161 | 161 | 161 | 3 |
| status = 'paid' | AGGREGATION | - | - | status GROUP BY | 1 | 731 | 629 | 785 | 785 | 3 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 `
- **Count/Rows:** 10,000,000
- **Average Duration:** 783ms
- **Min Duration:** 779ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 727ms
- **Min Duration:** 626ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 775ms
- **Min Duration:** 769ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000  LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 161ms
- **Min Duration:** 160ms
- **Max Duration:** 162ms
- **P95 Duration:** 162ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000  ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 161ms
- **Min Duration:** 158ms
- **Max Duration:** 162ms
- **P95 Duration:** 162ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 780ms
- **Min Duration:** 778ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid'`
- **Count/Rows:** 2,499,518
- **Average Duration:** 784ms
- **Min Duration:** 782ms
- **Max Duration:** 786ms
- **P95 Duration:** 786ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 781ms
- **Min Duration:** 778ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 781ms
- **Min Duration:** 780ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 160ms
- **Min Duration:** 158ms
- **Max Duration:** 161ms
- **P95 Duration:** 161ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 161ms
- **Min Duration:** 161ms
- **Max Duration:** 161ms
- **P95 Duration:** 161ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' GROUP BY status`
- **Count/Rows:** 1
- **Average Duration:** 731ms
- **Min Duration:** 629ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

