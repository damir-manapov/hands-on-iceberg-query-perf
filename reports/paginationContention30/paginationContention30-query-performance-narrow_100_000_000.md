# Query Performance Report

**Table:** iceberg.lab.narrow_100_000_000  
**Generated:** 2025-10-12T17:15:11.794Z  
**Total Rows:** 100,000,000  
**Table Size:** 2.9 GB

## Summary

- **Total Queries:** 60
- **Iterations:** 3
- **Concurrency Simulation Streams:** 5
- **Average Duration:** 2_170ms
- **Fastest Query:** 737ms
- **Slowest Query:** 6_681ms
- **95th Percentile:** 4_326ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 100,000,000 | 1_063 | 767 | 1_594 | 1_518 |
| no filters | PAGINATION | first page | No | - | 100 | 1_052 | 616 | 1_765 | 1_666 |
| no filters | PAGINATION | first page | Yes | - | 100 | 2_530 | 1_020 | 3_608 | 3_544 |
| no filters | PAGINATION | 100th page | No | - | 100 | 1_038 | 626 | 1_597 | 1_527 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 3_902 | 3_059 | 5_385 | 5_173 |
| status = 'paid' | COUNT | - | - | - | 25,002,854 | 1_706 | 883 | 2_975 | 2_804 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 1_358 | 794 | 2_141 | 2_041 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 1_835 | 1_236 | 2_505 | 2_431 |
| status = 'paid' | PAGINATION | 100th page | No | - | 100 | 2_188 | 1_450 | 3_003 | 2_914 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 100 | 2_344 | 1_073 | 3_071 | 3_053 |
| country = 'US' | COUNT | - | - | - | 19,600,445 | 1_023 | 777 | 1_344 | 1_305 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 876 | 629 | 1_218 | 1_175 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 3_023 | 2_106 | 3_543 | 3_531 |
| country = 'US' | PAGINATION | 100th page | No | - | 100 | 2_016 | 1_234 | 3_199 | 3_041 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 3_307 | 2_163 | 5_331 | 5_041 |
| age > 30 | COUNT | - | - | - | 76,316,740 | 1_600 | 1_265 | 2_095 | 2_030 |
| age > 30 | PAGINATION | first page | No | - | 100 | 873 | 470 | 1_525 | 1_435 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 3_040 | 2_630 | 3_718 | 3_624 |
| age > 30 | PAGINATION | 100th page | No | - | 100 | 737 | 639 | 788 | 788 |
| age > 30 | PAGINATION | 100th page | Yes | - | 100 | 3_115 | 2_685 | 3_708 | 3_633 |
| created_at >= DATE '2024-06-01' | COUNT | - | - | - | 58,468,297 | 2_306 | 1_090 | 3_171 | 3_120 |
| created_at >= DATE '2024-06-01' | PAGINATION | first page | No | - | 100 | 1_618 | 645 | 2_349 | 2_300 |
| created_at >= DATE '2024-06-01' | PAGINATION | first page | Yes | - | 100 | 3_676 | 2_686 | 4_415 | 4_366 |
| created_at >= DATE '2024-06-01' | PAGINATION | 100th page | No | - | 100 | 1_442 | 805 | 2_340 | 2_224 |
| created_at >= DATE '2024-06-01' | PAGINATION | 100th page | Yes | - | 100 | 4_262 | 2_722 | 5_754 | 5_610 |
| amount > 1000 | COUNT | - | - | - | 85,501,768 | 2_391 | 1_936 | 3_164 | 3_055 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 1_345 | 787 | 2_450 | 2_285 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 2_891 | 2_149 | 3_443 | 3_407 |
| amount > 1000 | PAGINATION | 100th page | No | - | 100 | 1_521 | 811 | 2_329 | 2_239 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 100 | 3_779 | 3_421 | 4_427 | 4_334 |
| id > 50000000 | COUNT | - | - | - | 50,000,000 | 1_531 | 1_047 | 1_776 | 1_776 |
| id > 50000000 | PAGINATION | first page | No | - | 100 | 1_055 | 776 | 1_469 | 1_414 |
| id > 50000000 | PAGINATION | first page | Yes | - | 100 | 1_715 | 1_604 | 1_788 | 1_785 |
| id > 50000000 | PAGINATION | 100th page | No | - | 100 | 1_280 | 476 | 2_709 | 2_504 |
| id > 50000000 | PAGINATION | 100th page | Yes | - | 100 | 2_990 | 2_662 | 3_341 | 3_304 |
| id > 500000000 | COUNT | - | - | - | 0 | 823 | 633 | 1_181 | 1_129 |
| id > 500000000 | PAGINATION | first page | No | - | 0 | 1_142 | 617 | 1_458 | 1_448 |
| id > 500000000 | PAGINATION | first page | Yes | - | 0 | 1_647 | 617 | 2_237 | 2_222 |
| id > 500000000 | PAGINATION | 100th page | No | - | 0 | 1_275 | 623 | 1_638 | 1_631 |
| id > 500000000 | PAGINATION | 100th page | Yes | - | 0 | 1_243 | 839 | 1_769 | 1_705 |
| amount > 1000 AND id > 50000000 | COUNT | - | - | - | 42,748,556 | 2_621 | 2_138 | 3_247 | 3_170 |
| amount > 1000 AND id > 50000000 | PAGINATION | first page | No | - | 100 | 1_324 | 613 | 1_886 | 1_845 |
| amount > 1000 AND id > 50000000 | PAGINATION | first page | Yes | - | 100 | 3_156 | 2_339 | 3_947 | 3_871 |
| amount > 1000 AND id > 50000000 | PAGINATION | 100th page | No | - | 100 | 2_022 | 1_549 | 2_483 | 2_439 |
| amount > 1000 AND id > 50000000 | PAGINATION | 100th page | Yes | - | 100 | 2_959 | 1_696 | 3_917 | 3_852 |
| amount > 1000 AND id > 500000000 | COUNT | - | - | - | 0 | 1_631 | 1_044 | 2_129 | 2_088 |
| amount > 1000 AND id > 500000000 | PAGINATION | first page | No | - | 0 | 994 | 679 | 1_384 | 1_338 |
| amount > 1000 AND id > 500000000 | PAGINATION | first page | Yes | - | 0 | 1_413 | 616 | 2_294 | 2_198 |
| amount > 1000 AND id > 500000000 | PAGINATION | 100th page | No | - | 0 | 1_544 | 902 | 1_951 | 1_934 |
| amount > 1000 AND id > 500000000 | PAGINATION | 100th page | Yes | - | 0 | 1_506 | 660 | 2_113 | 2_077 |
| contains(tags, 'alpha') | COUNT | - | - | - | 37,972,095 | 3_504 | 2_922 | 4_197 | 4_117 |
| contains(tags, 'alpha') | PAGINATION | first page | No | - | 100 | 1_199 | 790 | 1_841 | 1_754 |
| contains(tags, 'alpha') | PAGINATION | first page | Yes | - | 100 | 6_681 | 6_581 | 6_800 | 6_787 |
| contains(tags, 'alpha') | PAGINATION | 100th page | No | - | 100 | 1_489 | 872 | 2_567 | 2_414 |
| contains(tags, 'alpha') | PAGINATION | 100th page | Yes | - | 100 | 5_634 | 4_967 | 6_757 | 6_599 |
| note IS NOT NULL | COUNT | - | - | - | 90,001,746 | 1_538 | 1_313 | 1_769 | 1_746 |
| note IS NOT NULL | PAGINATION | first page | No | - | 100 | 1_196 | 632 | 1_942 | 1_850 |
| note IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 3_930 | 2_212 | 5_789 | 5_589 |
| note IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 1_734 | 777 | 3_547 | 3_280 |
| note IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 5_550 | 4_782 | 7_067 | 6_841 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 `
- **Count/Rows:** 100,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_063ms
- **Min Duration:** 767ms
- **Max Duration:** 1_594ms
- **P95 Duration:** 1_518ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_052ms
- **Min Duration:** 616ms
- **Max Duration:** 1_765ms
- **P95 Duration:** 1_666ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_530ms
- **Min Duration:** 1_020ms
- **Max Duration:** 3_608ms
- **P95 Duration:** 3_544ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_038ms
- **Min Duration:** 626ms
- **Max Duration:** 1_597ms
- **P95 Duration:** 1_527ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 3_902ms
- **Min Duration:** 3_059ms
- **Max Duration:** 5_385ms
- **P95 Duration:** 5_173ms

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid'`
- **Count/Rows:** 25,002,854
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_706ms
- **Min Duration:** 883ms
- **Max Duration:** 2_975ms
- **P95 Duration:** 2_804ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_358ms
- **Min Duration:** 794ms
- **Max Duration:** 2_141ms
- **P95 Duration:** 2_041ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_835ms
- **Min Duration:** 1_236ms
- **Max Duration:** 2_505ms
- **P95 Duration:** 2_431ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 2_188ms
- **Min Duration:** 1_450ms
- **Max Duration:** 3_003ms
- **P95 Duration:** 2_914ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_344ms
- **Min Duration:** 1_073ms
- **Max Duration:** 3_071ms
- **P95 Duration:** 3_053ms

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US'`
- **Count/Rows:** 19,600,445
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_023ms
- **Min Duration:** 777ms
- **Max Duration:** 1_344ms
- **P95 Duration:** 1_305ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 876ms
- **Min Duration:** 629ms
- **Max Duration:** 1_218ms
- **P95 Duration:** 1_175ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 3_023ms
- **Min Duration:** 2_106ms
- **Max Duration:** 3_543ms
- **P95 Duration:** 3_531ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 2_016ms
- **Min Duration:** 1_234ms
- **Max Duration:** 3_199ms
- **P95 Duration:** 3_041ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 3_307ms
- **Min Duration:** 2_163ms
- **Max Duration:** 5_331ms
- **P95 Duration:** 5_041ms

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age > 30`
- **Count/Rows:** 76,316,740
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_600ms
- **Min Duration:** 1_265ms
- **Max Duration:** 2_095ms
- **P95 Duration:** 2_030ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 873ms
- **Min Duration:** 470ms
- **Max Duration:** 1_525ms
- **P95 Duration:** 1_435ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 3_040ms
- **Min Duration:** 2_630ms
- **Max Duration:** 3_718ms
- **P95 Duration:** 3_624ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 737ms
- **Min Duration:** 639ms
- **Max Duration:** 788ms
- **P95 Duration:** 788ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 3_115ms
- **Min Duration:** 2_685ms
- **Max Duration:** 3_708ms
- **P95 Duration:** 3_633ms

### created_at >= DATE '2024-06-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01'`
- **Count/Rows:** 58,468,297
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 2_306ms
- **Min Duration:** 1_090ms
- **Max Duration:** 3_171ms
- **P95 Duration:** 3_120ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_618ms
- **Min Duration:** 645ms
- **Max Duration:** 2_349ms
- **P95 Duration:** 2_300ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 3_676ms
- **Min Duration:** 2_686ms
- **Max Duration:** 4_415ms
- **P95 Duration:** 4_366ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_442ms
- **Min Duration:** 805ms
- **Max Duration:** 2_340ms
- **P95 Duration:** 2_224ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 4_262ms
- **Min Duration:** 2_722ms
- **Max Duration:** 5_754ms
- **P95 Duration:** 5_610ms

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000`
- **Count/Rows:** 85,501,768
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 2_391ms
- **Min Duration:** 1_936ms
- **Max Duration:** 3_164ms
- **P95 Duration:** 3_055ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_345ms
- **Min Duration:** 787ms
- **Max Duration:** 2_450ms
- **P95 Duration:** 2_285ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_891ms
- **Min Duration:** 2_149ms
- **Max Duration:** 3_443ms
- **P95 Duration:** 3_407ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_521ms
- **Min Duration:** 811ms
- **Max Duration:** 2_329ms
- **P95 Duration:** 2_239ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 3_779ms
- **Min Duration:** 3_421ms
- **Max Duration:** 4_427ms
- **P95 Duration:** 4_334ms

### id > 50000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000`
- **Count/Rows:** 50,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_531ms
- **Min Duration:** 1_047ms
- **Max Duration:** 1_776ms
- **P95 Duration:** 1_776ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_055ms
- **Min Duration:** 776ms
- **Max Duration:** 1_469ms
- **P95 Duration:** 1_414ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_715ms
- **Min Duration:** 1_604ms
- **Max Duration:** 1_788ms
- **P95 Duration:** 1_785ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_280ms
- **Min Duration:** 476ms
- **Max Duration:** 2_709ms
- **P95 Duration:** 2_504ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_990ms
- **Min Duration:** 2_662ms
- **Max Duration:** 3_341ms
- **P95 Duration:** 3_304ms

