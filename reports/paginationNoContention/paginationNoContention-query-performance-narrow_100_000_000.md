# Query Performance Report

**Table:** iceberg.lab.narrow_100_000_000  
**Generated:** 2025-10-13T08:39:23.698Z  
**Total Rows:** 100,000,000  
**Table Size:** 2.3 GB  
**Trino Configuration:** Single-node Trino

## Summary

- **Total Queries:** 65
- **Iterations:** 3
- **Concurrency Simulation Streams:** 0
- **Average Duration:** 970ms
- **Fastest Query:** 610ms
- **Slowest Query:** 2_517ms
- **95th Percentile:** 1_898ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 100,000,000 | 713 | 612 | 764 | 764 |
| no filters | PAGINATION | first page | No | - | 100 | 764 | 763 | 765 | 765 |
| no filters | PAGINATION | first page | Yes | - | 100 | 1_266 | 1_239 | 1_301 | 1_297 |
| no filters | PAGINATION | 100th page | No | - | 100 | 764 | 762 | 765 | 765 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 1_676 | 1_629 | 1_769 | 1_756 |
| status = 'paid' | COUNT | - | - | - | 24,995,775 | 888 | 870 | 898 | 898 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 713 | 611 | 764 | 764 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 1_163 | 1_132 | 1_203 | 1_198 |
| status = 'paid' | PAGINATION | 100th page | No | - | 100 | 713 | 612 | 764 | 764 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 100 | 1_548 | 1_536 | 1_557 | 1_557 |
| country = 'US' | COUNT | - | - | - | 19,602,939 | 917 | 898 | 930 | 930 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 762 | 761 | 762 | 762 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 1_113 | 1_095 | 1_131 | 1_130 |
| country = 'US' | PAGINATION | 100th page | No | - | 100 | 764 | 763 | 764 | 764 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 1_561 | 1_548 | 1_577 | 1_575 |
| age > 30 | COUNT | - | - | - | 76,329,181 | 924 | 917 | 933 | 932 |
| age > 30 | PAGINATION | first page | No | - | 100 | 763 | 762 | 763 | 763 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 1_235 | 1_214 | 1_246 | 1_246 |
| age > 30 | PAGINATION | 100th page | No | - | 100 | 712 | 612 | 762 | 762 |
| age > 30 | PAGINATION | 100th page | Yes | - | 100 | 1_710 | 1_669 | 1_771 | 1_763 |
| created_at >= DATE '2024-10-01' | COUNT | - | - | - | 25,136,612 | 763 | 761 | 763 | 763 |
| created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 763 | 761 | 764 | 764 |
| created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 769 | 768 | 770 | 770 |
| created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 765 | 763 | 766 | 766 |
| created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 739 | 716 | 771 | 767 |
| amount > 1000 | COUNT | - | - | - | 85,503,220 | 1_066 | 1_063 | 1_069 | 1_069 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 712 | 610 | 765 | 765 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 1_453 | 1_433 | 1_477 | 1_474 |
| amount > 1000 | PAGINATION | 100th page | No | - | 100 | 765 | 761 | 766 | 766 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 100 | 1_940 | 1_929 | 1_949 | 1_949 |
| id > 50000000 | COUNT | - | - | - | 50,000,000 | 737 | 665 | 772 | 772 |
| id > 50000000 | PAGINATION | first page | No | - | 100 | 764 | 762 | 765 | 765 |
| id > 50000000 | PAGINATION | first page | Yes | - | 100 | 792 | 784 | 804 | 803 |
| id > 50000000 | PAGINATION | 100th page | No | - | 100 | 765 | 763 | 768 | 768 |
| id > 50000000 | PAGINATION | 100th page | Yes | - | 100 | 1_063 | 1_051 | 1_078 | 1_077 |
| id > 500000000 | COUNT | - | - | - | 0 | 763 | 762 | 763 | 763 |
| id > 500000000 | PAGINATION | first page | No | - | 0 | 610 | 607 | 611 | 611 |
| id > 500000000 | PAGINATION | first page | Yes | - | 0 | 612 | 609 | 613 | 613 |
| id > 500000000 | PAGINATION | 100th page | No | - | 0 | 610 | 610 | 610 | 610 |
| id > 500000000 | PAGINATION | 100th page | Yes | - | 0 | 611 | 610 | 611 | 611 |
| amount > 1000 AND id > 50000000 | COUNT | - | - | - | 42,749,352 | 768 | 759 | 774 | 774 |
| amount > 1000 AND id > 50000000 | PAGINATION | first page | No | - | 100 | 763 | 762 | 763 | 763 |
| amount > 1000 AND id > 50000000 | PAGINATION | first page | Yes | - | 100 | 904 | 895 | 915 | 914 |
| amount > 1000 AND id > 50000000 | PAGINATION | 100th page | No | - | 100 | 713 | 611 | 764 | 764 |
| amount > 1000 AND id > 50000000 | PAGINATION | 100th page | Yes | - | 100 | 1_180 | 1_160 | 1_191 | 1_191 |
| amount > 1000 AND id > 500000000 | COUNT | - | - | - | 0 | 712 | 611 | 764 | 764 |
| amount > 1000 AND id > 500000000 | PAGINATION | first page | No | - | 0 | 612 | 609 | 613 | 613 |
| amount > 1000 AND id > 500000000 | PAGINATION | first page | Yes | - | 0 | 611 | 610 | 613 | 613 |
| amount > 1000 AND id > 500000000 | PAGINATION | 100th page | No | - | 0 | 610 | 609 | 611 | 611 |
| amount > 1000 AND id > 500000000 | PAGINATION | 100th page | Yes | - | 0 | 611 | 610 | 612 | 612 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 21,492,658 | 770 | 766 | 773 | 773 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 763 | 761 | 763 | 763 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 718 | 614 | 775 | 774 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 765 | 762 | 769 | 769 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 778 | 766 | 791 | 790 |
| contains(tags, 'alpha') | COUNT | - | - | - | 37,969,845 | 1_731 | 1_694 | 1_778 | 1_773 |
| contains(tags, 'alpha') | PAGINATION | first page | No | - | 100 | 763 | 762 | 763 | 763 |
| contains(tags, 'alpha') | PAGINATION | first page | Yes | - | 100 | 1_990 | 1_963 | 2_006 | 2_006 |
| contains(tags, 'alpha') | PAGINATION | 100th page | No | - | 100 | 765 | 761 | 769 | 769 |
| contains(tags, 'alpha') | PAGINATION | 100th page | Yes | - | 100 | 2_517 | 2_493 | 2_563 | 2_557 |
| note IS NOT NULL | COUNT | - | - | - | 90,001,728 | 1_148 | 1_139 | 1_157 | 1_157 |
| note IS NOT NULL | PAGINATION | first page | No | - | 100 | 762 | 761 | 763 | 763 |
| note IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 1_556 | 1_522 | 1_595 | 1_591 |
| note IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 766 | 762 | 771 | 771 |
| note IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 2_030 | 2_012 | 2_039 | 2_039 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 `
- **Count/Rows:** 100,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 713ms
- **Min Duration:** 612ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 763ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_266ms
- **Min Duration:** 1_239ms
- **Max Duration:** 1_301ms
- **P95 Duration:** 1_297ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 762ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_676ms
- **Min Duration:** 1_629ms
- **Max Duration:** 1_769ms
- **P95 Duration:** 1_756ms

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid'`
- **Count/Rows:** 24,995,775
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 888ms
- **Min Duration:** 870ms
- **Max Duration:** 898ms
- **P95 Duration:** 898ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 713ms
- **Min Duration:** 611ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_163ms
- **Min Duration:** 1_132ms
- **Max Duration:** 1_203ms
- **P95 Duration:** 1_198ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 713ms
- **Min Duration:** 612ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_548ms
- **Min Duration:** 1_536ms
- **Max Duration:** 1_557ms
- **P95 Duration:** 1_557ms

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US'`
- **Count/Rows:** 19,602,939
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 917ms
- **Min Duration:** 898ms
- **Max Duration:** 930ms
- **P95 Duration:** 930ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_113ms
- **Min Duration:** 1_095ms
- **Max Duration:** 1_131ms
- **P95 Duration:** 1_130ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 763ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_561ms
- **Min Duration:** 1_548ms
- **Max Duration:** 1_577ms
- **P95 Duration:** 1_575ms

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age > 30`
- **Count/Rows:** 76,329,181
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 924ms
- **Min Duration:** 917ms
- **Max Duration:** 933ms
- **P95 Duration:** 932ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_235ms
- **Min Duration:** 1_214ms
- **Max Duration:** 1_246ms
- **P95 Duration:** 1_246ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 612ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_710ms
- **Min Duration:** 1_669ms
- **Max Duration:** 1_771ms
- **P95 Duration:** 1_763ms

### created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-10-01'`
- **Count/Rows:** 25,136,612
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 761ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 769ms
- **Min Duration:** 768ms
- **Max Duration:** 770ms
- **P95 Duration:** 770ms

