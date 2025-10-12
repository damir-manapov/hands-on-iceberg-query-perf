# Query Performance Report

**Table:** iceberg.lab.narrow_1_000_000_000  
**Generated:** 2025-10-12T18:23:06.444Z  
**Total Rows:** 1,000,000,000  
**Table Size:** 28.6 GB

## Summary

- **Total Queries:** 60
- **Iterations:** 3
- **Concurrency Simulation Streams:** 5
- **Average Duration:** 22_563ms
- **Fastest Query:** 596ms
- **Slowest Query:** 107_021ms
- **95th Percentile:** 64_464ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 1,000,000,000 | 2_427 | 1_249 | 3_916 | 3_736 |
| no filters | PAGINATION | first page | No | - | 100 | 658 | 625 | 704 | 698 |
| no filters | PAGINATION | first page | Yes | - | 100 | 41_784 | 35_615 | 48_336 | 47_643 |
| no filters | PAGINATION | 100th page | No | - | 100 | 731 | 650 | 772 | 772 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 46_359 | 40_672 | 51_820 | 51_297 |
| status = 'paid' | COUNT | - | - | - | 249,999,416 | 11_637 | 8_158 | 16_167 | 15_609 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 624 | 617 | 630 | 630 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 38_712 | 37_879 | 40_322 | 40_084 |
| status = 'paid' | PAGINATION | 100th page | No | - | 100 | 818 | 742 | 929 | 915 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 100 | 46_829 | 37_805 | 53_392 | 52_982 |
| country = 'US' | COUNT | - | - | - | 195,998,455 | 14_835 | 12_501 | 17_942 | 17_554 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 1_579 | 1_052 | 2_436 | 2_318 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 28_957 | 13_967 | 49_132 | 46_596 |
| country = 'US' | PAGINATION | 100th page | No | - | 100 | 831 | 664 | 1_051 | 1_024 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 37_216 | 23_048 | 55_319 | 53_116 |
| age > 30 | COUNT | - | - | - | 763,277,040 | 15_595 | 13_156 | 17_259 | 17_170 |
| age > 30 | PAGINATION | first page | No | - | 100 | 874 | 792 | 998 | 982 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 35_340 | 25_206 | 46_035 | 44_910 |
| age > 30 | PAGINATION | 100th page | No | - | 100 | 748 | 637 | 808 | 807 |
| age > 30 | PAGINATION | 100th page | Yes | - | 100 | 32_766 | 29_326 | 36_136 | 35_806 |
| created_at >= DATE '2024-06-01' | COUNT | - | - | - | 584,656,043 | 22_129 | 10_700 | 30_229 | 29_752 |
| created_at >= DATE '2024-06-01' | PAGINATION | first page | No | - | 100 | 679 | 622 | 790 | 774 |
| created_at >= DATE '2024-06-01' | PAGINATION | first page | Yes | - | 100 | 30_366 | 23_326 | 35_476 | 35_158 |
| created_at >= DATE '2024-06-01' | PAGINATION | 100th page | No | - | 100 | 825 | 644 | 1_175 | 1_123 |
| created_at >= DATE '2024-06-01' | PAGINATION | 100th page | Yes | - | 100 | 48_662 | 39_520 | 57_572 | 56_704 |
| amount > 1000 | COUNT | - | - | - | 854,982,845 | 20_878 | 13_868 | 27_350 | 26_757 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 694 | 616 | 772 | 765 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 50_537 | 36_700 | 69_057 | 66_737 |
| amount > 1000 | PAGINATION | 100th page | No | - | 100 | 775 | 686 | 863 | 855 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 100 | 68_028 | 51_499 | 78_044 | 77_694 |
| id > 50000000 | COUNT | - | - | - | 950,000,000 | 18_217 | 15_183 | 21_153 | 20_870 |
| id > 50000000 | PAGINATION | first page | No | - | 100 | 1_801 | 1_673 | 1_918 | 1_908 |
| id > 50000000 | PAGINATION | first page | Yes | - | 100 | 26_323 | 18_679 | 41_009 | 38_837 |
| id > 50000000 | PAGINATION | 100th page | No | - | 100 | 626 | 531 | 770 | 751 |
| id > 50000000 | PAGINATION | 100th page | Yes | - | 100 | 46_501 | 36_959 | 52_683 | 52_401 |
| id > 500000000 | COUNT | - | - | - | 502,000,000 | 11_338 | 9_863 | 12_520 | 12_431 |
| id > 500000000 | PAGINATION | first page | No | - | 100 | 596 | 565 | 647 | 640 |
| id > 500000000 | PAGINATION | first page | Yes | - | 100 | 20_437 | 11_470 | 26_107 | 25_870 |
| id > 500000000 | PAGINATION | 100th page | No | - | 100 | 810 | 613 | 909 | 909 |
| id > 500000000 | PAGINATION | 100th page | Yes | - | 100 | 24_763 | 21_916 | 27_916 | 27_570 |
| amount > 1000 AND id > 50000000 | COUNT | - | - | - | 812,232,753 | 19_127 | 12_812 | 23_013 | 22_868 |
| amount > 1000 AND id > 50000000 | PAGINATION | first page | No | - | 100 | 737 | 656 | 787 | 785 |
| amount > 1000 AND id > 50000000 | PAGINATION | first page | Yes | - | 100 | 42_326 | 39_431 | 46_290 | 45_787 |
| amount > 1000 AND id > 50000000 | PAGINATION | 100th page | No | - | 100 | 1_085 | 877 | 1_369 | 1_333 |
| amount > 1000 AND id > 50000000 | PAGINATION | 100th page | Yes | - | 100 | 58_958 | 54_280 | 65_131 | 64_365 |
| amount > 1000 AND id > 500000000 | COUNT | - | - | - | 429,206,345 | 19_364 | 13_664 | 25_481 | 24_828 |
| amount > 1000 AND id > 500000000 | PAGINATION | first page | No | - | 100 | 655 | 521 | 827 | 806 |
| amount > 1000 AND id > 500000000 | PAGINATION | first page | Yes | - | 100 | 29_066 | 14_849 | 38_483 | 38_022 |
| amount > 1000 AND id > 500000000 | PAGINATION | 100th page | No | - | 100 | 795 | 663 | 948 | 931 |
| amount > 1000 AND id > 500000000 | PAGINATION | 100th page | Yes | - | 100 | 24_626 | 20_928 | 27_689 | 27_447 |
| contains(tags, 'alpha') | COUNT | - | - | - | 379,658,305 | 64_249 | 42_962 | 93_347 | 89_656 |
| contains(tags, 'alpha') | PAGINATION | first page | No | - | 100 | 1_176 | 626 | 1_745 | 1_686 |
| contains(tags, 'alpha') | PAGINATION | first page | Yes | - | 100 | 107_021 | 91_251 | 129_513 | 126_592 |
| contains(tags, 'alpha') | PAGINATION | 100th page | No | - | 100 | 941 | 847 | 991 | 991 |
| contains(tags, 'alpha') | PAGINATION | 100th page | Yes | - | 100 | 85_444 | 71_888 | 92_680 | 92_589 |
| note IS NOT NULL | COUNT | - | - | - | 899,987,003 | 19_566 | 17_401 | 22_563 | 22_181 |
| note IS NOT NULL | PAGINATION | first page | No | - | 100 | 631 | 618 | 649 | 647 |
| note IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 58_613 | 47_913 | 74_590 | 72_465 |
| note IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 832 | 758 | 959 | 941 |
| note IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 64_276 | 51_286 | 76_114 | 75_046 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 `
- **Count/Rows:** 1,000,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 2_427ms
- **Min Duration:** 1_249ms
- **Max Duration:** 3_916ms
- **P95 Duration:** 3_736ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 658ms
- **Min Duration:** 625ms
- **Max Duration:** 704ms
- **P95 Duration:** 698ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 41_784ms
- **Min Duration:** 35_615ms
- **Max Duration:** 48_336ms
- **P95 Duration:** 47_643ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 731ms
- **Min Duration:** 650ms
- **Max Duration:** 772ms
- **P95 Duration:** 772ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 46_359ms
- **Min Duration:** 40_672ms
- **Max Duration:** 51_820ms
- **P95 Duration:** 51_297ms

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid'`
- **Count/Rows:** 249,999,416
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 11_637ms
- **Min Duration:** 8_158ms
- **Max Duration:** 16_167ms
- **P95 Duration:** 15_609ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 624ms
- **Min Duration:** 617ms
- **Max Duration:** 630ms
- **P95 Duration:** 630ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 38_712ms
- **Min Duration:** 37_879ms
- **Max Duration:** 40_322ms
- **P95 Duration:** 40_084ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 818ms
- **Min Duration:** 742ms
- **Max Duration:** 929ms
- **P95 Duration:** 915ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 46_829ms
- **Min Duration:** 37_805ms
- **Max Duration:** 53_392ms
- **P95 Duration:** 52_982ms

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US'`
- **Count/Rows:** 195,998,455
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 14_835ms
- **Min Duration:** 12_501ms
- **Max Duration:** 17_942ms
- **P95 Duration:** 17_554ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_579ms
- **Min Duration:** 1_052ms
- **Max Duration:** 2_436ms
- **P95 Duration:** 2_318ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 28_957ms
- **Min Duration:** 13_967ms
- **Max Duration:** 49_132ms
- **P95 Duration:** 46_596ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 831ms
- **Min Duration:** 664ms
- **Max Duration:** 1_051ms
- **P95 Duration:** 1_024ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 37_216ms
- **Min Duration:** 23_048ms
- **Max Duration:** 55_319ms
- **P95 Duration:** 53_116ms

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30`
- **Count/Rows:** 763,277,040
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 15_595ms
- **Min Duration:** 13_156ms
- **Max Duration:** 17_259ms
- **P95 Duration:** 17_170ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 874ms
- **Min Duration:** 792ms
- **Max Duration:** 998ms
- **P95 Duration:** 982ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 35_340ms
- **Min Duration:** 25_206ms
- **Max Duration:** 46_035ms
- **P95 Duration:** 44_910ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 748ms
- **Min Duration:** 637ms
- **Max Duration:** 808ms
- **P95 Duration:** 807ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 32_766ms
- **Min Duration:** 29_326ms
- **Max Duration:** 36_136ms
- **P95 Duration:** 35_806ms

### created_at >= DATE '2024-06-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01'`
- **Count/Rows:** 584,656,043
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 22_129ms
- **Min Duration:** 10_700ms
- **Max Duration:** 30_229ms
- **P95 Duration:** 29_752ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 679ms
- **Min Duration:** 622ms
- **Max Duration:** 790ms
- **P95 Duration:** 774ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 30_366ms
- **Min Duration:** 23_326ms
- **Max Duration:** 35_476ms
- **P95 Duration:** 35_158ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 825ms
- **Min Duration:** 644ms
- **Max Duration:** 1_175ms
- **P95 Duration:** 1_123ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 48_662ms
- **Min Duration:** 39_520ms
- **Max Duration:** 57_572ms
- **P95 Duration:** 56_704ms

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000`
- **Count/Rows:** 854,982,845
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 20_878ms
- **Min Duration:** 13_868ms
- **Max Duration:** 27_350ms
- **P95 Duration:** 26_757ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 694ms
- **Min Duration:** 616ms
- **Max Duration:** 772ms
- **P95 Duration:** 765ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 50_537ms
- **Min Duration:** 36_700ms
- **Max Duration:** 69_057ms
- **P95 Duration:** 66_737ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 775ms
- **Min Duration:** 686ms
- **Max Duration:** 863ms
- **P95 Duration:** 855ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 68_028ms
- **Min Duration:** 51_499ms
- **Max Duration:** 78_044ms
- **P95 Duration:** 77_694ms

### id > 50000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000`
- **Count/Rows:** 950,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 18_217ms
- **Min Duration:** 15_183ms
- **Max Duration:** 21_153ms
- **P95 Duration:** 20_870ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_801ms
- **Min Duration:** 1_673ms
- **Max Duration:** 1_918ms
- **P95 Duration:** 1_908ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 26_323ms
- **Min Duration:** 18_679ms
- **Max Duration:** 41_009ms
- **P95 Duration:** 38_837ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 626ms
- **Min Duration:** 531ms
- **Max Duration:** 770ms
- **P95 Duration:** 751ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 46_501ms
- **Min Duration:** 36_959ms
- **Max Duration:** 52_683ms
- **P95 Duration:** 52_401ms

