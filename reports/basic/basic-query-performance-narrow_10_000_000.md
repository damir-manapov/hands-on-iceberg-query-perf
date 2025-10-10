# Query Performance Report

**Table:** iceberg.lab.narrow_10_000_000  
**Generated:** 2025-10-10T20:32:18.313Z  
**Total Rows:** 10,000,000  
**Table Size:** 293.0 MB

## Summary

- **Total Queries:** 240
- **Iterations:** 3
- **Average Duration:** 865ms
- **Fastest Query:** 621ms
- **Slowest Query:** 2_074ms
- **95th Percentile:** 1_442ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 10,000,000 | 776 | 773 | 777 | 777 |
| no filters | PAGINATION | first page | No | - | 100 | 776 | 773 | 778 | 778 |
| no filters | PAGINATION | first page | Yes | - | 100 | 775 | 774 | 776 | 776 |
| no filters | PAGINATION | 100th page | No | - | 100 | 778 | 777 | 780 | 780 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 847 | 837 | 857 | 856 |
| no filters | AGGREGATION | - | - | status | 4 | 776 | 774 | 778 | 778 |
| no filters | AGGREGATION | - | - | country | 6 | 777 | 775 | 778 | 778 |
| no filters | AGGREGATION | - | - | age | 62 | 777 | 775 | 781 | 781 |
| status = 'paid' | COUNT | - | - | - | 2,500,451 | 775 | 773 | 777 | 777 | 3 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 777 | 772 | 779 | 779 | 3 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 776 | 774 | 776 | 776 | 3 |
| status = 'paid' | PAGINATION | 100th page | No | - | 100 | 776 | 773 | 780 | 780 | 3 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 100 | 791 | 772 | 801 | 801 | 3 |
| status = 'paid' | AGGREGATION | - | - | status | 1 | 777 | 776 | 778 | 778 | 3 |
| status = 'paid' | AGGREGATION | - | - | country | 6 | 774 | 771 | 776 | 776 | 3 |
| status = 'paid' | AGGREGATION | - | - | age | 62 | 779 | 778 | 780 | 780 | 3 |
| country = 'US' | COUNT | - | - | - | 1,961,199 | 787 | 777 | 791 | 791 | 3 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 777 | 776 | 778 | 778 | 3 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 809 | 774 | 875 | 866 | 3 |
| country = 'US' | PAGINATION | 100th page | No | - | 100 | 778 | 775 | 782 | 782 | 3 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 944 | 772 | 1_053 | 1_049 | 3 |
| country = 'US' | AGGREGATION | - | - | status | 4 | 678 | 627 | 780 | 765 | 3 |
| country = 'US' | AGGREGATION | - | - | country | 1 | 778 | 775 | 779 | 779 | 3 |
| country = 'US' | AGGREGATION | - | - | age | 62 | 724 | 622 | 775 | 775 | 3 |
| age > 30 | COUNT | - | - | - | 7,631,939 | 777 | 776 | 777 | 777 | 3 |
| age > 30 | PAGINATION | first page | No | - | 100 | 774 | 773 | 774 | 774 | 3 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 773 | 772 | 775 | 775 | 3 |
| age > 30 | PAGINATION | 100th page | No | - | 100 | 775 | 772 | 777 | 777 | 3 |
| age > 30 | PAGINATION | 100th page | Yes | - | 100 | 930 | 869 | 1_008 | 999 | 3 |
| age > 30 | AGGREGATION | - | - | status | 4 | 785 | 774 | 806 | 803 | 3 |
| age > 30 | AGGREGATION | - | - | country | 6 | 783 | 777 | 786 | 786 | 3 |
| age > 30 | AGGREGATION | - | - | age | 48 | 776 | 775 | 777 | 777 | 3 |
| amount > 1000 | COUNT | - | - | - | 8,550,425 | 774 | 773 | 774 | 774 | 3 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 776 | 773 | 779 | 779 | 3 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 1_003 | 980 | 1_018 | 1_018 | 3 |
| amount > 1000 | PAGINATION | 100th page | No | - | 100 | 777 | 776 | 777 | 777 | 3 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 100 | 1_150 | 1_122 | 1_176 | 1_174 | 3 |
| amount > 1000 | AGGREGATION | - | - | status | 4 | 806 | 772 | 828 | 827 | 3 |
| amount > 1000 | AGGREGATION | - | - | country | 6 | 774 | 774 | 774 | 774 | 3 |
| amount > 1000 | AGGREGATION | - | - | age | 62 | 968 | 962 | 972 | 972 | 3 |
| created_at >= DATE '2024-06-01' | COUNT | - | - | - | 5,845,591 | 775 | 772 | 778 | 778 | 3 |
| created_at >= DATE '2024-06-01' | PAGINATION | first page | No | - | 100 | 777 | 776 | 778 | 778 | 3 |
| created_at >= DATE '2024-06-01' | PAGINATION | first page | Yes | - | 100 | 909 | 874 | 942 | 939 | 3 |
| created_at >= DATE '2024-06-01' | PAGINATION | 100th page | No | - | 100 | 776 | 774 | 777 | 777 | 3 |
| created_at >= DATE '2024-06-01' | PAGINATION | 100th page | Yes | - | 100 | 1_042 | 1_023 | 1_054 | 1_054 | 3 |
| created_at >= DATE '2024-06-01' | AGGREGATION | - | - | status | 4 | 725 | 621 | 777 | 777 | 3 |
| created_at >= DATE '2024-06-01' | AGGREGATION | - | - | country | 6 | 781 | 773 | 793 | 792 | 3 |
| created_at >= DATE '2024-06-01' | AGGREGATION | - | - | age | 62 | 839 | 773 | 967 | 948 | 3 |
| status = 'paid' AND country = 'US' | COUNT | - | - | - | 490,261 | 726 | 625 | 777 | 777 | 3 |
| status = 'paid' AND country = 'US' | PAGINATION | first page | No | - | 100 | 775 | 774 | 775 | 775 | 3 |
| status = 'paid' AND country = 'US' | PAGINATION | first page | Yes | - | 100 | 776 | 775 | 776 | 776 | 3 |
| status = 'paid' AND country = 'US' | PAGINATION | 100th page | No | - | 100 | 776 | 775 | 777 | 777 | 3 |
| status = 'paid' AND country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 881 | 773 | 1_093 | 1_062 | 3 |
| status = 'paid' AND country = 'US' | AGGREGATION | - | - | status | 1 | 774 | 771 | 776 | 776 | 3 |
| status = 'paid' AND country = 'US' | AGGREGATION | - | - | country | 1 | 777 | 775 | 778 | 778 | 3 |
| status = 'paid' AND country = 'US' | AGGREGATION | - | - | age | 62 | 775 | 771 | 776 | 776 | 3 |
| age BETWEEN 25 AND 45 | COUNT | - | - | - | 3,338,630 | 775 | 773 | 776 | 776 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | No | - | 100 | 776 | 774 | 777 | 777 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | Yes | - | 100 | 841 | 773 | 975 | 955 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | No | - | 100 | 723 | 621 | 774 | 774 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | Yes | - | 100 | 824 | 804 | 861 | 856 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | status | 4 | 776 | 775 | 776 | 776 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | country | 6 | 776 | 772 | 779 | 779 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | age | 21 | 776 | 775 | 777 | 777 | 3 |
| contains(tags, 'alpha') | COUNT | - | - | - | 3,797,495 | 1_244 | 1_197 | 1_327 | 1_315 | 3 |
| contains(tags, 'alpha') | PAGINATION | first page | No | - | 100 | 777 | 776 | 777 | 777 | 3 |
| contains(tags, 'alpha') | PAGINATION | first page | Yes | - | 100 | 1_509 | 1_494 | 1_523 | 1_522 | 3 |
| contains(tags, 'alpha') | PAGINATION | 100th page | No | - | 100 | 775 | 772 | 777 | 777 | 3 |
| contains(tags, 'alpha') | PAGINATION | 100th page | Yes | - | 100 | 1_728 | 1_693 | 1_776 | 1_770 | 3 |
| contains(tags, 'alpha') | AGGREGATION | - | - | status | 4 | 1_459 | 1_406 | 1_530 | 1_521 | 3 |
| contains(tags, 'alpha') | AGGREGATION | - | - | country | 6 | 1_484 | 1_438 | 1_514 | 1_513 | 3 |
| contains(tags, 'alpha') | AGGREGATION | - | - | age | 62 | 1_709 | 1_521 | 2_074 | 2_020 | 3 |
| note IS NOT NULL | COUNT | - | - | - | 9,001,257 | 773 | 772 | 775 | 775 | 3 |
| note IS NOT NULL | PAGINATION | first page | No | - | 100 | 777 | 775 | 778 | 778 | 3 |
| note IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 1_074 | 1_026 | 1_103 | 1_102 | 3 |
| note IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 725 | 623 | 775 | 775 | 3 |
| note IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 1_176 | 1_158 | 1_197 | 1_195 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | status | 4 | 827 | 772 | 931 | 916 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | country | 6 | 772 | 770 | 775 | 775 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | age | 62 | 1_040 | 985 | 1_136 | 1_123 | 3 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 `
- **Count/Rows:** 10,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 773ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 773ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 775ms
- **Min Duration:** 774ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 777ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 847ms
- **Min Duration:** 837ms
- **Max Duration:** 857ms
- **P95 Duration:** 856ms

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 776ms
- **Min Duration:** 774ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms

### no filters - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000  GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms

### no filters - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000  GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid'`
- **Count/Rows:** 2,500,451
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 775ms
- **Min Duration:** 773ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 772ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 774ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 773ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 791ms
- **Min Duration:** 772ms
- **Max Duration:** 801ms
- **P95 Duration:** 801ms

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' GROUP BY status`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 777ms
- **Min Duration:** 776ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 774ms
- **Min Duration:** 771ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 779ms
- **Min Duration:** 778ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US'`
- **Count/Rows:** 1,961,199
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 787ms
- **Min Duration:** 777ms
- **Max Duration:** 791ms
- **P95 Duration:** 791ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 776ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 809ms
- **Min Duration:** 774ms
- **Max Duration:** 875ms
- **P95 Duration:** 866ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 775ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 944ms
- **Min Duration:** 772ms
- **Max Duration:** 1_053ms
- **P95 Duration:** 1_049ms

