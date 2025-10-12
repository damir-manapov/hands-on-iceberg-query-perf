# Query Performance Report

**Table:** iceberg.lab.narrow_100_000_000  
**Generated:** 2025-10-12T16:52:56.127Z  
**Total Rows:** 100,000,000  
**Table Size:** 2.9 GB

## Summary

- **Total Queries:** 60
- **Iterations:** 3
- **Concurrency Simulation Streams:** 0
- **Average Duration:** 831ms
- **Fastest Query:** 609ms
- **Slowest Query:** 1_915ms
- **95th Percentile:** 1_370ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 100,000,000 | 762 | 761 | 762 | 762 |
| no filters | PAGINATION | first page | No | - | 100 | 662 | 609 | 763 | 748 |
| no filters | PAGINATION | first page | Yes | - | 100 | 786 | 778 | 801 | 799 |
| no filters | PAGINATION | 100th page | No | - | 100 | 712 | 611 | 763 | 763 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 909 | 889 | 931 | 929 |
| status = 'paid' | COUNT | - | - | - | 25,002,854 | 713 | 610 | 764 | 764 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 763 | 762 | 764 | 764 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 759 | 735 | 774 | 774 |
| status = 'paid' | PAGINATION | 100th page | No | - | 100 | 762 | 761 | 763 | 763 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 100 | 879 | 872 | 888 | 887 |
| country = 'US' | COUNT | - | - | - | 19,600,445 | 711 | 609 | 762 | 762 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 661 | 609 | 763 | 748 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 743 | 684 | 774 | 774 |
| country = 'US' | PAGINATION | 100th page | No | - | 100 | 763 | 762 | 764 | 764 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 855 | 830 | 900 | 894 |
| age > 30 | COUNT | - | - | - | 76,316,740 | 762 | 760 | 763 | 763 |
| age > 30 | PAGINATION | first page | No | - | 100 | 711 | 609 | 762 | 762 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 832 | 822 | 839 | 839 |
| age > 30 | PAGINATION | 100th page | No | - | 100 | 661 | 610 | 761 | 747 |
| age > 30 | PAGINATION | 100th page | Yes | - | 100 | 946 | 931 | 960 | 959 |
| created_at >= DATE '2024-06-01' | COUNT | - | - | - | 58,468,297 | 668 | 617 | 765 | 751 |
| created_at >= DATE '2024-06-01' | PAGINATION | first page | No | - | 100 | 763 | 762 | 763 | 763 |
| created_at >= DATE '2024-06-01' | PAGINATION | first page | Yes | - | 100 | 1_069 | 1_045 | 1_086 | 1_085 |
| created_at >= DATE '2024-06-01' | PAGINATION | 100th page | No | - | 100 | 711 | 609 | 762 | 762 |
| created_at >= DATE '2024-06-01' | PAGINATION | 100th page | Yes | - | 100 | 1_202 | 1_184 | 1_226 | 1_223 |
| amount > 1000 | COUNT | - | - | - | 85,501,768 | 706 | 656 | 776 | 767 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 762 | 761 | 763 | 763 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 1_181 | 1_171 | 1_194 | 1_193 |
| amount > 1000 | PAGINATION | 100th page | No | - | 100 | 762 | 760 | 763 | 763 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 100 | 1_340 | 1_303 | 1_383 | 1_378 |
| id > 50000000 | COUNT | - | - | - | 50,000,000 | 742 | 704 | 760 | 760 |
| id > 50000000 | PAGINATION | first page | No | - | 100 | 762 | 759 | 763 | 763 |
| id > 50000000 | PAGINATION | first page | Yes | - | 100 | 626 | 614 | 636 | 636 |
| id > 50000000 | PAGINATION | 100th page | No | - | 100 | 660 | 609 | 761 | 746 |
| id > 50000000 | PAGINATION | 100th page | Yes | - | 100 | 756 | 728 | 772 | 772 |
| id > 500000000 | COUNT | - | - | - | 0 | 761 | 759 | 762 | 762 |
| id > 500000000 | PAGINATION | first page | No | - | 0 | 609 | 609 | 609 | 609 |
| id > 500000000 | PAGINATION | first page | Yes | - | 0 | 611 | 610 | 612 | 612 |
| id > 500000000 | PAGINATION | 100th page | No | - | 0 | 610 | 609 | 610 | 610 |
| id > 500000000 | PAGINATION | 100th page | Yes | - | 0 | 610 | 609 | 610 | 610 |
| amount > 1000 AND id > 50000000 | COUNT | - | - | - | 42,748,556 | 700 | 662 | 771 | 761 |
| amount > 1000 AND id > 50000000 | PAGINATION | first page | No | - | 100 | 762 | 760 | 763 | 763 |
| amount > 1000 AND id > 50000000 | PAGINATION | first page | Yes | - | 100 | 842 | 833 | 851 | 850 |
| amount > 1000 AND id > 50000000 | PAGINATION | 100th page | No | - | 100 | 661 | 610 | 762 | 747 |
| amount > 1000 AND id > 50000000 | PAGINATION | 100th page | Yes | - | 100 | 929 | 919 | 941 | 940 |
| amount > 1000 AND id > 500000000 | COUNT | - | - | - | 0 | 761 | 760 | 762 | 762 |
| amount > 1000 AND id > 500000000 | PAGINATION | first page | No | - | 0 | 610 | 609 | 611 | 611 |
| amount > 1000 AND id > 500000000 | PAGINATION | first page | Yes | - | 0 | 610 | 608 | 612 | 612 |
| amount > 1000 AND id > 500000000 | PAGINATION | 100th page | No | - | 0 | 610 | 609 | 611 | 611 |
| amount > 1000 AND id > 500000000 | PAGINATION | 100th page | Yes | - | 0 | 609 | 608 | 610 | 610 |
| contains(tags, 'alpha') | COUNT | - | - | - | 37,972,095 | 1_368 | 1_359 | 1_383 | 1_381 |
| contains(tags, 'alpha') | PAGINATION | first page | No | - | 100 | 761 | 760 | 762 | 762 |
| contains(tags, 'alpha') | PAGINATION | first page | Yes | - | 100 | 1_805 | 1_764 | 1_868 | 1_860 |
| contains(tags, 'alpha') | PAGINATION | 100th page | No | - | 100 | 711 | 610 | 762 | 762 |
| contains(tags, 'alpha') | PAGINATION | 100th page | Yes | - | 100 | 1_915 | 1_890 | 1_930 | 1_930 |
| note IS NOT NULL | COUNT | - | - | - | 90,001,746 | 779 | 776 | 783 | 783 |
| note IS NOT NULL | PAGINATION | first page | No | - | 100 | 762 | 761 | 762 | 762 |
| note IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 1_246 | 1_238 | 1_253 | 1_253 |
| note IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 711 | 610 | 762 | 762 |
| note IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 1_407 | 1_381 | 1_453 | 1_447 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 `
- **Count/Rows:** 100,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 662ms
- **Min Duration:** 609ms
- **Max Duration:** 763ms
- **P95 Duration:** 748ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 786ms
- **Min Duration:** 778ms
- **Max Duration:** 801ms
- **P95 Duration:** 799ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 611ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 909ms
- **Min Duration:** 889ms
- **Max Duration:** 931ms
- **P95 Duration:** 929ms

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid'`
- **Count/Rows:** 25,002,854
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 713ms
- **Min Duration:** 610ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 759ms
- **Min Duration:** 735ms
- **Max Duration:** 774ms
- **P95 Duration:** 774ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 879ms
- **Min Duration:** 872ms
- **Max Duration:** 888ms
- **P95 Duration:** 887ms

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US'`
- **Count/Rows:** 19,600,445
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 609ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 661ms
- **Min Duration:** 609ms
- **Max Duration:** 763ms
- **P95 Duration:** 748ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 743ms
- **Min Duration:** 684ms
- **Max Duration:** 774ms
- **P95 Duration:** 774ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 855ms
- **Min Duration:** 830ms
- **Max Duration:** 900ms
- **P95 Duration:** 894ms

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age > 30`
- **Count/Rows:** 76,316,740
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 760ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 609ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 832ms
- **Min Duration:** 822ms
- **Max Duration:** 839ms
- **P95 Duration:** 839ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 661ms
- **Min Duration:** 610ms
- **Max Duration:** 761ms
- **P95 Duration:** 747ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 946ms
- **Min Duration:** 931ms
- **Max Duration:** 960ms
- **P95 Duration:** 959ms

### created_at >= DATE '2024-06-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01'`
- **Count/Rows:** 58,468,297
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 668ms
- **Min Duration:** 617ms
- **Max Duration:** 765ms
- **P95 Duration:** 751ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_069ms
- **Min Duration:** 1_045ms
- **Max Duration:** 1_086ms
- **P95 Duration:** 1_085ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 609ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_202ms
- **Min Duration:** 1_184ms
- **Max Duration:** 1_226ms
- **P95 Duration:** 1_223ms

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000`
- **Count/Rows:** 85,501,768
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 706ms
- **Min Duration:** 656ms
- **Max Duration:** 776ms
- **P95 Duration:** 767ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_181ms
- **Min Duration:** 1_171ms
- **Max Duration:** 1_194ms
- **P95 Duration:** 1_193ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 760ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_340ms
- **Min Duration:** 1_303ms
- **Max Duration:** 1_383ms
- **P95 Duration:** 1_378ms

### id > 50000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000`
- **Count/Rows:** 50,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 742ms
- **Min Duration:** 704ms
- **Max Duration:** 760ms
- **P95 Duration:** 760ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 759ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 626ms
- **Min Duration:** 614ms
- **Max Duration:** 636ms
- **P95 Duration:** 636ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 660ms
- **Min Duration:** 609ms
- **Max Duration:** 761ms
- **P95 Duration:** 746ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 756ms
- **Min Duration:** 728ms
- **Max Duration:** 772ms
- **P95 Duration:** 772ms

