# Query Performance Report

**Table:** iceberg.lab.wide_100_000_000  
**Generated:** 2025-10-13T08:54:39.835Z  
**Total Rows:** 102,000,000  
**Table Size:** 29.8 GB  
**Trino Configuration:** Single-node Trino

## Summary

- **Total Queries:** 45
- **Iterations:** 3
- **Concurrency Simulation Streams:** 0
- **Average Duration:** 1_322ms
- **Fastest Query:** 660ms
- **Slowest Query:** 2_453ms
- **95th Percentile:** 2_180ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 102,000,000 | 762 | 760 | 762 | 762 |
| no filters | PAGINATION | first page | No | - | 100 | 761 | 758 | 763 | 763 |
| no filters | PAGINATION | first page | Yes | - | 100 | 1_834 | 1_788 | 1_913 | 1_902 |
| no filters | PAGINATION | 100th page | No | - | 100 | 761 | 759 | 762 | 762 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 1_912 | 1_893 | 1_922 | 1_922 |
| row_9 > 5000 | COUNT | - | - | - | 53,832,361 | 969 | 865 | 1_169 | 1_140 |
| row_9 > 5000 | PAGINATION | first page | No | - | 100 | 711 | 609 | 761 | 761 |
| row_9 > 5000 | PAGINATION | first page | Yes | - | 100 | 1_823 | 1_762 | 1_918 | 1_905 |
| row_9 > 5000 | PAGINATION | 100th page | No | - | 100 | 1_750 | 1_727 | 1_762 | 1_762 |
| row_9 > 5000 | PAGINATION | 100th page | Yes | - | 100 | 1_931 | 1_919 | 1_937 | 1_937 |
| row_28 = 'c' | COUNT | - | - | - | 20,399,168 | 849 | 844 | 857 | 856 |
| row_28 = 'c' | PAGINATION | first page | No | - | 100 | 762 | 761 | 763 | 763 |
| row_28 = 'c' | PAGINATION | first page | Yes | - | 100 | 1_754 | 1_737 | 1_762 | 1_762 |
| row_28 = 'c' | PAGINATION | 100th page | No | - | 100 | 711 | 611 | 761 | 761 |
| row_28 = 'c' | PAGINATION | 100th page | Yes | - | 100 | 1_901 | 1_876 | 1_924 | 1_922 |
| row_10 > 2000 | COUNT | - | - | - | 32,961,172 | 1_126 | 1_066 | 1_237 | 1_221 |
| row_10 > 2000 | PAGINATION | first page | No | - | 100 | 762 | 761 | 763 | 763 |
| row_10 > 2000 | PAGINATION | first page | Yes | - | 100 | 1_988 | 1_959 | 2_005 | 2_005 |
| row_10 > 2000 | PAGINATION | 100th page | No | - | 100 | 1_934 | 1_932 | 1_935 | 1_935 |
| row_10 > 2000 | PAGINATION | 100th page | Yes | - | 100 | 2_117 | 2_109 | 2_123 | 2_123 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | COUNT | - | - | - | 59,641,985 | 1_169 | 1_142 | 1_211 | 1_206 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | first page | No | - | 100 | 711 | 609 | 762 | 762 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | first page | Yes | - | 100 | 2_002 | 1_956 | 2_035 | 2_033 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | 100th page | No | - | 100 | 1_123 | 760 | 1_846 | 1_738 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | 100th page | Yes | - | 100 | 2_196 | 2_174 | 2_235 | 2_230 |
| created_at >= TIMESTAMP '2024-10-01 00:00:00' | COUNT | - | - | - | 25,136,612 | 710 | 608 | 761 | 761 |
| created_at >= TIMESTAMP '2024-10-01 00:00:00' | PAGINATION | first page | No | - | 100 | 711 | 610 | 762 | 762 |
| created_at >= TIMESTAMP '2024-10-01 00:00:00' | PAGINATION | first page | Yes | - | 100 | 734 | 680 | 761 | 761 |
| created_at >= TIMESTAMP '2024-10-01 00:00:00' | PAGINATION | 100th page | No | - | 100 | 762 | 759 | 763 | 763 |
| created_at >= TIMESTAMP '2024-10-01 00:00:00' | PAGINATION | 100th page | Yes | - | 100 | 764 | 760 | 770 | 770 |
| row_10 > 2000 AND row_28 = 'c' | COUNT | - | - | - | 6,593,414 | 1_360 | 1_350 | 1_379 | 1_377 |
| row_10 > 2000 AND row_28 = 'c' | PAGINATION | first page | No | - | 100 | 761 | 760 | 761 | 761 |
| row_10 > 2000 AND row_28 = 'c' | PAGINATION | first page | Yes | - | 100 | 1_988 | 1_960 | 2_006 | 2_006 |
| row_10 > 2000 AND row_28 = 'c' | PAGINATION | 100th page | No | - | 100 | 762 | 762 | 762 | 762 |
| row_10 > 2000 AND row_28 = 'c' | PAGINATION | 100th page | Yes | - | 100 | 2_109 | 2_092 | 2_118 | 2_118 |
| row_9 BETWEEN 2000 AND 8000 | COUNT | - | - | - | 64,600,702 | 882 | 842 | 947 | 938 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | first page | No | - | 100 | 710 | 609 | 761 | 761 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | first page | Yes | - | 100 | 1_821 | 1_764 | 1_930 | 1_914 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | 100th page | No | - | 100 | 660 | 609 | 759 | 745 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | 100th page | Yes | - | 100 | 1_924 | 1_918 | 1_926 | 1_926 |
| row_29 IS NOT NULL | COUNT | - | - | - | 102,000,000 | 1_340 | 1_337 | 1_342 | 1_342 |
| row_29 IS NOT NULL | PAGINATION | first page | No | - | 100 | 761 | 760 | 761 | 761 |
| row_29 IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 2_276 | 2_256 | 2_297 | 2_295 |
| row_29 IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 1_668 | 760 | 2_165 | 2_157 |
| row_29 IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 2_453 | 2_442 | 2_474 | 2_471 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 `
- **Count/Rows:** 102,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 760ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 758ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_834ms
- **Min Duration:** 1_788ms
- **Max Duration:** 1_913ms
- **P95 Duration:** 1_902ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 759ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_912ms
- **Min Duration:** 1_893ms
- **Max Duration:** 1_922ms
- **P95 Duration:** 1_922ms

### row_9 > 5000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000`
- **Count/Rows:** 53,832,361
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 969ms
- **Min Duration:** 865ms
- **Max Duration:** 1_169ms
- **P95 Duration:** 1_140ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 609ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_823ms
- **Min Duration:** 1_762ms
- **Max Duration:** 1_918ms
- **P95 Duration:** 1_905ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_750ms
- **Min Duration:** 1_727ms
- **Max Duration:** 1_762ms
- **P95 Duration:** 1_762ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_931ms
- **Min Duration:** 1_919ms
- **Max Duration:** 1_937ms
- **P95 Duration:** 1_937ms

