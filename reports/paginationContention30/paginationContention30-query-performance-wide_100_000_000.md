# Query Performance Report

**Table:** iceberg.lab.wide_100_000_000  
**Generated:** 2025-10-13T22:47:16.485Z  
**Total Rows:** 102,000,000  
**Table Size:** 29.8 GB  
**Trino Configuration:** Single-node Trino

## Summary

- **Total Queries:** 45
- **Iterations:** 3
- **Concurrency Simulation Streams:** 5
- **Average Duration:** 3_992ms
- **Fastest Query:** 624ms
- **Slowest Query:** 10_760ms
- **95th Percentile:** 9_826ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 102,000,000 | 4_049 | 3_048 | 5_958 | 5_677 |
| no filters | PAGINATION | first page | No | - | 100 | 636 | 498 | 778 | 764 |
| no filters | PAGINATION | first page | Yes | - | 100 | 7_277 | 4_587 | 10_132 | 9_830 |
| no filters | PAGINATION | 100th page | No | - | 100 | 810 | 776 | 861 | 855 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 8_391 | 6_409 | 10_265 | 10_089 |
| row_9 > 5000 | COUNT | - | - | - | 53,832,361 | 4_635 | 3_938 | 5_297 | 5_235 |
| row_9 > 5000 | PAGINATION | first page | No | - | 100 | 624 | 599 | 645 | 644 |
| row_9 > 5000 | PAGINATION | first page | Yes | - | 100 | 6_293 | 5_377 | 7_100 | 7_031 |
| row_9 > 5000 | PAGINATION | 100th page | No | - | 100 | 749 | 690 | 784 | 783 |
| row_9 > 5000 | PAGINATION | 100th page | Yes | - | 100 | 10_760 | 7_644 | 13_072 | 12_922 |
| row_28 = 'c' | COUNT | - | - | - | 20,399,168 | 4_249 | 4_075 | 4_417 | 4_401 |
| row_28 = 'c' | PAGINATION | first page | No | - | 100 | 672 | 616 | 770 | 756 |
| row_28 = 'c' | PAGINATION | first page | Yes | - | 100 | 6_073 | 4_924 | 7_482 | 7_316 |
| row_28 = 'c' | PAGINATION | 100th page | No | - | 100 | 687 | 618 | 797 | 782 |
| row_28 = 'c' | PAGINATION | 100th page | Yes | - | 100 | 7_186 | 5_014 | 9_487 | 9_244 |
| row_10 > 2000 | COUNT | - | - | - | 32,961,172 | 4_819 | 4_046 | 5_834 | 5_709 |
| row_10 > 2000 | PAGINATION | first page | No | - | 100 | 734 | 632 | 788 | 788 |
| row_10 > 2000 | PAGINATION | first page | Yes | - | 100 | 7_098 | 5_641 | 8_080 | 8_030 |
| row_10 > 2000 | PAGINATION | 100th page | No | - | 100 | 732 | 630 | 785 | 785 |
| row_10 > 2000 | PAGINATION | 100th page | Yes | - | 100 | 10_673 | 8_210 | 12_480 | 12_365 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | COUNT | - | - | - | 59,641,985 | 4_529 | 2_944 | 6_401 | 6_185 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | first page | No | - | 100 | 897 | 780 | 1_126 | 1_092 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | first page | Yes | - | 100 | 6_577 | 6_007 | 7_004 | 6_976 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | 100th page | No | - | 100 | 831 | 489 | 1_367 | 1_294 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | 100th page | Yes | - | 100 | 9_675 | 6_395 | 12_096 | 11_940 |
| created_at >= TIMESTAMP '2024-10-01 00:00:00' | COUNT | - | - | - | 25,136,612 | 1_133 | 814 | 1_343 | 1_333 |
| created_at >= TIMESTAMP '2024-10-01 00:00:00' | PAGINATION | first page | No | - | 100 | 674 | 621 | 773 | 759 |
| created_at >= TIMESTAMP '2024-10-01 00:00:00' | PAGINATION | first page | Yes | - | 100 | 2_506 | 2_451 | 2_551 | 2_548 |
| created_at >= TIMESTAMP '2024-10-01 00:00:00' | PAGINATION | 100th page | No | - | 100 | 703 | 636 | 782 | 773 |
| created_at >= TIMESTAMP '2024-10-01 00:00:00' | PAGINATION | 100th page | Yes | - | 100 | 2_595 | 2_329 | 2_862 | 2_835 |
| row_10 > 2000 AND row_28 = 'c' | COUNT | - | - | - | 6,593,414 | 4_109 | 3_042 | 4_784 | 4_756 |
| row_10 > 2000 AND row_28 = 'c' | PAGINATION | first page | No | - | 100 | 638 | 629 | 643 | 643 |
| row_10 > 2000 AND row_28 = 'c' | PAGINATION | first page | Yes | - | 100 | 7_046 | 6_220 | 8_030 | 7_916 |
| row_10 > 2000 AND row_28 = 'c' | PAGINATION | 100th page | No | - | 100 | 656 | 555 | 774 | 761 |
| row_10 > 2000 AND row_28 = 'c' | PAGINATION | 100th page | Yes | - | 100 | 8_069 | 6_512 | 10_349 | 10_049 |
| row_9 BETWEEN 2000 AND 8000 | COUNT | - | - | - | 64,600,702 | 4_323 | 3_389 | 4_887 | 4_868 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | first page | No | - | 100 | 638 | 622 | 654 | 653 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | first page | Yes | - | 100 | 5_209 | 4_088 | 5_947 | 5_912 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | 100th page | No | - | 100 | 785 | 624 | 1_048 | 1_012 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | 100th page | Yes | - | 100 | 9_864 | 8_294 | 12_793 | 12_365 |
| row_29 IS NOT NULL | COUNT | - | - | - | 102,000,000 | 5_454 | 5_088 | 6_021 | 5_944 |
| row_29 IS NOT NULL | PAGINATION | first page | No | - | 100 | 669 | 594 | 777 | 763 |
| row_29 IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 7_469 | 5_982 | 10_166 | 9_776 |
| row_29 IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 755 | 671 | 822 | 817 |
| row_29 IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 6_691 | 5_799 | 7_377 | 7_329 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 `
- **Count/Rows:** 102,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 4_049ms
- **Min Duration:** 3_048ms
- **Max Duration:** 5_958ms
- **P95 Duration:** 5_677ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 636ms
- **Min Duration:** 498ms
- **Max Duration:** 778ms
- **P95 Duration:** 764ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 7_277ms
- **Min Duration:** 4_587ms
- **Max Duration:** 10_132ms
- **P95 Duration:** 9_830ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 810ms
- **Min Duration:** 776ms
- **Max Duration:** 861ms
- **P95 Duration:** 855ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 8_391ms
- **Min Duration:** 6_409ms
- **Max Duration:** 10_265ms
- **P95 Duration:** 10_089ms

### row_9 > 5000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000`
- **Count/Rows:** 53,832,361
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 4_635ms
- **Min Duration:** 3_938ms
- **Max Duration:** 5_297ms
- **P95 Duration:** 5_235ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 624ms
- **Min Duration:** 599ms
- **Max Duration:** 645ms
- **P95 Duration:** 644ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 6_293ms
- **Min Duration:** 5_377ms
- **Max Duration:** 7_100ms
- **P95 Duration:** 7_031ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 749ms
- **Min Duration:** 690ms
- **Max Duration:** 784ms
- **P95 Duration:** 783ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 10_760ms
- **Min Duration:** 7_644ms
- **Max Duration:** 13_072ms
- **P95 Duration:** 12_922ms