### id > 500000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 759ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 609ms
- **Min Duration:** 609ms
- **Max Duration:** 609ms
- **P95 Duration:** 609ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 611ms
- **Min Duration:** 610ms
- **Max Duration:** 612ms
- **P95 Duration:** 612ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### amount > 1000 AND id > 50000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000`
- **Count/Rows:** 42,748,556
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 700ms
- **Min Duration:** 662ms
- **Max Duration:** 771ms
- **P95 Duration:** 761ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 760ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 842ms
- **Min Duration:** 833ms
- **Max Duration:** 851ms
- **P95 Duration:** 850ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 661ms
- **Min Duration:** 610ms
- **Max Duration:** 762ms
- **P95 Duration:** 747ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 929ms
- **Min Duration:** 919ms
- **Max Duration:** 941ms
- **P95 Duration:** 940ms

### amount > 1000 AND id > 500000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 608ms
- **Max Duration:** 612ms
- **P95 Duration:** 612ms

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
- **Average Duration:** 609ms
- **Min Duration:** 608ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### contains(tags, 'alpha') - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha')`
- **Count/Rows:** 37,972,095
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_368ms
- **Min Duration:** 1_359ms
- **Max Duration:** 1_383ms
- **P95 Duration:** 1_381ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_805ms
- **Min Duration:** 1_764ms
- **Max Duration:** 1_868ms
- **P95 Duration:** 1_860ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 610ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_915ms
- **Min Duration:** 1_890ms
- **Max Duration:** 1_930ms
- **P95 Duration:** 1_930ms

### note IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL`
- **Count/Rows:** 90,001,746
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 779ms
- **Min Duration:** 776ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_246ms
- **Min Duration:** 1_238ms
- **Max Duration:** 1_253ms
- **P95 Duration:** 1_253ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 610ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_407ms
- **Min Duration:** 1_381ms
- **Max Duration:** 1_453ms
- **P95 Duration:** 1_447ms

