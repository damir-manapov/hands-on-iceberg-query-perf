# Query Performance Report

**Table:** iceberg.lab.narrow_1_000_000_000  
**Generated:** 2025-10-10T19:38:29.413Z  
**Total Rows:** 991,000,000  
**Table Size:** 28.4 GB

## Summary

- **Total Queries:** 240
- **Average Duration:** 7_152ms
- **Fastest Query:** 636ms
- **Slowest Query:** 31_627ms
- **95th Percentile:** 20_998ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
| no filters | COUNT | - | - | - | 991,000,000 | 774 | 772 | 776 | 776 | 3 |
| no filters | PAGINATION | first page | No | - | 100 | 781 | 776 | 787 | 787 | 3 |
| no filters | PAGINATION | first page | Yes | - | 100 | 9_834 | 9_351 | 10_451 | 10_376 | 3 |
| no filters | PAGINATION | 100th page | No | - | 100 | 780 | 779 | 780 | 780 | 3 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 11_946 | 11_790 | 12_170 | 12_141 | 3 |
| no filters | AGGREGATION | - | - | status | 4 | 1_945 | 1_941 | 1_949 | 1_949 | 3 |
| no filters | AGGREGATION | - | - | country | 6 | 2_420 | 2_391 | 2_456 | 2_452 | 3 |
| no filters | AGGREGATION | - | - | age | 62 | 5_508 | 5_425 | 5_666 | 5_643 | 3 |
| status = 'paid' | COUNT | - | - | - | 247,752,249 | 1_534 | 1_475 | 1_634 | 1_620 | 3 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 755 | 679 | 796 | 796 | 3 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 7_324 | 7_259 | 7_399 | 7_391 | 3 |
| status = 'paid' | PAGINATION | 100th page | No | - | 100 | 785 | 783 | 788 | 788 | 3 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 100 | 10_383 | 10_284 | 10_441 | 10_440 | 3 |
| status = 'paid' | AGGREGATION | - | - | status | 1 | 1_942 | 1_935 | 1_947 | 1_947 | 3 |
| status = 'paid' | AGGREGATION | - | - | country | 6 | 2_536 | 2_520 | 2_544 | 2_544 | 3 |
| status = 'paid' | AGGREGATION | - | - | age | 62 | 4_140 | 4_116 | 4_176 | 4_172 | 3 |
| country = 'US' | COUNT | - | - | - | 194,233,488 | 1_846 | 1_823 | 1_861 | 1_861 | 3 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 788 | 786 | 790 | 790 | 3 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 7_045 | 6_940 | 7_202 | 7_182 | 3 |
| country = 'US' | PAGINATION | 100th page | No | - | 100 | 936 | 796 | 1_106 | 1_086 | 3 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 10_077 | 10_055 | 10_117 | 10_112 | 3 |
| country = 'US' | AGGREGATION | - | - | status | 4 | 2_561 | 2_471 | 2_648 | 2_640 | 3 |
| country = 'US' | AGGREGATION | - | - | country | 1 | 2_241 | 2_157 | 2_311 | 2_306 | 3 |
| country = 'US' | AGGREGATION | - | - | age | 62 | 4_204 | 4_097 | 4_261 | 4_261 | 3 |
| age > 30 | COUNT | - | - | - | 756,406,627 | 2_389 | 2_344 | 2_438 | 2_433 | 3 |
| age > 30 | PAGINATION | first page | No | - | 100 | 787 | 784 | 790 | 790 | 3 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 10_372 | 10_287 | 10_470 | 10_459 | 3 |
| age > 30 | PAGINATION | 100th page | No | - | 100 | 831 | 764 | 932 | 919 | 3 |
| age > 30 | PAGINATION | 100th page | Yes | - | 100 | 12_837 | 12_606 | 13_086 | 13_060 | 3 |
| age > 30 | AGGREGATION | - | - | status | 4 | 3_655 | 3_630 | 3_674 | 3_673 | 3 |
| age > 30 | AGGREGATION | - | - | country | 6 | 4_022 | 3_977 | 4_084 | 4_076 | 3 |
| age > 30 | AGGREGATION | - | - | age | 48 | 5_332 | 5_299 | 5_392 | 5_384 | 3 |
| amount > 1000 | COUNT | - | - | - | 847,288,776 | 7_076 | 6_684 | 7_505 | 7_459 | 3 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 792 | 785 | 805 | 804 | 3 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 18_700 | 17_362 | 20_987 | 20_664 | 3 |
| amount > 1000 | PAGINATION | 100th page | No | - | 100 | 1_352 | 718 | 2_260 | 2_142 | 3 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 100 | 19_698 | 19_215 | 20_208 | 20_155 | 3 |
| amount > 1000 | AGGREGATION | - | - | status | 4 | 9_494 | 9_428 | 9_573 | 9_564 | 3 |
| amount > 1000 | AGGREGATION | - | - | country | 6 | 10_209 | 9_919 | 10_392 | 10_385 | 3 |
| amount > 1000 | AGGREGATION | - | - | age | 62 | 12_761 | 12_664 | 12_830 | 12_826 | 3 |
| date >= 2024-06-01 | COUNT | - | - | - | 579,393,927 | 6_144 | 6_117 | 6_171 | 6_169 | 3 |
| date >= 2024-06-01 | PAGINATION | first page | No | - | 100 | 729 | 690 | 799 | 789 | 3 |
| date >= 2024-06-01 | PAGINATION | first page | Yes | - | 100 | 14_734 | 13_795 | 15_322 | 15_299 | 3 |
| date >= 2024-06-01 | PAGINATION | 100th page | No | - | 100 | 1_040 | 881 | 1_232 | 1_210 | 3 |
| date >= 2024-06-01 | PAGINATION | 100th page | Yes | - | 100 | 17_417 | 16_856 | 17_812 | 17_789 | 3 |
| date >= 2024-06-01 | AGGREGATION | - | - | status | 4 | 7_320 | 7_286 | 7_339 | 7_339 | 3 |
| date >= 2024-06-01 | AGGREGATION | - | - | country | 6 | 8_045 | 7_917 | 8_109 | 8_109 | 3 |
| date >= 2024-06-01 | AGGREGATION | - | - | age | 62 | 10_560 | 10_355 | 10_735 | 10_721 | 3 |
| status='paid' AND country='US' | COUNT | - | - | - | 48,556,404 | 2_300 | 2_244 | 2_372 | 2_364 | 3 |
| status='paid' AND country='US' | PAGINATION | first page | No | - | 100 | 744 | 658 | 789 | 789 | 3 |
| status='paid' AND country='US' | PAGINATION | first page | Yes | - | 100 | 6_441 | 6_395 | 6_473 | 6_471 | 3 |
| status='paid' AND country='US' | PAGINATION | 100th page | No | - | 100 | 781 | 663 | 873 | 867 | 3 |
| status='paid' AND country='US' | PAGINATION | 100th page | Yes | - | 100 | 9_430 | 8_994 | 10_097 | 10_007 | 3 |
| status='paid' AND country='US' | AGGREGATION | - | - | status | 1 | 2_337 | 2_247 | 2_395 | 2_393 | 3 |
| status='paid' AND country='US' | AGGREGATION | - | - | country | 1 | 2_336 | 2_320 | 2_346 | 2_346 | 3 |
| status='paid' AND country='US' | AGGREGATION | - | - | age | 62 | 3_821 | 3_766 | 3_869 | 3_865 | 3 |
| age BETWEEN 25 AND 45 | COUNT | - | - | - | 330,919,230 | 2_917 | 2_696 | 3_259 | 3_213 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | No | - | 100 | 742 | 648 | 790 | 790 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | Yes | - | 100 | 8_614 | 8_422 | 8_928 | 8_885 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | No | - | 100 | 925 | 738 | 1_215 | 1_176 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | Yes | - | 100 | 11_133 | 10_881 | 11_441 | 11_405 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | status | 4 | 3_527 | 3_397 | 3_629 | 3_622 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | country | 6 | 3_848 | 3_795 | 3_919 | 3_910 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | age | 21 | 3_962 | 3_947 | 3_978 | 3_977 | 3 |
| tags contains 'alpha' | COUNT | - | - | - | 376,241,913 | 19_932 | 19_637 | 20_384 | 20_324 | 3 |
| tags contains 'alpha' | PAGINATION | first page | No | - | 100 | 743 | 648 | 795 | 795 | 3 |
| tags contains 'alpha' | PAGINATION | first page | Yes | - | 100 | 27_190 | 26_991 | 27_442 | 27_412 | 3 |
| tags contains 'alpha' | PAGINATION | 100th page | No | - | 100 | 771 | 637 | 839 | 839 | 3 |
| tags contains 'alpha' | PAGINATION | 100th page | Yes | - | 100 | 30_260 | 29_315 | 31_627 | 31_448 | 3 |
| tags contains 'alpha' | AGGREGATION | - | - | status | 4 | 20_768 | 20_634 | 20_961 | 20_936 | 3 |
| tags contains 'alpha' | AGGREGATION | - | - | country | 6 | 21_348 | 21_195 | 21_620 | 21_581 | 3 |
| tags contains 'alpha' | AGGREGATION | - | - | age | 62 | 23_068 | 22_652 | 23_518 | 23_470 | 3 |
| note IS NOT NULL | COUNT | - | - | - | 891,886,739 | 8_695 | 8_516 | 8_990 | 8_949 | 3 |
| note IS NOT NULL | PAGINATION | first page | No | - | 100 | 701 | 636 | 797 | 785 | 3 |
| note IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 18_438 | 18_194 | 18_905 | 18_836 | 3 |
| note IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 1_147 | 742 | 1_869 | 1_765 | 3 |
| note IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 20_745 | 20_599 | 20_963 | 20_934 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | status | 4 | 10_128 | 10_054 | 10_256 | 10_238 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | country | 6 | 11_069 | 10_663 | 11_424 | 11_394 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | age | 62 | 13_926 | 13_652 | 14_147 | 14_130 | 3 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 `
- **Count/Rows:** 991,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 774ms
- **Min Duration:** 772ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 781ms
- **Min Duration:** 776ms
- **Max Duration:** 787ms
- **P95 Duration:** 787ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 9_834ms
- **Min Duration:** 9_351ms
- **Max Duration:** 10_451ms
- **P95 Duration:** 10_376ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 780ms
- **Min Duration:** 779ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 11_946ms
- **Min Duration:** 11_790ms
- **Max Duration:** 12_170ms
- **P95 Duration:** 12_141ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 1_945ms
- **Min Duration:** 1_941ms
- **Max Duration:** 1_949ms
- **P95 Duration:** 1_949ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000  GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 2_420ms
- **Min Duration:** 2_391ms
- **Max Duration:** 2_456ms
- **P95 Duration:** 2_452ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000  GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 5_508ms
- **Min Duration:** 5_425ms
- **Max Duration:** 5_666ms
- **P95 Duration:** 5_643ms
- **Runs:** 3

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid'`
- **Count/Rows:** 247,752,249
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_534ms
- **Min Duration:** 1_475ms
- **Max Duration:** 1_634ms
- **P95 Duration:** 1_620ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 755ms
- **Min Duration:** 679ms
- **Max Duration:** 796ms
- **P95 Duration:** 796ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 7_324ms
- **Min Duration:** 7_259ms
- **Max Duration:** 7_399ms
- **P95 Duration:** 7_391ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 785ms
- **Min Duration:** 783ms
- **Max Duration:** 788ms
- **P95 Duration:** 788ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 10_383ms
- **Min Duration:** 10_284ms
- **Max Duration:** 10_441ms
- **P95 Duration:** 10_440ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' GROUP BY status`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 1_942ms
- **Min Duration:** 1_935ms
- **Max Duration:** 1_947ms
- **P95 Duration:** 1_947ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 2_536ms
- **Min Duration:** 2_520ms
- **Max Duration:** 2_544ms
- **P95 Duration:** 2_544ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 4_140ms
- **Min Duration:** 4_116ms
- **Max Duration:** 4_176ms
- **P95 Duration:** 4_172ms
- **Runs:** 3

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US'`
- **Count/Rows:** 194,233,488
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_846ms
- **Min Duration:** 1_823ms
- **Max Duration:** 1_861ms
- **P95 Duration:** 1_861ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 788ms
- **Min Duration:** 786ms
- **Max Duration:** 790ms
- **P95 Duration:** 790ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 7_045ms
- **Min Duration:** 6_940ms
- **Max Duration:** 7_202ms
- **P95 Duration:** 7_182ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 936ms
- **Min Duration:** 796ms
- **Max Duration:** 1_106ms
- **P95 Duration:** 1_086ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 10_077ms
- **Min Duration:** 10_055ms
- **Max Duration:** 10_117ms
- **P95 Duration:** 10_112ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 2_561ms
- **Min Duration:** 2_471ms
- **Max Duration:** 2_648ms
- **P95 Duration:** 2_640ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 2_241ms
- **Min Duration:** 2_157ms
- **Max Duration:** 2_311ms
- **P95 Duration:** 2_306ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 4_204ms
- **Min Duration:** 4_097ms
- **Max Duration:** 4_261ms
- **P95 Duration:** 4_261ms
- **Runs:** 3

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30`
- **Count/Rows:** 756,406,627
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 2_389ms
- **Min Duration:** 2_344ms
- **Max Duration:** 2_438ms
- **P95 Duration:** 2_433ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 787ms
- **Min Duration:** 784ms
- **Max Duration:** 790ms
- **P95 Duration:** 790ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 10_372ms
- **Min Duration:** 10_287ms
- **Max Duration:** 10_470ms
- **P95 Duration:** 10_459ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 831ms
- **Min Duration:** 764ms
- **Max Duration:** 932ms
- **P95 Duration:** 919ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 12_837ms
- **Min Duration:** 12_606ms
- **Max Duration:** 13_086ms
- **P95 Duration:** 13_060ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 3_655ms
- **Min Duration:** 3_630ms
- **Max Duration:** 3_674ms
- **P95 Duration:** 3_673ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 4_022ms
- **Min Duration:** 3_977ms
- **Max Duration:** 4_084ms
- **P95 Duration:** 4_076ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 GROUP BY age`
- **Count/Rows:** 48
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 5_332ms
- **Min Duration:** 5_299ms
- **Max Duration:** 5_392ms
- **P95 Duration:** 5_384ms
- **Runs:** 3

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000`
- **Count/Rows:** 847,288,776
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 7_076ms
- **Min Duration:** 6_684ms
- **Max Duration:** 7_505ms
- **P95 Duration:** 7_459ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 792ms
- **Min Duration:** 785ms
- **Max Duration:** 805ms
- **P95 Duration:** 804ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 18_700ms
- **Min Duration:** 17_362ms
- **Max Duration:** 20_987ms
- **P95 Duration:** 20_664ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_352ms
- **Min Duration:** 718ms
- **Max Duration:** 2_260ms
- **P95 Duration:** 2_142ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 19_698ms
- **Min Duration:** 19_215ms
- **Max Duration:** 20_208ms
- **P95 Duration:** 20_155ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 9_494ms
- **Min Duration:** 9_428ms
- **Max Duration:** 9_573ms
- **P95 Duration:** 9_564ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 10_209ms
- **Min Duration:** 9_919ms
- **Max Duration:** 10_392ms
- **P95 Duration:** 10_385ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 12_761ms
- **Min Duration:** 12_664ms
- **Max Duration:** 12_830ms
- **P95 Duration:** 12_826ms
- **Runs:** 3

### date >= 2024-06-01 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01'`
- **Count/Rows:** 579,393,927
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 6_144ms
- **Min Duration:** 6_117ms
- **Max Duration:** 6_171ms
- **P95 Duration:** 6_169ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 729ms
- **Min Duration:** 690ms
- **Max Duration:** 799ms
- **P95 Duration:** 789ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 14_734ms
- **Min Duration:** 13_795ms
- **Max Duration:** 15_322ms
- **P95 Duration:** 15_299ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_040ms
- **Min Duration:** 881ms
- **Max Duration:** 1_232ms
- **P95 Duration:** 1_210ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 17_417ms
- **Min Duration:** 16_856ms
- **Max Duration:** 17_812ms
- **P95 Duration:** 17_789ms
- **Runs:** 3

