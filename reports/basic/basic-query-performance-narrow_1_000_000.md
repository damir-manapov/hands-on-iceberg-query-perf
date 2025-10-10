# Query Performance Report

**Table:** iceberg.lab.narrow_1_000_000  
**Generated:** 2025-10-10T21:01:49.434Z  
**Total Rows:** 1,000,000  
**Table Size:** 29.3 MB

## Summary

- **Total Queries:** 240
- **Iterations:** 3
- **Average Duration:** 754ms
- **Fastest Query:** 613ms
- **Slowest Query:** 778ms
- **95th Percentile:** 772ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 1,000,000 | 777 | 775 | 778 | 778 |
| no filters | PAGINATION | first page | No | - | 100 | 727 | 630 | 776 | 776 |
| no filters | PAGINATION | first page | Yes | - | 100 | 687 | 621 | 776 | 765 |
| no filters | PAGINATION | 100th page | No | - | 100 | 723 | 622 | 774 | 774 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 772 | 771 | 773 | 773 |
| no filters | AGGREGATION | - | - | status | 4 | 772 | 771 | 773 | 773 |
| no filters | AGGREGATION | - | - | country | 6 | 772 | 769 | 775 | 775 |
| no filters | AGGREGATION | - | - | age | 62 | 721 | 619 | 772 | 772 |
| status = 'paid' | COUNT | - | - | - | 249,575 | 772 | 770 | 772 | 772 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 720 | 617 | 772 | 772 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 718 | 616 | 769 | 769 |
| status = 'paid' | PAGINATION | 100th page | No | - | 100 | 767 | 766 | 768 | 768 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 100 | 769 | 767 | 770 | 770 |
| status = 'paid' | AGGREGATION | - | - | status | 1 | 768 | 766 | 769 | 769 |
| status = 'paid' | AGGREGATION | - | - | country | 6 | 768 | 765 | 770 | 770 |
| status = 'paid' | AGGREGATION | - | - | age | 62 | 718 | 616 | 769 | 769 |
| country = 'US' | COUNT | - | - | - | 196,581 | 768 | 767 | 768 | 768 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 768 | 766 | 769 | 769 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 766 | 764 | 768 | 768 |
| country = 'US' | PAGINATION | 100th page | No | - | 100 | 717 | 615 | 768 | 768 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 767 | 766 | 768 | 768 |
| country = 'US' | AGGREGATION | - | - | status | 4 | 716 | 615 | 767 | 767 |
| country = 'US' | AGGREGATION | - | - | country | 1 | 767 | 766 | 768 | 768 |
| country = 'US' | AGGREGATION | - | - | age | 62 | 766 | 765 | 767 | 767 |
| age > 30 | COUNT | - | - | - | 763,931 | 767 | 766 | 767 | 767 |
| age > 30 | PAGINATION | first page | No | - | 100 | 768 | 767 | 769 | 769 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 767 | 765 | 767 | 767 |
| age > 30 | PAGINATION | 100th page | No | - | 100 | 767 | 767 | 767 | 767 |
| age > 30 | PAGINATION | 100th page | Yes | - | 100 | 768 | 767 | 769 | 769 |
| age > 30 | AGGREGATION | - | - | status | 4 | 767 | 765 | 768 | 768 |
| age > 30 | AGGREGATION | - | - | country | 6 | 767 | 766 | 769 | 769 |
| age > 30 | AGGREGATION | - | - | age | 48 | 716 | 613 | 767 | 767 |
| amount > 1000 | COUNT | - | - | - | 855,018 | 717 | 614 | 769 | 769 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 768 | 767 | 768 | 768 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 766 | 765 | 767 | 767 |
| amount > 1000 | PAGINATION | 100th page | No | - | 100 | 766 | 766 | 766 | 766 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 100 | 766 | 765 | 767 | 767 |
| amount > 1000 | AGGREGATION | - | - | status | 4 | 767 | 766 | 767 | 767 |
| amount > 1000 | AGGREGATION | - | - | country | 6 | 716 | 615 | 766 | 766 |
| amount > 1000 | AGGREGATION | - | - | age | 62 | 767 | 766 | 767 | 767 |
| created_at >= DATE '2024-06-01' | COUNT | - | - | - | 584,954 | 716 | 616 | 767 | 767 |
| created_at >= DATE '2024-06-01' | PAGINATION | first page | No | - | 100 | 766 | 765 | 766 | 766 |
| created_at >= DATE '2024-06-01' | PAGINATION | first page | Yes | - | 100 | 716 | 614 | 769 | 769 |
| created_at >= DATE '2024-06-01' | PAGINATION | 100th page | No | - | 100 | 766 | 763 | 768 | 768 |
| created_at >= DATE '2024-06-01' | PAGINATION | 100th page | Yes | - | 100 | 766 | 765 | 766 | 766 |
| created_at >= DATE '2024-06-01' | AGGREGATION | - | - | status | 4 | 716 | 613 | 768 | 768 |
| created_at >= DATE '2024-06-01' | AGGREGATION | - | - | country | 6 | 716 | 615 | 767 | 767 |
| created_at >= DATE '2024-06-01' | AGGREGATION | - | - | age | 62 | 766 | 764 | 767 | 767 |
| status = 'paid' AND country = 'US' | COUNT | - | - | - | 49,356 | 766 | 762 | 769 | 769 |
| status = 'paid' AND country = 'US' | PAGINATION | first page | No | - | 100 | 766 | 764 | 766 | 766 |
| status = 'paid' AND country = 'US' | PAGINATION | first page | Yes | - | 100 | 765 | 765 | 765 | 765 |
| status = 'paid' AND country = 'US' | PAGINATION | 100th page | No | - | 100 | 765 | 764 | 766 | 766 |
| status = 'paid' AND country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 765 | 763 | 765 | 765 |
| status = 'paid' AND country = 'US' | AGGREGATION | - | - | status | 1 | 765 | 764 | 766 | 766 |
| status = 'paid' AND country = 'US' | AGGREGATION | - | - | country | 1 | 765 | 763 | 767 | 767 |
| status = 'paid' AND country = 'US' | AGGREGATION | - | - | age | 62 | 765 | 764 | 765 | 765 |
| age BETWEEN 25 AND 45 | COUNT | - | - | - | 333,685 | 765 | 764 | 765 | 765 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | No | - | 100 | 765 | 763 | 766 | 766 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | Yes | - | 100 | 766 | 764 | 767 | 767 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | No | - | 100 | 765 | 764 | 765 | 765 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | Yes | - | 100 | 716 | 614 | 766 | 766 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | status | 4 | 766 | 765 | 766 | 766 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | country | 6 | 765 | 763 | 767 | 767 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | age | 21 | 766 | 765 | 766 | 766 |
| contains(tags, 'alpha') | COUNT | - | - | - | 379,856 | 766 | 764 | 766 | 766 |
| contains(tags, 'alpha') | PAGINATION | first page | No | - | 100 | 767 | 765 | 769 | 769 |
| contains(tags, 'alpha') | PAGINATION | first page | Yes | - | 100 | 715 | 615 | 765 | 765 |
| contains(tags, 'alpha') | PAGINATION | 100th page | No | - | 100 | 765 | 765 | 765 | 765 |
| contains(tags, 'alpha') | PAGINATION | 100th page | Yes | - | 100 | 766 | 765 | 767 | 767 |
| contains(tags, 'alpha') | AGGREGATION | - | - | status | 4 | 764 | 763 | 764 | 764 |
| contains(tags, 'alpha') | AGGREGATION | - | - | country | 6 | 716 | 613 | 767 | 767 |
| contains(tags, 'alpha') | AGGREGATION | - | - | age | 62 | 765 | 764 | 766 | 766 |
| note IS NOT NULL | COUNT | - | - | - | 899,699 | 764 | 763 | 766 | 766 |
| note IS NOT NULL | PAGINATION | first page | No | - | 100 | 765 | 763 | 766 | 766 |
| note IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 715 | 615 | 765 | 765 |
| note IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 765 | 764 | 765 | 765 |
| note IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 765 | 764 | 766 | 766 |
| note IS NOT NULL | AGGREGATION | - | - | status | 4 | 765 | 764 | 766 | 766 |
| note IS NOT NULL | AGGREGATION | - | - | country | 6 | 766 | 765 | 766 | 766 |
| note IS NOT NULL | AGGREGATION | - | - | age | 62 | 764 | 763 | 764 | 764 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 `
- **Count/Rows:** 1,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 727ms
- **Min Duration:** 630ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 687ms
- **Min Duration:** 621ms
- **Max Duration:** 776ms
- **P95 Duration:** 765ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 723ms
- **Min Duration:** 622ms
- **Max Duration:** 774ms
- **P95 Duration:** 774ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 772ms
- **Min Duration:** 771ms
- **Max Duration:** 773ms
- **P95 Duration:** 773ms

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 772ms
- **Min Duration:** 771ms
- **Max Duration:** 773ms
- **P95 Duration:** 773ms

### no filters - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000  GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 772ms
- **Min Duration:** 769ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms

### no filters - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000  GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 721ms
- **Min Duration:** 619ms
- **Max Duration:** 772ms
- **P95 Duration:** 772ms

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid'`
- **Count/Rows:** 249,575
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 772ms
- **Min Duration:** 770ms
- **Max Duration:** 772ms
- **P95 Duration:** 772ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 720ms
- **Min Duration:** 617ms
- **Max Duration:** 772ms
- **P95 Duration:** 772ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 718ms
- **Min Duration:** 616ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 767ms
- **Min Duration:** 766ms
- **Max Duration:** 768ms
- **P95 Duration:** 768ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 769ms
- **Min Duration:** 767ms
- **Max Duration:** 770ms
- **P95 Duration:** 770ms

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' GROUP BY status`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 768ms
- **Min Duration:** 766ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 768ms
- **Min Duration:** 765ms
- **Max Duration:** 770ms
- **P95 Duration:** 770ms

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 718ms
- **Min Duration:** 616ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US'`
- **Count/Rows:** 196,581
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 768ms
- **Min Duration:** 767ms
- **Max Duration:** 768ms
- **P95 Duration:** 768ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 768ms
- **Min Duration:** 766ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 766ms
- **Min Duration:** 764ms
- **Max Duration:** 768ms
- **P95 Duration:** 768ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 717ms
- **Min Duration:** 615ms
- **Max Duration:** 768ms
- **P95 Duration:** 768ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 767ms
- **Min Duration:** 766ms
- **Max Duration:** 768ms
- **P95 Duration:** 768ms

