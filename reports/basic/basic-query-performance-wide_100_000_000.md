# Query Performance Report

**Table:** iceberg.lab.wide_100_000_000  
**Generated:** 2025-10-10T21:35:42.302Z  
**Total Rows:** 100,000,000  
**Table Size:** 29.0 GB

## Summary

- **Total Queries:** 240
- **Iterations:** 3
- **Average Duration:** 904ms
- **Fastest Query:** 607ms
- **Slowest Query:** 2_271ms
- **95th Percentile:** 1_959ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 100,000,000 | 762 | 761 | 762 | 762 |
| no filters | PAGINATION | first page | No | - | 100 | 762 | 761 | 762 | 762 |
| no filters | PAGINATION | first page | Yes | - | 100 | 1_342 | 1_314 | 1_392 | 1_385 |
| no filters | PAGINATION | 100th page | No | - | 100 | 762 | 760 | 763 | 763 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 1_951 | 1_931 | 1_963 | 1_963 |
| no filters | AGGREGATION | - | - | row_28 | 5 | 762 | 760 | 765 | 765 |
| no filters | AGGREGATION | - | - | row_48 | 7 | 712 | 612 | 762 | 762 |
| no filters | AGGREGATION | - | - | row_54 | 7 | 715 | 611 | 769 | 769 |
| row_9 > 5000 | COUNT | - | - | - | 52,774,709 | 747 | 709 | 768 | 768 |
| row_9 > 5000 | PAGINATION | first page | No | - | 100 | 711 | 610 | 762 | 762 |
| row_9 > 5000 | PAGINATION | first page | Yes | - | 100 | 1_316 | 1_263 | 1_356 | 1_354 |
| row_9 > 5000 | PAGINATION | 100th page | No | - | 100 | 762 | 761 | 763 | 763 |
| row_9 > 5000 | PAGINATION | 100th page | Yes | - | 100 | 1_956 | 1_935 | 1_967 | 1_967 |
| row_9 > 5000 | AGGREGATION | - | - | row_28 | 5 | 977 | 956 | 1_000 | 998 |
| row_9 > 5000 | AGGREGATION | - | - | row_48 | 7 | 964 | 954 | 975 | 974 |
| row_9 > 5000 | AGGREGATION | - | - | row_54 | 7 | 960 | 951 | 973 | 972 |
| row_28 = 'value1' | COUNT | - | - | - | 0 | 761 | 760 | 762 | 762 |
| row_28 = 'value1' | PAGINATION | first page | No | - | 0 | 610 | 609 | 610 | 610 |
| row_28 = 'value1' | PAGINATION | first page | Yes | - | 0 | 610 | 609 | 610 | 610 |
| row_28 = 'value1' | PAGINATION | 100th page | No | - | 0 | 610 | 609 | 610 | 610 |
| row_28 = 'value1' | PAGINATION | 100th page | Yes | - | 0 | 610 | 609 | 610 | 610 |
| row_28 = 'value1' | AGGREGATION | - | - | row_28 | 0 | 610 | 609 | 611 | 611 |
| row_28 = 'value1' | AGGREGATION | - | - | row_48 | 0 | 609 | 608 | 610 | 610 |
| row_28 = 'value1' | AGGREGATION | - | - | row_54 | 0 | 609 | 608 | 609 | 609 |
| row_48 = 'enum1' | COUNT | - | - | - | 0 | 762 | 761 | 763 | 763 |
| row_48 = 'enum1' | PAGINATION | first page | No | - | 0 | 610 | 609 | 611 | 611 |
| row_48 = 'enum1' | PAGINATION | first page | Yes | - | 0 | 612 | 610 | 613 | 613 |
| row_48 = 'enum1' | PAGINATION | 100th page | No | - | 0 | 611 | 611 | 611 | 611 |
| row_48 = 'enum1' | PAGINATION | 100th page | Yes | - | 0 | 611 | 609 | 613 | 613 |
| row_48 = 'enum1' | AGGREGATION | - | - | row_28 | 0 | 611 | 610 | 612 | 612 |
| row_48 = 'enum1' | AGGREGATION | - | - | row_48 | 0 | 611 | 610 | 611 | 611 |
| row_48 = 'enum1' | AGGREGATION | - | - | row_54 | 0 | 611 | 608 | 612 | 612 |
| row_10 > 2000 | COUNT | - | - | - | 32,315,005 | 740 | 679 | 771 | 771 |
| row_10 > 2000 | PAGINATION | first page | No | - | 100 | 761 | 760 | 762 | 762 |
| row_10 > 2000 | PAGINATION | first page | Yes | - | 100 | 1_308 | 1_293 | 1_315 | 1_315 |
| row_10 > 2000 | PAGINATION | 100th page | No | - | 100 | 712 | 613 | 761 | 761 |
| row_10 > 2000 | PAGINATION | 100th page | Yes | - | 100 | 1_950 | 1_927 | 1_970 | 1_969 |
| row_10 > 2000 | AGGREGATION | - | - | row_28 | 5 | 935 | 921 | 954 | 952 |
| row_10 > 2000 | AGGREGATION | - | - | row_48 | 7 | 925 | 921 | 930 | 930 |
| row_10 > 2000 | AGGREGATION | - | - | row_54 | 7 | 935 | 922 | 947 | 946 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | COUNT | - | - | - | 58,465,692 | 822 | 813 | 828 | 828 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | first page | No | - | 100 | 762 | 762 | 762 | 762 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | first page | Yes | - | 100 | 1_477 | 1_471 | 1_486 | 1_485 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | 100th page | No | - | 100 | 761 | 760 | 761 | 761 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | 100th page | Yes | - | 100 | 2_137 | 2_091 | 2_204 | 2_196 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | AGGREGATION | - | - | row_28 | 5 | 1_112 | 1_101 | 1_128 | 1_126 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | AGGREGATION | - | - | row_48 | 7 | 1_079 | 1_071 | 1_083 | 1_083 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | AGGREGATION | - | - | row_54 | 7 | 1_109 | 1_103 | 1_114 | 1_114 |
| row_28 = 'value1' AND row_48 = 'enum1' | COUNT | - | - | - | 0 | 760 | 759 | 760 | 760 |
| row_28 = 'value1' AND row_48 = 'enum1' | PAGINATION | first page | No | - | 0 | 609 | 607 | 610 | 610 |
| row_28 = 'value1' AND row_48 = 'enum1' | PAGINATION | first page | Yes | - | 0 | 610 | 608 | 610 | 610 |
| row_28 = 'value1' AND row_48 = 'enum1' | PAGINATION | 100th page | No | - | 0 | 610 | 609 | 610 | 610 |
| row_28 = 'value1' AND row_48 = 'enum1' | PAGINATION | 100th page | Yes | - | 0 | 610 | 609 | 610 | 610 |
| row_28 = 'value1' AND row_48 = 'enum1' | AGGREGATION | - | - | row_28 | 0 | 610 | 609 | 610 | 610 |
| row_28 = 'value1' AND row_48 = 'enum1' | AGGREGATION | - | - | row_48 | 0 | 611 | 610 | 611 | 611 |
| row_28 = 'value1' AND row_48 = 'enum1' | AGGREGATION | - | - | row_54 | 0 | 610 | 609 | 610 | 610 |
| row_9 BETWEEN 2000 AND 8000 | COUNT | - | - | - | 63,341,035 | 755 | 733 | 769 | 769 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | first page | No | - | 100 | 712 | 611 | 763 | 763 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | first page | Yes | - | 100 | 1_307 | 1_288 | 1_328 | 1_326 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | 100th page | No | - | 100 | 761 | 760 | 762 | 762 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | 100th page | Yes | - | 100 | 1_960 | 1_929 | 1_991 | 1_988 |
| row_9 BETWEEN 2000 AND 8000 | AGGREGATION | - | - | row_28 | 5 | 981 | 956 | 1_001 | 1_000 |
| row_9 BETWEEN 2000 AND 8000 | AGGREGATION | - | - | row_48 | 7 | 976 | 973 | 977 | 977 |
| row_9 BETWEEN 2000 AND 8000 | AGGREGATION | - | - | row_54 | 7 | 979 | 970 | 985 | 985 |
| row_54 = 'tag1' | COUNT | - | - | - | 0 | 761 | 760 | 762 | 762 |
| row_54 = 'tag1' | PAGINATION | first page | No | - | 0 | 609 | 608 | 610 | 610 |
| row_54 = 'tag1' | PAGINATION | first page | Yes | - | 0 | 610 | 609 | 611 | 611 |
| row_54 = 'tag1' | PAGINATION | 100th page | No | - | 0 | 610 | 609 | 610 | 610 |
| row_54 = 'tag1' | PAGINATION | 100th page | Yes | - | 0 | 610 | 608 | 610 | 610 |
| row_54 = 'tag1' | AGGREGATION | - | - | row_28 | 0 | 610 | 609 | 611 | 611 |
| row_54 = 'tag1' | AGGREGATION | - | - | row_48 | 0 | 610 | 609 | 611 | 611 |
| row_54 = 'tag1' | AGGREGATION | - | - | row_54 | 0 | 609 | 609 | 609 | 609 |
| row_29 IS NOT NULL | COUNT | - | - | - | 100,000,000 | 943 | 935 | 950 | 950 |
| row_29 IS NOT NULL | PAGINATION | first page | No | - | 100 | 762 | 760 | 763 | 763 |
| row_29 IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 1_715 | 1_610 | 1_768 | 1_768 |
| row_29 IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 761 | 760 | 762 | 762 |
| row_29 IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 2_252 | 2_219 | 2_271 | 2_271 |
| row_29 IS NOT NULL | AGGREGATION | - | - | row_28 | 5 | 1_154 | 1_148 | 1_163 | 1_162 |
| row_29 IS NOT NULL | AGGREGATION | - | - | row_48 | 7 | 1_208 | 1_199 | 1_212 | 1_212 |
| row_29 IS NOT NULL | AGGREGATION | - | - | row_54 | 7 | 1_233 | 1_227 | 1_235 | 1_235 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 `
- **Count/Rows:** 100,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_342ms
- **Min Duration:** 1_314ms
- **Max Duration:** 1_392ms
- **P95 Duration:** 1_385ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 760ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_951ms
- **Min Duration:** 1_931ms
- **Max Duration:** 1_963ms
- **P95 Duration:** 1_963ms

### no filters - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000  GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 762ms
- **Min Duration:** 760ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### no filters - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000  GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 712ms
- **Min Duration:** 612ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### no filters - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000  GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 715ms
- **Min Duration:** 611ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### row_9 > 5000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000`
- **Count/Rows:** 52,774,709
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 747ms
- **Min Duration:** 709ms
- **Max Duration:** 768ms
- **P95 Duration:** 768ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 610ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_316ms
- **Min Duration:** 1_263ms
- **Max Duration:** 1_356ms
- **P95 Duration:** 1_354ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_956ms
- **Min Duration:** 1_935ms
- **Max Duration:** 1_967ms
- **P95 Duration:** 1_967ms

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 977ms
- **Min Duration:** 956ms
- **Max Duration:** 1_000ms
- **P95 Duration:** 998ms

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 964ms
- **Min Duration:** 954ms
- **Max Duration:** 975ms
- **P95 Duration:** 974ms

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 960ms
- **Min Duration:** 951ms
- **Max Duration:** 973ms
- **P95 Duration:** 972ms

