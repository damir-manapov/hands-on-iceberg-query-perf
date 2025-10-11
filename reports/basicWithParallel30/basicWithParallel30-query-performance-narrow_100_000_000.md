# Query Performance Report

**Table:** iceberg.lab.narrow_100_000_000  
**Generated:** 2025-10-11T17:47:35.712Z  
**Total Rows:** 100,000,000  
**Table Size:** 2.9 GB

## Summary

- **Total Queries:** 6
- **Iterations:** 3
- **Concurrency Simulation Streams:** 30
- **Average Duration:** 25_347ms
- **Fastest Query:** 7_880ms
- **Slowest Query:** 49_018ms
- **95th Percentile:** 48_724ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 100,000,000 | 11_749 | 9_760 | 14_464 | 14_120 |
| no filters | PAGINATION | first page | No | - | 100 | 7_880 | 7_266 | 9_065 | 8_890 |
| no filters | PAGINATION | first page | Yes | - | 100 | 47_842 | 44_916 | 50_586 | 50_330 |
| no filters | PAGINATION | 100th page | No | - | 100 | 15_279 | 13_754 | 18_096 | 17_686 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 49_018 | 43_897 | 54_063 | 53_567 |
| no filters | AGGREGATION | - | - | status | 4 | 20_312 | 17_868 | 23_271 | 22_924 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 `
- **Count/Rows:** 100,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 11_749ms
- **Min Duration:** 9_760ms
- **Max Duration:** 14_464ms
- **P95 Duration:** 14_120ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 7_880ms
- **Min Duration:** 7_266ms
- **Max Duration:** 9_065ms
- **P95 Duration:** 8_890ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 47_842ms
- **Min Duration:** 44_916ms
- **Max Duration:** 50_586ms
- **P95 Duration:** 50_330ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 15_279ms
- **Min Duration:** 13_754ms
- **Max Duration:** 18_096ms
- **P95 Duration:** 17_686ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 49_018ms
- **Min Duration:** 43_897ms
- **Max Duration:** 54_063ms
- **P95 Duration:** 53_567ms

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 20_312ms
- **Min Duration:** 17_868ms
- **Max Duration:** 23_271ms
- **P95 Duration:** 22_924ms

