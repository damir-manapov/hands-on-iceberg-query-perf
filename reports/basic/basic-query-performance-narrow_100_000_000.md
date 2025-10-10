# Query Performance Report

**Table:** iceberg.lab.narrow_100_000_000  
**Generated:** 2025-10-10T21:08:55.342Z  
**Total Rows:** 100,000,000  
**Table Size:** 2.9 GB

## Summary

- **Total Queries:** 240
- **Iterations:** 3
- **Average Duration:** 879ms
- **Fastest Query:** 609ms
- **Slowest Query:** 1_922ms
- **95th Percentile:** 1_512ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 100,000,000 | 661 | 609 | 760 | 746 |
| no filters | PAGINATION | first page | No | - | 100 | 762 | 762 | 762 | 762 |
| no filters | PAGINATION | first page | Yes | - | 100 | 817 | 811 | 826 | 825 |
| no filters | PAGINATION | 100th page | No | - | 100 | 662 | 610 | 764 | 749 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 957 | 929 | 980 | 979 |
| no filters | AGGREGATION | - | - | status | 4 | 763 | 761 | 764 | 764 |
| no filters | AGGREGATION | - | - | country | 6 | 712 | 611 | 762 | 762 |
| no filters | AGGREGATION | - | - | age | 62 | 771 | 769 | 772 | 772 |
| status = 'paid' | COUNT | - | - | - | 25,002,854 | 763 | 762 | 763 | 763 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 762 | 760 | 762 | 762 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 772 | 767 | 778 | 778 |
| status = 'paid' | PAGINATION | 100th page | No | - | 100 | 762 | 761 | 763 | 763 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 100 | 875 | 846 | 893 | 893 |
| status = 'paid' | AGGREGATION | - | - | status | 1 | 763 | 761 | 764 | 764 |
| status = 'paid' | AGGREGATION | - | - | country | 6 | 762 | 761 | 763 | 763 |
| status = 'paid' | AGGREGATION | - | - | age | 62 | 767 | 763 | 771 | 771 |
| country = 'US' | COUNT | - | - | - | 19,600,445 | 762 | 761 | 763 | 763 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 762 | 760 | 764 | 764 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 752 | 711 | 776 | 776 |
| country = 'US' | PAGINATION | 100th page | No | - | 100 | 762 | 761 | 763 | 763 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 853 | 837 | 880 | 876 |
| country = 'US' | AGGREGATION | - | - | status | 4 | 712 | 610 | 762 | 762 |
| country = 'US' | AGGREGATION | - | - | country | 1 | 762 | 760 | 764 | 764 |
| country = 'US' | AGGREGATION | - | - | age | 62 | 764 | 761 | 766 | 766 |
| age > 30 | COUNT | - | - | - | 76,316,740 | 760 | 759 | 761 | 761 |
| age > 30 | PAGINATION | first page | No | - | 100 | 712 | 611 | 762 | 762 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 843 | 826 | 853 | 853 |
| age > 30 | PAGINATION | 100th page | No | - | 100 | 710 | 610 | 761 | 761 |
| age > 30 | PAGINATION | 100th page | Yes | - | 100 | 1_007 | 981 | 1_022 | 1_022 |
| age > 30 | AGGREGATION | - | - | status | 4 | 772 | 767 | 780 | 779 |
| age > 30 | AGGREGATION | - | - | country | 6 | 767 | 764 | 771 | 771 |
| age > 30 | AGGREGATION | - | - | age | 48 | 768 | 764 | 772 | 772 |
| amount > 1000 | COUNT | - | - | - | 85,501,768 | 721 | 663 | 774 | 770 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 763 | 763 | 763 | 763 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 1_145 | 1_124 | 1_161 | 1_160 |
| amount > 1000 | PAGINATION | 100th page | No | - | 100 | 763 | 760 | 764 | 764 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 100 | 1_307 | 1_292 | 1_323 | 1_322 |
| amount > 1000 | AGGREGATION | - | - | status | 4 | 773 | 768 | 775 | 775 |
| amount > 1000 | AGGREGATION | - | - | country | 6 | 860 | 775 | 904 | 904 |
| amount > 1000 | AGGREGATION | - | - | age | 62 | 1_043 | 1_034 | 1_054 | 1_053 |
| created_at >= DATE '2024-06-01' | COUNT | - | - | - | 58,468,297 | 726 | 638 | 771 | 771 |
| created_at >= DATE '2024-06-01' | PAGINATION | first page | No | - | 100 | 762 | 762 | 762 | 762 |
| created_at >= DATE '2024-06-01' | PAGINATION | first page | Yes | - | 100 | 1_055 | 1_018 | 1_088 | 1_086 |
| created_at >= DATE '2024-06-01' | PAGINATION | 100th page | No | - | 100 | 712 | 610 | 763 | 763 |
| created_at >= DATE '2024-06-01' | PAGINATION | 100th page | Yes | - | 100 | 1_232 | 1_213 | 1_264 | 1_260 |
| created_at >= DATE '2024-06-01' | AGGREGATION | - | - | status | 4 | 771 | 764 | 775 | 775 |
| created_at >= DATE '2024-06-01' | AGGREGATION | - | - | country | 6 | 790 | 769 | 832 | 826 |
| created_at >= DATE '2024-06-01' | AGGREGATION | - | - | age | 62 | 944 | 931 | 953 | 953 |
| status = 'paid' AND country = 'US' | COUNT | - | - | - | 4,902,972 | 711 | 610 | 761 | 761 |
| status = 'paid' AND country = 'US' | PAGINATION | first page | No | - | 100 | 763 | 762 | 763 | 763 |
| status = 'paid' AND country = 'US' | PAGINATION | first page | Yes | - | 100 | 770 | 768 | 773 | 773 |
| status = 'paid' AND country = 'US' | PAGINATION | 100th page | No | - | 100 | 762 | 761 | 764 | 764 |
| status = 'paid' AND country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 806 | 796 | 823 | 821 |
| status = 'paid' AND country = 'US' | AGGREGATION | - | - | status | 1 | 763 | 762 | 764 | 764 |
| status = 'paid' AND country = 'US' | AGGREGATION | - | - | country | 1 | 762 | 759 | 763 | 763 |
| status = 'paid' AND country = 'US' | AGGREGATION | - | - | age | 62 | 767 | 762 | 769 | 769 |
| age BETWEEN 25 AND 45 | COUNT | - | - | - | 33,395,229 | 712 | 611 | 762 | 762 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | No | - | 100 | 762 | 761 | 763 | 763 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | Yes | - | 100 | 770 | 748 | 783 | 783 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | No | - | 100 | 762 | 761 | 762 | 762 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | Yes | - | 100 | 890 | 877 | 899 | 899 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | status | 4 | 714 | 612 | 767 | 767 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | country | 6 | 769 | 764 | 773 | 773 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | age | 21 | 715 | 615 | 765 | 765 |
| contains(tags, 'alpha') | COUNT | - | - | - | 37,972,095 | 1_350 | 1_251 | 1_436 | 1_429 |
| contains(tags, 'alpha') | PAGINATION | first page | No | - | 100 | 763 | 762 | 763 | 763 |
| contains(tags, 'alpha') | PAGINATION | first page | Yes | - | 100 | 1_684 | 1_636 | 1_770 | 1_758 |
| contains(tags, 'alpha') | PAGINATION | 100th page | No | - | 100 | 762 | 761 | 763 | 763 |
| contains(tags, 'alpha') | PAGINATION | 100th page | Yes | - | 100 | 1_888 | 1_824 | 1_922 | 1_922 |
| contains(tags, 'alpha') | AGGREGATION | - | - | status | 4 | 1_495 | 1_473 | 1_511 | 1_510 |
| contains(tags, 'alpha') | AGGREGATION | - | - | country | 6 | 1_524 | 1_518 | 1_527 | 1_527 |
| contains(tags, 'alpha') | AGGREGATION | - | - | age | 62 | 1_604 | 1_593 | 1_609 | 1_609 |
| note IS NOT NULL | COUNT | - | - | - | 90,001,746 | 742 | 726 | 769 | 766 |
| note IS NOT NULL | PAGINATION | first page | No | - | 100 | 711 | 610 | 763 | 763 |
| note IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 1_240 | 1_234 | 1_247 | 1_247 |
| note IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 763 | 762 | 763 | 763 |
| note IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 1_378 | 1_357 | 1_389 | 1_389 |
| note IS NOT NULL | AGGREGATION | - | - | status | 4 | 942 | 933 | 948 | 948 |
| note IS NOT NULL | AGGREGATION | - | - | country | 6 | 971 | 959 | 984 | 983 |
| note IS NOT NULL | AGGREGATION | - | - | age | 62 | 1_149 | 1_104 | 1_172 | 1_172 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 `
- **Count/Rows:** 100,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 661ms
- **Min Duration:** 609ms
- **Max Duration:** 760ms
- **P95 Duration:** 746ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 762ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 817ms
- **Min Duration:** 811ms
- **Max Duration:** 826ms
- **P95 Duration:** 825ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 662ms
- **Min Duration:** 610ms
- **Max Duration:** 764ms
- **P95 Duration:** 749ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 957ms
- **Min Duration:** 929ms
- **Max Duration:** 980ms
- **P95 Duration:** 979ms

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 763ms
- **Min Duration:** 761ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### no filters - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000  GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 712ms
- **Min Duration:** 611ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### no filters - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000  GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 771ms
- **Min Duration:** 769ms
- **Max Duration:** 772ms
- **P95 Duration:** 772ms

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid'`
- **Count/Rows:** 25,002,854
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 760ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 772ms
- **Min Duration:** 767ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms

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
- **Average Duration:** 875ms
- **Min Duration:** 846ms
- **Max Duration:** 893ms
- **P95 Duration:** 893ms

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' GROUP BY status`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 763ms
- **Min Duration:** 761ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 767ms
- **Min Duration:** 763ms
- **Max Duration:** 771ms
- **P95 Duration:** 771ms

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US'`
- **Count/Rows:** 19,600,445
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 760ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 752ms
- **Min Duration:** 711ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 853ms
- **Min Duration:** 837ms
- **Max Duration:** 880ms
- **P95 Duration:** 876ms