### date >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 7_320ms
- **Min Duration:** 7_286ms
- **Max Duration:** 7_339ms
- **P95 Duration:** 7_339ms
- **Runs:** 3

### date >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 8_045ms
- **Min Duration:** 7_917ms
- **Max Duration:** 8_109ms
- **P95 Duration:** 8_109ms
- **Runs:** 3

### date >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 10_560ms
- **Min Duration:** 10_355ms
- **Max Duration:** 10_735ms
- **P95 Duration:** 10_721ms
- **Runs:** 3

### status='paid' AND country='US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND country = 'US'`
- **Count/Rows:** 48,556,404
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 2_300ms
- **Min Duration:** 2_244ms
- **Max Duration:** 2_372ms
- **P95 Duration:** 2_364ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 744ms
- **Min Duration:** 658ms
- **Max Duration:** 789ms
- **P95 Duration:** 789ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 6_441ms
- **Min Duration:** 6_395ms
- **Max Duration:** 6_473ms
- **P95 Duration:** 6_471ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 781ms
- **Min Duration:** 663ms
- **Max Duration:** 873ms
- **P95 Duration:** 867ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 9_430ms
- **Min Duration:** 8_994ms
- **Max Duration:** 10_097ms
- **P95 Duration:** 10_007ms
- **Runs:** 3

