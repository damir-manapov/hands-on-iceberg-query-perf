# Query Performance Report

**Table:** iceberg.lab.narrow_1_000_000_000  
**Generated:** 2025-10-12T17:05:58.284Z  
**Total Rows:** 1,000,000,000  
**Table Size:** 28.6 GB

## Summary

- **Total Queries:** 60
- **Iterations:** 3
- **Concurrency Simulation Streams:** 0
- **Average Duration:** 4_270ms
- **Fastest Query:** 661ms
- **Slowest Query:** 18_963ms
- **95th Percentile:** 12_516ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 1,000,000,000 | 711 | 610 | 761 | 761 |
| no filters | PAGINATION | first page | No | - | 100 | 710 | 610 | 762 | 762 |
| no filters | PAGINATION | first page | Yes | - | 100 | 4_506 | 4_456 | 4_533 | 4_533 |
| no filters | PAGINATION | 100th page | No | - | 100 | 661 | 611 | 760 | 746 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 6_369 | 5_921 | 6_659 | 6_646 |
| status = 'paid' | COUNT | - | - | - | 249,999,416 | 822 | 812 | 829 | 829 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 761 | 760 | 762 | 762 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 4_475 | 4_253 | 4_603 | 4_600 |
| status = 'paid' | PAGINATION | 100th page | No | - | 100 | 767 | 764 | 768 | 768 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 100 | 5_802 | 5_560 | 5_932 | 5_930 |
| country = 'US' | COUNT | - | - | - | 195,998,455 | 1_131 | 1_120 | 1_147 | 1_145 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 711 | 610 | 762 | 762 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 4_415 | 4_241 | 4_530 | 4_525 |
| country = 'US' | PAGINATION | 100th page | No | - | 100 | 714 | 610 | 767 | 767 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 5_669 | 5_480 | 5_779 | 5_776 |
| age > 30 | COUNT | - | - | - | 763,277,040 | 1_511 | 1_491 | 1_540 | 1_537 |
| age > 30 | PAGINATION | first page | No | - | 100 | 711 | 609 | 762 | 762 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 5_654 | 5_419 | 5_773 | 5_773 |
| age > 30 | PAGINATION | 100th page | No | - | 100 | 663 | 613 | 761 | 747 |
| age > 30 | PAGINATION | 100th page | Yes | - | 100 | 7_110 | 6_896 | 7_258 | 7_250 |
| created_at >= DATE '2024-06-01' | COUNT | - | - | - | 584,656,043 | 3_973 | 3_898 | 4_103 | 4_085 |
| created_at >= DATE '2024-06-01' | PAGINATION | first page | No | - | 100 | 712 | 611 | 762 | 762 |
| created_at >= DATE '2024-06-01' | PAGINATION | first page | Yes | - | 100 | 8_739 | 8_424 | 8_991 | 8_972 |
| created_at >= DATE '2024-06-01' | PAGINATION | 100th page | No | - | 100 | 1_126 | 761 | 1_853 | 1_745 |
| created_at >= DATE '2024-06-01' | PAGINATION | 100th page | Yes | - | 100 | 10_159 | 10_037 | 10_228 | 10_227 |
| amount > 1000 | COUNT | - | - | - | 854,982,845 | 4_620 | 4_603 | 4_641 | 4_639 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 760 | 758 | 762 | 762 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 9_752 | 9_588 | 9_858 | 9_854 |
| amount > 1000 | PAGINATION | 100th page | No | - | 100 | 713 | 612 | 764 | 764 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 100 | 11_178 | 11_021 | 11_270 | 11_268 |
| id > 50000000 | COUNT | - | - | - | 950,000,000 | 2_272 | 2_241 | 2_303 | 2_300 |
| id > 50000000 | PAGINATION | first page | No | - | 100 | 760 | 758 | 761 | 761 |
| id > 50000000 | PAGINATION | first page | Yes | - | 100 | 5_224 | 4_878 | 5_398 | 5_398 |
| id > 50000000 | PAGINATION | 100th page | No | - | 100 | 665 | 611 | 769 | 754 |
| id > 50000000 | PAGINATION | 100th page | Yes | - | 100 | 6_570 | 6_362 | 6_707 | 6_701 |
| id > 500000000 | COUNT | - | - | - | 502,000,000 | 1_422 | 1_309 | 1_629 | 1_599 |
| id > 500000000 | PAGINATION | first page | No | - | 100 | 762 | 761 | 762 | 762 |
| id > 500000000 | PAGINATION | first page | Yes | - | 100 | 2_833 | 2_655 | 2_952 | 2_946 |
| id > 500000000 | PAGINATION | 100th page | No | - | 100 | 768 | 761 | 779 | 778 |
| id > 500000000 | PAGINATION | 100th page | Yes | - | 100 | 3_612 | 3_359 | 3_745 | 3_744 |
| amount > 1000 AND id > 50000000 | COUNT | - | - | - | 812,232,753 | 6_241 | 6_235 | 6_247 | 6_247 |
| amount > 1000 AND id > 50000000 | PAGINATION | first page | No | - | 100 | 765 | 763 | 766 | 766 |
| amount > 1000 AND id > 50000000 | PAGINATION | first page | Yes | - | 100 | 9_521 | 9_281 | 9_649 | 9_648 |
| amount > 1000 AND id > 50000000 | PAGINATION | 100th page | No | - | 100 | 768 | 765 | 769 | 769 |
| amount > 1000 AND id > 50000000 | PAGINATION | 100th page | Yes | - | 100 | 11_036 | 10_726 | 11_199 | 11_198 |
| amount > 1000 AND id > 500000000 | COUNT | - | - | - | 429,206,345 | 3_584 | 3_517 | 3_716 | 3_697 |
| amount > 1000 AND id > 500000000 | PAGINATION | first page | No | - | 100 | 711 | 610 | 761 | 761 |
| amount > 1000 AND id > 500000000 | PAGINATION | first page | Yes | - | 100 | 5_246 | 5_006 | 5_407 | 5_399 |
| amount > 1000 AND id > 500000000 | PAGINATION | 100th page | No | - | 100 | 765 | 761 | 768 | 768 |
| amount > 1000 AND id > 500000000 | PAGINATION | 100th page | Yes | - | 100 | 6_048 | 5_889 | 6_141 | 6_139 |
| contains(tags, 'alpha') | COUNT | - | - | - | 379,658,305 | 12_821 | 12_705 | 13_047 | 13_014 |
| contains(tags, 'alpha') | PAGINATION | first page | No | - | 100 | 711 | 608 | 762 | 762 |
| contains(tags, 'alpha') | PAGINATION | first page | Yes | - | 100 | 17_475 | 17_270 | 17_634 | 17_623 |
| contains(tags, 'alpha') | PAGINATION | 100th page | No | - | 100 | 714 | 614 | 764 | 764 |
| contains(tags, 'alpha') | PAGINATION | 100th page | Yes | - | 100 | 18_963 | 18_727 | 19_165 | 19_148 |
| note IS NOT NULL | COUNT | - | - | - | 899,987,003 | 5_355 | 5_151 | 5_500 | 5_492 |
| note IS NOT NULL | PAGINATION | first page | No | - | 100 | 716 | 620 | 767 | 767 |
| note IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 10_627 | 10_550 | 10_682 | 10_679 |
| note IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 1_158 | 761 | 1_765 | 1_684 |
| note IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 12_499 | 12_345 | 12_738 | 12_706 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 `
- **Count/Rows:** 1,000,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 610ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 710ms
- **Min Duration:** 610ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 4_506ms
- **Min Duration:** 4_456ms
- **Max Duration:** 4_533ms
- **P95 Duration:** 4_533ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 661ms
- **Min Duration:** 611ms
- **Max Duration:** 760ms
- **P95 Duration:** 746ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 6_369ms
- **Min Duration:** 5_921ms
- **Max Duration:** 6_659ms
- **P95 Duration:** 6_646ms

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid'`
- **Count/Rows:** 249,999,416
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 822ms
- **Min Duration:** 812ms
- **Max Duration:** 829ms
- **P95 Duration:** 829ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 4_475ms
- **Min Duration:** 4_253ms
- **Max Duration:** 4_603ms
- **P95 Duration:** 4_600ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 767ms
- **Min Duration:** 764ms
- **Max Duration:** 768ms
- **P95 Duration:** 768ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_802ms
- **Min Duration:** 5_560ms
- **Max Duration:** 5_932ms
- **P95 Duration:** 5_930ms

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US'`
- **Count/Rows:** 195,998,455
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_131ms
- **Min Duration:** 1_120ms
- **Max Duration:** 1_147ms
- **P95 Duration:** 1_145ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 610ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 4_415ms
- **Min Duration:** 4_241ms
- **Max Duration:** 4_530ms
- **P95 Duration:** 4_525ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 714ms
- **Min Duration:** 610ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_669ms
- **Min Duration:** 5_480ms
- **Max Duration:** 5_779ms
- **P95 Duration:** 5_776ms

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30`
- **Count/Rows:** 763,277,040
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_511ms
- **Min Duration:** 1_491ms
- **Max Duration:** 1_540ms
- **P95 Duration:** 1_537ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 609ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_654ms
- **Min Duration:** 5_419ms
- **Max Duration:** 5_773ms
- **P95 Duration:** 5_773ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 663ms
- **Min Duration:** 613ms
- **Max Duration:** 761ms
- **P95 Duration:** 747ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 7_110ms
- **Min Duration:** 6_896ms
- **Max Duration:** 7_258ms
- **P95 Duration:** 7_250ms

### created_at >= DATE '2024-06-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01'`
- **Count/Rows:** 584,656,043
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 3_973ms
- **Min Duration:** 3_898ms
- **Max Duration:** 4_103ms
- **P95 Duration:** 4_085ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 611ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 8_739ms
- **Min Duration:** 8_424ms
- **Max Duration:** 8_991ms
- **P95 Duration:** 8_972ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_126ms
- **Min Duration:** 761ms
- **Max Duration:** 1_853ms
- **P95 Duration:** 1_745ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 10_159ms
- **Min Duration:** 10_037ms
- **Max Duration:** 10_228ms
- **P95 Duration:** 10_227ms

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000`
- **Count/Rows:** 854,982,845
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 4_620ms
- **Min Duration:** 4_603ms
- **Max Duration:** 4_641ms
- **P95 Duration:** 4_639ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 760ms
- **Min Duration:** 758ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 9_752ms
- **Min Duration:** 9_588ms
- **Max Duration:** 9_858ms
- **P95 Duration:** 9_854ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 713ms
- **Min Duration:** 612ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 11_178ms
- **Min Duration:** 11_021ms
- **Max Duration:** 11_270ms
- **P95 Duration:** 11_268ms

### id > 50000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000`
- **Count/Rows:** 950,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 2_272ms
- **Min Duration:** 2_241ms
- **Max Duration:** 2_303ms
- **P95 Duration:** 2_300ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 760ms
- **Min Duration:** 758ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_224ms
- **Min Duration:** 4_878ms
- **Max Duration:** 5_398ms
- **P95 Duration:** 5_398ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 665ms
- **Min Duration:** 611ms
- **Max Duration:** 769ms
- **P95 Duration:** 754ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 6_570ms
- **Min Duration:** 6_362ms
- **Max Duration:** 6_707ms
- **P95 Duration:** 6_701ms

