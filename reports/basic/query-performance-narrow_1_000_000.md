# Query Performance Report

**Table:** iceberg.lab.narrow_1_000_000  
**Generated:** 2025-10-10T20:13:24.470Z  
**Total Rows:** 1,000,000  
**Table Size:** 29.3 MB

## Summary

- **Total Queries:** 240
- **Average Duration:** 765ms
- **Fastest Query:** 626ms
- **Slowest Query:** 1_025ms
- **95th Percentile:** 790ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
| no filters | COUNT | - | - | - | 1,000,000 | 786 | 785 | 787 | 787 | 3 |
| no filters | PAGINATION | first page | No | - | 100 | 737 | 635 | 790 | 790 | 3 |
| no filters | PAGINATION | first page | Yes | - | 100 | 740 | 647 | 790 | 790 | 3 |
| no filters | PAGINATION | 100th page | No | - | 100 | 790 | 786 | 793 | 793 | 3 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 786 | 784 | 787 | 787 | 3 |
| no filters | AGGREGATION | - | - | status | 4 | 734 | 633 | 785 | 785 | 3 |
| no filters | AGGREGATION | - | - | country | 6 | 785 | 782 | 787 | 787 | 3 |
| no filters | AGGREGATION | - | - | age | 62 | 786 | 784 | 787 | 787 | 3 |
| status = 'paid' | COUNT | - | - | - | 249,575 | 784 | 783 | 785 | 785 | 3 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 785 | 783 | 786 | 786 | 3 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 784 | 783 | 784 | 784 | 3 |
| status = 'paid' | PAGINATION | 100th page | No | - | 100 | 785 | 783 | 787 | 787 | 3 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 100 | 746 | 655 | 794 | 794 | 3 |
| status = 'paid' | AGGREGATION | - | - | status | 1 | 784 | 783 | 785 | 785 | 3 |
| status = 'paid' | AGGREGATION | - | - | country | 6 | 784 | 783 | 784 | 784 | 3 |
| status = 'paid' | AGGREGATION | - | - | age | 62 | 682 | 629 | 784 | 769 | 3 |
| country = 'US' | COUNT | - | - | - | 196,581 | 732 | 631 | 783 | 783 | 3 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 785 | 782 | 787 | 787 | 3 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 783 | 781 | 783 | 783 | 3 |
| country = 'US' | PAGINATION | 100th page | No | - | 100 | 632 | 631 | 633 | 633 | 3 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 783 | 781 | 784 | 784 | 3 |
| country = 'US' | AGGREGATION | - | - | status | 4 | 784 | 782 | 786 | 786 | 3 |
| country = 'US' | AGGREGATION | - | - | country | 1 | 784 | 783 | 784 | 784 | 3 |
| country = 'US' | AGGREGATION | - | - | age | 62 | 783 | 782 | 784 | 784 | 3 |
| age > 30 | COUNT | - | - | - | 763,931 | 783 | 782 | 784 | 784 | 3 |
| age > 30 | PAGINATION | first page | No | - | 100 | 785 | 784 | 786 | 786 | 3 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 733 | 632 | 784 | 784 | 3 |
| age > 30 | PAGINATION | 100th page | No | - | 100 | 736 | 639 | 787 | 787 | 3 |
| age > 30 | PAGINATION | 100th page | Yes | - | 100 | 747 | 670 | 786 | 786 | 3 |
| age > 30 | AGGREGATION | - | - | status | 4 | 733 | 630 | 785 | 785 | 3 |
| age > 30 | AGGREGATION | - | - | country | 6 | 734 | 632 | 785 | 785 | 3 |
| age > 30 | AGGREGATION | - | - | age | 48 | 783 | 782 | 783 | 783 | 3 |
| amount > 1000 | COUNT | - | - | - | 855,018 | 682 | 629 | 782 | 768 | 3 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 784 | 783 | 784 | 784 | 3 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 783 | 780 | 785 | 785 | 3 |
| amount > 1000 | PAGINATION | 100th page | No | - | 100 | 783 | 781 | 784 | 784 | 3 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 100 | 839 | 783 | 948 | 932 | 3 |
| amount > 1000 | AGGREGATION | - | - | status | 4 | 785 | 784 | 785 | 785 | 3 |
| amount > 1000 | AGGREGATION | - | - | country | 6 | 782 | 781 | 784 | 784 | 3 |
| amount > 1000 | AGGREGATION | - | - | age | 62 | 783 | 782 | 783 | 783 | 3 |
| created_at >= DATE '2024-06-01' | COUNT | - | - | - | 584,954 | 786 | 783 | 788 | 788 | 3 |
| created_at >= DATE '2024-06-01' | PAGINATION | first page | No | - | 100 | 734 | 631 | 785 | 785 | 3 |
| created_at >= DATE '2024-06-01' | PAGINATION | first page | Yes | - | 100 | 757 | 702 | 785 | 785 | 3 |
| created_at >= DATE '2024-06-01' | PAGINATION | 100th page | No | - | 100 | 731 | 628 | 784 | 784 | 3 |
| created_at >= DATE '2024-06-01' | PAGINATION | 100th page | Yes | - | 100 | 740 | 655 | 782 | 782 | 3 |
| created_at >= DATE '2024-06-01' | AGGREGATION | - | - | status | 4 | 783 | 782 | 783 | 783 | 3 |
| created_at >= DATE '2024-06-01' | AGGREGATION | - | - | country | 6 | 731 | 629 | 784 | 784 | 3 |
| created_at >= DATE '2024-06-01' | AGGREGATION | - | - | age | 62 | 784 | 781 | 786 | 786 | 3 |
| status = 'paid' AND country = 'US' | COUNT | - | - | - | 49,356 | 783 | 781 | 783 | 783 | 3 |
| status = 'paid' AND country = 'US' | PAGINATION | first page | No | - | 100 | 785 | 783 | 785 | 785 | 3 |
| status = 'paid' AND country = 'US' | PAGINATION | first page | Yes | - | 100 | 731 | 628 | 782 | 782 | 3 |
| status = 'paid' AND country = 'US' | PAGINATION | 100th page | No | - | 100 | 734 | 632 | 785 | 785 | 3 |
| status = 'paid' AND country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 783 | 782 | 783 | 783 | 3 |
| status = 'paid' AND country = 'US' | AGGREGATION | - | - | status | 1 | 782 | 781 | 783 | 783 | 3 |
| status = 'paid' AND country = 'US' | AGGREGATION | - | - | country | 1 | 783 | 781 | 783 | 783 | 3 |
| status = 'paid' AND country = 'US' | AGGREGATION | - | - | age | 62 | 783 | 781 | 785 | 785 | 3 |
| age BETWEEN 25 AND 45 | COUNT | - | - | - | 333,685 | 785 | 784 | 785 | 785 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | No | - | 100 | 782 | 781 | 783 | 783 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | Yes | - | 100 | 783 | 781 | 784 | 784 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | No | - | 100 | 783 | 781 | 784 | 784 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | Yes | - | 100 | 787 | 784 | 790 | 790 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | status | 4 | 783 | 782 | 783 | 783 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | country | 6 | 732 | 629 | 783 | 783 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | age | 21 | 780 | 779 | 781 | 781 | 3 |
| contains(tags, 'alpha') | COUNT | - | - | - | 379,856 | 738 | 653 | 780 | 780 | 3 |
| contains(tags, 'alpha') | PAGINATION | first page | No | - | 100 | 783 | 781 | 783 | 783 | 3 |
| contains(tags, 'alpha') | PAGINATION | first page | Yes | - | 100 | 776 | 767 | 782 | 782 | 3 |
| contains(tags, 'alpha') | PAGINATION | 100th page | No | - | 100 | 783 | 782 | 783 | 783 | 3 |
| contains(tags, 'alpha') | PAGINATION | 100th page | Yes | - | 100 | 909 | 872 | 942 | 939 | 3 |
| contains(tags, 'alpha') | AGGREGATION | - | - | status | 4 | 808 | 781 | 859 | 852 | 3 |
| contains(tags, 'alpha') | AGGREGATION | - | - | country | 6 | 886 | 780 | 1_025 | 1_008 | 3 |
| contains(tags, 'alpha') | AGGREGATION | - | - | age | 62 | 781 | 780 | 783 | 783 | 3 |
| note IS NOT NULL | COUNT | - | - | - | 899,699 | 681 | 629 | 783 | 768 | 3 |
| note IS NOT NULL | PAGINATION | first page | No | - | 100 | 684 | 628 | 789 | 774 | 3 |
| note IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 662 | 628 | 689 | 687 | 3 |
| note IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 782 | 781 | 783 | 783 | 3 |
| note IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 805 | 781 | 821 | 820 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | status | 4 | 680 | 628 | 783 | 768 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | country | 6 | 680 | 626 | 782 | 767 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | age | 62 | 731 | 628 | 783 | 783 | 3 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 `
- **Count/Rows:** 1,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 786ms
- **Min Duration:** 785ms
- **Max Duration:** 787ms
- **P95 Duration:** 787ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 737ms
- **Min Duration:** 635ms
- **Max Duration:** 790ms
- **P95 Duration:** 790ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 740ms
- **Min Duration:** 647ms
- **Max Duration:** 790ms
- **P95 Duration:** 790ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 790ms
- **Min Duration:** 786ms
- **Max Duration:** 793ms
- **P95 Duration:** 793ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 786ms
- **Min Duration:** 784ms
- **Max Duration:** 787ms
- **P95 Duration:** 787ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 734ms
- **Min Duration:** 633ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000  GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 785ms
- **Min Duration:** 782ms
- **Max Duration:** 787ms
- **P95 Duration:** 787ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000  GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 786ms
- **Min Duration:** 784ms
- **Max Duration:** 787ms
- **P95 Duration:** 787ms
- **Runs:** 3

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid'`
- **Count/Rows:** 249,575
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 784ms
- **Min Duration:** 783ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 785ms
- **Min Duration:** 783ms
- **Max Duration:** 786ms
- **P95 Duration:** 786ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 784ms
- **Min Duration:** 783ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 785ms
- **Min Duration:** 783ms
- **Max Duration:** 787ms
- **P95 Duration:** 787ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 746ms
- **Min Duration:** 655ms
- **Max Duration:** 794ms
- **P95 Duration:** 794ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' GROUP BY status`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 784ms
- **Min Duration:** 783ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 784ms
- **Min Duration:** 783ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 682ms
- **Min Duration:** 629ms
- **Max Duration:** 784ms
- **P95 Duration:** 769ms
- **Runs:** 3

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US'`
- **Count/Rows:** 196,581
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 732ms
- **Min Duration:** 631ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 785ms
- **Min Duration:** 782ms
- **Max Duration:** 787ms
- **P95 Duration:** 787ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 783ms
- **Min Duration:** 781ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 632ms
- **Min Duration:** 631ms
- **Max Duration:** 633ms
- **P95 Duration:** 633ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 783ms
- **Min Duration:** 781ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 784ms
- **Min Duration:** 782ms
- **Max Duration:** 786ms
- **P95 Duration:** 786ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 784ms
- **Min Duration:** 783ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 783ms
- **Min Duration:** 782ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age > 30`
- **Count/Rows:** 763,931
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 783ms
- **Min Duration:** 782ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 785ms
- **Min Duration:** 784ms
- **Max Duration:** 786ms
- **P95 Duration:** 786ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 733ms
- **Min Duration:** 632ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 736ms
- **Min Duration:** 639ms
- **Max Duration:** 787ms
- **P95 Duration:** 787ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 747ms
- **Min Duration:** 670ms
- **Max Duration:** 786ms
- **P95 Duration:** 786ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 733ms
- **Min Duration:** 630ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 734ms
- **Min Duration:** 632ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age > 30 GROUP BY age`
- **Count/Rows:** 48
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 783ms
- **Min Duration:** 782ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000`
- **Count/Rows:** 855,018
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 682ms
- **Min Duration:** 629ms
- **Max Duration:** 782ms
- **P95 Duration:** 768ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 784ms
- **Min Duration:** 783ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 783ms
- **Min Duration:** 780ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 783ms
- **Min Duration:** 781ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 839ms
- **Min Duration:** 783ms
- **Max Duration:** 948ms
- **P95 Duration:** 932ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 785ms
- **Min Duration:** 784ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 782ms
- **Min Duration:** 781ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE amount > 1000 GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 783ms
- **Min Duration:** 782ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### created_at >= DATE '2024-06-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01'`
- **Count/Rows:** 584,954
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 786ms
- **Min Duration:** 783ms
- **Max Duration:** 788ms
- **P95 Duration:** 788ms
- **Runs:** 3

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 734ms
- **Min Duration:** 631ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 757ms
- **Min Duration:** 702ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 731ms
- **Min Duration:** 628ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 740ms
- **Min Duration:** 655ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### created_at >= DATE '2024-06-01' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 783ms
- **Min Duration:** 782ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### created_at >= DATE '2024-06-01' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 731ms
- **Min Duration:** 629ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### created_at >= DATE '2024-06-01' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 784ms
- **Min Duration:** 781ms
- **Max Duration:** 786ms
- **P95 Duration:** 786ms
- **Runs:** 3