### country = 'US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 712ms
- **Min Duration:** 610ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### country = 'US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 762ms
- **Min Duration:** 760ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### country = 'US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 764ms
- **Min Duration:** 761ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age > 30`
- **Count/Rows:** 76,316,740
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 760ms
- **Min Duration:** 759ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 611ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 843ms
- **Min Duration:** 826ms
- **Max Duration:** 853ms
- **P95 Duration:** 853ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 710ms
- **Min Duration:** 610ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_007ms
- **Min Duration:** 981ms
- **Max Duration:** 1_022ms
- **P95 Duration:** 1_022ms

### age > 30 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 772ms
- **Min Duration:** 767ms
- **Max Duration:** 780ms
- **P95 Duration:** 779ms

### age > 30 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 767ms
- **Min Duration:** 764ms
- **Max Duration:** 771ms
- **P95 Duration:** 771ms

### age > 30 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 GROUP BY age`
- **Count/Rows:** 48
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 768ms
- **Min Duration:** 764ms
- **Max Duration:** 772ms
- **P95 Duration:** 772ms

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000`
- **Count/Rows:** 85,501,768
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 721ms
- **Min Duration:** 663ms
- **Max Duration:** 774ms
- **P95 Duration:** 770ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 763ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_145ms
- **Min Duration:** 1_124ms
- **Max Duration:** 1_161ms
- **P95 Duration:** 1_160ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 760ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_307ms
- **Min Duration:** 1_292ms
- **Max Duration:** 1_323ms
- **P95 Duration:** 1_322ms

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 773ms
- **Min Duration:** 768ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 860ms
- **Min Duration:** 775ms
- **Max Duration:** 904ms
- **P95 Duration:** 904ms

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 1_043ms
- **Min Duration:** 1_034ms
- **Max Duration:** 1_054ms
- **P95 Duration:** 1_053ms

### created_at >= DATE '2024-06-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01'`
- **Count/Rows:** 58,468,297
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 726ms
- **Min Duration:** 638ms
- **Max Duration:** 771ms
- **P95 Duration:** 771ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 762ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_055ms
- **Min Duration:** 1_018ms
- **Max Duration:** 1_088ms
- **P95 Duration:** 1_086ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 610ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_232ms
- **Min Duration:** 1_213ms
- **Max Duration:** 1_264ms
- **P95 Duration:** 1_260ms

