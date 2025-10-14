# Query Performance Report

**Table:** iceberg.lab.narrow_1_000_000_000  
**Generated:** 2025-10-13T08:51:30.894Z  
**Total Rows:** 1,000,000,000  
**Table Size:** 22.7 GB  
**Trino Configuration:** Single-node Trino

## Summary

- **Total Queries:** 65
- **Iterations:** 3
- **Concurrency Simulation Streams:** 0
- **Average Duration:** 3_656ms
- **Fastest Query:** 661ms
- **Slowest Query:** 16_715ms
- **95th Percentile:** 11_636ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 1,000,000,000 | 761 | 760 | 762 | 762 |
| no filters | PAGINATION | first page | No | - | 100 | 712 | 611 | 763 | 763 |
| no filters | PAGINATION | first page | Yes | - | 100 | 5_348 | 5_041 | 5_787 | 5_730 |
| no filters | PAGINATION | 100th page | No | - | 100 | 765 | 764 | 765 | 765 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 6_173 | 5_727 | 6_399 | 6_399 |
| status = 'paid' | COUNT | - | - | - | 249,973,584 | 875 | 867 | 880 | 880 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 712 | 609 | 764 | 764 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 4_483 | 4_176 | 4_652 | 4_649 |
| status = 'paid' | PAGINATION | 100th page | No | - | 100 | 764 | 761 | 768 | 768 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 100 | 5_061 | 4_767 | 5_210 | 5_210 |
| country = 'US' | COUNT | - | - | - | 195,984,325 | 1_168 | 1_158 | 1_175 | 1_175 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 763 | 762 | 763 | 763 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 4_312 | 4_023 | 4_476 | 4_472 |
| country = 'US' | PAGINATION | 100th page | No | - | 100 | 768 | 761 | 781 | 779 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 4_900 | 4_627 | 5_038 | 5_038 |
| age > 30 | COUNT | - | - | - | 763,284,503 | 1_515 | 1_491 | 1_560 | 1_554 |
| age > 30 | PAGINATION | first page | No | - | 100 | 712 | 611 | 763 | 763 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 6_123 | 5_793 | 6_395 | 6_374 |
| age > 30 | PAGINATION | 100th page | No | - | 100 | 763 | 762 | 763 | 763 |
| age > 30 | PAGINATION | 100th page | Yes | - | 100 | 6_659 | 6_365 | 6_814 | 6_813 |
| created_at >= DATE '2024-10-01' | COUNT | - | - | - | 254,366,120 | 712 | 611 | 764 | 764 |
| created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 763 | 762 | 764 | 764 |
| created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 1_527 | 1_511 | 1_546 | 1_544 |
| created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 762 | 760 | 763 | 763 |
| created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 1_718 | 1_682 | 1_775 | 1_767 |
| amount > 1000 | COUNT | - | - | - | 854,990,089 | 4_219 | 4_097 | 4_295 | 4_292 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 712 | 610 | 763 | 763 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 10_164 | 9_999 | 10_258 | 10_256 |
| amount > 1000 | PAGINATION | 100th page | No | - | 100 | 1_366 | 698 | 2_632 | 2_446 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 100 | 10_757 | 10_623 | 10_833 | 10_832 |
| id > 50000000 | COUNT | - | - | - | 950,000,000 | 2_152 | 2_123 | 2_207 | 2_199 |
| id > 50000000 | PAGINATION | first page | No | - | 100 | 763 | 761 | 765 | 765 |
| id > 50000000 | PAGINATION | first page | Yes | - | 100 | 5_714 | 5_392 | 5_901 | 5_896 |
| id > 50000000 | PAGINATION | 100th page | No | - | 100 | 661 | 610 | 761 | 746 |
| id > 50000000 | PAGINATION | 100th page | Yes | - | 100 | 6_367 | 6_085 | 6_579 | 6_565 |
| id > 500000000 | COUNT | - | - | - | 501,000,000 | 1_246 | 1_214 | 1_301 | 1_294 |
| id > 500000000 | PAGINATION | first page | No | - | 100 | 661 | 610 | 761 | 746 |
| id > 500000000 | PAGINATION | first page | Yes | - | 100 | 3_054 | 2_873 | 3_208 | 3_196 |
| id > 500000000 | PAGINATION | 100th page | No | - | 100 | 716 | 614 | 772 | 771 |
| id > 500000000 | PAGINATION | 100th page | Yes | - | 100 | 3_396 | 3_155 | 3_551 | 3_544 |
| amount > 1000 AND id > 50000000 | COUNT | - | - | - | 812,237,854 | 5_984 | 5_929 | 6_022 | 6_020 |
| amount > 1000 AND id > 50000000 | PAGINATION | first page | No | - | 100 | 711 | 611 | 762 | 762 |
| amount > 1000 AND id > 50000000 | PAGINATION | first page | Yes | - | 100 | 9_843 | 9_480 | 10_037 | 10_035 |
| amount > 1000 AND id > 50000000 | PAGINATION | 100th page | No | - | 100 | 762 | 761 | 763 | 763 |
| amount > 1000 AND id > 50000000 | PAGINATION | 100th page | Yes | - | 100 | 10_333 | 9_950 | 10_562 | 10_555 |
| amount > 1000 AND id > 500000000 | COUNT | - | - | - | 428,347,059 | 3_337 | 3_322 | 3_346 | 3_346 |
| amount > 1000 AND id > 500000000 | PAGINATION | first page | No | - | 100 | 710 | 608 | 762 | 762 |
| amount > 1000 AND id > 500000000 | PAGINATION | first page | Yes | - | 100 | 5_254 | 4_946 | 5_413 | 5_412 |
| amount > 1000 AND id > 500000000 | PAGINATION | 100th page | No | - | 100 | 766 | 763 | 768 | 768 |
| amount > 1000 AND id > 500000000 | PAGINATION | 100th page | Yes | - | 100 | 5_592 | 5_391 | 5_711 | 5_708 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 217,478,546 | 1_186 | 1_169 | 1_209 | 1_206 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 762 | 760 | 762 | 762 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 2_534 | 2_455 | 2_651 | 2_636 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 765 | 761 | 769 | 769 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 2_731 | 2_585 | 2_864 | 2_852 |
| contains(tags, 'alpha') | COUNT | - | - | - | 379,694,983 | 12_016 | 11_897 | 12_248 | 12_214 |
| contains(tags, 'alpha') | PAGINATION | first page | No | - | 100 | 712 | 612 | 762 | 762 |
| contains(tags, 'alpha') | PAGINATION | first page | Yes | - | 100 | 16_074 | 15_772 | 16_233 | 16_232 |
| contains(tags, 'alpha') | PAGINATION | 100th page | No | - | 100 | 713 | 609 | 767 | 767 |
| contains(tags, 'alpha') | PAGINATION | 100th page | Yes | - | 100 | 16_715 | 16_382 | 16_931 | 16_922 |
| note IS NOT NULL | COUNT | - | - | - | 900,010,094 | 5_058 | 5_037 | 5_077 | 5_076 |
| note IS NOT NULL | PAGINATION | first page | No | - | 100 | 762 | 760 | 763 | 763 |
| note IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 11_046 | 10_709 | 11_220 | 11_219 |
| note IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 687 | 612 | 819 | 800 |
| note IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 11_784 | 11_659 | 11_901 | 11_890 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 `
- **Count/Rows:** 1,000,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 611ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_348ms
- **Min Duration:** 5_041ms
- **Max Duration:** 5_787ms
- **P95 Duration:** 5_730ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 764ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 6_173ms
- **Min Duration:** 5_727ms
- **Max Duration:** 6_399ms
- **P95 Duration:** 6_399ms

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid'`
- **Count/Rows:** 249,973,584
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 875ms
- **Min Duration:** 867ms
- **Max Duration:** 880ms
- **P95 Duration:** 880ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 609ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 4_483ms
- **Min Duration:** 4_176ms
- **Max Duration:** 4_652ms
- **P95 Duration:** 4_649ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 761ms
- **Max Duration:** 768ms
- **P95 Duration:** 768ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_061ms
- **Min Duration:** 4_767ms
- **Max Duration:** 5_210ms
- **P95 Duration:** 5_210ms

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US'`
- **Count/Rows:** 195,984,325
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_168ms
- **Min Duration:** 1_158ms
- **Max Duration:** 1_175ms
- **P95 Duration:** 1_175ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 4_312ms
- **Min Duration:** 4_023ms
- **Max Duration:** 4_476ms
- **P95 Duration:** 4_472ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 768ms
- **Min Duration:** 761ms
- **Max Duration:** 781ms
- **P95 Duration:** 779ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 4_900ms
- **Min Duration:** 4_627ms
- **Max Duration:** 5_038ms
- **P95 Duration:** 5_038ms

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30`
- **Count/Rows:** 763,284,503
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_515ms
- **Min Duration:** 1_491ms
- **Max Duration:** 1_560ms
- **P95 Duration:** 1_554ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 611ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 6_123ms
- **Min Duration:** 5_793ms
- **Max Duration:** 6_395ms
- **P95 Duration:** 6_374ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 6_659ms
- **Min Duration:** 6_365ms
- **Max Duration:** 6_814ms
- **P95 Duration:** 6_813ms

### created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-10-01'`
- **Count/Rows:** 254,366,120
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 611ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_527ms
- **Min Duration:** 1_511ms
- **Max Duration:** 1_546ms
- **P95 Duration:** 1_544ms