### status = 'paid' AND country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US'`
- **Count/Rows:** 49,356
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 783ms
- **Min Duration:** 781ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### status = 'paid' AND country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 785ms
- **Min Duration:** 783ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### status = 'paid' AND country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 731ms
- **Min Duration:** 628ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### status = 'paid' AND country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 734ms
- **Min Duration:** 632ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### status = 'paid' AND country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 783ms
- **Min Duration:** 782ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### status = 'paid' AND country = 'US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY status`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 782ms
- **Min Duration:** 781ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### status = 'paid' AND country = 'US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 783ms
- **Min Duration:** 781ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### status = 'paid' AND country = 'US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 783ms
- **Min Duration:** 781ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45`
- **Count/Rows:** 333,685
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 785ms
- **Min Duration:** 784ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 782ms
- **Min Duration:** 781ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 783ms
- **Min Duration:** 781ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 783ms
- **Min Duration:** 781ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 787ms
- **Min Duration:** 784ms
- **Max Duration:** 790ms
- **P95 Duration:** 790ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 783ms
- **Min Duration:** 782ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 732ms
- **Min Duration:** 629ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY age`
- **Count/Rows:** 21
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 780ms
- **Min Duration:** 779ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### contains(tags, 'alpha') - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha')`
- **Count/Rows:** 379,856
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 738ms
- **Min Duration:** 653ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 783ms
- **Min Duration:** 781ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 767ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 783ms
- **Min Duration:** 782ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 909ms
- **Min Duration:** 872ms
- **Max Duration:** 942ms
- **P95 Duration:** 939ms
- **Runs:** 3