### row_28 = 'c' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'c'`
- **Count/Rows:** 20,399,168
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 4_249ms
- **Min Duration:** 4_075ms
- **Max Duration:** 4_417ms
- **P95 Duration:** 4_401ms

### row_28 = 'c' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'c' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 672ms
- **Min Duration:** 616ms
- **Max Duration:** 770ms
- **P95 Duration:** 756ms

### row_28 = 'c' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'c' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 6_073ms
- **Min Duration:** 4_924ms
- **Max Duration:** 7_482ms
- **P95 Duration:** 7_316ms

### row_28 = 'c' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'c' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 687ms
- **Min Duration:** 618ms
- **Max Duration:** 797ms
- **P95 Duration:** 782ms

### row_28 = 'c' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'c' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 7_186ms
- **Min Duration:** 5_014ms
- **Max Duration:** 9_487ms
- **P95 Duration:** 9_244ms

### row_10 > 2000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000`
- **Count/Rows:** 32,961,172
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 4_819ms
- **Min Duration:** 4_046ms
- **Max Duration:** 5_834ms
- **P95 Duration:** 5_709ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 734ms
- **Min Duration:** 632ms
- **Max Duration:** 788ms
- **P95 Duration:** 788ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 7_098ms
- **Min Duration:** 5_641ms
- **Max Duration:** 8_080ms
- **P95 Duration:** 8_030ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 732ms
- **Min Duration:** 630ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 10_673ms
- **Min Duration:** 8_210ms
- **Max Duration:** 12_480ms
- **P95 Duration:** 12_365ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00'`
- **Count/Rows:** 59,641,985
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 4_529ms
- **Min Duration:** 2_944ms
- **Max Duration:** 6_401ms
- **P95 Duration:** 6_185ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 897ms
- **Min Duration:** 780ms
- **Max Duration:** 1_126ms
- **P95 Duration:** 1_092ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 6_577ms
- **Min Duration:** 6_007ms
- **Max Duration:** 7_004ms
- **P95 Duration:** 6_976ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 831ms
- **Min Duration:** 489ms
- **Max Duration:** 1_367ms
- **P95 Duration:** 1_294ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 9_675ms
- **Min Duration:** 6_395ms
- **Max Duration:** 12_096ms
- **P95 Duration:** 11_940ms

