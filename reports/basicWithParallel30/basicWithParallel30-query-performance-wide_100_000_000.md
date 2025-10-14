# Query Performance Report

**Table:** iceberg.lab.wide_100_000_000  
**Generated:** 2025-10-14T02:36:30.394Z  
**Total Rows:** 102,000,000  
**Table Size:** 29.8 GB  
**Trino Configuration:** Single-node Trino

## Summary

- **Total Queries:** 72
- **Iterations:** 3
- **Concurrency Simulation Streams:** 30
- **Average Duration:** 18_279ms
- **Fastest Query:** 1_705ms
- **Slowest Query:** 31_970ms
- **95th Percentile:** 29_046ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 102,000,000 | 27_703 | 20_907 | 38_203 | 36_783 |
| no filters | PAGINATION | first page | No | - | 100 | 1_845 | 1_592 | 2_176 | 2_135 |
| no filters | PAGINATION | first page | Yes | - | 100 | 24_639 | 23_602 | 25_297 | 25_269 |
| no filters | PAGINATION | 100th page | No | - | 100 | 2_292 | 2_075 | 2_457 | 2_446 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 27_330 | 26_268 | 28_409 | 28_300 |
| no filters | AGGREGATION | - | - | row_28 | 5 | 25_024 | 21_716 | 27_192 | 27_089 |
| no filters | AGGREGATION | - | - | row_48 | 7 | 26_025 | 23_736 | 27_530 | 27_458 |
| no filters | AGGREGATION | - | - | row_54 | 7 | 23_222 | 19_866 | 25_727 | 25_562 |
| row_9 > 5000 | COUNT | - | - | - | 53,832,361 | 22_527 | 21_798 | 22_950 | 22_939 |
| row_9 > 5000 | PAGINATION | first page | No | - | 100 | 1_884 | 1_365 | 2_310 | 2_277 |
| row_9 > 5000 | PAGINATION | first page | Yes | - | 100 | 25_339 | 23_560 | 28_520 | 28_062 |
| row_9 > 5000 | PAGINATION | 100th page | No | - | 100 | 3_290 | 3_064 | 3_569 | 3_536 |
| row_9 > 5000 | PAGINATION | 100th page | Yes | - | 100 | 27_709 | 26_025 | 30_398 | 30_029 |
| row_9 > 5000 | AGGREGATION | - | - | row_28 | 5 | 27_511 | 26_570 | 28_159 | 28_124 |
| row_9 > 5000 | AGGREGATION | - | - | row_48 | 7 | 25_100 | 22_899 | 27_650 | 27_360 |
| row_9 > 5000 | AGGREGATION | - | - | row_54 | 7 | 24_194 | 20_438 | 26_668 | 26_549 |
| row_28 = 'c' | COUNT | - | - | - | 20,399,168 | 22_771 | 21_722 | 24_171 | 23_996 |
| row_28 = 'c' | PAGINATION | first page | No | - | 100 | 1_705 | 1_450 | 2_105 | 2_051 |
| row_28 = 'c' | PAGINATION | first page | Yes | - | 100 | 24_653 | 23_768 | 25_492 | 25_413 |
| row_28 = 'c' | PAGINATION | 100th page | No | - | 100 | 3_707 | 3_064 | 4_561 | 4_455 |
| row_28 = 'c' | PAGINATION | 100th page | Yes | - | 100 | 30_155 | 29_383 | 30_934 | 30_856 |
| row_28 = 'c' | AGGREGATION | - | - | row_28 | 1 | 20_245 | 19_504 | 20_724 | 20_703 |
| row_28 = 'c' | AGGREGATION | - | - | row_48 | 7 | 24_731 | 22_141 | 27_964 | 27_577 |
| row_28 = 'c' | AGGREGATION | - | - | row_54 | 7 | 22_630 | 20_677 | 24_569 | 24_377 |
| row_10 > 2000 | COUNT | - | - | - | 32,961,172 | 24_613 | 23_347 | 26_491 | 26_242 |
| row_10 > 2000 | PAGINATION | first page | No | - | 100 | 1_946 | 1_634 | 2_282 | 2_246 |
| row_10 > 2000 | PAGINATION | first page | Yes | - | 100 | 26_201 | 23_588 | 28_206 | 28_067 |
| row_10 > 2000 | PAGINATION | 100th page | No | - | 100 | 2_826 | 2_694 | 2_897 | 2_896 |
| row_10 > 2000 | PAGINATION | 100th page | Yes | - | 100 | 28_611 | 27_445 | 29_579 | 29_502 |
| row_10 > 2000 | AGGREGATION | - | - | row_28 | 5 | 23_955 | 22_180 | 24_979 | 24_952 |
| row_10 > 2000 | AGGREGATION | - | - | row_48 | 7 | 24_249 | 22_949 | 25_558 | 25_426 |
| row_10 > 2000 | AGGREGATION | - | - | row_54 | 7 | 24_597 | 20_257 | 29_489 | 28_945 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | COUNT | - | - | - | 59,641,985 | 22_308 | 21_037 | 24_375 | 24_089 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | first page | No | - | 100 | 1_798 | 1_572 | 2_066 | 2_035 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | first page | Yes | - | 100 | 25_874 | 25_634 | 26_169 | 26_134 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | 100th page | No | - | 100 | 3_331 | 2_774 | 3_923 | 3_861 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | 100th page | Yes | - | 100 | 29_071 | 27_766 | 30_040 | 29_977 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | AGGREGATION | - | - | row_28 | 5 | 24_160 | 23_171 | 25_540 | 25_363 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | AGGREGATION | - | - | row_48 | 7 | 27_252 | 26_191 | 28_385 | 28_265 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | AGGREGATION | - | - | row_54 | 7 | 22_954 | 21_507 | 24_820 | 24_592 |
| created_at >= TIMESTAMP '2024-10-01 00:00:00' | COUNT | - | - | - | 25,136,612 | 6_397 | 5_862 | 6_740 | 6_725 |
| created_at >= TIMESTAMP '2024-10-01 00:00:00' | PAGINATION | first page | No | - | 100 | 1_860 | 1_563 | 2_125 | 2_102 |
| created_at >= TIMESTAMP '2024-10-01 00:00:00' | PAGINATION | first page | Yes | - | 100 | 8_128 | 7_156 | 9_106 | 9_008 |
| created_at >= TIMESTAMP '2024-10-01 00:00:00' | PAGINATION | 100th page | No | - | 100 | 3_728 | 2_990 | 4_613 | 4_510 |
| created_at >= TIMESTAMP '2024-10-01 00:00:00' | PAGINATION | 100th page | Yes | - | 100 | 9_360 | 8_939 | 9_574 | 9_574 |
| created_at >= TIMESTAMP '2024-10-01 00:00:00' | AGGREGATION | - | - | row_28 | 5 | 8_282 | 7_699 | 8_958 | 8_881 |
| created_at >= TIMESTAMP '2024-10-01 00:00:00' | AGGREGATION | - | - | row_48 | 7 | 8_059 | 7_723 | 8_245 | 8_242 |
| created_at >= TIMESTAMP '2024-10-01 00:00:00' | AGGREGATION | - | - | row_54 | 7 | 7_032 | 6_507 | 7_962 | 7_829 |
| row_10 > 2000 AND row_28 = 'c' | COUNT | - | - | - | 6,593,414 | 24_015 | 20_948 | 27_723 | 27_288 |
| row_10 > 2000 AND row_28 = 'c' | PAGINATION | first page | No | - | 100 | 3_396 | 2_347 | 5_188 | 4_935 |
| row_10 > 2000 AND row_28 = 'c' | PAGINATION | first page | Yes | - | 100 | 29_026 | 28_495 | 29_675 | 29_599 |
| row_10 > 2000 AND row_28 = 'c' | PAGINATION | 100th page | No | - | 100 | 3_235 | 2_923 | 3_534 | 3_506 |
| row_10 > 2000 AND row_28 = 'c' | PAGINATION | 100th page | Yes | - | 100 | 29_919 | 28_919 | 31_628 | 31_387 |
| row_10 > 2000 AND row_28 = 'c' | AGGREGATION | - | - | row_28 | 1 | 24_219 | 22_865 | 25_904 | 25_703 |
| row_10 > 2000 AND row_28 = 'c' | AGGREGATION | - | - | row_48 | 7 | 26_919 | 23_752 | 30_679 | 30_244 |
| row_10 > 2000 AND row_28 = 'c' | AGGREGATION | - | - | row_54 | 7 | 23_722 | 23_122 | 24_795 | 24_641 |
| row_9 BETWEEN 2000 AND 8000 | COUNT | - | - | - | 64,600,702 | 24_305 | 21_566 | 26_457 | 26_301 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | first page | No | - | 100 | 1_791 | 1_423 | 2_372 | 2_293 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | first page | Yes | - | 100 | 26_519 | 25_028 | 27_748 | 27_652 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | 100th page | No | - | 100 | 3_076 | 2_477 | 3_462 | 3_445 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | 100th page | Yes | - | 100 | 27_850 | 26_245 | 30_465 | 30_103 |
| row_9 BETWEEN 2000 AND 8000 | AGGREGATION | - | - | row_28 | 5 | 25_576 | 24_126 | 26_693 | 26_615 |
| row_9 BETWEEN 2000 AND 8000 | AGGREGATION | - | - | row_48 | 7 | 24_655 | 22_545 | 26_685 | 26_490 |
| row_9 BETWEEN 2000 AND 8000 | AGGREGATION | - | - | row_54 | 7 | 22_549 | 21_634 | 23_465 | 23_374 |
| row_29 IS NOT NULL | COUNT | - | - | - | 102,000,000 | 23_224 | 21_585 | 25_087 | 24_879 |
| row_29 IS NOT NULL | PAGINATION | first page | No | - | 100 | 2_049 | 1_844 | 2_220 | 2_207 |
| row_29 IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 28_247 | 26_821 | 30_555 | 30_236 |
| row_29 IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 4_503 | 4_138 | 4_885 | 4_845 |
| row_29 IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 31_970 | 30_406 | 34_809 | 34_398 |
| row_29 IS NOT NULL | AGGREGATION | - | - | row_28 | 5 | 25_221 | 22_257 | 27_776 | 27_562 |
| row_29 IS NOT NULL | AGGREGATION | - | - | row_48 | 7 | 24_402 | 23_767 | 24_920 | 24_880 |
| row_29 IS NOT NULL | AGGREGATION | - | - | row_54 | 7 | 22_869 | 22_036 | 23_531 | 23_482 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 `
- **Count/Rows:** 102,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 27_703ms
- **Min Duration:** 20_907ms
- **Max Duration:** 38_203ms
- **P95 Duration:** 36_783ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_845ms
- **Min Duration:** 1_592ms
- **Max Duration:** 2_176ms
- **P95 Duration:** 2_135ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 24_639ms
- **Min Duration:** 23_602ms
- **Max Duration:** 25_297ms
- **P95 Duration:** 25_269ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 2_292ms
- **Min Duration:** 2_075ms
- **Max Duration:** 2_457ms
- **P95 Duration:** 2_446ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 27_330ms
- **Min Duration:** 26_268ms
- **Max Duration:** 28_409ms
- **P95 Duration:** 28_300ms

### no filters - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000  GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 25_024ms
- **Min Duration:** 21_716ms
- **Max Duration:** 27_192ms
- **P95 Duration:** 27_089ms

### no filters - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000  GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 26_025ms
- **Min Duration:** 23_736ms
- **Max Duration:** 27_530ms
- **P95 Duration:** 27_458ms

### no filters - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000  GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 23_222ms
- **Min Duration:** 19_866ms
- **Max Duration:** 25_727ms
- **P95 Duration:** 25_562ms

### row_9 > 5000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000`
- **Count/Rows:** 53,832,361
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 22_527ms
- **Min Duration:** 21_798ms
- **Max Duration:** 22_950ms
- **P95 Duration:** 22_939ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_884ms
- **Min Duration:** 1_365ms
- **Max Duration:** 2_310ms
- **P95 Duration:** 2_277ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 25_339ms
- **Min Duration:** 23_560ms
- **Max Duration:** 28_520ms
- **P95 Duration:** 28_062ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 3_290ms
- **Min Duration:** 3_064ms
- **Max Duration:** 3_569ms
- **P95 Duration:** 3_536ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 27_709ms
- **Min Duration:** 26_025ms
- **Max Duration:** 30_398ms
- **P95 Duration:** 30_029ms

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 27_511ms
- **Min Duration:** 26_570ms
- **Max Duration:** 28_159ms
- **P95 Duration:** 28_124ms

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 25_100ms
- **Min Duration:** 22_899ms
- **Max Duration:** 27_650ms
- **P95 Duration:** 27_360ms

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 24_194ms
- **Min Duration:** 20_438ms
- **Max Duration:** 26_668ms
- **P95 Duration:** 26_549ms