### id > 500000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000`
- **Count/Rows:** 502,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 11_338ms
- **Min Duration:** 9_863ms
- **Max Duration:** 12_520ms
- **P95 Duration:** 12_431ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 596ms
- **Min Duration:** 565ms
- **Max Duration:** 647ms
- **P95 Duration:** 640ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 20_437ms
- **Min Duration:** 11_470ms
- **Max Duration:** 26_107ms
- **P95 Duration:** 25_870ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 810ms
- **Min Duration:** 613ms
- **Max Duration:** 909ms
- **P95 Duration:** 909ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 24_763ms
- **Min Duration:** 21_916ms
- **Max Duration:** 27_916ms
- **P95 Duration:** 27_570ms

### amount > 1000 AND id > 50000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000`
- **Count/Rows:** 812,232,753
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 19_127ms
- **Min Duration:** 12_812ms
- **Max Duration:** 23_013ms
- **P95 Duration:** 22_868ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 737ms
- **Min Duration:** 656ms
- **Max Duration:** 787ms
- **P95 Duration:** 785ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 42_326ms
- **Min Duration:** 39_431ms
- **Max Duration:** 46_290ms
- **P95 Duration:** 45_787ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_085ms
- **Min Duration:** 877ms
- **Max Duration:** 1_369ms
- **P95 Duration:** 1_333ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 58_958ms
- **Min Duration:** 54_280ms
- **Max Duration:** 65_131ms
- **P95 Duration:** 64_365ms

