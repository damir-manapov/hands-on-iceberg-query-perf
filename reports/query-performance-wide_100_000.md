# Query Performance Report

**Table:** iceberg.lab.wide_100_000  
**Generated:** 2025-10-09T20:31:27.195Z  
**Total Rows:** 100,000  
**Table Size:** 30.0 MB

## Summary

- **Total Queries:** 36
- **Average Duration:** 551ms
- **Fastest Query:** 155ms
- **Slowest Query:** 800ms
- **95th Percentile:** 785ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
| no filters | COUNT | - | - | - | 100,000 | 683 | 632 | 783 | 768 | 3 |
| no filters | PAGINATION | first page | No | - | 100 | 731 | 629 | 782 | 782 | 3 |
| no filters | PAGINATION | first page | Yes | - | 100 | 788 | 779 | 800 | 799 | 3 |
| no filters | PAGINATION | 100th page | No | - | 0 | 162 | 161 | 163 | 163 | 3 |
| no filters | PAGINATION | 100th page | Yes | - | 0 | 162 | 161 | 163 | 163 | 3 |
| no filters | AGGREGATION | - | - | row_28 GROUP BY | 4 | 784 | 783 | 785 | 785 | 3 |
| row_9 > 5000 | COUNT | - | - | - | 52,752 | 731 | 628 | 784 | 784 | 3 |
| row_9 > 5000 | PAGINATION | first page | No | - | 100 | 725 | 622 | 778 | 778 | 3 |
| row_9 > 5000 | PAGINATION | first page | Yes | - | 100 | 725 | 627 | 782 | 781 | 3 |
| row_9 > 5000 | PAGINATION | 100th page | No | - | 0 | 162 | 159 | 163 | 163 | 3 |
| row_9 > 5000 | PAGINATION | 100th page | Yes | - | 0 | 169 | 155 | 190 | 188 | 3 |
| row_9 > 5000 | AGGREGATION | - | - | row_28 GROUP BY | 4 | 782 | 778 | 783 | 783 | 3 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000 `
- **Count/Rows:** 100,000
- **Average Duration:** 683ms
- **Min Duration:** 632ms
- **Max Duration:** 783ms
- **P95 Duration:** 768ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000  LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 731ms
- **Min Duration:** 629ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 788ms
- **Min Duration:** 779ms
- **Max Duration:** 800ms
- **P95 Duration:** 799ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000  LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 162ms
- **Min Duration:** 161ms
- **Max Duration:** 163ms
- **P95 Duration:** 163ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000  ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 162ms
- **Min Duration:** 161ms
- **Max Duration:** 163ms
- **P95 Duration:** 163ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000  GROUP BY row_28`
- **Count/Rows:** 4
- **Average Duration:** 784ms
- **Min Duration:** 783ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### row_9 > 5000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000 WHERE row_9 > 5000`
- **Count/Rows:** 52,752
- **Average Duration:** 731ms
- **Min Duration:** 628ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000 WHERE row_9 > 5000 LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 725ms
- **Min Duration:** 622ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000 WHERE row_9 > 5000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 725ms
- **Min Duration:** 627ms
- **Max Duration:** 782ms
- **P95 Duration:** 781ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000 WHERE row_9 > 5000 LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 162ms
- **Min Duration:** 159ms
- **Max Duration:** 163ms
- **P95 Duration:** 163ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000 WHERE row_9 > 5000 ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 169ms
- **Min Duration:** 155ms
- **Max Duration:** 190ms
- **P95 Duration:** 188ms
- **Runs:** 3

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000 WHERE row_9 > 5000 GROUP BY row_28`
- **Count/Rows:** 4
- **Average Duration:** 782ms
- **Min Duration:** 778ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

