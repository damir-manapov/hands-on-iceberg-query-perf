# Query Performance Report

**Table:** iceberg.lab.narrow_100_000_000  
**Generated:** 2025-10-11T17:38:08.483Z  
**Total Rows:** 100,000,000  
**Table Size:** 2.9 GB

## Summary

- **Total Queries:** 6
- **Iterations:** 3
- **Concurrency Simulation Streams:** 30
- **Average Duration:** 27_393ms
- **Fastest Query:** 8_506ms
- **Slowest Query:** 54_814ms
- **95th Percentile:** 53_758ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 100,000,000 | 10_505 | 5_453 | 13_883 | 13_713 |
| no filters | PAGINATION | first page | No | - | 100 | 8_506 | 7_318 | 9_934 | 9_768 |
| no filters | PAGINATION | first page | Yes | - | 100 | 54_814 | 51_073 | 60_522 | 59_755 |
| no filters | PAGINATION | 100th page | No | - | 100 | 15_096 | 12_785 | 17_054 | 16_894 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 50_589 | 45_908 | 53_285 | 53_214 |
| no filters | AGGREGATION | - | - | status | 4 | 24_845 | 24_042 | 25_491 | 25_442 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 `
- **Count/Rows:** 100,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 10_505ms
- **Min Duration:** 5_453ms
- **Max Duration:** 13_883ms
- **P95 Duration:** 13_713ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 8_506ms
- **Min Duration:** 7_318ms
- **Max Duration:** 9_934ms
- **P95 Duration:** 9_768ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 54_814ms
- **Min Duration:** 51_073ms
- **Max Duration:** 60_522ms
- **P95 Duration:** 59_755ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 15_096ms
- **Min Duration:** 12_785ms
- **Max Duration:** 17_054ms
- **P95 Duration:** 16_894ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 50_589ms
- **Min Duration:** 45_908ms
- **Max Duration:** 53_285ms
- **P95 Duration:** 53_214ms

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 24_845ms
- **Min Duration:** 24_042ms
- **Max Duration:** 25_491ms
- **P95 Duration:** 25_442ms