### row_28 = 'c' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'c'`
- **Count/Rows:** 20,399,168
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 22_771ms
- **Min Duration:** 21_722ms
- **Max Duration:** 24_171ms
- **P95 Duration:** 23_996ms

### row_28 = 'c' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'c' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_705ms
- **Min Duration:** 1_450ms
- **Max Duration:** 2_105ms
- **P95 Duration:** 2_051ms

### row_28 = 'c' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'c' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 24_653ms
- **Min Duration:** 23_768ms
- **Max Duration:** 25_492ms
- **P95 Duration:** 25_413ms

### row_28 = 'c' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'c' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 3_707ms
- **Min Duration:** 3_064ms
- **Max Duration:** 4_561ms
- **P95 Duration:** 4_455ms

### row_28 = 'c' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'c' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 30_155ms
- **Min Duration:** 29_383ms
- **Max Duration:** 30_934ms
- **P95 Duration:** 30_856ms

### row_28 = 'c' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'c' GROUP BY row_28`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 20_245ms
- **Min Duration:** 19_504ms
- **Max Duration:** 20_724ms
- **P95 Duration:** 20_703ms

### row_28 = 'c' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'c' GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 24_731ms
- **Min Duration:** 22_141ms
- **Max Duration:** 27_964ms
- **P95 Duration:** 27_577ms

