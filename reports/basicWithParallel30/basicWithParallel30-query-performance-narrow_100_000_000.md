# Query Performance Report

**Table:** iceberg.lab.narrow_100_000_000  
**Generated:** 2025-10-13T23:20:43.570Z  
**Total Rows:** 100,000,000  
**Table Size:** 2.3 GB  
**Trino Configuration:** Single-node Trino

## Summary

- **Total Queries:** 30
- **Iterations:** 3
- **Concurrency Simulation Streams:** 30
- **Average Duration:** 22_195ms
- **Fastest Query:** 2_572ms
- **Slowest Query:** 37_253ms
- **95th Percentile:** 36_433ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 100,000,000 | 32_178 | 29_024 | 37_642 | 36_865 |
| no filters | PAGINATION | first page | No | - | 100 | 3_019 | 2_310 | 3_886 | 3_784 |
| no filters | PAGINATION | first page | Yes | - | 100 | 34_410 | 29_313 | 37_271 | 37_209 |
| no filters | PAGINATION | 100th page | No | - | 100 | 3_665 | 3_316 | 4_352 | 4_250 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 36_783 | 35_801 | 38_547 | 38_293 |
| no filters | AGGREGATION | - | - | status | 4 | 27_779 | 24_236 | 31_023 | 30_729 |
| status = 'paid' | COUNT | - | - | - | 24,995,775 | 28_000 | 25_292 | 31_158 | 30_797 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 2_814 | 2_446 | 3_435 | 3_348 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 32_498 | 27_670 | 35_401 | 35_304 |
| status = 'paid' | PAGINATION | 100th page | No | - | 100 | 2_991 | 2_666 | 3_349 | 3_310 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 100 | 36_006 | 32_454 | 38_751 | 38_558 |
| status = 'paid' | AGGREGATION | - | - | status | 1 | 28_955 | 26_019 | 31_759 | 31_492 |
| country = 'US' | COUNT | - | - | - | 19,602,939 | 30_759 | 28_650 | 32_368 | 32_257 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 2_603 | 2_238 | 2_917 | 2_891 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 33_290 | 31_781 | 34_219 | 34_184 |
| country = 'US' | PAGINATION | 100th page | No | - | 100 | 4_626 | 3_690 | 5_356 | 5_304 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 35_813 | 33_786 | 38_829 | 38_429 |
| country = 'US' | AGGREGATION | - | - | status | 4 | 31_733 | 29_582 | 34_977 | 34_544 |
| age > 30 | COUNT | - | - | - | 76,329,181 | 28_833 | 26_953 | 29_816 | 29_808 |
| age > 30 | PAGINATION | first page | No | - | 100 | 2_572 | 2_329 | 2_722 | 2_717 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 31_992 | 30_505 | 34_344 | 34_023 |
| age > 30 | PAGINATION | 100th page | No | - | 100 | 3_937 | 3_428 | 4_594 | 4_514 |
| age > 30 | PAGINATION | 100th page | Yes | - | 100 | 37_253 | 35_042 | 39_457 | 39_238 |
| age > 30 | AGGREGATION | - | - | status | 4 | 29_387 | 26_407 | 31_323 | 31_234 |
| amount > 1000 | COUNT | - | - | - | 85,503,220 | 31_086 | 28_390 | 33_832 | 33_553 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 2_840 | 2_354 | 3_226 | 3_198 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 32_363 | 31_344 | 33_711 | 33_544 |
| amount > 1000 | PAGINATION | 100th page | No | - | 100 | 3_371 | 2_182 | 5_015 | 4_806 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 100 | 26_618 | 4_279 | 38_401 | 38_279 |
| amount > 1000 | AGGREGATION | - | - | status | 4 | 27_670 | 27_371 | 28_025 | 27_984 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 `
- **Count/Rows:** 100,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 32_178ms
- **Min Duration:** 29_024ms
- **Max Duration:** 37_642ms
- **P95 Duration:** 36_865ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 3_019ms
- **Min Duration:** 2_310ms
- **Max Duration:** 3_886ms
- **P95 Duration:** 3_784ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 34_410ms
- **Min Duration:** 29_313ms
- **Max Duration:** 37_271ms
- **P95 Duration:** 37_209ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 3_665ms
- **Min Duration:** 3_316ms
- **Max Duration:** 4_352ms
- **P95 Duration:** 4_250ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 36_783ms
- **Min Duration:** 35_801ms
- **Max Duration:** 38_547ms
- **P95 Duration:** 38_293ms

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 27_779ms
- **Min Duration:** 24_236ms
- **Max Duration:** 31_023ms
- **P95 Duration:** 30_729ms

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid'`
- **Count/Rows:** 24,995,775
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 28_000ms
- **Min Duration:** 25_292ms
- **Max Duration:** 31_158ms
- **P95 Duration:** 30_797ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 2_814ms
- **Min Duration:** 2_446ms
- **Max Duration:** 3_435ms
- **P95 Duration:** 3_348ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 32_498ms
- **Min Duration:** 27_670ms
- **Max Duration:** 35_401ms
- **P95 Duration:** 35_304ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 2_991ms
- **Min Duration:** 2_666ms
- **Max Duration:** 3_349ms
- **P95 Duration:** 3_310ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 36_006ms
- **Min Duration:** 32_454ms
- **Max Duration:** 38_751ms
- **P95 Duration:** 38_558ms

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' GROUP BY status`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 28_955ms
- **Min Duration:** 26_019ms
- **Max Duration:** 31_759ms
- **P95 Duration:** 31_492ms

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US'`
- **Count/Rows:** 19,602,939
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 30_759ms
- **Min Duration:** 28_650ms
- **Max Duration:** 32_368ms
- **P95 Duration:** 32_257ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 2_603ms
- **Min Duration:** 2_238ms
- **Max Duration:** 2_917ms
- **P95 Duration:** 2_891ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 33_290ms
- **Min Duration:** 31_781ms
- **Max Duration:** 34_219ms
- **P95 Duration:** 34_184ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 4_626ms
- **Min Duration:** 3_690ms
- **Max Duration:** 5_356ms
- **P95 Duration:** 5_304ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 35_813ms
- **Min Duration:** 33_786ms
- **Max Duration:** 38_829ms
- **P95 Duration:** 38_429ms