### row_28 = 'c' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'c'`
- **Count/Rows:** 20,399,168
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 849ms
- **Min Duration:** 844ms
- **Max Duration:** 857ms
- **P95 Duration:** 856ms

### row_28 = 'c' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'c' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### row_28 = 'c' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'c' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_754ms
- **Min Duration:** 1_737ms
- **Max Duration:** 1_762ms
- **P95 Duration:** 1_762ms

### row_28 = 'c' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'c' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 611ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### row_28 = 'c' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'c' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_901ms
- **Min Duration:** 1_876ms
- **Max Duration:** 1_924ms
- **P95 Duration:** 1_922ms

### row_10 > 2000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000`
- **Count/Rows:** 32,961,172
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_126ms
- **Min Duration:** 1_066ms
- **Max Duration:** 1_237ms
- **P95 Duration:** 1_221ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_988ms
- **Min Duration:** 1_959ms
- **Max Duration:** 2_005ms
- **P95 Duration:** 2_005ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_934ms
- **Min Duration:** 1_932ms
- **Max Duration:** 1_935ms
- **P95 Duration:** 1_935ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_117ms
- **Min Duration:** 2_109ms
- **Max Duration:** 2_123ms
- **P95 Duration:** 2_123ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00'`
- **Count/Rows:** 59,641,985
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_169ms
- **Min Duration:** 1_142ms
- **Max Duration:** 1_211ms
- **P95 Duration:** 1_206ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 609ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_002ms
- **Min Duration:** 1_956ms
- **Max Duration:** 2_035ms
- **P95 Duration:** 2_033ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_123ms
- **Min Duration:** 760ms
- **Max Duration:** 1_846ms
- **P95 Duration:** 1_738ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_196ms
- **Min Duration:** 2_174ms
- **Max Duration:** 2_235ms
- **P95 Duration:** 2_230ms