### contains(tags, 'alpha') - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 808ms
- **Min Duration:** 781ms
- **Max Duration:** 859ms
- **P95 Duration:** 852ms
- **Runs:** 3

### contains(tags, 'alpha') - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 886ms
- **Min Duration:** 780ms
- **Max Duration:** 1_025ms
- **P95 Duration:** 1_008ms
- **Runs:** 3

### contains(tags, 'alpha') - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE contains(tags, 'alpha') GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 781ms
- **Min Duration:** 780ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### note IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL`
- **Count/Rows:** 899,699
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 681ms
- **Min Duration:** 629ms
- **Max Duration:** 783ms
- **P95 Duration:** 768ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 684ms
- **Min Duration:** 628ms
- **Max Duration:** 789ms
- **P95 Duration:** 774ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 662ms
- **Min Duration:** 628ms
- **Max Duration:** 689ms
- **P95 Duration:** 687ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 782ms
- **Min Duration:** 781ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 805ms
- **Min Duration:** 781ms
- **Max Duration:** 821ms
- **P95 Duration:** 820ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 680ms
- **Min Duration:** 628ms
- **Max Duration:** 783ms
- **P95 Duration:** 768ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 680ms
- **Min Duration:** 626ms
- **Max Duration:** 782ms
- **P95 Duration:** 767ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000 WHERE note IS NOT NULL GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 731ms
- **Min Duration:** 628ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