### row_28 = 'c' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'c' GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 22_630ms
- **Min Duration:** 20_677ms
- **Max Duration:** 24_569ms
- **P95 Duration:** 24_377ms

### row_10 > 2000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000`
- **Count/Rows:** 32,961,172
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 24_613ms
- **Min Duration:** 23_347ms
- **Max Duration:** 26_491ms
- **P95 Duration:** 26_242ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_946ms
- **Min Duration:** 1_634ms
- **Max Duration:** 2_282ms
- **P95 Duration:** 2_246ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 26_201ms
- **Min Duration:** 23_588ms
- **Max Duration:** 28_206ms
- **P95 Duration:** 28_067ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 2_826ms
- **Min Duration:** 2_694ms
- **Max Duration:** 2_897ms
- **P95 Duration:** 2_896ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 28_611ms
- **Min Duration:** 27_445ms
- **Max Duration:** 29_579ms
- **P95 Duration:** 29_502ms

### row_10 > 2000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 23_955ms
- **Min Duration:** 22_180ms
- **Max Duration:** 24_979ms
- **P95 Duration:** 24_952ms

### row_10 > 2000 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 24_249ms
- **Min Duration:** 22_949ms
- **Max Duration:** 25_558ms
- **P95 Duration:** 25_426ms

### row_10 > 2000 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 24_597ms
- **Min Duration:** 20_257ms
- **Max Duration:** 29_489ms
- **P95 Duration:** 28_945ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00'`
- **Count/Rows:** 59,641,985
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 22_308ms
- **Min Duration:** 21_037ms
- **Max Duration:** 24_375ms
- **P95 Duration:** 24_089ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_798ms
- **Min Duration:** 1_572ms
- **Max Duration:** 2_066ms
- **P95 Duration:** 2_035ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 25_874ms
- **Min Duration:** 25_634ms
- **Max Duration:** 26_169ms
- **P95 Duration:** 26_134ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 3_331ms
- **Min Duration:** 2_774ms
- **Max Duration:** 3_923ms
- **P95 Duration:** 3_861ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 29_071ms
- **Min Duration:** 27_766ms
- **Max Duration:** 30_040ms
- **P95 Duration:** 29_977ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 24_160ms
- **Min Duration:** 23_171ms
- **Max Duration:** 25_540ms
- **P95 Duration:** 25_363ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 27_252ms
- **Min Duration:** 26_191ms
- **Max Duration:** 28_385ms
- **P95 Duration:** 28_265ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 22_954ms
- **Min Duration:** 21_507ms
- **Max Duration:** 24_820ms
- **P95 Duration:** 24_592ms

