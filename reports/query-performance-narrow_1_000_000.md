# Query Performance Report

**Table:** iceberg.lab.narrow_1_000_000  
**Generated:** 2025-10-10T08:34:37.714Z  
**Total Rows:** 1,000,000  
**Table Size:** 29.3 MB

## Summary

- **Total Queries:** 240
- **Average Duration:** 614ms
- **Fastest Query:** 155ms
- **Slowest Query:** 785ms
- **95th Percentile:** 783ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
| no filters | COUNT | - | - | - | 1,000,000 | 781 | 779 | 783 | 783 | 3 |
| no filters | PAGINATION | first page | No | - | 100 | 730 | 627 | 783 | 783 | 3 |
| no filters | PAGINATION | first page | Yes | - | 100 | 781 | 778 | 783 | 783 | 3 |
| no filters | PAGINATION | 100th page | No | - | 0 | 172 | 162 | 190 | 188 | 3 |
| no filters | PAGINATION | 100th page | Yes | - | 0 | 162 | 157 | 166 | 166 | 3 |
| no filters | AGGREGATION | - | - | status GROUP BY | 4 | 784 | 783 | 785 | 785 | 3 |
| no filters | AGGREGATION | - | - | country GROUP BY | 6 | 778 | 771 | 783 | 783 | 3 |
| no filters | AGGREGATION | - | - | age GROUP BY | 62 | 677 | 622 | 780 | 765 | 3 |
| status = 'paid' | COUNT | - | - | - | 249,575 | 781 | 777 | 783 | 783 | 3 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 728 | 625 | 781 | 781 | 3 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 778 | 773 | 783 | 783 | 3 |
| status = 'paid' | PAGINATION | 100th page | No | - | 0 | 160 | 159 | 161 | 161 | 3 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 0 | 160 | 158 | 161 | 161 | 3 |
| status = 'paid' | AGGREGATION | - | - | status GROUP BY | 1 | 727 | 622 | 782 | 782 | 3 |
| status = 'paid' | AGGREGATION | - | - | country GROUP BY | 6 | 727 | 625 | 779 | 779 | 3 |
| status = 'paid' | AGGREGATION | - | - | age GROUP BY | 62 | 779 | 778 | 780 | 780 | 3 |
| country = 'US' | COUNT | - | - | - | 196,581 | 780 | 776 | 783 | 783 | 3 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 781 | 779 | 782 | 782 | 3 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 779 | 776 | 780 | 780 | 3 |
| country = 'US' | PAGINATION | 100th page | No | - | 0 | 160 | 160 | 160 | 160 | 3 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 0 | 161 | 160 | 161 | 161 | 3 |
| country = 'US' | AGGREGATION | - | - | status GROUP BY | 4 | 780 | 778 | 783 | 783 | 3 |
| country = 'US' | AGGREGATION | - | - | country GROUP BY | 1 | 777 | 775 | 778 | 778 | 3 |
| country = 'US' | AGGREGATION | - | - | age GROUP BY | 62 | 777 | 774 | 779 | 779 | 3 |
| age > 30 | COUNT | - | - | - | 763,931 | 781 | 776 | 785 | 785 | 3 |
| age > 30 | PAGINATION | first page | No | - | 100 | 783 | 779 | 785 | 785 | 3 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 727 | 625 | 778 | 778 | 3 |
| age > 30 | PAGINATION | 100th page | No | - | 0 | 160 | 160 | 160 | 160 | 3 |
| age > 30 | PAGINATION | 100th page | Yes | - | 0 | 161 | 159 | 161 | 161 | 3 |
| age > 30 | AGGREGATION | - | - | status GROUP BY | 4 | 778 | 775 | 780 | 780 | 3 |
| age > 30 | AGGREGATION | - | - | country GROUP BY | 6 | 777 | 773 | 780 | 780 | 3 |
| age > 30 | AGGREGATION | - | - | age GROUP BY | 48 | 776 | 769 | 779 | 779 | 3 |
| amount > 1000 | COUNT | - | - | - | 855,018 | 773 | 771 | 775 | 775 | 3 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 778 | 776 | 779 | 779 | 3 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 674 | 621 | 776 | 761 | 3 |
| amount > 1000 | PAGINATION | 100th page | No | - | 0 | 156 | 155 | 157 | 157 | 3 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 0 | 158 | 155 | 160 | 160 | 3 |
| amount > 1000 | AGGREGATION | - | - | status GROUP BY | 4 | 779 | 777 | 780 | 780 | 3 |
| amount > 1000 | AGGREGATION | - | - | country GROUP BY | 6 | 779 | 776 | 781 | 781 | 3 |
| amount > 1000 | AGGREGATION | - | - | age GROUP BY | 62 | 778 | 773 | 784 | 784 | 3 |
| date >= 2024-06-01 | COUNT | - | - | - | 584,954 | 780 | 777 | 782 | 782 | 3 |
| date >= 2024-06-01 | PAGINATION | first page | No | - | 100 | 776 | 774 | 777 | 777 | 3 |
| date >= 2024-06-01 | PAGINATION | first page | Yes | - | 100 | 779 | 777 | 781 | 781 | 3 |
| date >= 2024-06-01 | PAGINATION | 100th page | No | - | 0 | 160 | 159 | 161 | 161 | 3 |
| date >= 2024-06-01 | PAGINATION | 100th page | Yes | - | 0 | 159 | 158 | 160 | 160 | 3 |
| date >= 2024-06-01 | AGGREGATION | - | - | status GROUP BY | 4 | 779 | 778 | 779 | 779 | 3 |
| date >= 2024-06-01 | AGGREGATION | - | - | country GROUP BY | 6 | 778 | 774 | 780 | 780 | 3 |
| date >= 2024-06-01 | AGGREGATION | - | - | age GROUP BY | 62 | 728 | 624 | 781 | 781 | 3 |
| status='paid' AND country='US' | COUNT | - | - | - | 49,356 | 781 | 780 | 781 | 781 | 3 |
| status='paid' AND country='US' | PAGINATION | first page | No | - | 100 | 729 | 629 | 780 | 780 | 3 |
| status='paid' AND country='US' | PAGINATION | first page | Yes | - | 100 | 726 | 621 | 779 | 779 | 3 |
| status='paid' AND country='US' | PAGINATION | 100th page | No | - | 0 | 160 | 159 | 160 | 160 | 3 |
| status='paid' AND country='US' | PAGINATION | 100th page | Yes | - | 0 | 158 | 155 | 160 | 160 | 3 |
| status='paid' AND country='US' | AGGREGATION | - | - | status GROUP BY | 1 | 777 | 775 | 779 | 779 | 3 |
| status='paid' AND country='US' | AGGREGATION | - | - | country GROUP BY | 1 | 778 | 775 | 780 | 780 | 3 |
| status='paid' AND country='US' | AGGREGATION | - | - | age GROUP BY | 62 | 778 | 775 | 781 | 781 | 3 |
| age BETWEEN 25 AND 45 | COUNT | - | - | - | 333,685 | 777 | 776 | 778 | 778 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | No | - | 100 | 777 | 775 | 779 | 779 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | Yes | - | 100 | 776 | 773 | 780 | 780 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | No | - | 0 | 158 | 155 | 159 | 159 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | Yes | - | 0 | 159 | 158 | 160 | 160 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | status GROUP BY | 4 | 727 | 623 | 780 | 780 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | country GROUP BY | 6 | 777 | 775 | 779 | 779 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | age GROUP BY | 21 | 778 | 776 | 780 | 780 | 3 |
| tags contains 'alpha' | COUNT | - | - | - | 379,856 | 724 | 618 | 777 | 777 | 3 |
| tags contains 'alpha' | PAGINATION | first page | No | - | 100 | 722 | 627 | 770 | 770 | 3 |
| tags contains 'alpha' | PAGINATION | first page | Yes | - | 100 | 777 | 772 | 781 | 781 | 3 |
| tags contains 'alpha' | PAGINATION | 100th page | No | - | 0 | 158 | 157 | 159 | 159 | 3 |
| tags contains 'alpha' | PAGINATION | 100th page | Yes | - | 0 | 160 | 158 | 161 | 161 | 3 |
| tags contains 'alpha' | AGGREGATION | - | - | status GROUP BY | 4 | 777 | 773 | 781 | 781 | 3 |
| tags contains 'alpha' | AGGREGATION | - | - | country GROUP BY | 6 | 778 | 775 | 781 | 781 | 3 |
| tags contains 'alpha' | AGGREGATION | - | - | age GROUP BY | 62 | 776 | 773 | 778 | 778 | 3 |
| note IS NOT NULL | COUNT | - | - | - | 899,699 | 777 | 774 | 778 | 778 | 3 |
| note IS NOT NULL | PAGINATION | first page | No | - | 100 | 777 | 775 | 778 | 778 | 3 |
| note IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 727 | 624 | 778 | 778 | 3 |
| note IS NOT NULL | PAGINATION | 100th page | No | - | 0 | 159 | 158 | 160 | 160 | 3 |
| note IS NOT NULL | PAGINATION | 100th page | Yes | - | 0 | 159 | 158 | 160 | 160 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | status GROUP BY | 4 | 776 | 775 | 778 | 778 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | country GROUP BY | 6 | 780 | 778 | 781 | 781 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | age GROUP BY | 62 | 778 | 775 | 779 | 779 | 3 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 `
- **Count/Rows:** 1,000,000
- **Average Duration:** 781ms
- **Min Duration:** 779ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 730ms
- **Min Duration:** 627ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 781ms
- **Min Duration:** 778ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 172ms
- **Min Duration:** 162ms
- **Max Duration:** 190ms
- **P95 Duration:** 188ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 162ms
- **Min Duration:** 157ms
- **Max Duration:** 166ms
- **P95 Duration:** 166ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 784ms
- **Min Duration:** 783ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000  GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 778ms
- **Min Duration:** 771ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000  GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 677ms
- **Min Duration:** 622ms
- **Max Duration:** 780ms
- **P95 Duration:** 765ms
- **Runs:** 3

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid'`
- **Count/Rows:** 249,575
- **Average Duration:** 781ms
- **Min Duration:** 777ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 728ms
- **Min Duration:** 625ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 778ms
- **Min Duration:** 773ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 160ms
- **Min Duration:** 159ms
- **Max Duration:** 161ms
- **P95 Duration:** 161ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 160ms
- **Min Duration:** 158ms
- **Max Duration:** 161ms
- **P95 Duration:** 161ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' GROUP BY status`
- **Count/Rows:** 1
- **Average Duration:** 727ms
- **Min Duration:** 622ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 727ms
- **Min Duration:** 625ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 779ms
- **Min Duration:** 778ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US'`
- **Count/Rows:** 196,581
- **Average Duration:** 780ms
- **Min Duration:** 776ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 781ms
- **Min Duration:** 779ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 779ms
- **Min Duration:** 776ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 160ms
- **Min Duration:** 160ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 161ms
- **Min Duration:** 160ms
- **Max Duration:** 161ms
- **P95 Duration:** 161ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 780ms
- **Min Duration:** 778ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 777ms
- **Min Duration:** 774ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age > 30`
- **Count/Rows:** 763,931
- **Average Duration:** 781ms
- **Min Duration:** 776ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 783ms
- **Min Duration:** 779ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 727ms
- **Min Duration:** 625ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 160ms
- **Min Duration:** 160ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 161ms
- **Min Duration:** 159ms
- **Max Duration:** 161ms
- **P95 Duration:** 161ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 778ms
- **Min Duration:** 775ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 777ms
- **Min Duration:** 773ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 GROUP BY age`
- **Count/Rows:** 48
- **Average Duration:** 776ms
- **Min Duration:** 769ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000`
- **Count/Rows:** 855,018
- **Average Duration:** 773ms
- **Min Duration:** 771ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 778ms
- **Min Duration:** 776ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 674ms
- **Min Duration:** 621ms
- **Max Duration:** 776ms
- **P95 Duration:** 761ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 156ms
- **Min Duration:** 155ms
- **Max Duration:** 157ms
- **P95 Duration:** 157ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 155ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 779ms
- **Min Duration:** 777ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 779ms
- **Min Duration:** 776ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 778ms
- **Min Duration:** 773ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### date >= 2024-06-01 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01'`
- **Count/Rows:** 584,954
- **Average Duration:** 780ms
- **Min Duration:** 777ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 776ms
- **Min Duration:** 774ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 779ms
- **Min Duration:** 777ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 160ms
- **Min Duration:** 159ms
- **Max Duration:** 161ms
- **P95 Duration:** 161ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### date >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 779ms
- **Min Duration:** 778ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### date >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 778ms
- **Min Duration:** 774ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### date >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 728ms
- **Min Duration:** 624ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### status='paid' AND country='US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US'`
- **Count/Rows:** 49,356
- **Average Duration:** 781ms
- **Min Duration:** 780ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 729ms
- **Min Duration:** 629ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 726ms
- **Min Duration:** 621ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 160ms
- **Min Duration:** 159ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 155ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### status='paid' AND country='US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY status`
- **Count/Rows:** 1
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### status='paid' AND country='US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Average Duration:** 778ms
- **Min Duration:** 775ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### status='paid' AND country='US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 778ms
- **Min Duration:** 775ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45`
- **Count/Rows:** 333,685
- **Average Duration:** 777ms
- **Min Duration:** 776ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 776ms
- **Min Duration:** 773ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 155ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 727ms
- **Min Duration:** 623ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY age`
- **Count/Rows:** 21
- **Average Duration:** 778ms
- **Min Duration:** 776ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### tags contains 'alpha' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha')`
- **Count/Rows:** 379,856
- **Average Duration:** 724ms
- **Min Duration:** 618ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 722ms
- **Min Duration:** 627ms
- **Max Duration:** 770ms
- **P95 Duration:** 770ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 777ms
- **Min Duration:** 772ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 157ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 160ms
- **Min Duration:** 158ms
- **Max Duration:** 161ms
- **P95 Duration:** 161ms
- **Runs:** 3

### tags contains 'alpha' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 777ms
- **Min Duration:** 773ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### tags contains 'alpha' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 778ms
- **Min Duration:** 775ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### tags contains 'alpha' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 776ms
- **Min Duration:** 773ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### note IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL`
- **Count/Rows:** 899,699
- **Average Duration:** 777ms
- **Min Duration:** 774ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 727ms
- **Min Duration:** 624ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 776ms
- **Min Duration:** 775ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 780ms
- **Min Duration:** 778ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 778ms
- **Min Duration:** 775ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

