# Query Performance Report

**Table:** iceberg.lab.narrow_10_000_000  
**Generated:** 2025-10-10T21:05:06.815Z  
**Total Rows:** 10,000,000  
**Table Size:** 293.0 MB

## Summary

- **Total Queries:** 240
- **Iterations:** 3
- **Average Duration:** 750ms
- **Fastest Query:** 609ms
- **Slowest Query:** 769ms
- **95th Percentile:** 766ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 10,000,000 | 765 | 764 | 766 | 766 |
| no filters | PAGINATION | first page | No | - | 100 | 714 | 614 | 764 | 764 |
| no filters | PAGINATION | first page | Yes | - | 100 | 767 | 765 | 769 | 769 |
| no filters | PAGINATION | 100th page | No | - | 100 | 765 | 764 | 766 | 766 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 765 | 763 | 768 | 768 |
| no filters | AGGREGATION | - | - | status | 4 | 765 | 764 | 765 | 765 |
| no filters | AGGREGATION | - | - | country | 6 | 663 | 611 | 764 | 749 |
| no filters | AGGREGATION | - | - | age | 62 | 763 | 761 | 764 | 764 |
| status = 'paid' | COUNT | - | - | - | 2,500,451 | 762 | 761 | 763 | 763 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 762 | 761 | 763 | 763 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 766 | 765 | 767 | 767 |
| status = 'paid' | PAGINATION | 100th page | No | - | 100 | 765 | 764 | 765 | 765 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 100 | 766 | 765 | 766 | 766 |
| status = 'paid' | AGGREGATION | - | - | status | 1 | 764 | 763 | 765 | 765 |
| status = 'paid' | AGGREGATION | - | - | country | 6 | 765 | 762 | 767 | 767 |
| status = 'paid' | AGGREGATION | - | - | age | 62 | 764 | 762 | 766 | 766 |
| country = 'US' | COUNT | - | - | - | 1,961,199 | 714 | 613 | 765 | 765 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 714 | 612 | 765 | 765 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 765 | 764 | 765 | 765 |
| country = 'US' | PAGINATION | 100th page | No | - | 100 | 764 | 761 | 765 | 765 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 766 | 765 | 767 | 767 |
| country = 'US' | AGGREGATION | - | - | status | 4 | 765 | 764 | 765 | 765 |
| country = 'US' | AGGREGATION | - | - | country | 1 | 765 | 762 | 766 | 766 |
| country = 'US' | AGGREGATION | - | - | age | 62 | 765 | 764 | 765 | 765 |
| age > 30 | COUNT | - | - | - | 7,631,939 | 765 | 763 | 765 | 765 |
| age > 30 | PAGINATION | first page | No | - | 100 | 765 | 764 | 765 | 765 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 715 | 614 | 766 | 766 |
| age > 30 | PAGINATION | 100th page | No | - | 100 | 764 | 763 | 764 | 764 |
| age > 30 | PAGINATION | 100th page | Yes | - | 100 | 765 | 763 | 766 | 766 |
| age > 30 | AGGREGATION | - | - | status | 4 | 764 | 763 | 764 | 764 |
| age > 30 | AGGREGATION | - | - | country | 6 | 764 | 763 | 765 | 765 |
| age > 30 | AGGREGATION | - | - | age | 48 | 713 | 612 | 763 | 763 |
| amount > 1000 | COUNT | - | - | - | 8,550,425 | 764 | 763 | 764 | 764 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 765 | 764 | 765 | 765 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 698 | 653 | 763 | 755 |
| amount > 1000 | PAGINATION | 100th page | No | - | 100 | 763 | 762 | 764 | 764 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 100 | 763 | 762 | 763 | 763 |
| amount > 1000 | AGGREGATION | - | - | status | 4 | 764 | 762 | 764 | 764 |
| amount > 1000 | AGGREGATION | - | - | country | 6 | 713 | 611 | 764 | 764 |
| amount > 1000 | AGGREGATION | - | - | age | 62 | 763 | 762 | 763 | 763 |
| created_at >= DATE '2024-06-01' | COUNT | - | - | - | 5,845,591 | 712 | 610 | 763 | 763 |
| created_at >= DATE '2024-06-01' | PAGINATION | first page | No | - | 100 | 763 | 762 | 763 | 763 |
| created_at >= DATE '2024-06-01' | PAGINATION | first page | Yes | - | 100 | 763 | 762 | 763 | 763 |
| created_at >= DATE '2024-06-01' | PAGINATION | 100th page | No | - | 100 | 764 | 763 | 764 | 764 |
| created_at >= DATE '2024-06-01' | PAGINATION | 100th page | Yes | - | 100 | 763 | 762 | 763 | 763 |
| created_at >= DATE '2024-06-01' | AGGREGATION | - | - | status | 4 | 765 | 763 | 766 | 766 |
| created_at >= DATE '2024-06-01' | AGGREGATION | - | - | country | 6 | 763 | 762 | 764 | 764 |
| created_at >= DATE '2024-06-01' | AGGREGATION | - | - | age | 62 | 764 | 763 | 764 | 764 |
| status = 'paid' AND country = 'US' | COUNT | - | - | - | 490,261 | 763 | 761 | 763 | 763 |
| status = 'paid' AND country = 'US' | PAGINATION | first page | No | - | 100 | 763 | 762 | 763 | 763 |
| status = 'paid' AND country = 'US' | PAGINATION | first page | Yes | - | 100 | 763 | 762 | 764 | 764 |
| status = 'paid' AND country = 'US' | PAGINATION | 100th page | No | - | 100 | 713 | 613 | 763 | 763 |
| status = 'paid' AND country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 764 | 762 | 765 | 765 |
| status = 'paid' AND country = 'US' | AGGREGATION | - | - | status | 1 | 713 | 611 | 763 | 763 |
| status = 'paid' AND country = 'US' | AGGREGATION | - | - | country | 1 | 713 | 612 | 763 | 763 |
| status = 'paid' AND country = 'US' | AGGREGATION | - | - | age | 62 | 763 | 762 | 764 | 764 |
| age BETWEEN 25 AND 45 | COUNT | - | - | - | 3,338,630 | 712 | 609 | 763 | 763 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | No | - | 100 | 764 | 763 | 764 | 764 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | Yes | - | 100 | 763 | 762 | 764 | 764 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | No | - | 100 | 764 | 764 | 764 | 764 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | Yes | - | 100 | 763 | 761 | 764 | 764 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | status | 4 | 713 | 612 | 764 | 764 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | country | 6 | 713 | 612 | 763 | 763 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | age | 21 | 763 | 762 | 764 | 764 |
| contains(tags, 'alpha') | COUNT | - | - | - | 3,797,495 | 679 | 628 | 762 | 751 |
| contains(tags, 'alpha') | PAGINATION | first page | No | - | 100 | 713 | 613 | 763 | 763 |
| contains(tags, 'alpha') | PAGINATION | first page | Yes | - | 100 | 764 | 763 | 764 | 764 |
| contains(tags, 'alpha') | PAGINATION | 100th page | No | - | 100 | 712 | 610 | 763 | 763 |
| contains(tags, 'alpha') | PAGINATION | 100th page | Yes | - | 100 | 762 | 761 | 763 | 763 |
| contains(tags, 'alpha') | AGGREGATION | - | - | status | 4 | 763 | 762 | 764 | 764 |
| contains(tags, 'alpha') | AGGREGATION | - | - | country | 6 | 763 | 762 | 763 | 763 |
| contains(tags, 'alpha') | AGGREGATION | - | - | age | 62 | 763 | 762 | 763 | 763 |
| note IS NOT NULL | COUNT | - | - | - | 9,001,257 | 763 | 762 | 763 | 763 |
| note IS NOT NULL | PAGINATION | first page | No | - | 100 | 713 | 611 | 763 | 763 |
| note IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 763 | 762 | 764 | 764 |
| note IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 762 | 761 | 763 | 763 |
| note IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 722 | 640 | 763 | 763 |
| note IS NOT NULL | AGGREGATION | - | - | status | 4 | 762 | 762 | 762 | 762 |
| note IS NOT NULL | AGGREGATION | - | - | country | 6 | 762 | 761 | 762 | 762 |
| note IS NOT NULL | AGGREGATION | - | - | age | 62 | 763 | 761 | 763 | 763 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 `
- **Count/Rows:** 10,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 764ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 714ms
- **Min Duration:** 614ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 767ms
- **Min Duration:** 765ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 764ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 763ms
- **Max Duration:** 768ms
- **P95 Duration:** 768ms

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 765ms
- **Min Duration:** 764ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### no filters - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000  GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 663ms
- **Min Duration:** 611ms
- **Max Duration:** 764ms
- **P95 Duration:** 749ms

### no filters - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000  GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 763ms
- **Min Duration:** 761ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid'`
- **Count/Rows:** 2,500,451
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 766ms
- **Min Duration:** 765ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 764ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 766ms
- **Min Duration:** 765ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' GROUP BY status`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 764ms
- **Min Duration:** 763ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 765ms
- **Min Duration:** 762ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 764ms
- **Min Duration:** 762ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US'`
- **Count/Rows:** 1,961,199
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 714ms
- **Min Duration:** 613ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 714ms
- **Min Duration:** 612ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 764ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 761ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 766ms
- **Min Duration:** 765ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### country = 'US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 765ms
- **Min Duration:** 764ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### country = 'US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 765ms
- **Min Duration:** 762ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### country = 'US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 765ms
- **Min Duration:** 764ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age > 30`
- **Count/Rows:** 7,631,939
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 763ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 764ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 715ms
- **Min Duration:** 614ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 763ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 763ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### age > 30 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 764ms
- **Min Duration:** 763ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### age > 30 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 764ms
- **Min Duration:** 763ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### age > 30 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 GROUP BY age`
- **Count/Rows:** 48
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 713ms
- **Min Duration:** 612ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000`
- **Count/Rows:** 8,550,425
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 763ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 764ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 698ms
- **Min Duration:** 653ms
- **Max Duration:** 763ms
- **P95 Duration:** 755ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 764ms
- **Min Duration:** 762ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 713ms
- **Min Duration:** 611ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### created_at >= DATE '2024-06-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01'`
- **Count/Rows:** 5,845,591
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 610ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 763ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### created_at >= DATE '2024-06-01' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 765ms
- **Min Duration:** 763ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### created_at >= DATE '2024-06-01' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### created_at >= DATE '2024-06-01' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 764ms
- **Min Duration:** 763ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### status = 'paid' AND country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US'`
- **Count/Rows:** 490,261
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### status = 'paid' AND country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### status = 'paid' AND country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### status = 'paid' AND country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 713ms
- **Min Duration:** 613ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### status = 'paid' AND country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 762ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### status = 'paid' AND country = 'US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY status`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 713ms
- **Min Duration:** 611ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### status = 'paid' AND country = 'US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 713ms
- **Min Duration:** 612ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### status = 'paid' AND country = 'US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### age BETWEEN 25 AND 45 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45`
- **Count/Rows:** 3,338,630
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 609ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 763ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 764ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 761ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 713ms
- **Min Duration:** 612ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 713ms
- **Min Duration:** 612ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY age`
- **Count/Rows:** 21
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### contains(tags, 'alpha') - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha')`
- **Count/Rows:** 3,797,495
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 679ms
- **Min Duration:** 628ms
- **Max Duration:** 762ms
- **P95 Duration:** 751ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 713ms
- **Min Duration:** 613ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 763ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 610ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### contains(tags, 'alpha') - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### contains(tags, 'alpha') - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### contains(tags, 'alpha') - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### note IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL`
- **Count/Rows:** 9,001,257
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 713ms
- **Min Duration:** 611ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 722ms
- **Min Duration:** 640ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 762ms
- **Min Duration:** 762ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 763ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