### created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 763ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 739ms
- **Min Duration:** 716ms
- **Max Duration:** 771ms
- **P95 Duration:** 767ms

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000`
- **Count/Rows:** 85,503,220
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_066ms
- **Min Duration:** 1_063ms
- **Max Duration:** 1_069ms
- **P95 Duration:** 1_069ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 610ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_453ms
- **Min Duration:** 1_433ms
- **Max Duration:** 1_477ms
- **P95 Duration:** 1_474ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 761ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_940ms
- **Min Duration:** 1_929ms
- **Max Duration:** 1_949ms
- **P95 Duration:** 1_949ms

### id > 50000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000`
- **Count/Rows:** 50,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 737ms
- **Min Duration:** 665ms
- **Max Duration:** 772ms
- **P95 Duration:** 772ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 762ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 792ms
- **Min Duration:** 784ms
- **Max Duration:** 804ms
- **P95 Duration:** 803ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 763ms
- **Max Duration:** 768ms
- **P95 Duration:** 768ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_063ms
- **Min Duration:** 1_051ms
- **Max Duration:** 1_078ms
- **P95 Duration:** 1_077ms

### id > 500000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 607ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 612ms
- **Min Duration:** 609ms
- **Max Duration:** 613ms
- **P95 Duration:** 613ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 610ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 611ms
- **Min Duration:** 610ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### amount > 1000 AND id > 50000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000`
- **Count/Rows:** 42,749,352
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 768ms
- **Min Duration:** 759ms
- **Max Duration:** 774ms
- **P95 Duration:** 774ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 904ms
- **Min Duration:** 895ms
- **Max Duration:** 915ms
- **P95 Duration:** 914ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 713ms
- **Min Duration:** 611ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_180ms
- **Min Duration:** 1_160ms
- **Max Duration:** 1_191ms
- **P95 Duration:** 1_191ms

