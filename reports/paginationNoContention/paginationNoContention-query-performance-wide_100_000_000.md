# Query Performance Report

**Table:** iceberg.lab.wide_100_000_000  
**Generated:** 2025-10-12T17:08:28.015Z  
**Total Rows:** 100,000,000  
**Table Size:** 29.0 GB

## Summary

- **Total Queries:** 50
- **Iterations:** 3
- **Concurrency Simulation Streams:** 0
- **Average Duration:** 922ms
- **Fastest Query:** 608ms
- **Slowest Query:** 2_206ms
- **95th Percentile:** 2_000ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 100,000,000 | 760 | 759 | 761 | 761 |
| no filters | PAGINATION | first page | No | - | 100 | 660 | 609 | 762 | 747 |
| no filters | PAGINATION | first page | Yes | - | 100 | 1_134 | 1_129 | 1_137 | 1_137 |
| no filters | PAGINATION | 100th page | No | - | 100 | 761 | 759 | 763 | 763 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 1_850 | 1_791 | 1_931 | 1_921 |
| row_9 > 5000 | COUNT | - | - | - | 52,774,709 | 772 | 769 | 776 | 776 |
| row_9 > 5000 | PAGINATION | first page | No | - | 100 | 760 | 759 | 761 | 761 |
| row_9 > 5000 | PAGINATION | first page | Yes | - | 100 | 1_274 | 1_253 | 1_297 | 1_295 |
| row_9 > 5000 | PAGINATION | 100th page | No | - | 100 | 761 | 760 | 761 | 761 |
| row_9 > 5000 | PAGINATION | 100th page | Yes | - | 100 | 1_972 | 1_937 | 1_991 | 1_991 |
| row_28 = 'value1' | COUNT | - | - | - | 0 | 660 | 609 | 760 | 746 |
| row_28 = 'value1' | PAGINATION | first page | No | - | 0 | 609 | 608 | 610 | 610 |
| row_28 = 'value1' | PAGINATION | first page | Yes | - | 0 | 609 | 608 | 609 | 609 |
| row_28 = 'value1' | PAGINATION | 100th page | No | - | 0 | 608 | 606 | 609 | 609 |
| row_28 = 'value1' | PAGINATION | 100th page | Yes | - | 0 | 609 | 608 | 610 | 610 |
| row_48 = 'enum1' | COUNT | - | - | - | 0 | 711 | 610 | 762 | 762 |
| row_48 = 'enum1' | PAGINATION | first page | No | - | 0 | 611 | 610 | 611 | 611 |
| row_48 = 'enum1' | PAGINATION | first page | Yes | - | 0 | 612 | 609 | 616 | 616 |
| row_48 = 'enum1' | PAGINATION | 100th page | No | - | 0 | 610 | 610 | 610 | 610 |
| row_48 = 'enum1' | PAGINATION | 100th page | Yes | - | 0 | 611 | 609 | 612 | 612 |
| row_10 > 2000 | COUNT | - | - | - | 32,315,005 | 752 | 720 | 772 | 772 |
| row_10 > 2000 | PAGINATION | first page | No | - | 100 | 710 | 609 | 760 | 760 |
| row_10 > 2000 | PAGINATION | first page | Yes | - | 100 | 1_300 | 1_287 | 1_313 | 1_312 |
| row_10 > 2000 | PAGINATION | 100th page | No | - | 100 | 761 | 758 | 762 | 762 |
| row_10 > 2000 | PAGINATION | 100th page | Yes | - | 100 | 2_022 | 2_012 | 2_033 | 2_032 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | COUNT | - | - | - | 58,465,692 | 818 | 802 | 830 | 830 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | first page | No | - | 100 | 660 | 609 | 761 | 746 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | first page | Yes | - | 100 | 1_453 | 1_449 | 1_457 | 1_457 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | 100th page | No | - | 100 | 709 | 608 | 760 | 760 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | 100th page | Yes | - | 100 | 2_182 | 2_138 | 2_241 | 2_234 |
| row_28 = 'value1' AND row_48 = 'enum1' | COUNT | - | - | - | 0 | 711 | 610 | 762 | 762 |
| row_28 = 'value1' AND row_48 = 'enum1' | PAGINATION | first page | No | - | 0 | 609 | 608 | 610 | 610 |
| row_28 = 'value1' AND row_48 = 'enum1' | PAGINATION | first page | Yes | - | 0 | 609 | 608 | 610 | 610 |
| row_28 = 'value1' AND row_48 = 'enum1' | PAGINATION | 100th page | No | - | 0 | 610 | 609 | 610 | 610 |
| row_28 = 'value1' AND row_48 = 'enum1' | PAGINATION | 100th page | Yes | - | 0 | 609 | 608 | 609 | 609 |
| row_9 BETWEEN 2000 AND 8000 | COUNT | - | - | - | 63,341,035 | 738 | 729 | 751 | 750 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | first page | No | - | 100 | 711 | 609 | 762 | 762 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | first page | Yes | - | 100 | 1_249 | 1_232 | 1_270 | 1_268 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | 100th page | No | - | 100 | 760 | 759 | 761 | 761 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | 100th page | Yes | - | 100 | 1_942 | 1_925 | 1_967 | 1_964 |
| row_54 = 'tag1' | COUNT | - | - | - | 0 | 711 | 610 | 762 | 762 |
| row_54 = 'tag1' | PAGINATION | first page | No | - | 0 | 609 | 608 | 610 | 610 |
| row_54 = 'tag1' | PAGINATION | first page | Yes | - | 0 | 608 | 608 | 608 | 608 |
| row_54 = 'tag1' | PAGINATION | 100th page | No | - | 0 | 610 | 609 | 610 | 610 |
| row_54 = 'tag1' | PAGINATION | 100th page | Yes | - | 0 | 610 | 608 | 610 | 610 |
| row_29 IS NOT NULL | COUNT | - | - | - | 100,000,000 | 893 | 888 | 897 | 897 |
| row_29 IS NOT NULL | PAGINATION | first page | No | - | 100 | 711 | 609 | 762 | 762 |
| row_29 IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 1_537 | 1_529 | 1_546 | 1_545 |
| row_29 IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 709 | 607 | 761 | 761 |
| row_29 IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 2_206 | 2_194 | 2_212 | 2_212 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 `
- **Count/Rows:** 100,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 760ms
- **Min Duration:** 759ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 660ms
- **Min Duration:** 609ms
- **Max Duration:** 762ms
- **P95 Duration:** 747ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_134ms
- **Min Duration:** 1_129ms
- **Max Duration:** 1_137ms
- **P95 Duration:** 1_137ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 759ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_850ms
- **Min Duration:** 1_791ms
- **Max Duration:** 1_931ms
- **P95 Duration:** 1_921ms

### row_9 > 5000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000`
- **Count/Rows:** 52,774,709
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 772ms
- **Min Duration:** 769ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 760ms
- **Min Duration:** 759ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_274ms
- **Min Duration:** 1_253ms
- **Max Duration:** 1_297ms
- **P95 Duration:** 1_295ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_972ms
- **Min Duration:** 1_937ms
- **Max Duration:** 1_991ms
- **P95 Duration:** 1_991ms

