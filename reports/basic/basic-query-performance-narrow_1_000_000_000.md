# Query Performance Report

**Table:** iceberg.lab.narrow_1_000_000_000  
**Generated:** 2025-10-10T21:25:37.002Z  
**Total Rows:** 1,000,000,000  
**Table Size:** 28.6 GB

## Summary

- **Total Queries:** 240
- **Iterations:** 3
- **Average Duration:** 4_101ms
- **Fastest Query:** 610ms
- **Slowest Query:** 17_362ms
- **95th Percentile:** 12_235ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 1,000,000,000 | 762 | 761 | 762 | 762 |
| no filters | PAGINATION | first page | No | - | 100 | 763 | 762 | 764 | 764 |
| no filters | PAGINATION | first page | Yes | - | 100 | 4_841 | 4_821 | 4_863 | 4_861 |
| no filters | PAGINATION | 100th page | No | - | 100 | 765 | 763 | 766 | 766 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 6_711 | 6_396 | 6_868 | 6_868 |
| no filters | AGGREGATION | - | - | status | 4 | 1_173 | 1_156 | 1_191 | 1_190 |
| no filters | AGGREGATION | - | - | country | 6 | 1_449 | 1_425 | 1_486 | 1_481 |
| no filters | AGGREGATION | - | - | age | 62 | 3_300 | 3_272 | 3_316 | 3_316 |
| status = 'paid' | COUNT | - | - | - | 249,999,416 | 776 | 767 | 780 | 780 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 712 | 612 | 762 | 762 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 4_308 | 4_108 | 4_419 | 4_417 |
| status = 'paid' | PAGINATION | 100th page | No | - | 100 | 844 | 763 | 995 | 973 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 100 | 5_661 | 5_492 | 5_765 | 5_761 |
| status = 'paid' | AGGREGATION | - | - | status | 1 | 982 | 936 | 1_043 | 1_036 |
| status = 'paid' | AGGREGATION | - | - | country | 6 | 1_551 | 1_542 | 1_561 | 1_560 |
| status = 'paid' | AGGREGATION | - | - | age | 62 | 2_247 | 2_232 | 2_267 | 2_265 |
| country = 'US' | COUNT | - | - | - | 195,998,455 | 1_057 | 1_048 | 1_063 | 1_063 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 762 | 761 | 763 | 763 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 4_156 | 3_873 | 4_332 | 4_325 |
| country = 'US' | PAGINATION | 100th page | No | - | 100 | 860 | 764 | 1_048 | 1_020 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 5_450 | 5_281 | 5_551 | 5_548 |
| country = 'US' | AGGREGATION | - | - | status | 4 | 1_518 | 1_499 | 1_551 | 1_547 |
| country = 'US' | AGGREGATION | - | - | country | 1 | 1_199 | 1_179 | 1_212 | 1_212 |
| country = 'US' | AGGREGATION | - | - | age | 62 | 2_404 | 2_375 | 2_444 | 2_439 |
| age > 30 | COUNT | - | - | - | 763,277,040 | 1_386 | 1_366 | 1_398 | 1_398 |
| age > 30 | PAGINATION | first page | No | - | 100 | 763 | 762 | 763 | 763 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 5_727 | 5_455 | 5_867 | 5_866 |
| age > 30 | PAGINATION | 100th page | No | - | 100 | 920 | 763 | 1_009 | 1_007 |
| age > 30 | PAGINATION | 100th page | Yes | - | 100 | 7_266 | 7_206 | 7_298 | 7_298 |
| age > 30 | AGGREGATION | - | - | status | 4 | 2_215 | 2_200 | 2_243 | 2_239 |
| age > 30 | AGGREGATION | - | - | country | 6 | 2_493 | 2_462 | 2_534 | 2_529 |
| age > 30 | AGGREGATION | - | - | age | 48 | 3_120 | 3_096 | 3_140 | 3_139 |
| amount > 1000 | COUNT | - | - | - | 854,982,845 | 3_937 | 3_784 | 4_230 | 4_187 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 763 | 761 | 765 | 765 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 9_299 | 9_012 | 9_466 | 9_462 |
| amount > 1000 | PAGINATION | 100th page | No | - | 100 | 1_152 | 764 | 1_360 | 1_358 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 100 | 10_848 | 10_780 | 10_949 | 10_936 |
| amount > 1000 | AGGREGATION | - | - | status | 4 | 4_682 | 4_657 | 4_730 | 4_723 |
| amount > 1000 | AGGREGATION | - | - | country | 6 | 4_960 | 4_942 | 4_971 | 4_971 |
| amount > 1000 | AGGREGATION | - | - | age | 62 | 6_552 | 6_538 | 6_568 | 6_566 |
| created_at >= DATE '2024-06-01' | COUNT | - | - | - | 584,656,043 | 3_601 | 3_208 | 4_368 | 4_254 |
| created_at >= DATE '2024-06-01' | PAGINATION | first page | No | - | 100 | 781 | 761 | 820 | 815 |
| created_at >= DATE '2024-06-01' | PAGINATION | first page | Yes | - | 100 | 8_898 | 8_716 | 9_262 | 9_208 |
| created_at >= DATE '2024-06-01' | PAGINATION | 100th page | No | - | 100 | 713 | 611 | 763 | 763 |
| created_at >= DATE '2024-06-01' | PAGINATION | 100th page | Yes | - | 100 | 9_941 | 9_884 | 10_020 | 10_010 |
| created_at >= DATE '2024-06-01' | AGGREGATION | - | - | status | 4 | 4_461 | 4_417 | 4_534 | 4_524 |
| created_at >= DATE '2024-06-01' | AGGREGATION | - | - | country | 6 | 4_705 | 4_694 | 4_711 | 4_711 |
| created_at >= DATE '2024-06-01' | AGGREGATION | - | - | age | 62 | 5_882 | 5_845 | 5_909 | 5_908 |
| status = 'paid' AND country = 'US' | COUNT | - | - | - | 48,996,884 | 1_347 | 1_323 | 1_381 | 1_377 |
| status = 'paid' AND country = 'US' | PAGINATION | first page | No | - | 100 | 729 | 660 | 763 | 763 |
| status = 'paid' AND country = 'US' | PAGINATION | first page | Yes | - | 100 | 3_850 | 3_654 | 3_960 | 3_958 |
| status = 'paid' AND country = 'US' | PAGINATION | 100th page | No | - | 100 | 770 | 761 | 785 | 783 |
| status = 'paid' AND country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 4_881 | 4_648 | 5_007 | 5_005 |
| status = 'paid' AND country = 'US' | AGGREGATION | - | - | status | 1 | 1_370 | 1_355 | 1_381 | 1_381 |
| status = 'paid' AND country = 'US' | AGGREGATION | - | - | country | 1 | 1_400 | 1_365 | 1_467 | 1_457 |
| status = 'paid' AND country = 'US' | AGGREGATION | - | - | age | 62 | 2_377 | 2_350 | 2_421 | 2_415 |
| age BETWEEN 25 AND 45 | COUNT | - | - | - | 333,923,871 | 1_533 | 1_524 | 1_539 | 1_539 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | No | - | 100 | 763 | 761 | 763 | 763 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | Yes | - | 100 | 4_709 | 4_386 | 4_913 | 4_905 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | No | - | 100 | 793 | 610 | 1_004 | 981 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | Yes | - | 100 | 6_060 | 5_896 | 6_155 | 6_153 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | status | 4 | 2_092 | 2_070 | 2_126 | 2_122 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | country | 6 | 2_365 | 2_325 | 2_410 | 2_405 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | age | 21 | 2_355 | 2_333 | 2_381 | 2_378 |
| contains(tags, 'alpha') | COUNT | - | - | - | 379,658,305 | 11_314 | 11_192 | 11_496 | 11_472 |
| contains(tags, 'alpha') | PAGINATION | first page | No | - | 100 | 762 | 760 | 763 | 763 |
| contains(tags, 'alpha') | PAGINATION | first page | Yes | - | 100 | 15_714 | 15_180 | 16_039 | 16_028 |
| contains(tags, 'alpha') | PAGINATION | 100th page | No | - | 100 | 765 | 763 | 768 | 768 |
| contains(tags, 'alpha') | PAGINATION | 100th page | Yes | - | 100 | 17_250 | 17_085 | 17_362 | 17_356 |
| contains(tags, 'alpha') | AGGREGATION | - | - | status | 4 | 11_943 | 11_886 | 12_001 | 11_995 |
| contains(tags, 'alpha') | AGGREGATION | - | - | country | 6 | 12_395 | 12_225 | 12_542 | 12_530 |
| contains(tags, 'alpha') | AGGREGATION | - | - | age | 62 | 13_254 | 13_220 | 13_304 | 13_298 |
| note IS NOT NULL | COUNT | - | - | - | 899,987,003 | 4_774 | 4_604 | 5_067 | 5_026 |
| note IS NOT NULL | PAGINATION | first page | No | - | 100 | 717 | 612 | 773 | 773 |
| note IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 10_520 | 10_206 | 10_678 | 10_678 |
| note IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 831 | 762 | 962 | 943 |
| note IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 12_145 | 11_886 | 12_449 | 12_414 |
| note IS NOT NULL | AGGREGATION | - | - | status | 4 | 5_503 | 5_391 | 5_562 | 5_562 |
| note IS NOT NULL | AGGREGATION | - | - | country | 6 | 5_838 | 5_820 | 5_863 | 5_860 |
| note IS NOT NULL | AGGREGATION | - | - | age | 62 | 7_606 | 7_539 | 7_647 | 7_646 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 `
- **Count/Rows:** 1,000,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 4_841ms
- **Min Duration:** 4_821ms
- **Max Duration:** 4_863ms
- **P95 Duration:** 4_861ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 763ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 6_711ms
- **Min Duration:** 6_396ms
- **Max Duration:** 6_868ms
- **P95 Duration:** 6_868ms

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 1_173ms
- **Min Duration:** 1_156ms
- **Max Duration:** 1_191ms
- **P95 Duration:** 1_190ms

### no filters - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000  GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 1_449ms
- **Min Duration:** 1_425ms
- **Max Duration:** 1_486ms
- **P95 Duration:** 1_481ms

### no filters - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000  GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 3_300ms
- **Min Duration:** 3_272ms
- **Max Duration:** 3_316ms
- **P95 Duration:** 3_316ms

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid'`
- **Count/Rows:** 249,999,416
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 767ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 612ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 4_308ms
- **Min Duration:** 4_108ms
- **Max Duration:** 4_419ms
- **P95 Duration:** 4_417ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 844ms
- **Min Duration:** 763ms
- **Max Duration:** 995ms
- **P95 Duration:** 973ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_661ms
- **Min Duration:** 5_492ms
- **Max Duration:** 5_765ms
- **P95 Duration:** 5_761ms

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' GROUP BY status`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 982ms
- **Min Duration:** 936ms
- **Max Duration:** 1_043ms
- **P95 Duration:** 1_036ms

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 1_551ms
- **Min Duration:** 1_542ms
- **Max Duration:** 1_561ms
- **P95 Duration:** 1_560ms

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 2_247ms
- **Min Duration:** 2_232ms
- **Max Duration:** 2_267ms
- **P95 Duration:** 2_265ms

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US'`
- **Count/Rows:** 195,998,455
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_057ms
- **Min Duration:** 1_048ms
- **Max Duration:** 1_063ms
- **P95 Duration:** 1_063ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 4_156ms
- **Min Duration:** 3_873ms
- **Max Duration:** 4_332ms
- **P95 Duration:** 4_325ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 860ms
- **Min Duration:** 764ms
- **Max Duration:** 1_048ms
- **P95 Duration:** 1_020ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_450ms
- **Min Duration:** 5_281ms
- **Max Duration:** 5_551ms
- **P95 Duration:** 5_548ms