### created_at >= DATE '2024-06-01' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 771ms
- **Min Duration:** 764ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms

### created_at >= DATE '2024-06-01' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 790ms
- **Min Duration:** 769ms
- **Max Duration:** 832ms
- **P95 Duration:** 826ms

### created_at >= DATE '2024-06-01' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 944ms
- **Min Duration:** 931ms
- **Max Duration:** 953ms
- **P95 Duration:** 953ms

### status = 'paid' AND country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND country = 'US'`
- **Count/Rows:** 4,902,972
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 610ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### status = 'paid' AND country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### status = 'paid' AND country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 770ms
- **Min Duration:** 768ms
- **Max Duration:** 773ms
- **P95 Duration:** 773ms

### status = 'paid' AND country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### status = 'paid' AND country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 806ms
- **Min Duration:** 796ms
- **Max Duration:** 823ms
- **P95 Duration:** 821ms

### status = 'paid' AND country = 'US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY status`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### status = 'paid' AND country = 'US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 762ms
- **Min Duration:** 759ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### status = 'paid' AND country = 'US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 767ms
- **Min Duration:** 762ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### age BETWEEN 25 AND 45 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age BETWEEN 25 AND 45`
- **Count/Rows:** 33,395,229
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 611ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age BETWEEN 25 AND 45 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 770ms
- **Min Duration:** 748ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age BETWEEN 25 AND 45 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 890ms
- **Min Duration:** 877ms
- **Max Duration:** 899ms
- **P95 Duration:** 899ms

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 714ms
- **Min Duration:** 612ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 769ms
- **Min Duration:** 764ms
- **Max Duration:** 773ms
- **P95 Duration:** 773ms

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY age`
- **Count/Rows:** 21
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 715ms
- **Min Duration:** 615ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### contains(tags, 'alpha') - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha')`
- **Count/Rows:** 37,972,095
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_350ms
- **Min Duration:** 1_251ms
- **Max Duration:** 1_436ms
- **P95 Duration:** 1_429ms

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
- **Average Duration:** 1_684ms
- **Min Duration:** 1_636ms
- **Max Duration:** 1_770ms
- **P95 Duration:** 1_758ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_888ms
- **Min Duration:** 1_824ms
- **Max Duration:** 1_922ms
- **P95 Duration:** 1_922ms

