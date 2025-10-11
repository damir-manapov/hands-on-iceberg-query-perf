# Query Performance Report

**Table:** iceberg.lab.narrow_1_000_000  
**Generated:** 2025-10-11T16:59:14.366Z  
**Total Rows:** 1,000,000  
**Table Size:** 29.3 MB

## Summary

- **Total Queries:** 18
- **Iterations:** 3
- **Concurrency Simulation Streams:** 30
- **Average Duration:** 639ms
- **Fastest Query:** 606ms
- **Slowest Query:** 826ms
- **95th Percentile:** 771ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 1,000,000 | 734 | 614 | 826 | 820 |
| no filters | PAGINATION | first page | No | - | 100 | 660 | 609 | 761 | 746 |
| no filters | PAGINATION | first page | Yes | - | 100 | 609 | 608 | 611 | 611 |
| no filters | PAGINATION | 100th page | No | - | 100 | 607 | 606 | 608 | 608 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 612 | 608 | 616 | 616 |
| no filters | AGGREGATION | - | - | status | 4 | 611 | 607 | 616 | 616 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 `
- **Count/Rows:** 1,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 734ms
- **Min Duration:** 614ms
- **Max Duration:** 826ms
- **P95 Duration:** 820ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 660ms
- **Min Duration:** 609ms
- **Max Duration:** 761ms
- **P95 Duration:** 746ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 609ms
- **Min Duration:** 608ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 607ms
- **Min Duration:** 606ms
- **Max Duration:** 608ms
- **P95 Duration:** 608ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 612ms
- **Min Duration:** 608ms
- **Max Duration:** 616ms
- **P95 Duration:** 616ms

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 611ms
- **Min Duration:** 607ms
- **Max Duration:** 616ms
- **P95 Duration:** 616ms

