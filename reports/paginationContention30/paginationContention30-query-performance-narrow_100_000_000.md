# Query Performance Report

**Table:** iceberg.lab.narrow_100_000_000  
**Generated:** 2025-10-13T09:13:55.020Z  
**Total Rows:** 100,000,000  
**Table Size:** 2.3 GB  
**Trino Configuration:** Single-node Trino

## Summary

- **Total Queries:** 65
- **Iterations:** 3
- **Concurrency Simulation Streams:** 5
- **Average Duration:** 3_051ms
- **Fastest Query:** 575ms
- **Slowest Query:** 11_580ms
- **95th Percentile:** 7_970ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 100,000,000 | 3_141 | 2_327 | 3_828 | 3_772 |
| no filters | PAGINATION | first page | No | - | 100 | 729 | 634 | 776 | 776 |
| no filters | PAGINATION | first page | Yes | - | 100 | 5_902 | 3_654 | 9_150 | 8_726 |
| no filters | PAGINATION | 100th page | No | - | 100 | 838 | 725 | 975 | 959 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 6_754 | 4_722 | 8_990 | 8_746 |
| status = 'paid' | COUNT | - | - | - | 24,995,775 | 3_051 | 1_823 | 4_289 | 4_164 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 603 | 491 | 685 | 680 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 7_130 | 5_800 | 9_170 | 8_895 |
| status = 'paid' | PAGINATION | 100th page | No | - | 100 | 1_016 | 628 | 1_212 | 1_212 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 100 | 7_971 | 6_459 | 9_734 | 9_533 |
| country = 'US' | COUNT | - | - | - | 19,602,939 | 4_890 | 4_572 | 5_389 | 5_321 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 740 | 627 | 823 | 818 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 5_346 | 4_188 | 6_075 | 6_045 |
| country = 'US' | PAGINATION | 100th page | No | - | 100 | 2_255 | 629 | 5_494 | 5_009 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 6_833 | 3_859 | 10_024 | 9_683 |
| age > 30 | COUNT | - | - | - | 0 | 4_025 | 1_007 | 6_610 | 6_395 |
| age > 30 | PAGINATION | first page | No | - | 100 | 733 | 653 | 775 | 775 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 5_188 | 4_247 | 5_896 | 5_849 |
| age > 30 | PAGINATION | 100th page | No | - | 100 | 680 | 644 | 746 | 737 |
| age > 30 | PAGINATION | 100th page | Yes | - | 100 | 9_792 | 7_231 | 11_120 | 11_111 |
| created_at >= DATE '2024-10-01' | COUNT | - | - | - | 25,136,612 | 1_014 | 981 | 1_041 | 1_039 |
| created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 742 | 656 | 791 | 790 |
| created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 1_772 | 1_435 | 2_078 | 2_051 |
| created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 839 | 731 | 946 | 936 |
| created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 3_385 | 2_347 | 3_913 | 3_912 |
| amount > 1000 | COUNT | - | - | - | 85,503,220 | 5_459 | 5_093 | 6_033 | 5_955 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 674 | 615 | 732 | 727 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 6_627 | 3_854 | 9_194 | 8_958 |
| amount > 1000 | PAGINATION | 100th page | No | - | 100 | 867 | 825 | 890 | 890 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 100 | 6_512 | 4_402 | 8_718 | 8_488 |
| id > 50000000 | COUNT | - | - | - | 50,000,000 | 2_768 | 2_211 | 3_162 | 3_139 |
| id > 50000000 | PAGINATION | first page | No | - | 100 | 784 | 773 | 791 | 791 |
| id > 50000000 | PAGINATION | first page | Yes | - | 100 | 3_911 | 2_947 | 4_651 | 4_600 |
| id > 50000000 | PAGINATION | 100th page | No | - | 100 | 672 | 621 | 770 | 756 |
| id > 50000000 | PAGINATION | 100th page | Yes | - | 100 | 4_484 | 3_791 | 5_422 | 5_304 |
| id > 500000000 | COUNT | - | - | - | 0 | 586 | 479 | 647 | 646 |
| id > 500000000 | PAGINATION | first page | No | - | 0 | 600 | 515 | 660 | 657 |
| id > 500000000 | PAGINATION | first page | Yes | - | 0 | 580 | 493 | 625 | 625 |
| id > 500000000 | PAGINATION | 100th page | No | - | 0 | 828 | 630 | 952 | 947 |
| id > 500000000 | PAGINATION | 100th page | Yes | - | 0 | 642 | 488 | 812 | 794 |
| amount > 1000 AND id > 50000000 | COUNT | - | - | - | 42,749,352 | 2_767 | 1_873 | 4_242 | 4_037 |
| amount > 1000 AND id > 50000000 | PAGINATION | first page | No | - | 100 | 785 | 769 | 804 | 802 |
| amount > 1000 AND id > 50000000 | PAGINATION | first page | Yes | - | 100 | 5_924 | 5_569 | 6_281 | 6_246 |
| amount > 1000 AND id > 50000000 | PAGINATION | 100th page | No | - | 100 | 911 | 852 | 965 | 960 |
| amount > 1000 AND id > 50000000 | PAGINATION | 100th page | Yes | - | 100 | 4_675 | 3_226 | 7_291 | 6_913 |
| amount > 1000 AND id > 500000000 | COUNT | - | - | - | 0 | 702 | 618 | 797 | 787 |
| amount > 1000 AND id > 500000000 | PAGINATION | first page | No | - | 0 | 575 | 475 | 628 | 628 |
| amount > 1000 AND id > 500000000 | PAGINATION | first page | Yes | - | 0 | 592 | 517 | 630 | 630 |
| amount > 1000 AND id > 500000000 | PAGINATION | 100th page | No | - | 0 | 849 | 623 | 1_093 | 1_067 |
| amount > 1000 AND id > 500000000 | PAGINATION | 100th page | Yes | - | 0 | 687 | 630 | 799 | 783 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 21,492,658 | 1_651 | 1_176 | 2_158 | 2_104 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 632 | 497 | 765 | 752 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 2_460 | 1_774 | 2_926 | 2_902 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 703 | 646 | 778 | 769 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 2_541 | 1_737 | 3_404 | 3_312 |
| contains(tags, 'alpha') | COUNT | - | - | - | 37,969,845 | 10_931 | 5_879 | 16_162 | 15_621 |
| contains(tags, 'alpha') | PAGINATION | first page | No | - | 100 | 631 | 500 | 777 | 761 |
| contains(tags, 'alpha') | PAGINATION | first page | Yes | - | 0 | 5_671 | 3_597 | 7_856 | 7_627 |
| contains(tags, 'alpha') | PAGINATION | 100th page | No | - | 100 | 644 | 623 | 655 | 655 |
| contains(tags, 'alpha') | PAGINATION | 100th page | Yes | - | 100 | 11_580 | 6_800 | 17_321 | 16_651 |
| note IS NOT NULL | COUNT | - | - | - | 90,001,728 | 4_636 | 4_242 | 5_236 | 5_156 |
| note IS NOT NULL | PAGINATION | first page | No | - | 100 | 684 | 623 | 790 | 775 |
| note IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 7_167 | 6_736 | 7_540 | 7_509 |
| note IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 582 | 523 | 625 | 623 |
| note IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 7_966 | 4_774 | 13_735 | 12_901 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 `
- **Count/Rows:** 100,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 3_141ms
- **Min Duration:** 2_327ms
- **Max Duration:** 3_828ms
- **P95 Duration:** 3_772ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 729ms
- **Min Duration:** 634ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_902ms
- **Min Duration:** 3_654ms
- **Max Duration:** 9_150ms
- **P95 Duration:** 8_726ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 838ms
- **Min Duration:** 725ms
- **Max Duration:** 975ms
- **P95 Duration:** 959ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 6_754ms
- **Min Duration:** 4_722ms
- **Max Duration:** 8_990ms
- **P95 Duration:** 8_746ms

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid'`
- **Count/Rows:** 24,995,775
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 3_051ms
- **Min Duration:** 1_823ms
- **Max Duration:** 4_289ms
- **P95 Duration:** 4_164ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 603ms
- **Min Duration:** 491ms
- **Max Duration:** 685ms
- **P95 Duration:** 680ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 7_130ms
- **Min Duration:** 5_800ms
- **Max Duration:** 9_170ms
- **P95 Duration:** 8_895ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_016ms
- **Min Duration:** 628ms
- **Max Duration:** 1_212ms
- **P95 Duration:** 1_212ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 7_971ms
- **Min Duration:** 6_459ms
- **Max Duration:** 9_734ms
- **P95 Duration:** 9_533ms

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US'`
- **Count/Rows:** 19,602,939
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 4_890ms
- **Min Duration:** 4_572ms
- **Max Duration:** 5_389ms
- **P95 Duration:** 5_321ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 740ms
- **Min Duration:** 627ms
- **Max Duration:** 823ms
- **P95 Duration:** 818ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_346ms
- **Min Duration:** 4_188ms
- **Max Duration:** 6_075ms
- **P95 Duration:** 6_045ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 2_255ms
- **Min Duration:** 629ms
- **Max Duration:** 5_494ms
- **P95 Duration:** 5_009ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 6_833ms
- **Min Duration:** 3_859ms
- **Max Duration:** 10_024ms
- **P95 Duration:** 9_683ms

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age > 30`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 4_025ms
- **Min Duration:** 1_007ms
- **Max Duration:** 6_610ms
- **P95 Duration:** 6_395ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 733ms
- **Min Duration:** 653ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_188ms
- **Min Duration:** 4_247ms
- **Max Duration:** 5_896ms
- **P95 Duration:** 5_849ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 680ms
- **Min Duration:** 644ms
- **Max Duration:** 746ms
- **P95 Duration:** 737ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 9_792ms
- **Min Duration:** 7_231ms
- **Max Duration:** 11_120ms
- **P95 Duration:** 11_111ms

### created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-10-01'`
- **Count/Rows:** 25,136,612
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_014ms
- **Min Duration:** 981ms
- **Max Duration:** 1_041ms
- **P95 Duration:** 1_039ms