### created_at >= TIMESTAMP '2024-10-01 00:00:00' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE created_at >= TIMESTAMP '2024-10-01 00:00:00'`
- **Count/Rows:** 25,136,612
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 6_397ms
- **Min Duration:** 5_862ms
- **Max Duration:** 6_740ms
- **P95 Duration:** 6_725ms

### created_at >= TIMESTAMP '2024-10-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE created_at >= TIMESTAMP '2024-10-01 00:00:00' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_860ms
- **Min Duration:** 1_563ms
- **Max Duration:** 2_125ms
- **P95 Duration:** 2_102ms

### created_at >= TIMESTAMP '2024-10-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE created_at >= TIMESTAMP '2024-10-01 00:00:00' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 8_128ms
- **Min Duration:** 7_156ms
- **Max Duration:** 9_106ms
- **P95 Duration:** 9_008ms

### created_at >= TIMESTAMP '2024-10-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE created_at >= TIMESTAMP '2024-10-01 00:00:00' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 3_728ms
- **Min Duration:** 2_990ms
- **Max Duration:** 4_613ms
- **P95 Duration:** 4_510ms

### created_at >= TIMESTAMP '2024-10-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE created_at >= TIMESTAMP '2024-10-01 00:00:00' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 9_360ms
- **Min Duration:** 8_939ms
- **Max Duration:** 9_574ms
- **P95 Duration:** 9_574ms