### row_28 = 'value1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 660ms
- **Min Duration:** 609ms
- **Max Duration:** 760ms
- **P95 Duration:** 746ms

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 609ms
- **Min Duration:** 608ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 609ms
- **Min Duration:** 608ms
- **Max Duration:** 609ms
- **P95 Duration:** 609ms

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 608ms
- **Min Duration:** 606ms
- **Max Duration:** 609ms
- **P95 Duration:** 609ms

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 609ms
- **Min Duration:** 608ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_48 = 'enum1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 610ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 611ms
- **Min Duration:** 610ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 612ms
- **Min Duration:** 609ms
- **Max Duration:** 616ms
- **P95 Duration:** 616ms

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 610ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 611ms
- **Min Duration:** 609ms
- **Max Duration:** 612ms
- **P95 Duration:** 612ms

### row_10 > 2000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000`
- **Count/Rows:** 32,315,005
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 752ms
- **Min Duration:** 720ms
- **Max Duration:** 772ms
- **P95 Duration:** 772ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 710ms
- **Min Duration:** 609ms
- **Max Duration:** 760ms
- **P95 Duration:** 760ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_300ms
- **Min Duration:** 1_287ms
- **Max Duration:** 1_313ms
- **P95 Duration:** 1_312ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 758ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_022ms
- **Min Duration:** 2_012ms
- **Max Duration:** 2_033ms
- **P95 Duration:** 2_032ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00'`
- **Count/Rows:** 58,465,692
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 818ms
- **Min Duration:** 802ms
- **Max Duration:** 830ms
- **P95 Duration:** 830ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 660ms
- **Min Duration:** 609ms
- **Max Duration:** 761ms
- **P95 Duration:** 746ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_453ms
- **Min Duration:** 1_449ms
- **Max Duration:** 1_457ms
- **P95 Duration:** 1_457ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 709ms
- **Min Duration:** 608ms
- **Max Duration:** 760ms
- **P95 Duration:** 760ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_182ms
- **Min Duration:** 2_138ms
- **Max Duration:** 2_241ms
- **P95 Duration:** 2_234ms

### row_28 = 'value1' AND row_48 = 'enum1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 610ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_28 = 'value1' AND row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 609ms
- **Min Duration:** 608ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_28 = 'value1' AND row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 609ms
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
- **Average Duration:** 609ms
- **Min Duration:** 608ms
- **Max Duration:** 609ms
- **P95 Duration:** 609ms

### row_9 BETWEEN 2000 AND 8000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000`
- **Count/Rows:** 63,341,035
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 738ms
- **Min Duration:** 729ms
- **Max Duration:** 751ms
- **P95 Duration:** 750ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 609ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_249ms
- **Min Duration:** 1_232ms
- **Max Duration:** 1_270ms
- **P95 Duration:** 1_268ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 760ms
- **Min Duration:** 759ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_942ms
- **Min Duration:** 1_925ms
- **Max Duration:** 1_967ms
- **P95 Duration:** 1_964ms

### row_54 = 'tag1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 610ms
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
- **Average Duration:** 608ms
- **Min Duration:** 608ms
- **Max Duration:** 608ms
- **P95 Duration:** 608ms

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

### row_29 IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL`
- **Count/Rows:** 100,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 893ms
- **Min Duration:** 888ms
- **Max Duration:** 897ms
- **P95 Duration:** 897ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 609ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_537ms
- **Min Duration:** 1_529ms
- **Max Duration:** 1_546ms
- **P95 Duration:** 1_545ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 709ms
- **Min Duration:** 607ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_206ms
- **Min Duration:** 2_194ms
- **Max Duration:** 2_212ms
- **P95 Duration:** 2_212ms