### created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 742ms
- **Min Duration:** 656ms
- **Max Duration:** 791ms
- **P95 Duration:** 790ms

### created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_772ms
- **Min Duration:** 1_435ms
- **Max Duration:** 2_078ms
- **P95 Duration:** 2_051ms

### created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 839ms
- **Min Duration:** 731ms
- **Max Duration:** 946ms
- **P95 Duration:** 936ms

### created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 3_385ms
- **Min Duration:** 2_347ms
- **Max Duration:** 3_913ms
- **P95 Duration:** 3_912ms

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000`
- **Count/Rows:** 85,503,220
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 5_459ms
- **Min Duration:** 5_093ms
- **Max Duration:** 6_033ms
- **P95 Duration:** 5_955ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 674ms
- **Min Duration:** 615ms
- **Max Duration:** 732ms
- **P95 Duration:** 727ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 6_627ms
- **Min Duration:** 3_854ms
- **Max Duration:** 9_194ms
- **P95 Duration:** 8_958ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 867ms
- **Min Duration:** 825ms
- **Max Duration:** 890ms
- **P95 Duration:** 890ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 6_512ms
- **Min Duration:** 4_402ms
- **Max Duration:** 8_718ms
- **P95 Duration:** 8_488ms

### id > 50000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000`
- **Count/Rows:** 50,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 2_768ms
- **Min Duration:** 2_211ms
- **Max Duration:** 3_162ms
- **P95 Duration:** 3_139ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 784ms
- **Min Duration:** 773ms
- **Max Duration:** 791ms
- **P95 Duration:** 791ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 3_911ms
- **Min Duration:** 2_947ms
- **Max Duration:** 4_651ms
- **P95 Duration:** 4_600ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 672ms
- **Min Duration:** 621ms
- **Max Duration:** 770ms
- **P95 Duration:** 756ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 4_484ms
- **Min Duration:** 3_791ms
- **Max Duration:** 5_422ms
- **P95 Duration:** 5_304ms

