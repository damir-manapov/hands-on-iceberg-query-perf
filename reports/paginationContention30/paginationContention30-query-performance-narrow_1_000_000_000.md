# Query Performance Report

**Table:** iceberg.lab.narrow_1_000_000_000  
**Generated:** 2025-10-13T22:37:58.130Z  
**Total Rows:** 1,000,000,000  
**Table Size:** 22.7 GB  
**Trino Configuration:** Single-node Trino

## Summary

- **Total Queries:** 65
- **Iterations:** 3
- **Concurrency Simulation Streams:** 5
- **Average Duration:** 247_320ms
- **Fastest Query:** 600ms
- **Slowest Query:** 14_825_942ms
- **95th Percentile:** 65_020ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 1,000,000,000 | 21_672 | 18_909 | 24_132 | 23_917 |
| no filters | PAGINATION | first page | No | - | 100 | 632 | 623 | 636 | 636 |
| no filters | PAGINATION | first page | Yes | - | 100 | 34_045 | 23_851 | 39_461 | 39_398 |
| no filters | PAGINATION | 100th page | No | - | 100 | 633 | 624 | 640 | 640 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 50_366 | 48_106 | 54_297 | 53_737 |
| status = 'paid' | COUNT | - | - | - | 249,973,584 | 18_245 | 16_474 | 19_368 | 19_321 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 784 | 632 | 941 | 925 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 31_194 | 15_846 | 52_345 | 49_650 |
| status = 'paid' | PAGINATION | 100th page | No | - | 100 | 669 | 613 | 771 | 757 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 100 | 44_514 | 21_969 | 61_922 | 60_695 |
| country = 'US' | COUNT | - | - | - | 195,984,325 | 13_505 | 12_573 | 14_043 | 14_029 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 786 | 628 | 1_099 | 1_053 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 29_656 | 25_240 | 37_418 | 36_308 |
| country = 'US' | PAGINATION | 100th page | No | - | 100 | 628 | 621 | 633 | 633 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 41_837 | 23_124 | 57_025 | 55_859 |
| age > 30 | COUNT | - | - | - | 763,284,503 | 17_053 | 11_256 | 25_025 | 24_011 |
| age > 30 | PAGINATION | first page | No | - | 100 | 675 | 495 | 870 | 849 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 41_035 | 37_833 | 47_294 | 46_363 |
| age > 30 | PAGINATION | 100th page | No | - | 100 | 875 | 507 | 1_492 | 1_406 |
| age > 30 | PAGINATION | 100th page | Yes | - | 100 | 46_999 | 34_450 | 59_768 | 58_469 |
| created_at >= DATE '2024-10-01' | COUNT | - | - | - | 254,366,120 | 702 | 546 | 939 | 908 |
| created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 619 | 616 | 622 | 622 |
| created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 9_581 | 3_185 | 12_884 | 12_863 |
| created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 735 | 657 | 780 | 779 |
| created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 14_289 | 13_961 | 14_492 | 14_485 |
| amount > 1000 | COUNT | - | - | - | 854,990,089 | 32_363 | 31_462 | 32_981 | 32_948 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 702 | 617 | 794 | 784 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 48_241 | 27_298 | 78_708 | 74_709 |
| amount > 1000 | PAGINATION | 100th page | No | - | 100 | 682 | 631 | 782 | 767 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 100 | 62_663 | 37_953 | 82_844 | 81_279 |
| id > 50000000 | COUNT | - | - | - | 950,000,000 | 12_199 | 8_296 | 17_789 | 17_062 |
| id > 50000000 | PAGINATION | first page | No | - | 100 | 729 | 626 | 784 | 784 |
| id > 50000000 | PAGINATION | first page | Yes | - | 100 | 43_373 | 19_743 | 73_492 | 69_832 |
| id > 50000000 | PAGINATION | 100th page | No | - | 100 | 678 | 625 | 779 | 765 |
| id > 50000000 | PAGINATION | 100th page | Yes | - | 100 | 36_051 | 29_194 | 48_596 | 46_773 |
| id > 500000000 | COUNT | - | - | - | 501,000,000 | 10_048 | 7_168 | 11_661 | 11_627 |
| id > 500000000 | PAGINATION | first page | No | - | 100 | 701 | 633 | 817 | 801 |
| id > 500000000 | PAGINATION | first page | Yes | - | 100 | 18_152 | 10_032 | 26_166 | 25_376 |
| id > 500000000 | PAGINATION | 100th page | No | - | 100 | 690 | 643 | 772 | 761 |
| id > 500000000 | PAGINATION | 100th page | Yes | - | 100 | 16_885 | 9_753 | 27_910 | 26_419 |
| amount > 1000 AND id > 50000000 | COUNT | - | - | - | 812,237,854 | 11_145 | 9_512 | 12_168 | 12_127 |
| amount > 1000 AND id > 50000000 | PAGINATION | first page | No | - | 100 | 624 | 475 | 762 | 750 |
| amount > 1000 AND id > 50000000 | PAGINATION | first page | Yes | - | 100 | 36_494 | 18_046 | 48_638 | 48_054 |
| amount > 1000 AND id > 50000000 | PAGINATION | 100th page | No | - | 100 | 1_018 | 620 | 1_274 | 1_263 |
| amount > 1000 AND id > 50000000 | PAGINATION | 100th page | Yes | - | 100 | 53_819 | 20_323 | 79_850 | 77_994 |
| amount > 1000 AND id > 500000000 | COUNT | - | - | - | 428,347,059 | 20_511 | 13_570 | 24_869 | 24_692 |
| amount > 1000 AND id > 500000000 | PAGINATION | first page | No | - | 100 | 738 | 636 | 797 | 796 |
| amount > 1000 AND id > 500000000 | PAGINATION | first page | Yes | - | 100 | 19_160 | 13_952 | 24_617 | 24_047 |
| amount > 1000 AND id > 500000000 | PAGINATION | 100th page | No | - | 100 | 600 | 545 | 627 | 627 |
| amount > 1000 AND id > 500000000 | PAGINATION | 100th page | Yes | - | 100 | 27_545 | 14_725 | 42_882 | 41_097 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 217,478,546 | 4_755 | 3_396 | 7_348 | 6_966 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 620 | 618 | 622 | 622 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 10_811 | 8_840 | 12_600 | 12_440 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 780 | 618 | 1_085 | 1_040 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 10_641 | 4_642 | 22_532 | 20_754 |
| contains(tags, 'alpha') | COUNT | - | - | - | 379,694,983 | 58_256 | 38_837 | 87_795 | 83_829 |
| contains(tags, 'alpha') | PAGINATION | first page | No | - | 100 | 674 | 621 | 776 | 761 |
| contains(tags, 'alpha') | PAGINATION | first page | Yes | - | 100 | 80_961 | 71_884 | 95_546 | 93_537 |
| contains(tags, 'alpha') | PAGINATION | 100th page | No | - | 100 | 745 | 628 | 831 | 826 |
| contains(tags, 'alpha') | PAGINATION | 100th page | Yes | - | 100 | 102_050 | 52_740 | 130_861 | 130_030 |
| note IS NOT NULL | COUNT | - | - | - | 900,010,094 | 33_671 | 27_661 | 38_022 | 37_753 |
| note IS NOT NULL | PAGINATION | first page | No | - | 100 | 1_712 | 1_532 | 1_990 | 1_953 |
| note IS NOT NULL | PAGINATION | first page | Yes | - | 0 | 14_825_942 | 30_229 | 44_407_238 | 39_970_550 |
| note IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 994 | 627 | 1_181 | 1_181 |
| note IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 65_609 | 55_774 | 78_761 | 77_115 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 `
- **Count/Rows:** 1,000,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 21_672ms
- **Min Duration:** 18_909ms
- **Max Duration:** 24_132ms
- **P95 Duration:** 23_917ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 632ms
- **Min Duration:** 623ms
- **Max Duration:** 636ms
- **P95 Duration:** 636ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 34_045ms
- **Min Duration:** 23_851ms
- **Max Duration:** 39_461ms
- **P95 Duration:** 39_398ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 633ms
- **Min Duration:** 624ms
- **Max Duration:** 640ms
- **P95 Duration:** 640ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 50_366ms
- **Min Duration:** 48_106ms
- **Max Duration:** 54_297ms
- **P95 Duration:** 53_737ms

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid'`
- **Count/Rows:** 249,973,584
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 18_245ms
- **Min Duration:** 16_474ms
- **Max Duration:** 19_368ms
- **P95 Duration:** 19_321ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 784ms
- **Min Duration:** 632ms
- **Max Duration:** 941ms
- **P95 Duration:** 925ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 31_194ms
- **Min Duration:** 15_846ms
- **Max Duration:** 52_345ms
- **P95 Duration:** 49_650ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 669ms
- **Min Duration:** 613ms
- **Max Duration:** 771ms
- **P95 Duration:** 757ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 44_514ms
- **Min Duration:** 21_969ms
- **Max Duration:** 61_922ms
- **P95 Duration:** 60_695ms

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US'`
- **Count/Rows:** 195,984,325
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 13_505ms
- **Min Duration:** 12_573ms
- **Max Duration:** 14_043ms
- **P95 Duration:** 14_029ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 786ms
- **Min Duration:** 628ms
- **Max Duration:** 1_099ms
- **P95 Duration:** 1_053ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 29_656ms
- **Min Duration:** 25_240ms
- **Max Duration:** 37_418ms
- **P95 Duration:** 36_308ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 628ms
- **Min Duration:** 621ms
- **Max Duration:** 633ms
- **P95 Duration:** 633ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 41_837ms
- **Min Duration:** 23_124ms
- **Max Duration:** 57_025ms
- **P95 Duration:** 55_859ms

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30`
- **Count/Rows:** 763,284,503
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 17_053ms
- **Min Duration:** 11_256ms
- **Max Duration:** 25_025ms
- **P95 Duration:** 24_011ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 675ms
- **Min Duration:** 495ms
- **Max Duration:** 870ms
- **P95 Duration:** 849ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 41_035ms
- **Min Duration:** 37_833ms
- **Max Duration:** 47_294ms
- **P95 Duration:** 46_363ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 875ms
- **Min Duration:** 507ms
- **Max Duration:** 1_492ms
- **P95 Duration:** 1_406ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 46_999ms
- **Min Duration:** 34_450ms
- **Max Duration:** 59_768ms
- **P95 Duration:** 58_469ms

### created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-10-01'`
- **Count/Rows:** 254,366,120
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 702ms
- **Min Duration:** 546ms
- **Max Duration:** 939ms
- **P95 Duration:** 908ms