### id > 500000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 823ms
- **Min Duration:** 633ms
- **Max Duration:** 1_181ms
- **P95 Duration:** 1_129ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_142ms
- **Min Duration:** 617ms
- **Max Duration:** 1_458ms
- **P95 Duration:** 1_448ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_647ms
- **Min Duration:** 617ms
- **Max Duration:** 2_237ms
- **P95 Duration:** 2_222ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_275ms
- **Min Duration:** 623ms
- **Max Duration:** 1_638ms
- **P95 Duration:** 1_631ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_243ms
- **Min Duration:** 839ms
- **Max Duration:** 1_769ms
- **P95 Duration:** 1_705ms

### amount > 1000 AND id > 50000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000`
- **Count/Rows:** 42,748,556
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 2_621ms
- **Min Duration:** 2_138ms
- **Max Duration:** 3_247ms
- **P95 Duration:** 3_170ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_324ms
- **Min Duration:** 613ms
- **Max Duration:** 1_886ms
- **P95 Duration:** 1_845ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 3_156ms
- **Min Duration:** 2_339ms
- **Max Duration:** 3_947ms
- **P95 Duration:** 3_871ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 2_022ms
- **Min Duration:** 1_549ms
- **Max Duration:** 2_483ms
- **P95 Duration:** 2_439ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_959ms
- **Min Duration:** 1_696ms
- **Max Duration:** 3_917ms
- **P95 Duration:** 3_852ms