### id > 500000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 586ms
- **Min Duration:** 479ms
- **Max Duration:** 647ms
- **P95 Duration:** 646ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 600ms
- **Min Duration:** 515ms
- **Max Duration:** 660ms
- **P95 Duration:** 657ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 580ms
- **Min Duration:** 493ms
- **Max Duration:** 625ms
- **P95 Duration:** 625ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 828ms
- **Min Duration:** 630ms
- **Max Duration:** 952ms
- **P95 Duration:** 947ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 642ms
- **Min Duration:** 488ms
- **Max Duration:** 812ms
- **P95 Duration:** 794ms

### amount > 1000 AND id > 50000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000`
- **Count/Rows:** 42,749,352
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 2_767ms
- **Min Duration:** 1_873ms
- **Max Duration:** 4_242ms
- **P95 Duration:** 4_037ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 785ms
- **Min Duration:** 769ms
- **Max Duration:** 804ms
- **P95 Duration:** 802ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_924ms
- **Min Duration:** 5_569ms
- **Max Duration:** 6_281ms
- **P95 Duration:** 6_246ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 911ms
- **Min Duration:** 852ms
- **Max Duration:** 965ms
- **P95 Duration:** 960ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 4_675ms
- **Min Duration:** 3_226ms
- **Max Duration:** 7_291ms
- **P95 Duration:** 6_913ms