### country = 'US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 1_518ms
- **Min Duration:** 1_499ms
- **Max Duration:** 1_551ms
- **P95 Duration:** 1_547ms

### country = 'US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 1_199ms
- **Min Duration:** 1_179ms
- **Max Duration:** 1_212ms
- **P95 Duration:** 1_212ms

### country = 'US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 2_404ms
- **Min Duration:** 2_375ms
- **Max Duration:** 2_444ms
- **P95 Duration:** 2_439ms

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30`
- **Count/Rows:** 763,277,040
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_386ms
- **Min Duration:** 1_366ms
- **Max Duration:** 1_398ms
- **P95 Duration:** 1_398ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_727ms
- **Min Duration:** 5_455ms
- **Max Duration:** 5_867ms
- **P95 Duration:** 5_866ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 920ms
- **Min Duration:** 763ms
- **Max Duration:** 1_009ms
- **P95 Duration:** 1_007ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 7_266ms
- **Min Duration:** 7_206ms
- **Max Duration:** 7_298ms
- **P95 Duration:** 7_298ms

### age > 30 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 2_215ms
- **Min Duration:** 2_200ms
- **Max Duration:** 2_243ms
- **P95 Duration:** 2_239ms

### age > 30 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 2_493ms
- **Min Duration:** 2_462ms
- **Max Duration:** 2_534ms
- **P95 Duration:** 2_529ms

### age > 30 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 GROUP BY age`
- **Count/Rows:** 48
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 3_120ms
- **Min Duration:** 3_096ms
- **Max Duration:** 3_140ms
- **P95 Duration:** 3_139ms

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000`
- **Count/Rows:** 854,982,845
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 3_937ms
- **Min Duration:** 3_784ms
- **Max Duration:** 4_230ms
- **P95 Duration:** 4_187ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 761ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 9_299ms
- **Min Duration:** 9_012ms
- **Max Duration:** 9_466ms
- **P95 Duration:** 9_462ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_152ms
- **Min Duration:** 764ms
- **Max Duration:** 1_360ms
- **P95 Duration:** 1_358ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 10_848ms
- **Min Duration:** 10_780ms
- **Max Duration:** 10_949ms
- **P95 Duration:** 10_936ms

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 4_682ms
- **Min Duration:** 4_657ms
- **Max Duration:** 4_730ms
- **P95 Duration:** 4_723ms

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 4_960ms
- **Min Duration:** 4_942ms
- **Max Duration:** 4_971ms
- **P95 Duration:** 4_971ms

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 6_552ms
- **Min Duration:** 6_538ms
- **Max Duration:** 6_568ms
- **P95 Duration:** 6_566ms

### created_at >= DATE '2024-06-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01'`
- **Count/Rows:** 584,656,043
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 3_601ms
- **Min Duration:** 3_208ms
- **Max Duration:** 4_368ms
- **P95 Duration:** 4_254ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 781ms
- **Min Duration:** 761ms
- **Max Duration:** 820ms
- **P95 Duration:** 815ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 8_898ms
- **Min Duration:** 8_716ms
- **Max Duration:** 9_262ms
- **P95 Duration:** 9_208ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 713ms
- **Min Duration:** 611ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 9_941ms
- **Min Duration:** 9_884ms
- **Max Duration:** 10_020ms
- **P95 Duration:** 10_010ms

