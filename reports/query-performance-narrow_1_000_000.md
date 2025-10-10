# Query Performance Report

**Table:** iceberg.lab.narrow_1_000_000  
**Generated:** 2025-10-10T19:00:33.573Z  
**Total Rows:** 1,000,000  
**Table Size:** 29.3 MB

## Summary

- **Total Queries:** 240
- **Average Duration:** 759ms
- **Fastest Query:** 618ms
- **Slowest Query:** 785ms
- **95th Percentile:** 781ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
| no filters | COUNT | - | - | - | 1,000,000 | 781 | 779 | 783 | 783 | 3 |
| no filters | PAGINATION | first page | No | - | 100 | 780 | 778 | 783 | 783 | 3 |
| no filters | PAGINATION | first page | Yes | - | 100 | 679 | 622 | 785 | 770 | 3 |
| no filters | PAGINATION | 100th page | No | - | 100 | 780 | 778 | 781 | 781 | 3 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 782 | 780 | 782 | 782 | 3 |
| no filters | AGGREGATION | - | - | status | 4 | 728 | 627 | 779 | 779 | 3 |
| no filters | AGGREGATION | - | - | country | 6 | 780 | 779 | 781 | 781 | 3 |
| no filters | AGGREGATION | - | - | age | 62 | 778 | 775 | 779 | 779 | 3 |
| status = 'paid' | COUNT | - | - | - | 249,575 | 676 | 625 | 777 | 762 | 3 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 779 | 776 | 780 | 780 | 3 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 726 | 622 | 777 | 777 | 3 |
| status = 'paid' | PAGINATION | 100th page | No | - | 100 | 779 | 776 | 781 | 781 | 3 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 100 | 674 | 620 | 780 | 765 | 3 |
| status = 'paid' | AGGREGATION | - | - | status | 1 | 780 | 779 | 781 | 781 | 3 |
| status = 'paid' | AGGREGATION | - | - | country | 6 | 729 | 628 | 781 | 781 | 3 |
| status = 'paid' | AGGREGATION | - | - | age | 62 | 780 | 778 | 781 | 781 | 3 |
| country = 'US' | COUNT | - | - | - | 196,581 | 729 | 627 | 781 | 781 | 3 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 777 | 776 | 777 | 777 | 3 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 726 | 625 | 776 | 776 | 3 |
| country = 'US' | PAGINATION | 100th page | No | - | 100 | 780 | 778 | 781 | 781 | 3 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 778 | 777 | 778 | 778 | 3 |
| country = 'US' | AGGREGATION | - | - | status | 4 | 779 | 775 | 781 | 781 | 3 |
| country = 'US' | AGGREGATION | - | - | country | 1 | 779 | 775 | 782 | 782 | 3 |
| country = 'US' | AGGREGATION | - | - | age | 62 | 776 | 774 | 778 | 778 | 3 |
| age > 30 | COUNT | - | - | - | 763,931 | 778 | 776 | 780 | 780 | 3 |
| age > 30 | PAGINATION | first page | No | - | 100 | 780 | 778 | 780 | 780 | 3 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 779 | 777 | 780 | 780 | 3 |
| age > 30 | PAGINATION | 100th page | No | - | 100 | 724 | 620 | 778 | 778 | 3 |
| age > 30 | PAGINATION | 100th page | Yes | - | 100 | 727 | 622 | 779 | 779 | 3 |
| age > 30 | AGGREGATION | - | - | status | 4 | 778 | 777 | 779 | 779 | 3 |
| age > 30 | AGGREGATION | - | - | country | 6 | 779 | 778 | 779 | 779 | 3 |
| age > 30 | AGGREGATION | - | - | age | 48 | 778 | 777 | 778 | 778 | 3 |
| amount > 1000 | COUNT | - | - | - | 855,018 | 729 | 625 | 781 | 781 | 3 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 779 | 777 | 780 | 780 | 3 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 778 | 777 | 779 | 779 | 3 |
| amount > 1000 | PAGINATION | 100th page | No | - | 100 | 780 | 776 | 783 | 783 | 3 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 100 | 726 | 624 | 778 | 778 | 3 |
| amount > 1000 | AGGREGATION | - | - | status | 4 | 728 | 624 | 781 | 781 | 3 |
| amount > 1000 | AGGREGATION | - | - | country | 6 | 779 | 779 | 779 | 779 | 3 |
| amount > 1000 | AGGREGATION | - | - | age | 62 | 777 | 775 | 778 | 778 | 3 |
| date >= 2024-06-01 | COUNT | - | - | - | 584,954 | 780 | 779 | 781 | 781 | 3 |
| date >= 2024-06-01 | PAGINATION | first page | No | - | 100 | 778 | 777 | 778 | 778 | 3 |
| date >= 2024-06-01 | PAGINATION | first page | Yes | - | 100 | 780 | 779 | 780 | 780 | 3 |
| date >= 2024-06-01 | PAGINATION | 100th page | No | - | 100 | 778 | 778 | 778 | 778 | 3 |
| date >= 2024-06-01 | PAGINATION | 100th page | Yes | - | 100 | 778 | 777 | 780 | 780 | 3 |
| date >= 2024-06-01 | AGGREGATION | - | - | status | 4 | 779 | 778 | 780 | 780 | 3 |
| date >= 2024-06-01 | AGGREGATION | - | - | country | 6 | 780 | 777 | 782 | 782 | 3 |
| date >= 2024-06-01 | AGGREGATION | - | - | age | 62 | 777 | 775 | 779 | 779 | 3 |
| status='paid' AND country='US' | COUNT | - | - | - | 49,356 | 780 | 777 | 782 | 782 | 3 |
| status='paid' AND country='US' | PAGINATION | first page | No | - | 100 | 728 | 626 | 779 | 779 | 3 |
| status='paid' AND country='US' | PAGINATION | first page | Yes | - | 100 | 724 | 618 | 777 | 777 | 3 |
| status='paid' AND country='US' | PAGINATION | 100th page | No | - | 100 | 731 | 637 | 778 | 778 | 3 |
| status='paid' AND country='US' | PAGINATION | 100th page | Yes | - | 100 | 727 | 626 | 778 | 778 | 3 |
| status='paid' AND country='US' | AGGREGATION | - | - | status | 1 | 777 | 775 | 778 | 778 | 3 |
| status='paid' AND country='US' | AGGREGATION | - | - | country | 1 | 779 | 777 | 781 | 781 | 3 |
| status='paid' AND country='US' | AGGREGATION | - | - | age | 62 | 776 | 775 | 777 | 777 | 3 |
| age BETWEEN 25 AND 45 | COUNT | - | - | - | 333,685 | 778 | 776 | 778 | 778 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | No | - | 100 | 777 | 774 | 780 | 780 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | Yes | - | 100 | 779 | 777 | 780 | 780 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | No | - | 100 | 778 | 777 | 778 | 778 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | Yes | - | 100 | 723 | 624 | 773 | 773 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | status | 4 | 727 | 626 | 778 | 778 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | country | 6 | 728 | 624 | 779 | 779 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | age | 21 | 726 | 619 | 780 | 780 | 3 |
| tags contains 'alpha' | COUNT | - | - | - | 379,856 | 776 | 774 | 778 | 778 | 3 |
| tags contains 'alpha' | PAGINATION | first page | No | - | 100 | 777 | 776 | 777 | 777 | 3 |
| tags contains 'alpha' | PAGINATION | first page | Yes | - | 100 | 777 | 775 | 778 | 778 | 3 |
| tags contains 'alpha' | PAGINATION | 100th page | No | - | 100 | 728 | 623 | 781 | 781 | 3 |
| tags contains 'alpha' | PAGINATION | 100th page | Yes | - | 100 | 778 | 775 | 781 | 781 | 3 |
| tags contains 'alpha' | AGGREGATION | - | - | status | 4 | 779 | 775 | 783 | 783 | 3 |
| tags contains 'alpha' | AGGREGATION | - | - | country | 6 | 777 | 774 | 778 | 778 | 3 |
| tags contains 'alpha' | AGGREGATION | - | - | age | 62 | 776 | 774 | 777 | 777 | 3 |
| note IS NOT NULL | COUNT | - | - | - | 899,699 | 778 | 777 | 778 | 778 | 3 |
| note IS NOT NULL | PAGINATION | first page | No | - | 100 | 725 | 624 | 776 | 776 | 3 |
| note IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 777 | 775 | 778 | 778 | 3 |
| note IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 777 | 771 | 781 | 781 | 3 |
| note IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 674 | 621 | 777 | 762 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | status | 4 | 779 | 775 | 782 | 782 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | country | 6 | 623 | 618 | 626 | 626 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | age | 62 | 776 | 772 | 779 | 779 | 3 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 `
- **Count/Rows:** 1,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 781ms
- **Min Duration:** 779ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 780ms
- **Min Duration:** 778ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 679ms
- **Min Duration:** 622ms
- **Max Duration:** 785ms
- **P95 Duration:** 770ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 780ms
- **Min Duration:** 778ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 782ms
- **Min Duration:** 780ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 728ms
- **Min Duration:** 627ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000  GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 780ms
- **Min Duration:** 779ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000  GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 778ms
- **Min Duration:** 775ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid'`
- **Count/Rows:** 249,575
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 676ms
- **Min Duration:** 625ms
- **Max Duration:** 777ms
- **P95 Duration:** 762ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 779ms
- **Min Duration:** 776ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 726ms
- **Min Duration:** 622ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 779ms
- **Min Duration:** 776ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 674ms
- **Min Duration:** 620ms
- **Max Duration:** 780ms
- **P95 Duration:** 765ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' GROUP BY status`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 780ms
- **Min Duration:** 779ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 729ms
- **Min Duration:** 628ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 780ms
- **Min Duration:** 778ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US'`
- **Count/Rows:** 196,581
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 729ms
- **Min Duration:** 627ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 776ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 726ms
- **Min Duration:** 625ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 780ms
- **Min Duration:** 778ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 777ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 779ms
- **Min Duration:** 775ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 779ms
- **Min Duration:** 775ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 776ms
- **Min Duration:** 774ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age > 30`
- **Count/Rows:** 763,931
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 776ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 780ms
- **Min Duration:** 778ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 779ms
- **Min Duration:** 777ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 724ms
- **Min Duration:** 620ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 727ms
- **Min Duration:** 622ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 778ms
- **Min Duration:** 777ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 779ms
- **Min Duration:** 778ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 GROUP BY age`
- **Count/Rows:** 48
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 778ms
- **Min Duration:** 777ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000`
- **Count/Rows:** 855,018
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 729ms
- **Min Duration:** 625ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 779ms
- **Min Duration:** 777ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 777ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 780ms
- **Min Duration:** 776ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 726ms
- **Min Duration:** 624ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 728ms
- **Min Duration:** 624ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 779ms
- **Min Duration:** 779ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### date >= 2024-06-01 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01'`
- **Count/Rows:** 584,954
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 780ms
- **Min Duration:** 779ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 777ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 780ms
- **Min Duration:** 779ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 778ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 777ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### date >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 779ms
- **Min Duration:** 778ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### date >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 780ms
- **Min Duration:** 777ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### date >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### status='paid' AND country='US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US'`
- **Count/Rows:** 49,356
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 780ms
- **Min Duration:** 777ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 728ms
- **Min Duration:** 626ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 724ms
- **Min Duration:** 618ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 731ms
- **Min Duration:** 637ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 727ms
- **Min Duration:** 626ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### status='paid' AND country='US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY status`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### status='paid' AND country='US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 779ms
- **Min Duration:** 777ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### status='paid' AND country='US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 776ms
- **Min Duration:** 775ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45`
- **Count/Rows:** 333,685
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 776ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 774ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 779ms
- **Min Duration:** 777ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 777ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 723ms
- **Min Duration:** 624ms
- **Max Duration:** 773ms
- **P95 Duration:** 773ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 727ms
- **Min Duration:** 626ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 728ms
- **Min Duration:** 624ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY age`
- **Count/Rows:** 21
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 726ms
- **Min Duration:** 619ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### tags contains 'alpha' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha')`
- **Count/Rows:** 379,856
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 774ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 776ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 728ms
- **Min Duration:** 623ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 775ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### tags contains 'alpha' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 779ms
- **Min Duration:** 775ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### tags contains 'alpha' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 777ms
- **Min Duration:** 774ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### tags contains 'alpha' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 776ms
- **Min Duration:** 774ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### note IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL`
- **Count/Rows:** 899,699
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 777ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 725ms
- **Min Duration:** 624ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 771ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 674ms
- **Min Duration:** 621ms
- **Max Duration:** 777ms
- **P95 Duration:** 762ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 779ms
- **Min Duration:** 775ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 623ms
- **Min Duration:** 618ms
- **Max Duration:** 626ms
- **P95 Duration:** 626ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 776ms
- **Min Duration:** 772ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