### country = 'US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 716ms
- **Min Duration:** 615ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### country = 'US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 767ms
- **Min Duration:** 766ms
- **Max Duration:** 768ms
- **P95 Duration:** 768ms

### country = 'US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 766ms
- **Min Duration:** 765ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age > 30`
- **Count/Rows:** 763,931
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 767ms
- **Min Duration:** 766ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 768ms
- **Min Duration:** 767ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 767ms
- **Min Duration:** 765ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 767ms
- **Min Duration:** 767ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 768ms
- **Min Duration:** 767ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### age > 30 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 767ms
- **Min Duration:** 765ms
- **Max Duration:** 768ms
- **P95 Duration:** 768ms

### age > 30 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 767ms
- **Min Duration:** 766ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### age > 30 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 GROUP BY age`
- **Count/Rows:** 48
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 716ms
- **Min Duration:** 613ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000`
- **Count/Rows:** 855,018
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 717ms
- **Min Duration:** 614ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 768ms
- **Min Duration:** 767ms
- **Max Duration:** 768ms
- **P95 Duration:** 768ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 766ms
- **Min Duration:** 765ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 766ms
- **Min Duration:** 766ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 766ms
- **Min Duration:** 765ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 767ms
- **Min Duration:** 766ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 716ms
- **Min Duration:** 615ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 767ms
- **Min Duration:** 766ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### created_at >= DATE '2024-06-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01'`
- **Count/Rows:** 584,954
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 716ms
- **Min Duration:** 616ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 766ms
- **Min Duration:** 765ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 716ms
- **Min Duration:** 614ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 766ms
- **Min Duration:** 763ms
- **Max Duration:** 768ms
- **P95 Duration:** 768ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 766ms
- **Min Duration:** 765ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### created_at >= DATE '2024-06-01' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 716ms
- **Min Duration:** 613ms
- **Max Duration:** 768ms
- **P95 Duration:** 768ms

