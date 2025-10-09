# Query Performance Report

**Table:** iceberg.lab.wide_1_000_000  
**Generated:** 2025-10-09T20:54:30.289Z  
**Total Rows:** 1,000,000  
**Table Size:** 296.9 MB

## Summary

- **Total Queries:** 36
- **Average Duration:** 556ms
- **Fastest Query:** 155ms
- **Slowest Query:** 784ms
- **95th Percentile:** 783ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
| no filters | COUNT | - | - | - | 1,000,000 | 727 | 627 | 777 | 777 | 3 |
| no filters | PAGINATION | first page | No | - | 100 | 776 | 774 | 777 | 777 | 3 |
| no filters | PAGINATION | first page | Yes | - | 100 | 726 | 623 | 780 | 780 | 3 |
| no filters | PAGINATION | 100th page | No | - | 0 | 163 | 162 | 164 | 164 | 3 |
| no filters | PAGINATION | 100th page | Yes | - | 0 | 159 | 155 | 163 | 163 | 3 |
| no filters | AGGREGATION | - | - | row_28 GROUP BY | 5 | 778 | 771 | 784 | 784 | 3 |
| row_9 > 5000 | COUNT | - | - | - | 528,420 | 728 | 623 | 783 | 783 | 3 |
| row_9 > 5000 | PAGINATION | first page | No | - | 100 | 726 | 619 | 780 | 780 | 3 |
| row_9 > 5000 | PAGINATION | first page | Yes | - | 100 | 778 | 774 | 783 | 783 | 3 |
| row_9 > 5000 | PAGINATION | 100th page | No | - | 0 | 160 | 159 | 160 | 160 | 3 |
| row_9 > 5000 | PAGINATION | 100th page | Yes | - | 0 | 161 | 160 | 162 | 162 | 3 |
| row_9 > 5000 | AGGREGATION | - | - | row_28 GROUP BY | 5 | 783 | 782 | 783 | 783 | 3 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_1_000_000 `
- **Count/Rows:** 1,000,000
- **Average Duration:** 727ms
- **Min Duration:** 627ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 776ms
- **Min Duration:** 774ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 726ms
- **Min Duration:** 623ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000  LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 163ms
- **Min Duration:** 162ms
- **Max Duration:** 164ms
- **P95 Duration:** 164ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000  ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 155ms
- **Max Duration:** 163ms
- **P95 Duration:** 163ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_1_000_000  GROUP BY row_28`
- **Count/Rows:** 5
- **Average Duration:** 778ms
- **Min Duration:** 771ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### row_9 > 5000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_9 > 5000`
- **Count/Rows:** 528,420
- **Average Duration:** 728ms
- **Min Duration:** 623ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_9 > 5000 LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 726ms
- **Min Duration:** 619ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_9 > 5000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 778ms
- **Min Duration:** 774ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_9 > 5000 LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 160ms
- **Min Duration:** 159ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_9 > 5000 ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 161ms
- **Min Duration:** 160ms
- **Max Duration:** 162ms
- **P95 Duration:** 162ms
- **Runs:** 3

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_9 > 5000 GROUP BY row_28`
- **Count/Rows:** 5
- **Average Duration:** 783ms
- **Min Duration:** 782ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