### created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 619ms
- **Min Duration:** 616ms
- **Max Duration:** 622ms
- **P95 Duration:** 622ms

### created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 9_581ms
- **Min Duration:** 3_185ms
- **Max Duration:** 12_884ms
- **P95 Duration:** 12_863ms

### created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 735ms
- **Min Duration:** 657ms
- **Max Duration:** 780ms
- **P95 Duration:** 779ms

### created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 14_289ms
- **Min Duration:** 13_961ms
- **Max Duration:** 14_492ms
- **P95 Duration:** 14_485ms

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000`
- **Count/Rows:** 854,990,089
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 32_363ms
- **Min Duration:** 31_462ms
- **Max Duration:** 32_981ms
- **P95 Duration:** 32_948ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 702ms
- **Min Duration:** 617ms
- **Max Duration:** 794ms
- **P95 Duration:** 784ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 48_241ms
- **Min Duration:** 27_298ms
- **Max Duration:** 78_708ms
- **P95 Duration:** 74_709ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 682ms
- **Min Duration:** 631ms
- **Max Duration:** 782ms
- **P95 Duration:** 767ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 62_663ms
- **Min Duration:** 37_953ms
- **Max Duration:** 82_844ms
- **P95 Duration:** 81_279ms

### id > 50000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000`
- **Count/Rows:** 950,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 12_199ms
- **Min Duration:** 8_296ms
- **Max Duration:** 17_789ms
- **P95 Duration:** 17_062ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 729ms
- **Min Duration:** 626ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 43_373ms
- **Min Duration:** 19_743ms
- **Max Duration:** 73_492ms
- **P95 Duration:** 69_832ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 678ms
- **Min Duration:** 625ms
- **Max Duration:** 779ms
- **P95 Duration:** 765ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 36_051ms
- **Min Duration:** 29_194ms
- **Max Duration:** 48_596ms
- **P95 Duration:** 46_773ms