### country = 'US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 31_733ms
- **Min Duration:** 29_582ms
- **Max Duration:** 34_977ms
- **P95 Duration:** 34_544ms

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age > 30`
- **Count/Rows:** 76,329,181
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 28_833ms
- **Min Duration:** 26_953ms
- **Max Duration:** 29_816ms
- **P95 Duration:** 29_808ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 2_572ms
- **Min Duration:** 2_329ms
- **Max Duration:** 2_722ms
- **P95 Duration:** 2_717ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 31_992ms
- **Min Duration:** 30_505ms
- **Max Duration:** 34_344ms
- **P95 Duration:** 34_023ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 3_937ms
- **Min Duration:** 3_428ms
- **Max Duration:** 4_594ms
- **P95 Duration:** 4_514ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 37_253ms
- **Min Duration:** 35_042ms
- **Max Duration:** 39_457ms
- **P95 Duration:** 39_238ms

### age > 30 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 29_387ms
- **Min Duration:** 26_407ms
- **Max Duration:** 31_323ms
- **P95 Duration:** 31_234ms

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000`
- **Count/Rows:** 85,503,220
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 31_086ms
- **Min Duration:** 28_390ms
- **Max Duration:** 33_832ms
- **P95 Duration:** 33_553ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 2_840ms
- **Min Duration:** 2_354ms
- **Max Duration:** 3_226ms
- **P95 Duration:** 3_198ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 32_363ms
- **Min Duration:** 31_344ms
- **Max Duration:** 33_711ms
- **P95 Duration:** 33_544ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 3_371ms
- **Min Duration:** 2_182ms
- **Max Duration:** 5_015ms
- **P95 Duration:** 4_806ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 26_618ms
- **Min Duration:** 4_279ms
- **Max Duration:** 38_401ms
- **P95 Duration:** 38_279ms

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 27_670ms
- **Min Duration:** 27_371ms
- **Max Duration:** 28_025ms
- **P95 Duration:** 27_984ms