### amount > 1000 AND id > 500000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 702ms
- **Min Duration:** 618ms
- **Max Duration:** 797ms
- **P95 Duration:** 787ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 575ms
- **Min Duration:** 475ms
- **Max Duration:** 628ms
- **P95 Duration:** 628ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 592ms
- **Min Duration:** 517ms
- **Max Duration:** 630ms
- **P95 Duration:** 630ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 849ms
- **Min Duration:** 623ms
- **Max Duration:** 1_093ms
- **P95 Duration:** 1_067ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 687ms
- **Min Duration:** 630ms
- **Max Duration:** 799ms
- **P95 Duration:** 783ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 21,492,658
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_651ms
- **Min Duration:** 1_176ms
- **Max Duration:** 2_158ms
- **P95 Duration:** 2_104ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 632ms
- **Min Duration:** 497ms
- **Max Duration:** 765ms
- **P95 Duration:** 752ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_460ms
- **Min Duration:** 1_774ms
- **Max Duration:** 2_926ms
- **P95 Duration:** 2_902ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 703ms
- **Min Duration:** 646ms
- **Max Duration:** 778ms
- **P95 Duration:** 769ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_541ms
- **Min Duration:** 1_737ms
- **Max Duration:** 3_404ms
- **P95 Duration:** 3_312ms

### contains(tags, 'alpha') - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha')`
- **Count/Rows:** 37,969,845
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 10_931ms
- **Min Duration:** 5_879ms
- **Max Duration:** 16_162ms
- **P95 Duration:** 15_621ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 631ms
- **Min Duration:** 500ms
- **Max Duration:** 777ms
- **P95 Duration:** 761ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_671ms
- **Min Duration:** 3_597ms
- **Max Duration:** 7_856ms
- **P95 Duration:** 7_627ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 644ms
- **Min Duration:** 623ms
- **Max Duration:** 655ms
- **P95 Duration:** 655ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 11_580ms
- **Min Duration:** 6_800ms
- **Max Duration:** 17_321ms
- **P95 Duration:** 16_651ms

### note IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL`
- **Count/Rows:** 90,001,728
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 4_636ms
- **Min Duration:** 4_242ms
- **Max Duration:** 5_236ms
- **P95 Duration:** 5_156ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 684ms
- **Min Duration:** 623ms
- **Max Duration:** 790ms
- **P95 Duration:** 775ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 7_167ms
- **Min Duration:** 6_736ms
- **Max Duration:** 7_540ms
- **P95 Duration:** 7_509ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 582ms
- **Min Duration:** 523ms
- **Max Duration:** 625ms
- **P95 Duration:** 623ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 7_966ms
- **Min Duration:** 4_774ms
- **Max Duration:** 13_735ms
- **P95 Duration:** 12_901ms

