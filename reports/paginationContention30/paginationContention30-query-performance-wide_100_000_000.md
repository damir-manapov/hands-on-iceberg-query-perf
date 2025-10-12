# Query Performance Report

**Table:** iceberg.lab.wide_100_000_000  
**Generated:** 2025-10-12T18:32:50.960Z  
**Total Rows:** 100,000,000  
**Table Size:** 29.0 GB

## Summary

- **Total Queries:** 40
- **Iterations:** 3
- **Concurrency Simulation Streams:** 5
- **Average Duration:** 4_774ms
- **Fastest Query:** 603ms
- **Slowest Query:** 16_006ms
- **95th Percentile:** 10_152ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 100,000,000 | 3_507 | 2_931 | 4_465 | 4_331 |
| no filters | PAGINATION | first page | No | - | 100 | 665 | 545 | 768 | 760 |
| no filters | PAGINATION | first page | Yes | - | 100 | 15_114 | 9_364 | 23_477 | 22_380 |
| no filters | PAGINATION | 100th page | No | - | 100 | 690 | 608 | 760 | 755 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 16_006 | 14_000 | 18_162 | 17_932 |
| row_9 > 5000 | COUNT | - | - | - | 52,774,709 | 9_538 | 5_529 | 16_543 | 15_543 |
| row_9 > 5000 | PAGINATION | first page | No | - | 100 | 2_130 | 756 | 4_797 | 4_401 |
| row_9 > 5000 | PAGINATION | first page | Yes | - | 100 | 6_617 | 6_058 | 7_382 | 7_285 |
| row_9 > 5000 | PAGINATION | 100th page | No | - | 100 | 649 | 620 | 697 | 691 |
| row_9 > 5000 | PAGINATION | 100th page | Yes | - | 100 | 7_149 | 5_444 | 8_866 | 8_693 |
| row_28 = 'a' | COUNT | - | - | - | 20,003,050 | 5_354 | 4_701 | 6_385 | 6_244 |
| row_28 = 'a' | PAGINATION | first page | No | - | 100 | 687 | 630 | 781 | 768 |
| row_28 = 'a' | PAGINATION | first page | Yes | - | 100 | 4_972 | 4_573 | 5_645 | 5_551 |
| row_28 = 'a' | PAGINATION | 100th page | No | - | 100 | 721 | 622 | 775 | 774 |
| row_28 = 'a' | PAGINATION | 100th page | Yes | - | 100 | 8_108 | 6_805 | 9_406 | 9_277 |
| row_10 > 2000 | COUNT | - | - | - | 32,315,005 | 5_488 | 4_720 | 6_510 | 6_383 |
| row_10 > 2000 | PAGINATION | first page | No | - | 100 | 716 | 621 | 764 | 764 |
| row_10 > 2000 | PAGINATION | first page | Yes | - | 100 | 6_867 | 5_709 | 7_465 | 7_461 |
| row_10 > 2000 | PAGINATION | 100th page | No | - | 100 | 866 | 766 | 1_044 | 1_019 |
| row_10 > 2000 | PAGINATION | 100th page | Yes | - | 100 | 9_073 | 6_048 | 10_719 | 10_693 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | COUNT | - | - | - | 58,465,692 | 5_416 | 4_817 | 6_191 | 6_096 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | first page | No | - | 100 | 603 | 534 | 647 | 645 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | first page | Yes | - | 100 | 6_121 | 4_470 | 7_753 | 7_592 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | 100th page | No | - | 100 | 685 | 632 | 762 | 752 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | 100th page | Yes | - | 100 | 9_244 | 7_074 | 10_431 | 10_411 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND row_28 = 'a' | COUNT | - | - | - | 11,691,538 | 4_335 | 3_377 | 5_488 | 5_354 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND row_28 = 'a' | PAGINATION | first page | No | - | 100 | 702 | 628 | 797 | 786 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND row_28 = 'a' | PAGINATION | first page | Yes | - | 100 | 7_272 | 5_935 | 8_665 | 8_520 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND row_28 = 'a' | PAGINATION | 100th page | No | - | 100 | 741 | 621 | 828 | 823 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND row_28 = 'a' | PAGINATION | 100th page | Yes | - | 100 | 9_891 | 8_650 | 12_176 | 11_843 |
| row_9 BETWEEN 2000 AND 8000 | COUNT | - | - | - | 63,341,035 | 3_902 | 3_719 | 4_030 | 4_023 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | first page | No | - | 100 | 720 | 590 | 786 | 786 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | first page | Yes | - | 100 | 5_279 | 2_927 | 7_765 | 7_503 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | 100th page | No | - | 100 | 718 | 620 | 769 | 769 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | 100th page | Yes | - | 100 | 8_726 | 7_555 | 9_403 | 9_385 |
| row_29 IS NOT NULL | COUNT | - | - | - | 100,000,000 | 5_011 | 4_273 | 5_438 | 5_427 |
| row_29 IS NOT NULL | PAGINATION | first page | No | - | 100 | 771 | 758 | 787 | 786 |
| row_29 IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 7_391 | 5_268 | 11_254 | 10_694 |
| row_29 IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 624 | 621 | 625 | 625 |
| row_29 IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 7_870 | 6_559 | 9_347 | 9_183 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 `
- **Count/Rows:** 100,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 3_507ms
- **Min Duration:** 2_931ms
- **Max Duration:** 4_465ms
- **P95 Duration:** 4_331ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 665ms
- **Min Duration:** 545ms
- **Max Duration:** 768ms
- **P95 Duration:** 760ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 15_114ms
- **Min Duration:** 9_364ms
- **Max Duration:** 23_477ms
- **P95 Duration:** 22_380ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 690ms
- **Min Duration:** 608ms
- **Max Duration:** 760ms
- **P95 Duration:** 755ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 16_006ms
- **Min Duration:** 14_000ms
- **Max Duration:** 18_162ms
- **P95 Duration:** 17_932ms

### row_9 > 5000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000`
- **Count/Rows:** 52,774,709
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 9_538ms
- **Min Duration:** 5_529ms
- **Max Duration:** 16_543ms
- **P95 Duration:** 15_543ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 2_130ms
- **Min Duration:** 756ms
- **Max Duration:** 4_797ms
- **P95 Duration:** 4_401ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 6_617ms
- **Min Duration:** 6_058ms
- **Max Duration:** 7_382ms
- **P95 Duration:** 7_285ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 649ms
- **Min Duration:** 620ms
- **Max Duration:** 697ms
- **P95 Duration:** 691ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 7_149ms
- **Min Duration:** 5_444ms
- **Max Duration:** 8_866ms
- **P95 Duration:** 8_693ms