### created_at >= DATE '2024-06-01' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 4_461ms
- **Min Duration:** 4_417ms
- **Max Duration:** 4_534ms
- **P95 Duration:** 4_524ms

### created_at >= DATE '2024-06-01' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 4_705ms
- **Min Duration:** 4_694ms
- **Max Duration:** 4_711ms
- **P95 Duration:** 4_711ms

### created_at >= DATE '2024-06-01' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 5_882ms
- **Min Duration:** 5_845ms
- **Max Duration:** 5_909ms
- **P95 Duration:** 5_908ms

### status = 'paid' AND country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND country = 'US'`
- **Count/Rows:** 48,996,884
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_347ms
- **Min Duration:** 1_323ms
- **Max Duration:** 1_381ms
- **P95 Duration:** 1_377ms

### status = 'paid' AND country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 729ms
- **Min Duration:** 660ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### status = 'paid' AND country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 3_850ms
- **Min Duration:** 3_654ms
- **Max Duration:** 3_960ms
- **P95 Duration:** 3_958ms

### status = 'paid' AND country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 770ms
- **Min Duration:** 761ms
- **Max Duration:** 785ms
- **P95 Duration:** 783ms

### status = 'paid' AND country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 4_881ms
- **Min Duration:** 4_648ms
- **Max Duration:** 5_007ms
- **P95 Duration:** 5_005ms