### id > 500000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000`
- **Count/Rows:** 501,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 10_048ms
- **Min Duration:** 7_168ms
- **Max Duration:** 11_661ms
- **P95 Duration:** 11_627ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 701ms
- **Min Duration:** 633ms
- **Max Duration:** 817ms
- **P95 Duration:** 801ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 18_152ms
- **Min Duration:** 10_032ms
- **Max Duration:** 26_166ms
- **P95 Duration:** 25_376ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 690ms
- **Min Duration:** 643ms
- **Max Duration:** 772ms
- **P95 Duration:** 761ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 16_885ms
- **Min Duration:** 9_753ms
- **Max Duration:** 27_910ms
- **P95 Duration:** 26_419ms

### amount > 1000 AND id > 50000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000`
- **Count/Rows:** 812,237,854
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 11_145ms
- **Min Duration:** 9_512ms
- **Max Duration:** 12_168ms
- **P95 Duration:** 12_127ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 624ms
- **Min Duration:** 475ms
- **Max Duration:** 762ms
- **P95 Duration:** 750ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 36_494ms
- **Min Duration:** 18_046ms
- **Max Duration:** 48_638ms
- **P95 Duration:** 48_054ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_018ms
- **Min Duration:** 620ms
- **Max Duration:** 1_274ms
- **P95 Duration:** 1_263ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 53_819ms
- **Min Duration:** 20_323ms
- **Max Duration:** 79_850ms
- **P95 Duration:** 77_994ms