### created_at >= DATE '2024-06-01' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 716ms
- **Min Duration:** 615ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### created_at >= DATE '2024-06-01' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 766ms
- **Min Duration:** 764ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### status = 'paid' AND country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US'`
- **Count/Rows:** 49,356
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 766ms
- **Min Duration:** 762ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### status = 'paid' AND country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 766ms
- **Min Duration:** 764ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### status = 'paid' AND country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 765ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### status = 'paid' AND country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 764ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### status = 'paid' AND country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 763ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### status = 'paid' AND country = 'US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY status`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 765ms
- **Min Duration:** 764ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### status = 'paid' AND country = 'US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 765ms
- **Min Duration:** 763ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### status = 'paid' AND country = 'US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 765ms
- **Min Duration:** 764ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### age BETWEEN 25 AND 45 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45`
- **Count/Rows:** 333,685
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 764ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 763ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 766ms
- **Min Duration:** 764ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 764ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 716ms
- **Min Duration:** 614ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 766ms
- **Min Duration:** 765ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 765ms
- **Min Duration:** 763ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY age`
- **Count/Rows:** 21
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 766ms
- **Min Duration:** 765ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### contains(tags, 'alpha') - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha')`
- **Count/Rows:** 379,856
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 766ms
- **Min Duration:** 764ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 767ms
- **Min Duration:** 765ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 715ms
- **Min Duration:** 615ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 765ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 766ms
- **Min Duration:** 765ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### contains(tags, 'alpha') - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 764ms
- **Min Duration:** 763ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### contains(tags, 'alpha') - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 716ms
- **Min Duration:** 613ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### contains(tags, 'alpha') - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 765ms
- **Min Duration:** 764ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### note IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL`
- **Count/Rows:** 899,699
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 763ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 763ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 715ms
- **Min Duration:** 615ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 764ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 764ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 765ms
- **Min Duration:** 764ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 766ms
- **Min Duration:** 765ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 764ms
- **Min Duration:** 763ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