### amount > 1000 AND id > 500000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_631ms
- **Min Duration:** 1_044ms
- **Max Duration:** 2_129ms
- **P95 Duration:** 2_088ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 994ms
- **Min Duration:** 679ms
- **Max Duration:** 1_384ms
- **P95 Duration:** 1_338ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_413ms
- **Min Duration:** 616ms
- **Max Duration:** 2_294ms
- **P95 Duration:** 2_198ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_544ms
- **Min Duration:** 902ms
- **Max Duration:** 1_951ms
- **P95 Duration:** 1_934ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_506ms
- **Min Duration:** 660ms
- **Max Duration:** 2_113ms
- **P95 Duration:** 2_077ms

### contains(tags, 'alpha') - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha')`
- **Count/Rows:** 37,972,095
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 3_504ms
- **Min Duration:** 2_922ms
- **Max Duration:** 4_197ms
- **P95 Duration:** 4_117ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_199ms
- **Min Duration:** 790ms
- **Max Duration:** 1_841ms
- **P95 Duration:** 1_754ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 6_681ms
- **Min Duration:** 6_581ms
- **Max Duration:** 6_800ms
- **P95 Duration:** 6_787ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_489ms
- **Min Duration:** 872ms
- **Max Duration:** 2_567ms
- **P95 Duration:** 2_414ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_634ms
- **Min Duration:** 4_967ms
- **Max Duration:** 6_757ms
- **P95 Duration:** 6_599ms

### note IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL`
- **Count/Rows:** 90,001,746
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_538ms
- **Min Duration:** 1_313ms
- **Max Duration:** 1_769ms
- **P95 Duration:** 1_746ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_196ms
- **Min Duration:** 632ms
- **Max Duration:** 1_942ms
- **P95 Duration:** 1_850ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 3_930ms
- **Min Duration:** 2_212ms
- **Max Duration:** 5_789ms
- **P95 Duration:** 5_589ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_734ms
- **Min Duration:** 777ms
- **Max Duration:** 3_547ms
- **P95 Duration:** 3_280ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_550ms
- **Min Duration:** 4_782ms
- **Max Duration:** 7_067ms
- **P95 Duration:** 6_841ms