### amount > 1000 AND id > 500000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000`
- **Count/Rows:** 428,347,059
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 20_511ms
- **Min Duration:** 13_570ms
- **Max Duration:** 24_869ms
- **P95 Duration:** 24_692ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 738ms
- **Min Duration:** 636ms
- **Max Duration:** 797ms
- **P95 Duration:** 796ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 19_160ms
- **Min Duration:** 13_952ms
- **Max Duration:** 24_617ms
- **P95 Duration:** 24_047ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 600ms
- **Min Duration:** 545ms
- **Max Duration:** 627ms
- **P95 Duration:** 627ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 27_545ms
- **Min Duration:** 14_725ms
- **Max Duration:** 42_882ms
- **P95 Duration:** 41_097ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 217,478,546
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 4_755ms
- **Min Duration:** 3_396ms
- **Max Duration:** 7_348ms
- **P95 Duration:** 6_966ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 620ms
- **Min Duration:** 618ms
- **Max Duration:** 622ms
- **P95 Duration:** 622ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 10_811ms
- **Min Duration:** 8_840ms
- **Max Duration:** 12_600ms
- **P95 Duration:** 12_440ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 780ms
- **Min Duration:** 618ms
- **Max Duration:** 1_085ms
- **P95 Duration:** 1_040ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 10_641ms
- **Min Duration:** 4_642ms
- **Max Duration:** 22_532ms
- **P95 Duration:** 20_754ms

### contains(tags, 'alpha') - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha')`
- **Count/Rows:** 379,694,983
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 58_256ms
- **Min Duration:** 38_837ms
- **Max Duration:** 87_795ms
- **P95 Duration:** 83_829ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 674ms
- **Min Duration:** 621ms
- **Max Duration:** 776ms
- **P95 Duration:** 761ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 80_961ms
- **Min Duration:** 71_884ms
- **Max Duration:** 95_546ms
- **P95 Duration:** 93_537ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 745ms
- **Min Duration:** 628ms
- **Max Duration:** 831ms
- **P95 Duration:** 826ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 102_050ms
- **Min Duration:** 52_740ms
- **Max Duration:** 130_861ms
- **P95 Duration:** 130_030ms

### note IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL`
- **Count/Rows:** 900,010,094
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 33_671ms
- **Min Duration:** 27_661ms
- **Max Duration:** 38_022ms
- **P95 Duration:** 37_753ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_712ms
- **Min Duration:** 1_532ms
- **Max Duration:** 1_990ms
- **P95 Duration:** 1_953ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 14_825_942ms
- **Min Duration:** 30_229ms
- **Max Duration:** 44_407_238ms
- **P95 Duration:** 39_970_550ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 994ms
- **Min Duration:** 627ms
- **Max Duration:** 1_181ms
- **P95 Duration:** 1_181ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 65_609ms
- **Min Duration:** 55_774ms
- **Max Duration:** 78_761ms
- **P95 Duration:** 77_115ms