### contains(tags, 'alpha') - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 1_495ms
- **Min Duration:** 1_473ms
- **Max Duration:** 1_511ms
- **P95 Duration:** 1_510ms

### contains(tags, 'alpha') - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 1_524ms
- **Min Duration:** 1_518ms
- **Max Duration:** 1_527ms
- **P95 Duration:** 1_527ms

### contains(tags, 'alpha') - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 1_604ms
- **Min Duration:** 1_593ms
- **Max Duration:** 1_609ms
- **P95 Duration:** 1_609ms

### note IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL`
- **Count/Rows:** 90,001,746
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 742ms
- **Min Duration:** 726ms
- **Max Duration:** 769ms
- **P95 Duration:** 766ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 610ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_240ms
- **Min Duration:** 1_234ms
- **Max Duration:** 1_247ms
- **P95 Duration:** 1_247ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_378ms
- **Min Duration:** 1_357ms
- **Max Duration:** 1_389ms
- **P95 Duration:** 1_389ms

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 942ms
- **Min Duration:** 933ms
- **Max Duration:** 948ms
- **P95 Duration:** 948ms

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 971ms
- **Min Duration:** 959ms
- **Max Duration:** 984ms
- **P95 Duration:** 983ms

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 1_149ms
- **Min Duration:** 1_104ms
- **Max Duration:** 1_172ms
- **P95 Duration:** 1_172ms

