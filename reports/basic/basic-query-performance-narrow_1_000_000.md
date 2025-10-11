# Query Performance Report

**Table:** iceberg.lab.narrow_1_000_000  
**Generated:** 2025-10-11T16:30:56.656Z  
**Total Rows:** 1,000,000  
**Table Size:** 29.3 MB

## Summary

- **Total Queries:** 18
- **Iterations:** 3
- **Average Duration:** 730ms
- **Fastest Query:** 610ms
- **Slowest Query:** 765ms
- **95th Percentile:** 765ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 1,000,000 | 713 | 611 | 764 | 764 |
| no filters | PAGINATION | first page | No | - | 100 | 765 | 764 | 765 | 765 |
| no filters | PAGINATION | first page | Yes | - | 100 | 662 | 611 | 762 | 747 |
| no filters | PAGINATION | 100th page | No | - | 100 | 762 | 761 | 763 | 763 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 765 | 764 | 765 | 765 |
| no filters | AGGREGATION | - | - | status | 4 | 711 | 610 | 762 | 762 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 `
- **Count/Rows:** 1,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 713ms
- **Min Duration:** 611ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 764ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 662ms
- **Min Duration:** 611ms
- **Max Duration:** 762ms
- **P95 Duration:** 747ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 764ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 711ms
- **Min Duration:** 610ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