### row_28 = 'value1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_28 = 'value1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' GROUP BY row_28`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### row_28 = 'value1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' GROUP BY row_48`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 609ms
- **Min Duration:** 608ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_28 = 'value1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' GROUP BY row_54`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 609ms
- **Min Duration:** 608ms
- **Max Duration:** 609ms
- **P95 Duration:** 609ms

### row_48 = 'enum1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 612ms
- **Min Duration:** 610ms
- **Max Duration:** 613ms
- **P95 Duration:** 613ms

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 611ms
- **Min Duration:** 611ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 611ms
- **Min Duration:** 609ms
- **Max Duration:** 613ms
- **P95 Duration:** 613ms

### row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' GROUP BY row_28`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 611ms
- **Min Duration:** 610ms
- **Max Duration:** 612ms
- **P95 Duration:** 612ms

### row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' GROUP BY row_48`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 611ms
- **Min Duration:** 610ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' GROUP BY row_54`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 611ms
- **Min Duration:** 608ms
- **Max Duration:** 612ms
- **P95 Duration:** 612ms

### row_10 > 2000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000`
- **Count/Rows:** 32,315,005
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 740ms
- **Min Duration:** 679ms
- **Max Duration:** 771ms
- **P95 Duration:** 771ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_308ms
- **Min Duration:** 1_293ms
- **Max Duration:** 1_315ms
- **P95 Duration:** 1_315ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 613ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_950ms
- **Min Duration:** 1_927ms
- **Max Duration:** 1_970ms
- **P95 Duration:** 1_969ms