### status='paid' AND country='US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY status`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 2_337ms
- **Min Duration:** 2_247ms
- **Max Duration:** 2_395ms
- **P95 Duration:** 2_393ms
- **Runs:** 3

### status='paid' AND country='US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 2_336ms
- **Min Duration:** 2_320ms
- **Max Duration:** 2_346ms
- **P95 Duration:** 2_346ms
- **Runs:** 3

### status='paid' AND country='US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 3_821ms
- **Min Duration:** 3_766ms
- **Max Duration:** 3_869ms
- **P95 Duration:** 3_865ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age BETWEEN 25 AND 45`
- **Count/Rows:** 330,919,230
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 2_917ms
- **Min Duration:** 2_696ms
- **Max Duration:** 3_259ms
- **P95 Duration:** 3_213ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age BETWEEN 25 AND 45 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 742ms
- **Min Duration:** 648ms
- **Max Duration:** 790ms
- **P95 Duration:** 790ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 8_614ms
- **Min Duration:** 8_422ms
- **Max Duration:** 8_928ms
- **P95 Duration:** 8_885ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age BETWEEN 25 AND 45 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 925ms
- **Min Duration:** 738ms
- **Max Duration:** 1_215ms
- **P95 Duration:** 1_176ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 11_133ms
- **Min Duration:** 10_881ms
- **Max Duration:** 11_441ms
- **P95 Duration:** 11_405ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 3_527ms
- **Min Duration:** 3_397ms
- **Max Duration:** 3_629ms
- **P95 Duration:** 3_622ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 3_848ms
- **Min Duration:** 3_795ms
- **Max Duration:** 3_919ms
- **P95 Duration:** 3_910ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY age`
- **Count/Rows:** 21
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 3_962ms
- **Min Duration:** 3_947ms
- **Max Duration:** 3_978ms
- **P95 Duration:** 3_977ms
- **Runs:** 3