### country = 'US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 678ms
- **Min Duration:** 627ms
- **Max Duration:** 780ms
- **P95 Duration:** 765ms

### country = 'US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 778ms
- **Min Duration:** 775ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms

### country = 'US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 724ms
- **Min Duration:** 622ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age > 30`
- **Count/Rows:** 7,631,939
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 776ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 774ms
- **Min Duration:** 773ms
- **Max Duration:** 774ms
- **P95 Duration:** 774ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 773ms
- **Min Duration:** 772ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 775ms
- **Min Duration:** 772ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 930ms
- **Min Duration:** 869ms
- **Max Duration:** 1_008ms
- **P95 Duration:** 999ms

### age > 30 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 785ms
- **Min Duration:** 774ms
- **Max Duration:** 806ms
- **P95 Duration:** 803ms

### age > 30 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 783ms
- **Min Duration:** 777ms
- **Max Duration:** 786ms
- **P95 Duration:** 786ms

### age > 30 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 GROUP BY age`
- **Count/Rows:** 48
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 776ms
- **Min Duration:** 775ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000`
- **Count/Rows:** 8,550,425
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 774ms
- **Min Duration:** 773ms
- **Max Duration:** 774ms
- **P95 Duration:** 774ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 773ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_003ms
- **Min Duration:** 980ms
- **Max Duration:** 1_018ms
- **P95 Duration:** 1_018ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 776ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_150ms
- **Min Duration:** 1_122ms
- **Max Duration:** 1_176ms
- **P95 Duration:** 1_174ms

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 806ms
- **Min Duration:** 772ms
- **Max Duration:** 828ms
- **P95 Duration:** 827ms

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 774ms
- **Min Duration:** 774ms
- **Max Duration:** 774ms
- **P95 Duration:** 774ms

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 968ms
- **Min Duration:** 962ms
- **Max Duration:** 972ms
- **P95 Duration:** 972ms

### created_at >= DATE '2024-06-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01'`
- **Count/Rows:** 5,845,591
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 775ms
- **Min Duration:** 772ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 776ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 909ms
- **Min Duration:** 874ms
- **Max Duration:** 942ms
- **P95 Duration:** 939ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 774ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_042ms
- **Min Duration:** 1_023ms
- **Max Duration:** 1_054ms
- **P95 Duration:** 1_054ms