### row_10 > 2000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 935ms
- **Min Duration:** 921ms
- **Max Duration:** 954ms
- **P95 Duration:** 952ms

### row_10 > 2000 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 925ms
- **Min Duration:** 921ms
- **Max Duration:** 930ms
- **P95 Duration:** 930ms

### row_10 > 2000 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 935ms
- **Min Duration:** 922ms
- **Max Duration:** 947ms
- **P95 Duration:** 946ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00'`
- **Count/Rows:** 58,465,692
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 822ms
- **Min Duration:** 813ms
- **Max Duration:** 828ms
- **P95 Duration:** 828ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 762ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_477ms
- **Min Duration:** 1_471ms
- **Max Duration:** 1_486ms
- **P95 Duration:** 1_485ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_137ms
- **Min Duration:** 2_091ms
- **Max Duration:** 2_204ms
- **P95 Duration:** 2_196ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 1_112ms
- **Min Duration:** 1_101ms
- **Max Duration:** 1_128ms
- **P95 Duration:** 1_126ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 1_079ms
- **Min Duration:** 1_071ms
- **Max Duration:** 1_083ms
- **P95 Duration:** 1_083ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 1_109ms
- **Min Duration:** 1_103ms
- **Max Duration:** 1_114ms
- **P95 Duration:** 1_114ms