### created_at >= TIMESTAMP '2024-10-01 00:00:00' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE created_at >= TIMESTAMP '2024-10-01 00:00:00' GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 8_282ms
- **Min Duration:** 7_699ms
- **Max Duration:** 8_958ms
- **P95 Duration:** 8_881ms

### created_at >= TIMESTAMP '2024-10-01 00:00:00' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE created_at >= TIMESTAMP '2024-10-01 00:00:00' GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 8_059ms
- **Min Duration:** 7_723ms
- **Max Duration:** 8_245ms
- **P95 Duration:** 8_242ms

### created_at >= TIMESTAMP '2024-10-01 00:00:00' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE created_at >= TIMESTAMP '2024-10-01 00:00:00' GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 7_032ms
- **Min Duration:** 6_507ms
- **Max Duration:** 7_962ms
- **P95 Duration:** 7_829ms

### row_10 > 2000 AND row_28 = 'c' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND row_28 = 'c'`
- **Count/Rows:** 6,593,414
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 24_015ms
- **Min Duration:** 20_948ms
- **Max Duration:** 27_723ms
- **P95 Duration:** 27_288ms

### row_10 > 2000 AND row_28 = 'c' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND row_28 = 'c' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 3_396ms
- **Min Duration:** 2_347ms
- **Max Duration:** 5_188ms
- **P95 Duration:** 4_935ms