### created_at >= TIMESTAMP '2024-10-01 00:00:00' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE created_at >= TIMESTAMP '2024-10-01 00:00:00'`
- **Count/Rows:** 25,136,612
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_133ms
- **Min Duration:** 814ms
- **Max Duration:** 1_343ms
- **P95 Duration:** 1_333ms

### created_at >= TIMESTAMP '2024-10-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE created_at >= TIMESTAMP '2024-10-01 00:00:00' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 674ms
- **Min Duration:** 621ms
- **Max Duration:** 773ms
- **P95 Duration:** 759ms

### created_at >= TIMESTAMP '2024-10-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE created_at >= TIMESTAMP '2024-10-01 00:00:00' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_506ms
- **Min Duration:** 2_451ms
- **Max Duration:** 2_551ms
- **P95 Duration:** 2_548ms

### created_at >= TIMESTAMP '2024-10-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE created_at >= TIMESTAMP '2024-10-01 00:00:00' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 703ms
- **Min Duration:** 636ms
- **Max Duration:** 782ms
- **P95 Duration:** 773ms

### created_at >= TIMESTAMP '2024-10-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE created_at >= TIMESTAMP '2024-10-01 00:00:00' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_595ms
- **Min Duration:** 2_329ms
- **Max Duration:** 2_862ms
- **P95 Duration:** 2_835ms

### row_10 > 2000 AND row_28 = 'c' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND row_28 = 'c'`
- **Count/Rows:** 6,593,414
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 4_109ms
- **Min Duration:** 3_042ms
- **Max Duration:** 4_784ms
- **P95 Duration:** 4_756ms

### row_10 > 2000 AND row_28 = 'c' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND row_28 = 'c' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 638ms
- **Min Duration:** 629ms
- **Max Duration:** 643ms
- **P95 Duration:** 643ms

### row_10 > 2000 AND row_28 = 'c' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND row_28 = 'c' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 7_046ms
- **Min Duration:** 6_220ms
- **Max Duration:** 8_030ms
- **P95 Duration:** 7_916ms

### row_10 > 2000 AND row_28 = 'c' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND row_28 = 'c' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 656ms
- **Min Duration:** 555ms
- **Max Duration:** 774ms
- **P95 Duration:** 761ms

### row_10 > 2000 AND row_28 = 'c' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND row_28 = 'c' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 8_069ms
- **Min Duration:** 6_512ms
- **Max Duration:** 10_349ms
- **P95 Duration:** 10_049ms

### row_9 BETWEEN 2000 AND 8000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000`
- **Count/Rows:** 64,600,702
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 4_323ms
- **Min Duration:** 3_389ms
- **Max Duration:** 4_887ms
- **P95 Duration:** 4_868ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 638ms
- **Min Duration:** 622ms
- **Max Duration:** 654ms
- **P95 Duration:** 653ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_209ms
- **Min Duration:** 4_088ms
- **Max Duration:** 5_947ms
- **P95 Duration:** 5_912ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 785ms
- **Min Duration:** 624ms
- **Max Duration:** 1_048ms
- **P95 Duration:** 1_012ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 9_864ms
- **Min Duration:** 8_294ms
- **Max Duration:** 12_793ms
- **P95 Duration:** 12_365ms

### row_29 IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL`
- **Count/Rows:** 102,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 5_454ms
- **Min Duration:** 5_088ms
- **Max Duration:** 6_021ms
- **P95 Duration:** 5_944ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 669ms
- **Min Duration:** 594ms
- **Max Duration:** 777ms
- **P95 Duration:** 763ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 7_469ms
- **Min Duration:** 5_982ms
- **Max Duration:** 10_166ms
- **P95 Duration:** 9_776ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 755ms
- **Min Duration:** 671ms
- **Max Duration:** 822ms
- **P95 Duration:** 817ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 6_691ms
- **Min Duration:** 5_799ms
- **Max Duration:** 7_377ms
- **P95 Duration:** 7_329ms