### row_28 = 'value1' AND row_48 = 'enum1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 760ms
- **Min Duration:** 759ms
- **Max Duration:** 760ms
- **P95 Duration:** 760ms

### row_28 = 'value1' AND row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 609ms
- **Min Duration:** 607ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_28 = 'value1' AND row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 608ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_28 = 'value1' AND row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_28 = 'value1' AND row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_28 = 'value1' AND row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' GROUP BY row_28`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_28 = 'value1' AND row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' GROUP BY row_48`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 611ms
- **Min Duration:** 610ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### row_28 = 'value1' AND row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' GROUP BY row_54`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_9 BETWEEN 2000 AND 8000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000`
- **Count/Rows:** 63,341,035
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 755ms
- **Min Duration:** 733ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 611ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_307ms
- **Min Duration:** 1_288ms
- **Max Duration:** 1_328ms
- **P95 Duration:** 1_326ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_960ms
- **Min Duration:** 1_929ms
- **Max Duration:** 1_991ms
- **P95 Duration:** 1_988ms

### row_9 BETWEEN 2000 AND 8000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 981ms
- **Min Duration:** 956ms
- **Max Duration:** 1_001ms
- **P95 Duration:** 1_000ms

### row_9 BETWEEN 2000 AND 8000 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 976ms
- **Min Duration:** 973ms
- **Max Duration:** 977ms
- **P95 Duration:** 977ms

### row_9 BETWEEN 2000 AND 8000 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 979ms
- **Min Duration:** 970ms
- **Max Duration:** 985ms
- **P95 Duration:** 985ms

### row_54 = 'tag1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 609ms
- **Min Duration:** 608ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 608ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_54 = 'tag1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1' GROUP BY row_28`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### row_54 = 'tag1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1' GROUP BY row_48`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### row_54 = 'tag1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1' GROUP BY row_54`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 609ms
- **Min Duration:** 609ms
- **Max Duration:** 609ms
- **P95 Duration:** 609ms

### row_29 IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL`
- **Count/Rows:** 100,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 943ms
- **Min Duration:** 935ms
- **Max Duration:** 950ms
- **P95 Duration:** 950ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 760ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_715ms
- **Min Duration:** 1_610ms
- **Max Duration:** 1_768ms
- **P95 Duration:** 1_768ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_252ms
- **Min Duration:** 2_219ms
- **Max Duration:** 2_271ms
- **P95 Duration:** 2_271ms

### row_29 IS NOT NULL - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 1_154ms
- **Min Duration:** 1_148ms
- **Max Duration:** 1_163ms
- **P95 Duration:** 1_162ms

### row_29 IS NOT NULL - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 1_208ms
- **Min Duration:** 1_199ms
- **Max Duration:** 1_212ms
- **P95 Duration:** 1_212ms

### row_29 IS NOT NULL - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 1_233ms
- **Min Duration:** 1_227ms
- **Max Duration:** 1_235ms
- **P95 Duration:** 1_235ms