### status = 'paid' AND country = 'US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY status`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 1_370ms
- **Min Duration:** 1_355ms
- **Max Duration:** 1_381ms
- **P95 Duration:** 1_381ms

### status = 'paid' AND country = 'US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 1_400ms
- **Min Duration:** 1_365ms
- **Max Duration:** 1_467ms
- **P95 Duration:** 1_457ms

### status = 'paid' AND country = 'US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 2_377ms
- **Min Duration:** 2_350ms
- **Max Duration:** 2_421ms
- **P95 Duration:** 2_415ms

### age BETWEEN 25 AND 45 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age BETWEEN 25 AND 45`
- **Count/Rows:** 333,923,871
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_533ms
- **Min Duration:** 1_524ms
- **Max Duration:** 1_539ms
- **P95 Duration:** 1_539ms

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age BETWEEN 25 AND 45 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 4_709ms
- **Min Duration:** 4_386ms
- **Max Duration:** 4_913ms
- **P95 Duration:** 4_905ms

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age BETWEEN 25 AND 45 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 793ms
- **Min Duration:** 610ms
- **Max Duration:** 1_004ms
- **P95 Duration:** 981ms

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 6_060ms
- **Min Duration:** 5_896ms
- **Max Duration:** 6_155ms
- **P95 Duration:** 6_153ms

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 2_092ms
- **Min Duration:** 2_070ms
- **Max Duration:** 2_126ms
- **P95 Duration:** 2_122ms

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 2_365ms
- **Min Duration:** 2_325ms
- **Max Duration:** 2_410ms
- **P95 Duration:** 2_405ms

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY age`
- **Count/Rows:** 21
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 2_355ms
- **Min Duration:** 2_333ms
- **Max Duration:** 2_381ms
- **P95 Duration:** 2_378ms

### contains(tags, 'alpha') - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha')`
- **Count/Rows:** 379,658,305
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 11_314ms
- **Min Duration:** 11_192ms
- **Max Duration:** 11_496ms
- **P95 Duration:** 11_472ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 760ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 15_714ms
- **Min Duration:** 15_180ms
- **Max Duration:** 16_039ms
- **P95 Duration:** 16_028ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 763ms
- **Max Duration:** 768ms
- **P95 Duration:** 768ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 17_250ms
- **Min Duration:** 17_085ms
- **Max Duration:** 17_362ms
- **P95 Duration:** 17_356ms