### amount > 1000 AND id > 500000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 611ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 612ms
- **Min Duration:** 609ms
- **Max Duration:** 613ms
- **P95 Duration:** 613ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 611ms
- **Min Duration:** 610ms
- **Max Duration:** 613ms
- **P95 Duration:** 613ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 611ms
- **Min Duration:** 610ms
- **Max Duration:** 612ms
- **P95 Duration:** 612ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 21,492,658
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 770ms
- **Min Duration:** 766ms
- **Max Duration:** 773ms
- **P95 Duration:** 773ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 718ms
- **Min Duration:** 614ms
- **Max Duration:** 775ms
- **P95 Duration:** 774ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 762ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 766ms
- **Max Duration:** 791ms
- **P95 Duration:** 790ms

### contains(tags, 'alpha') - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha')`
- **Count/Rows:** 37,969,845
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_731ms
- **Min Duration:** 1_694ms
- **Max Duration:** 1_778ms
- **P95 Duration:** 1_773ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_990ms
- **Min Duration:** 1_963ms
- **Max Duration:** 2_006ms
- **P95 Duration:** 2_006ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 761ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_517ms
- **Min Duration:** 2_493ms
- **Max Duration:** 2_563ms
- **P95 Duration:** 2_557ms

### note IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL`
- **Count/Rows:** 90,001,728
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_148ms
- **Min Duration:** 1_139ms
- **Max Duration:** 1_157ms
- **P95 Duration:** 1_157ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_556ms
- **Min Duration:** 1_522ms
- **Max Duration:** 1_595ms
- **P95 Duration:** 1_591ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 766ms
- **Min Duration:** 762ms
- **Max Duration:** 771ms
- **P95 Duration:** 771ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_030ms
- **Min Duration:** 2_012ms
- **Max Duration:** 2_039ms
- **P95 Duration:** 2_039ms

