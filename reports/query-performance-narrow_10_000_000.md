# Query Performance Report

**Table:** iceberg.lab.narrow_10_000_000  
**Generated:** 2025-10-10T08:37:23.586Z  
**Total Rows:** 10,000,000  
**Table Size:** 293.0 MB

## Summary

- **Total Queries:** 240
- **Average Duration:** 618ms
- **Fastest Query:** 155ms
- **Slowest Query:** 1124ms
- **95th Percentile:** 782ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
| no filters | COUNT | - | - | - | 10,000,000 | 721 | 615 | 774 | 774 | 3 |
| no filters | PAGINATION | first page | No | - | 100 | 778 | 777 | 780 | 780 | 3 |
| no filters | PAGINATION | first page | Yes | - | 100 | 777 | 774 | 779 | 779 | 3 |
| no filters | PAGINATION | 100th page | No | - | 0 | 159 | 157 | 159 | 159 | 3 |
| no filters | PAGINATION | 100th page | Yes | - | 0 | 160 | 158 | 161 | 161 | 3 |
| no filters | AGGREGATION | - | - | status GROUP BY | 4 | 778 | 775 | 780 | 780 | 3 |
| no filters | AGGREGATION | - | - | country GROUP BY | 6 | 779 | 776 | 782 | 782 | 3 |
| no filters | AGGREGATION | - | - | age GROUP BY | 62 | 776 | 775 | 777 | 777 | 3 |
| status = 'paid' | COUNT | - | - | - | 2,500,451 | 778 | 777 | 779 | 779 | 3 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 776 | 775 | 777 | 777 | 3 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 776 | 772 | 777 | 777 | 3 |
| status = 'paid' | PAGINATION | 100th page | No | - | 0 | 160 | 158 | 160 | 160 | 3 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 0 | 159 | 157 | 161 | 161 | 3 |
| status = 'paid' | AGGREGATION | - | - | status GROUP BY | 1 | 778 | 774 | 780 | 780 | 3 |
| status = 'paid' | AGGREGATION | - | - | country GROUP BY | 6 | 774 | 768 | 779 | 779 | 3 |
| status = 'paid' | AGGREGATION | - | - | age GROUP BY | 62 | 778 | 776 | 779 | 779 | 3 |
| country = 'US' | COUNT | - | - | - | 1,961,199 | 779 | 775 | 781 | 781 | 3 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 674 | 620 | 776 | 761 | 3 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 775 | 772 | 778 | 778 | 3 |
| country = 'US' | PAGINATION | 100th page | No | - | 0 | 159 | 157 | 161 | 161 | 3 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 0 | 158 | 155 | 160 | 160 | 3 |
| country = 'US' | AGGREGATION | - | - | status GROUP BY | 4 | 778 | 775 | 782 | 782 | 3 |
| country = 'US' | AGGREGATION | - | - | country GROUP BY | 1 | 725 | 624 | 778 | 778 | 3 |
| country = 'US' | AGGREGATION | - | - | age GROUP BY | 62 | 777 | 775 | 779 | 779 | 3 |
| age > 30 | COUNT | - | - | - | 7,631,939 | 778 | 777 | 778 | 778 | 3 |
| age > 30 | PAGINATION | first page | No | - | 100 | 778 | 776 | 779 | 779 | 3 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 776 | 773 | 778 | 778 | 3 |
| age > 30 | PAGINATION | 100th page | No | - | 0 | 160 | 158 | 161 | 161 | 3 |
| age > 30 | PAGINATION | 100th page | Yes | - | 0 | 158 | 155 | 160 | 160 | 3 |
| age > 30 | AGGREGATION | - | - | status GROUP BY | 4 | 725 | 621 | 779 | 779 | 3 |
| age > 30 | AGGREGATION | - | - | country GROUP BY | 6 | 669 | 614 | 775 | 760 | 3 |
| age > 30 | AGGREGATION | - | - | age GROUP BY | 48 | 776 | 775 | 777 | 777 | 3 |
| amount > 1000 | COUNT | - | - | - | 8,550,425 | 775 | 773 | 777 | 777 | 3 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 778 | 776 | 778 | 778 | 3 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 696 | 665 | 749 | 742 | 3 |
| amount > 1000 | PAGINATION | 100th page | No | - | 0 | 160 | 157 | 161 | 161 | 3 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 0 | 159 | 158 | 160 | 160 | 3 |
| amount > 1000 | AGGREGATION | - | - | status GROUP BY | 4 | 772 | 766 | 776 | 776 | 3 |
| amount > 1000 | AGGREGATION | - | - | country GROUP BY | 6 | 774 | 770 | 777 | 777 | 3 |
| amount > 1000 | AGGREGATION | - | - | age GROUP BY | 62 | 723 | 621 | 774 | 774 | 3 |
| date >= 2024-06-01 | COUNT | - | - | - | 5,845,591 | 775 | 772 | 778 | 778 | 3 |
| date >= 2024-06-01 | PAGINATION | first page | No | - | 100 | 777 | 773 | 781 | 781 | 3 |
| date >= 2024-06-01 | PAGINATION | first page | Yes | - | 100 | 693 | 635 | 768 | 759 | 3 |
| date >= 2024-06-01 | PAGINATION | 100th page | No | - | 0 | 159 | 158 | 160 | 160 | 3 |
| date >= 2024-06-01 | PAGINATION | 100th page | Yes | - | 0 | 159 | 158 | 159 | 159 | 3 |
| date >= 2024-06-01 | AGGREGATION | - | - | status GROUP BY | 4 | 777 | 775 | 778 | 778 | 3 |
| date >= 2024-06-01 | AGGREGATION | - | - | country GROUP BY | 6 | 779 | 774 | 785 | 785 | 3 |
| date >= 2024-06-01 | AGGREGATION | - | - | age GROUP BY | 62 | 723 | 621 | 773 | 773 | 3 |
| status='paid' AND country='US' | COUNT | - | - | - | 490,261 | 778 | 775 | 781 | 781 | 3 |
| status='paid' AND country='US' | PAGINATION | first page | No | - | 100 | 773 | 772 | 773 | 773 | 3 |
| status='paid' AND country='US' | PAGINATION | first page | Yes | - | 100 | 774 | 772 | 775 | 775 | 3 |
| status='paid' AND country='US' | PAGINATION | 100th page | No | - | 0 | 161 | 160 | 161 | 161 | 3 |
| status='paid' AND country='US' | PAGINATION | 100th page | Yes | - | 0 | 160 | 159 | 160 | 160 | 3 |
| status='paid' AND country='US' | AGGREGATION | - | - | status GROUP BY | 1 | 777 | 774 | 779 | 779 | 3 |
| status='paid' AND country='US' | AGGREGATION | - | - | country GROUP BY | 1 | 779 | 777 | 780 | 780 | 3 |
| status='paid' AND country='US' | AGGREGATION | - | - | age GROUP BY | 62 | 776 | 774 | 778 | 778 | 3 |
| age BETWEEN 25 AND 45 | COUNT | - | - | - | 3,338,630 | 778 | 777 | 779 | 779 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | No | - | 100 | 778 | 775 | 780 | 780 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | Yes | - | 100 | 773 | 771 | 774 | 774 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | No | - | 0 | 159 | 158 | 161 | 161 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | Yes | - | 0 | 160 | 159 | 160 | 160 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | status GROUP BY | 4 | 779 | 777 | 780 | 780 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | country GROUP BY | 6 | 777 | 775 | 779 | 779 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | age GROUP BY | 21 | 779 | 778 | 779 | 779 | 3 |
| tags contains 'alpha' | COUNT | - | - | - | 3,797,495 | 811 | 728 | 930 | 915 | 3 |
| tags contains 'alpha' | PAGINATION | first page | No | - | 100 | 777 | 775 | 778 | 778 | 3 |
| tags contains 'alpha' | PAGINATION | first page | Yes | - | 100 | 850 | 839 | 861 | 860 | 3 |
| tags contains 'alpha' | PAGINATION | 100th page | No | - | 0 | 159 | 156 | 162 | 162 | 3 |
| tags contains 'alpha' | PAGINATION | 100th page | Yes | - | 0 | 159 | 158 | 160 | 160 | 3 |
| tags contains 'alpha' | AGGREGATION | - | - | status GROUP BY | 4 | 773 | 769 | 776 | 776 | 3 |
| tags contains 'alpha' | AGGREGATION | - | - | country GROUP BY | 6 | 867 | 776 | 930 | 927 | 3 |
| tags contains 'alpha' | AGGREGATION | - | - | age GROUP BY | 62 | 1028 | 969 | 1124 | 1111 | 3 |
| note IS NOT NULL | COUNT | - | - | - | 9,001,257 | 725 | 620 | 777 | 777 | 3 |
| note IS NOT NULL | PAGINATION | first page | No | - | 100 | 776 | 775 | 777 | 777 | 3 |
| note IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 749 | 663 | 809 | 806 | 3 |
| note IS NOT NULL | PAGINATION | 100th page | No | - | 0 | 160 | 157 | 162 | 162 | 3 |
| note IS NOT NULL | PAGINATION | 100th page | Yes | - | 0 | 162 | 161 | 162 | 162 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | status GROUP BY | 4 | 775 | 772 | 777 | 777 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | country GROUP BY | 6 | 724 | 623 | 775 | 775 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | age GROUP BY | 62 | 721 | 615 | 775 | 775 | 3 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 `
- **Count/Rows:** 10,000,000
- **Average Duration:** 721ms
- **Min Duration:** 615ms
- **Max Duration:** 774ms
- **P95 Duration:** 774ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 778ms
- **Min Duration:** 777ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 777ms
- **Min Duration:** 774ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000  LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 157ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000  ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 160ms
- **Min Duration:** 158ms
- **Max Duration:** 161ms
- **P95 Duration:** 161ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 778ms
- **Min Duration:** 775ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000  GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 779ms
- **Min Duration:** 776ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000  GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 776ms
- **Min Duration:** 775ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid'`
- **Count/Rows:** 2,500,451
- **Average Duration:** 778ms
- **Min Duration:** 777ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 776ms
- **Min Duration:** 775ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 776ms
- **Min Duration:** 772ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 160ms
- **Min Duration:** 158ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 157ms
- **Max Duration:** 161ms
- **P95 Duration:** 161ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' GROUP BY status`
- **Count/Rows:** 1
- **Average Duration:** 778ms
- **Min Duration:** 774ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 774ms
- **Min Duration:** 768ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 778ms
- **Min Duration:** 776ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US'`
- **Count/Rows:** 1,961,199
- **Average Duration:** 779ms
- **Min Duration:** 775ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 674ms
- **Min Duration:** 620ms
- **Max Duration:** 776ms
- **P95 Duration:** 761ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 775ms
- **Min Duration:** 772ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 157ms
- **Max Duration:** 161ms
- **P95 Duration:** 161ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 155ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 778ms
- **Min Duration:** 775ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Average Duration:** 725ms
- **Min Duration:** 624ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age > 30`
- **Count/Rows:** 7,631,939
- **Average Duration:** 778ms
- **Min Duration:** 777ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 778ms
- **Min Duration:** 776ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 776ms
- **Min Duration:** 773ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 160ms
- **Min Duration:** 158ms
- **Max Duration:** 161ms
- **P95 Duration:** 161ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 155ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 725ms
- **Min Duration:** 621ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 669ms
- **Min Duration:** 614ms
- **Max Duration:** 775ms
- **P95 Duration:** 760ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 GROUP BY age`
- **Count/Rows:** 48
- **Average Duration:** 776ms
- **Min Duration:** 775ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000`
- **Count/Rows:** 8,550,425
- **Average Duration:** 775ms
- **Min Duration:** 773ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 778ms
- **Min Duration:** 776ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 696ms
- **Min Duration:** 665ms
- **Max Duration:** 749ms
- **P95 Duration:** 742ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 160ms
- **Min Duration:** 157ms
- **Max Duration:** 161ms
- **P95 Duration:** 161ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 772ms
- **Min Duration:** 766ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 774ms
- **Min Duration:** 770ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 723ms
- **Min Duration:** 621ms
- **Max Duration:** 774ms
- **P95 Duration:** 774ms
- **Runs:** 3

### date >= 2024-06-01 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01'`
- **Count/Rows:** 5,845,591
- **Average Duration:** 775ms
- **Min Duration:** 772ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 777ms
- **Min Duration:** 773ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 693ms
- **Min Duration:** 635ms
- **Max Duration:** 768ms
- **P95 Duration:** 759ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### date >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### date >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 779ms
- **Min Duration:** 774ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### date >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 723ms
- **Min Duration:** 621ms
- **Max Duration:** 773ms
- **P95 Duration:** 773ms
- **Runs:** 3