### created_at >= DATE '2024-06-01' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 725ms
- **Min Duration:** 621ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms

### created_at >= DATE '2024-06-01' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 781ms
- **Min Duration:** 773ms
- **Max Duration:** 793ms
- **P95 Duration:** 792ms

### created_at >= DATE '2024-06-01' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 839ms
- **Min Duration:** 773ms
- **Max Duration:** 967ms
- **P95 Duration:** 948ms

### status = 'paid' AND country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US'`
- **Count/Rows:** 490,261
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 726ms
- **Min Duration:** 625ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms

### status = 'paid' AND country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 775ms
- **Min Duration:** 774ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms

### status = 'paid' AND country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 775ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms

### status = 'paid' AND country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 775ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms

### status = 'paid' AND country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 881ms
- **Min Duration:** 773ms
- **Max Duration:** 1_093ms
- **P95 Duration:** 1_062ms

### status = 'paid' AND country = 'US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY status`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 774ms
- **Min Duration:** 771ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms

### status = 'paid' AND country = 'US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms

### status = 'paid' AND country = 'US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 775ms
- **Min Duration:** 771ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms

### age BETWEEN 25 AND 45 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45`
- **Count/Rows:** 3,338,630
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 775ms
- **Min Duration:** 773ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 774ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 841ms
- **Min Duration:** 773ms
- **Max Duration:** 975ms
- **P95 Duration:** 955ms

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 723ms
- **Min Duration:** 621ms
- **Max Duration:** 774ms
- **P95 Duration:** 774ms

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 824ms
- **Min Duration:** 804ms
- **Max Duration:** 861ms
- **P95 Duration:** 856ms

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 776ms
- **Min Duration:** 775ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 776ms
- **Min Duration:** 772ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY age`
- **Count/Rows:** 21
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 776ms
- **Min Duration:** 775ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms

### contains(tags, 'alpha') - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha')`
- **Count/Rows:** 3,797,495
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_244ms
- **Min Duration:** 1_197ms
- **Max Duration:** 1_327ms
- **P95 Duration:** 1_315ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 776ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_509ms
- **Min Duration:** 1_494ms
- **Max Duration:** 1_523ms
- **P95 Duration:** 1_522ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 775ms
- **Min Duration:** 772ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_728ms
- **Min Duration:** 1_693ms
- **Max Duration:** 1_776ms
- **P95 Duration:** 1_770ms

### contains(tags, 'alpha') - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 1_459ms
- **Min Duration:** 1_406ms
- **Max Duration:** 1_530ms
- **P95 Duration:** 1_521ms

### contains(tags, 'alpha') - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 1_484ms
- **Min Duration:** 1_438ms
- **Max Duration:** 1_514ms
- **P95 Duration:** 1_513ms

### contains(tags, 'alpha') - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 1_709ms
- **Min Duration:** 1_521ms
- **Max Duration:** 2_074ms
- **P95 Duration:** 2_020ms

### note IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL`
- **Count/Rows:** 9,001,257
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 773ms
- **Min Duration:** 772ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_074ms
- **Min Duration:** 1_026ms
- **Max Duration:** 1_103ms
- **P95 Duration:** 1_102ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 725ms
- **Min Duration:** 623ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_176ms
- **Min Duration:** 1_158ms
- **Max Duration:** 1_197ms
- **P95 Duration:** 1_195ms

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 827ms
- **Min Duration:** 772ms
- **Max Duration:** 931ms
- **P95 Duration:** 916ms

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 772ms
- **Min Duration:** 770ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 1_040ms
- **Min Duration:** 985ms
- **Max Duration:** 1_136ms
- **P95 Duration:** 1_123ms