### created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 760ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_718ms
- **Min Duration:** 1_682ms
- **Max Duration:** 1_775ms
- **P95 Duration:** 1_767ms

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000`
- **Count/Rows:** 854,990,089
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 4_219ms
- **Min Duration:** 4_097ms
- **Max Duration:** 4_295ms
- **P95 Duration:** 4_292ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 610ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 10_164ms
- **Min Duration:** 9_999ms
- **Max Duration:** 10_258ms
- **P95 Duration:** 10_256ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_366ms
- **Min Duration:** 698ms
- **Max Duration:** 2_632ms
- **P95 Duration:** 2_446ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 10_757ms
- **Min Duration:** 10_623ms
- **Max Duration:** 10_833ms
- **P95 Duration:** 10_832ms

### id > 50000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000`
- **Count/Rows:** 950,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 2_152ms
- **Min Duration:** 2_123ms
- **Max Duration:** 2_207ms
- **P95 Duration:** 2_199ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 761ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_714ms
- **Min Duration:** 5_392ms
- **Max Duration:** 5_901ms
- **P95 Duration:** 5_896ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 661ms
- **Min Duration:** 610ms
- **Max Duration:** 761ms
- **P95 Duration:** 746ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 6_367ms
- **Min Duration:** 6_085ms
- **Max Duration:** 6_579ms
- **P95 Duration:** 6_565ms