### status='paid' AND country='US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US'`
- **Count/Rows:** 490,261
- **Average Duration:** 778ms
- **Min Duration:** 775ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 773ms
- **Min Duration:** 772ms
- **Max Duration:** 773ms
- **P95 Duration:** 773ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 774ms
- **Min Duration:** 772ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 161ms
- **Min Duration:** 160ms
- **Max Duration:** 161ms
- **P95 Duration:** 161ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 160ms
- **Min Duration:** 159ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### status='paid' AND country='US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY status`
- **Count/Rows:** 1
- **Average Duration:** 777ms
- **Min Duration:** 774ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### status='paid' AND country='US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Average Duration:** 779ms
- **Min Duration:** 777ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### status='paid' AND country='US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 776ms
- **Min Duration:** 774ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45`
- **Count/Rows:** 3,338,630
- **Average Duration:** 778ms
- **Min Duration:** 777ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 778ms
- **Min Duration:** 775ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 773ms
- **Min Duration:** 771ms
- **Max Duration:** 774ms
- **P95 Duration:** 774ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 161ms
- **P95 Duration:** 161ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 160ms
- **Min Duration:** 159ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 779ms
- **Min Duration:** 777ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY age`
- **Count/Rows:** 21
- **Average Duration:** 779ms
- **Min Duration:** 778ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### tags contains 'alpha' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha')`
- **Count/Rows:** 3,797,495
- **Average Duration:** 811ms
- **Min Duration:** 728ms
- **Max Duration:** 930ms
- **P95 Duration:** 915ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 850ms
- **Min Duration:** 839ms
- **Max Duration:** 861ms
- **P95 Duration:** 860ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 156ms
- **Max Duration:** 162ms
- **P95 Duration:** 162ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### tags contains 'alpha' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 773ms
- **Min Duration:** 769ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms
- **Runs:** 3

### tags contains 'alpha' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 867ms
- **Min Duration:** 776ms
- **Max Duration:** 930ms
- **P95 Duration:** 927ms
- **Runs:** 3

### tags contains 'alpha' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 1028ms
- **Min Duration:** 969ms
- **Max Duration:** 1124ms
- **P95 Duration:** 1111ms
- **Runs:** 3

### note IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL`
- **Count/Rows:** 9,001,257
- **Average Duration:** 725ms
- **Min Duration:** 620ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 776ms
- **Min Duration:** 775ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 749ms
- **Min Duration:** 663ms
- **Max Duration:** 809ms
- **P95 Duration:** 806ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 160ms
- **Min Duration:** 157ms
- **Max Duration:** 162ms
- **P95 Duration:** 162ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 162ms
- **Min Duration:** 161ms
- **Max Duration:** 162ms
- **P95 Duration:** 162ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 775ms
- **Min Duration:** 772ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 724ms
- **Min Duration:** 623ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 721ms
- **Min Duration:** 615ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms
- **Runs:** 3