### row_10 > 2000 AND row_28 = 'c' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND row_28 = 'c' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 29_026ms
- **Min Duration:** 28_495ms
- **Max Duration:** 29_675ms
- **P95 Duration:** 29_599ms

### row_10 > 2000 AND row_28 = 'c' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND row_28 = 'c' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 3_235ms
- **Min Duration:** 2_923ms
- **Max Duration:** 3_534ms
- **P95 Duration:** 3_506ms

### row_10 > 2000 AND row_28 = 'c' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND row_28 = 'c' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 29_919ms
- **Min Duration:** 28_919ms
- **Max Duration:** 31_628ms
- **P95 Duration:** 31_387ms

### row_10 > 2000 AND row_28 = 'c' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND row_28 = 'c' GROUP BY row_28`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 24_219ms
- **Min Duration:** 22_865ms
- **Max Duration:** 25_904ms
- **P95 Duration:** 25_703ms

### row_10 > 2000 AND row_28 = 'c' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND row_28 = 'c' GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 26_919ms
- **Min Duration:** 23_752ms
- **Max Duration:** 30_679ms
- **P95 Duration:** 30_244ms

### row_10 > 2000 AND row_28 = 'c' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND row_28 = 'c' GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 23_722ms
- **Min Duration:** 23_122ms
- **Max Duration:** 24_795ms
- **P95 Duration:** 24_641ms

### row_9 BETWEEN 2000 AND 8000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000`
- **Count/Rows:** 64,600,702
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 24_305ms
- **Min Duration:** 21_566ms
- **Max Duration:** 26_457ms
- **P95 Duration:** 26_301ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_791ms
- **Min Duration:** 1_423ms
- **Max Duration:** 2_372ms
- **P95 Duration:** 2_293ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 26_519ms
- **Min Duration:** 25_028ms
- **Max Duration:** 27_748ms
- **P95 Duration:** 27_652ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 3_076ms
- **Min Duration:** 2_477ms
- **Max Duration:** 3_462ms
- **P95 Duration:** 3_445ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 27_850ms
- **Min Duration:** 26_245ms
- **Max Duration:** 30_465ms
- **P95 Duration:** 30_103ms

### row_9 BETWEEN 2000 AND 8000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 25_576ms
- **Min Duration:** 24_126ms
- **Max Duration:** 26_693ms
- **P95 Duration:** 26_615ms

### row_9 BETWEEN 2000 AND 8000 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 24_655ms
- **Min Duration:** 22_545ms
- **Max Duration:** 26_685ms
- **P95 Duration:** 26_490ms

### row_9 BETWEEN 2000 AND 8000 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 22_549ms
- **Min Duration:** 21_634ms
- **Max Duration:** 23_465ms
- **P95 Duration:** 23_374ms

### row_29 IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL`
- **Count/Rows:** 102,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 23_224ms
- **Min Duration:** 21_585ms
- **Max Duration:** 25_087ms
- **P95 Duration:** 24_879ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 2_049ms
- **Min Duration:** 1_844ms
- **Max Duration:** 2_220ms
- **P95 Duration:** 2_207ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 28_247ms
- **Min Duration:** 26_821ms
- **Max Duration:** 30_555ms
- **P95 Duration:** 30_236ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 4_503ms
- **Min Duration:** 4_138ms
- **Max Duration:** 4_885ms
- **P95 Duration:** 4_845ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 31_970ms
- **Min Duration:** 30_406ms
- **Max Duration:** 34_809ms
- **P95 Duration:** 34_398ms

### row_29 IS NOT NULL - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 25_221ms
- **Min Duration:** 22_257ms
- **Max Duration:** 27_776ms
- **P95 Duration:** 27_562ms

### row_29 IS NOT NULL - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 24_402ms
- **Min Duration:** 23_767ms
- **Max Duration:** 24_920ms
- **P95 Duration:** 24_880ms

### row_29 IS NOT NULL - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 22_869ms
- **Min Duration:** 22_036ms
- **Max Duration:** 23_531ms
- **P95 Duration:** 23_482ms