### id > 500000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000`
- **Count/Rows:** 501,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_246ms
- **Min Duration:** 1_214ms
- **Max Duration:** 1_301ms
- **P95 Duration:** 1_294ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 661ms
- **Min Duration:** 610ms
- **Max Duration:** 761ms
- **P95 Duration:** 746ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 3_054ms
- **Min Duration:** 2_873ms
- **Max Duration:** 3_208ms
- **P95 Duration:** 3_196ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 716ms
- **Min Duration:** 614ms
- **Max Duration:** 772ms
- **P95 Duration:** 771ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 3_396ms
- **Min Duration:** 3_155ms
- **Max Duration:** 3_551ms
- **P95 Duration:** 3_544ms

### amount > 1000 AND id > 50000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000`
- **Count/Rows:** 812,237,854
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 5_984ms
- **Min Duration:** 5_929ms
- **Max Duration:** 6_022ms
- **P95 Duration:** 6_020ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 611ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 9_843ms
- **Min Duration:** 9_480ms
- **Max Duration:** 10_037ms
- **P95 Duration:** 10_035ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 10_333ms
- **Min Duration:** 9_950ms
- **Max Duration:** 10_562ms
- **P95 Duration:** 10_555ms

### amount > 1000 AND id > 500000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000`
- **Count/Rows:** 428,347,059
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 3_337ms
- **Min Duration:** 3_322ms
- **Max Duration:** 3_346ms
- **P95 Duration:** 3_346ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 710ms
- **Min Duration:** 608ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_254ms
- **Min Duration:** 4_946ms
- **Max Duration:** 5_413ms
- **P95 Duration:** 5_412ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 766ms
- **Min Duration:** 763ms
- **Max Duration:** 768ms
- **P95 Duration:** 768ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_592ms
- **Min Duration:** 5_391ms
- **Max Duration:** 5_711ms
- **P95 Duration:** 5_708ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 217,478,546
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_186ms
- **Min Duration:** 1_169ms
- **Max Duration:** 1_209ms
- **P95 Duration:** 1_206ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 760ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_534ms
- **Min Duration:** 2_455ms
- **Max Duration:** 2_651ms
- **P95 Duration:** 2_636ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 761ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_731ms
- **Min Duration:** 2_585ms
- **Max Duration:** 2_864ms
- **P95 Duration:** 2_852ms

### contains(tags, 'alpha') - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha')`
- **Count/Rows:** 379,694,983
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 12_016ms
- **Min Duration:** 11_897ms
- **Max Duration:** 12_248ms
- **P95 Duration:** 12_214ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 612ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 16_074ms
- **Min Duration:** 15_772ms
- **Max Duration:** 16_233ms
- **P95 Duration:** 16_232ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 713ms
- **Min Duration:** 609ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 16_715ms
- **Min Duration:** 16_382ms
- **Max Duration:** 16_931ms
- **P95 Duration:** 16_922ms

### note IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL`
- **Count/Rows:** 900,010,094
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 5_058ms
- **Min Duration:** 5_037ms
- **Max Duration:** 5_077ms
- **P95 Duration:** 5_076ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 760ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 11_046ms
- **Min Duration:** 10_709ms
- **Max Duration:** 11_220ms
- **P95 Duration:** 11_219ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 687ms
- **Min Duration:** 612ms
- **Max Duration:** 819ms
- **P95 Duration:** 800ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 11_784ms
- **Min Duration:** 11_659ms
- **Max Duration:** 11_901ms
- **P95 Duration:** 11_890ms