### contains(tags, 'alpha') - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 11_943ms
- **Min Duration:** 11_886ms
- **Max Duration:** 12_001ms
- **P95 Duration:** 11_995ms

### contains(tags, 'alpha') - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 12_395ms
- **Min Duration:** 12_225ms
- **Max Duration:** 12_542ms
- **P95 Duration:** 12_530ms

### contains(tags, 'alpha') - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 13_254ms
- **Min Duration:** 13_220ms
- **Max Duration:** 13_304ms
- **P95 Duration:** 13_298ms

### note IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL`
- **Count/Rows:** 899,987,003
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 4_774ms
- **Min Duration:** 4_604ms
- **Max Duration:** 5_067ms
- **P95 Duration:** 5_026ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 717ms
- **Min Duration:** 612ms
- **Max Duration:** 773ms
- **P95 Duration:** 773ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 10_520ms
- **Min Duration:** 10_206ms
- **Max Duration:** 10_678ms
- **P95 Duration:** 10_678ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 831ms
- **Min Duration:** 762ms
- **Max Duration:** 962ms
- **P95 Duration:** 943ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 12_145ms
- **Min Duration:** 11_886ms
- **Max Duration:** 12_449ms
- **P95 Duration:** 12_414ms

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 5_503ms
- **Min Duration:** 5_391ms
- **Max Duration:** 5_562ms
- **P95 Duration:** 5_562ms

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 5_838ms
- **Min Duration:** 5_820ms
- **Max Duration:** 5_863ms
- **P95 Duration:** 5_860ms

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 7_606ms
- **Min Duration:** 7_539ms
- **Max Duration:** 7_647ms
- **P95 Duration:** 7_646ms