### id > 500000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000`
- **Count/Rows:** 502,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_422ms
- **Min Duration:** 1_309ms
- **Max Duration:** 1_629ms
- **P95 Duration:** 1_599ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_833ms
- **Min Duration:** 2_655ms
- **Max Duration:** 2_952ms
- **P95 Duration:** 2_946ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 768ms
- **Min Duration:** 761ms
- **Max Duration:** 779ms
- **P95 Duration:** 778ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 3_612ms
- **Min Duration:** 3_359ms
- **Max Duration:** 3_745ms
- **P95 Duration:** 3_744ms

### amount > 1000 AND id > 50000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000`
- **Count/Rows:** 812,232,753
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 6_241ms
- **Min Duration:** 6_235ms
- **Max Duration:** 6_247ms
- **P95 Duration:** 6_247ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 763ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 9_521ms
- **Min Duration:** 9_281ms
- **Max Duration:** 9_649ms
- **P95 Duration:** 9_648ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 768ms
- **Min Duration:** 765ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 11_036ms
- **Min Duration:** 10_726ms
- **Max Duration:** 11_199ms
- **P95 Duration:** 11_198ms

### amount > 1000 AND id > 500000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000`
- **Count/Rows:** 429,206,345
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 3_584ms
- **Min Duration:** 3_517ms
- **Max Duration:** 3_716ms
- **P95 Duration:** 3_697ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 610ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_246ms
- **Min Duration:** 5_006ms
- **Max Duration:** 5_407ms
- **P95 Duration:** 5_399ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 761ms
- **Max Duration:** 768ms
- **P95 Duration:** 768ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 6_048ms
- **Min Duration:** 5_889ms
- **Max Duration:** 6_141ms
- **P95 Duration:** 6_139ms

### contains(tags, 'alpha') - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha')`
- **Count/Rows:** 379,658,305
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 12_821ms
- **Min Duration:** 12_705ms
- **Max Duration:** 13_047ms
- **P95 Duration:** 13_014ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 608ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 17_475ms
- **Min Duration:** 17_270ms
- **Max Duration:** 17_634ms
- **P95 Duration:** 17_623ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 714ms
- **Min Duration:** 614ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 18_963ms
- **Min Duration:** 18_727ms
- **Max Duration:** 19_165ms
- **P95 Duration:** 19_148ms

### note IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL`
- **Count/Rows:** 899,987,003
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 5_355ms
- **Min Duration:** 5_151ms
- **Max Duration:** 5_500ms
- **P95 Duration:** 5_492ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 716ms
- **Min Duration:** 620ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 10_627ms
- **Min Duration:** 10_550ms
- **Max Duration:** 10_682ms
- **P95 Duration:** 10_679ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_158ms
- **Min Duration:** 761ms
- **Max Duration:** 1_765ms
- **P95 Duration:** 1_684ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 12_499ms
- **Min Duration:** 12_345ms
- **Max Duration:** 12_738ms
- **P95 Duration:** 12_706ms