### created_at >= TIMESTAMP '2024-10-01 00:00:00' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE created_at >= TIMESTAMP '2024-10-01 00:00:00'`
- **Count/Rows:** 25,136,612
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 710ms
- **Min Duration:** 608ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### created_at >= TIMESTAMP '2024-10-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE created_at >= TIMESTAMP '2024-10-01 00:00:00' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 610ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### created_at >= TIMESTAMP '2024-10-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE created_at >= TIMESTAMP '2024-10-01 00:00:00' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 734ms
- **Min Duration:** 680ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### created_at >= TIMESTAMP '2024-10-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE created_at >= TIMESTAMP '2024-10-01 00:00:00' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 759ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### created_at >= TIMESTAMP '2024-10-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE created_at >= TIMESTAMP '2024-10-01 00:00:00' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 760ms
- **Max Duration:** 770ms
- **P95 Duration:** 770ms

### row_10 > 2000 AND row_28 = 'c' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND row_28 = 'c'`
- **Count/Rows:** 6,593,414
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_360ms
- **Min Duration:** 1_350ms
- **Max Duration:** 1_379ms
- **P95 Duration:** 1_377ms

### row_10 > 2000 AND row_28 = 'c' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND row_28 = 'c' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### row_10 > 2000 AND row_28 = 'c' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND row_28 = 'c' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_988ms
- **Min Duration:** 1_960ms
- **Max Duration:** 2_006ms
- **P95 Duration:** 2_006ms

### row_10 > 2000 AND row_28 = 'c' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND row_28 = 'c' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 762ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_10 > 2000 AND row_28 = 'c' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND row_28 = 'c' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_109ms
- **Min Duration:** 2_092ms
- **Max Duration:** 2_118ms
- **P95 Duration:** 2_118ms

### row_9 BETWEEN 2000 AND 8000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000`
- **Count/Rows:** 64,600,702
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 882ms
- **Min Duration:** 842ms
- **Max Duration:** 947ms
- **P95 Duration:** 938ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 710ms
- **Min Duration:** 609ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_821ms
- **Min Duration:** 1_764ms
- **Max Duration:** 1_930ms
- **P95 Duration:** 1_914ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 660ms
- **Min Duration:** 609ms
- **Max Duration:** 759ms
- **P95 Duration:** 745ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_924ms
- **Min Duration:** 1_918ms
- **Max Duration:** 1_926ms
- **P95 Duration:** 1_926ms

### row_29 IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL`
- **Count/Rows:** 102,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_340ms
- **Min Duration:** 1_337ms
- **Max Duration:** 1_342ms
- **P95 Duration:** 1_342ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_276ms
- **Min Duration:** 2_256ms
- **Max Duration:** 2_297ms
- **P95 Duration:** 2_295ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_668ms
- **Min Duration:** 760ms
- **Max Duration:** 2_165ms
- **P95 Duration:** 2_157ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_453ms
- **Min Duration:** 2_442ms
- **Max Duration:** 2_474ms
- **P95 Duration:** 2_471ms