### tags contains 'alpha' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha')`
- **Count/Rows:** 376,241,913
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 19_932ms
- **Min Duration:** 19_637ms
- **Max Duration:** 20_384ms
- **P95 Duration:** 20_324ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 743ms
- **Min Duration:** 648ms
- **Max Duration:** 795ms
- **P95 Duration:** 795ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 27_190ms
- **Min Duration:** 26_991ms
- **Max Duration:** 27_442ms
- **P95 Duration:** 27_412ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 771ms
- **Min Duration:** 637ms
- **Max Duration:** 839ms
- **P95 Duration:** 839ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 30_260ms
- **Min Duration:** 29_315ms
- **Max Duration:** 31_627ms
- **P95 Duration:** 31_448ms
- **Runs:** 3

### tags contains 'alpha' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 20_768ms
- **Min Duration:** 20_634ms
- **Max Duration:** 20_961ms
- **P95 Duration:** 20_936ms
- **Runs:** 3

### tags contains 'alpha' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 21_348ms
- **Min Duration:** 21_195ms
- **Max Duration:** 21_620ms
- **P95 Duration:** 21_581ms
- **Runs:** 3

### tags contains 'alpha' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 23_068ms
- **Min Duration:** 22_652ms
- **Max Duration:** 23_518ms
- **P95 Duration:** 23_470ms
- **Runs:** 3

### note IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL`
- **Count/Rows:** 891,886,739
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 8_695ms
- **Min Duration:** 8_516ms
- **Max Duration:** 8_990ms
- **P95 Duration:** 8_949ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 701ms
- **Min Duration:** 636ms
- **Max Duration:** 797ms
- **P95 Duration:** 785ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 18_438ms
- **Min Duration:** 18_194ms
- **Max Duration:** 18_905ms
- **P95 Duration:** 18_836ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_147ms
- **Min Duration:** 742ms
- **Max Duration:** 1_869ms
- **P95 Duration:** 1_765ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 20_745ms
- **Min Duration:** 20_599ms
- **Max Duration:** 20_963ms
- **P95 Duration:** 20_934ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 10_128ms
- **Min Duration:** 10_054ms
- **Max Duration:** 10_256ms
- **P95 Duration:** 10_238ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 11_069ms
- **Min Duration:** 10_663ms
- **Max Duration:** 11_424ms
- **P95 Duration:** 11_394ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 13_926ms
- **Min Duration:** 13_652ms
- **Max Duration:** 14_147ms
- **P95 Duration:** 14_130ms
- **Runs:** 3