### amount > 1000 AND id > 500000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000`
- **Count/Rows:** 429,206,345
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 19_364ms
- **Min Duration:** 13_664ms
- **Max Duration:** 25_481ms
- **P95 Duration:** 24_828ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 655ms
- **Min Duration:** 521ms
- **Max Duration:** 827ms
- **P95 Duration:** 806ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 29_066ms
- **Min Duration:** 14_849ms
- **Max Duration:** 38_483ms
- **P95 Duration:** 38_022ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 795ms
- **Min Duration:** 663ms
- **Max Duration:** 948ms
- **P95 Duration:** 931ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 24_626ms
- **Min Duration:** 20_928ms
- **Max Duration:** 27_689ms
- **P95 Duration:** 27_447ms

### contains(tags, 'alpha') - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha')`
- **Count/Rows:** 379,658,305
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 64_249ms
- **Min Duration:** 42_962ms
- **Max Duration:** 93_347ms
- **P95 Duration:** 89_656ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_176ms
- **Min Duration:** 626ms
- **Max Duration:** 1_745ms
- **P95 Duration:** 1_686ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 107_021ms
- **Min Duration:** 91_251ms
- **Max Duration:** 129_513ms
- **P95 Duration:** 126_592ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 941ms
- **Min Duration:** 847ms
- **Max Duration:** 991ms
- **P95 Duration:** 991ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 85_444ms
- **Min Duration:** 71_888ms
- **Max Duration:** 92_680ms
- **P95 Duration:** 92_589ms

### note IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL`
- **Count/Rows:** 899,987,003
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 19_566ms
- **Min Duration:** 17_401ms
- **Max Duration:** 22_563ms
- **P95 Duration:** 22_181ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 631ms
- **Min Duration:** 618ms
- **Max Duration:** 649ms
- **P95 Duration:** 647ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 58_613ms
- **Min Duration:** 47_913ms
- **Max Duration:** 74_590ms
- **P95 Duration:** 72_465ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 832ms
- **Min Duration:** 758ms
- **Max Duration:** 959ms
- **P95 Duration:** 941ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 64_276ms
- **Min Duration:** 51_286ms
- **Max Duration:** 76_114ms
- **P95 Duration:** 75_046ms