### row_28 = 'a' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'a'`
- **Count/Rows:** 20,003,050
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 5_354ms
- **Min Duration:** 4_701ms
- **Max Duration:** 6_385ms
- **P95 Duration:** 6_244ms

### row_28 = 'a' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'a' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 687ms
- **Min Duration:** 630ms
- **Max Duration:** 781ms
- **P95 Duration:** 768ms

### row_28 = 'a' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'a' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 4_972ms
- **Min Duration:** 4_573ms
- **Max Duration:** 5_645ms
- **P95 Duration:** 5_551ms

### row_28 = 'a' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'a' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 721ms
- **Min Duration:** 622ms
- **Max Duration:** 775ms
- **P95 Duration:** 774ms

### row_28 = 'a' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'a' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 8_108ms
- **Min Duration:** 6_805ms
- **Max Duration:** 9_406ms
- **P95 Duration:** 9_277ms

### row_10 > 2000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000`
- **Count/Rows:** 32,315,005
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 5_488ms
- **Min Duration:** 4_720ms
- **Max Duration:** 6_510ms
- **P95 Duration:** 6_383ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 716ms
- **Min Duration:** 621ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 6_867ms
- **Min Duration:** 5_709ms
- **Max Duration:** 7_465ms
- **P95 Duration:** 7_461ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 866ms
- **Min Duration:** 766ms
- **Max Duration:** 1_044ms
- **P95 Duration:** 1_019ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 9_073ms
- **Min Duration:** 6_048ms
- **Max Duration:** 10_719ms
- **P95 Duration:** 10_693ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00'`
- **Count/Rows:** 58,465,692
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 5_416ms
- **Min Duration:** 4_817ms
- **Max Duration:** 6_191ms
- **P95 Duration:** 6_096ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 603ms
- **Min Duration:** 534ms
- **Max Duration:** 647ms
- **P95 Duration:** 645ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 6_121ms
- **Min Duration:** 4_470ms
- **Max Duration:** 7_753ms
- **P95 Duration:** 7_592ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 685ms
- **Min Duration:** 632ms
- **Max Duration:** 762ms
- **P95 Duration:** 752ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 9_244ms
- **Min Duration:** 7_074ms
- **Max Duration:** 10_431ms
- **P95 Duration:** 10_411ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND row_28 = 'a' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND row_28 = 'a'`
- **Count/Rows:** 11,691,538
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 4_335ms
- **Min Duration:** 3_377ms
- **Max Duration:** 5_488ms
- **P95 Duration:** 5_354ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND row_28 = 'a' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND row_28 = 'a' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 702ms
- **Min Duration:** 628ms
- **Max Duration:** 797ms
- **P95 Duration:** 786ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND row_28 = 'a' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND row_28 = 'a' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 7_272ms
- **Min Duration:** 5_935ms
- **Max Duration:** 8_665ms
- **P95 Duration:** 8_520ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND row_28 = 'a' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND row_28 = 'a' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 741ms
- **Min Duration:** 621ms
- **Max Duration:** 828ms
- **P95 Duration:** 823ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND row_28 = 'a' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND row_28 = 'a' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 9_891ms
- **Min Duration:** 8_650ms
- **Max Duration:** 12_176ms
- **P95 Duration:** 11_843ms

### row_9 BETWEEN 2000 AND 8000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000`
- **Count/Rows:** 63,341,035
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 3_902ms
- **Min Duration:** 3_719ms
- **Max Duration:** 4_030ms
- **P95 Duration:** 4_023ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 720ms
- **Min Duration:** 590ms
- **Max Duration:** 786ms
- **P95 Duration:** 786ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_279ms
- **Min Duration:** 2_927ms
- **Max Duration:** 7_765ms
- **P95 Duration:** 7_503ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 718ms
- **Min Duration:** 620ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 8_726ms
- **Min Duration:** 7_555ms
- **Max Duration:** 9_403ms
- **P95 Duration:** 9_385ms

### row_29 IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL`
- **Count/Rows:** 100,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 5_011ms
- **Min Duration:** 4_273ms
- **Max Duration:** 5_438ms
- **P95 Duration:** 5_427ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 771ms
- **Min Duration:** 758ms
- **Max Duration:** 787ms
- **P95 Duration:** 786ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 7_391ms
- **Min Duration:** 5_268ms
- **Max Duration:** 11_254ms
- **P95 Duration:** 10_694ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 624ms
- **Min Duration:** 621ms
- **Max Duration:** 625ms
- **P95 Duration:** 625ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 7_870ms
- **Min Duration:** 6_559ms
- **Max Duration:** 9_347ms
- **P95 Duration:** 9_183ms

