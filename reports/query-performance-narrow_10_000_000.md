# Query Performance Report

**Table:** iceberg.lab.narrow_10_000_000  
**Generated:** 2025-10-10T19:04:06.813Z  
**Total Rows:** 10,000,000  
**Table Size:** 293.0 MB

## Summary

- **Total Queries:** 240
- **Average Duration:** 815ms
- **Fastest Query:** 619ms
- **Slowest Query:** 1_538ms
- **95th Percentile:** 1_215ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
| no filters | COUNT | - | - | - | 10,000,000 | 778 | 776 | 780 | 780 | 3 |
| no filters | PAGINATION | first page | No | - | 100 | 777 | 776 | 777 | 777 | 3 |
| no filters | PAGINATION | first page | Yes | - | 100 | 777 | 775 | 778 | 778 | 3 |
| no filters | PAGINATION | 100th page | No | - | 100 | 676 | 623 | 778 | 763 | 3 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 820 | 775 | 860 | 857 | 3 |
| no filters | AGGREGATION | - | - | status | 4 | 725 | 624 | 777 | 777 | 3 |
| no filters | AGGREGATION | - | - | country | 6 | 778 | 775 | 781 | 781 | 3 |
| no filters | AGGREGATION | - | - | age | 62 | 774 | 773 | 775 | 775 | 3 |
| status = 'paid' | COUNT | - | - | - | 2,500,451 | 778 | 776 | 780 | 780 | 3 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 776 | 775 | 777 | 777 | 3 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 737 | 656 | 778 | 778 | 3 |
| status = 'paid' | PAGINATION | 100th page | No | - | 100 | 677 | 622 | 779 | 764 | 3 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 100 | 760 | 732 | 774 | 774 | 3 |
| status = 'paid' | AGGREGATION | - | - | status | 1 | 678 | 626 | 773 | 760 | 3 |
| status = 'paid' | AGGREGATION | - | - | country | 6 | 778 | 776 | 779 | 779 | 3 |
| status = 'paid' | AGGREGATION | - | - | age | 62 | 778 | 775 | 781 | 781 | 3 |
| country = 'US' | COUNT | - | - | - | 1,961,199 | 638 | 624 | 664 | 660 | 3 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 728 | 626 | 779 | 779 | 3 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 707 | 656 | 776 | 768 | 3 |
| country = 'US' | PAGINATION | 100th page | No | - | 100 | 779 | 775 | 781 | 781 | 3 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 845 | 810 | 888 | 883 | 3 |
| country = 'US' | AGGREGATION | - | - | status | 4 | 679 | 625 | 773 | 760 | 3 |
| country = 'US' | AGGREGATION | - | - | country | 1 | 724 | 626 | 773 | 773 | 3 |
| country = 'US' | AGGREGATION | - | - | age | 62 | 780 | 777 | 781 | 781 | 3 |
| age > 30 | COUNT | - | - | - | 7,631,939 | 672 | 619 | 774 | 759 | 3 |
| age > 30 | PAGINATION | first page | No | - | 100 | 725 | 624 | 777 | 777 | 3 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 786 | 776 | 798 | 797 | 3 |
| age > 30 | PAGINATION | 100th page | No | - | 100 | 778 | 776 | 782 | 782 | 3 |
| age > 30 | PAGINATION | 100th page | Yes | - | 100 | 802 | 794 | 818 | 816 | 3 |
| age > 30 | AGGREGATION | - | - | status | 4 | 726 | 623 | 777 | 777 | 3 |
| age > 30 | AGGREGATION | - | - | country | 6 | 777 | 776 | 778 | 778 | 3 |
| age > 30 | AGGREGATION | - | - | age | 48 | 774 | 772 | 775 | 775 | 3 |
| amount > 1000 | COUNT | - | - | - | 8,550,425 | 736 | 657 | 776 | 776 | 3 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 777 | 775 | 778 | 778 | 3 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 1_017 | 960 | 1_056 | 1_054 | 3 |
| amount > 1000 | PAGINATION | 100th page | No | - | 100 | 777 | 774 | 780 | 780 | 3 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 100 | 1_002 | 968 | 1_022 | 1_022 | 3 |
| amount > 1000 | AGGREGATION | - | - | status | 4 | 843 | 770 | 981 | 961 | 3 |
| amount > 1000 | AGGREGATION | - | - | country | 6 | 774 | 773 | 774 | 774 | 3 |
| amount > 1000 | AGGREGATION | - | - | age | 62 | 960 | 937 | 979 | 978 | 3 |
| date >= 2024-06-01 | COUNT | - | - | - | 5,845,591 | 775 | 774 | 776 | 776 | 3 |
| date >= 2024-06-01 | PAGINATION | first page | No | - | 100 | 779 | 777 | 781 | 781 | 3 |
| date >= 2024-06-01 | PAGINATION | first page | Yes | - | 100 | 917 | 894 | 956 | 951 | 3 |
| date >= 2024-06-01 | PAGINATION | 100th page | No | - | 100 | 778 | 777 | 780 | 780 | 3 |
| date >= 2024-06-01 | PAGINATION | 100th page | Yes | - | 100 | 900 | 872 | 955 | 947 | 3 |
| date >= 2024-06-01 | AGGREGATION | - | - | status | 4 | 725 | 623 | 775 | 775 | 3 |
| date >= 2024-06-01 | AGGREGATION | - | - | country | 6 | 774 | 769 | 777 | 777 | 3 |
| date >= 2024-06-01 | AGGREGATION | - | - | age | 62 | 786 | 775 | 807 | 804 | 3 |
| status='paid' AND country='US' | COUNT | - | - | - | 490,261 | 725 | 626 | 775 | 775 | 3 |
| status='paid' AND country='US' | PAGINATION | first page | No | - | 100 | 778 | 775 | 780 | 780 | 3 |
| status='paid' AND country='US' | PAGINATION | first page | Yes | - | 100 | 781 | 774 | 792 | 791 | 3 |
| status='paid' AND country='US' | PAGINATION | 100th page | No | - | 100 | 775 | 773 | 776 | 776 | 3 |
| status='paid' AND country='US' | PAGINATION | 100th page | Yes | - | 100 | 774 | 772 | 776 | 776 | 3 |
| status='paid' AND country='US' | AGGREGATION | - | - | status | 1 | 778 | 776 | 780 | 780 | 3 |
| status='paid' AND country='US' | AGGREGATION | - | - | country | 1 | 776 | 774 | 780 | 780 | 3 |
| status='paid' AND country='US' | AGGREGATION | - | - | age | 62 | 777 | 773 | 781 | 781 | 3 |
| age BETWEEN 25 AND 45 | COUNT | - | - | - | 3,338,630 | 775 | 772 | 776 | 776 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | No | - | 100 | 777 | 775 | 778 | 778 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | Yes | - | 100 | 698 | 619 | 772 | 765 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | No | - | 100 | 776 | 775 | 777 | 777 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | Yes | - | 100 | 774 | 773 | 775 | 775 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | status | 4 | 776 | 774 | 777 | 777 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | country | 6 | 723 | 622 | 773 | 773 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | age | 21 | 775 | 773 | 776 | 776 | 3 |
| tags contains 'alpha' | COUNT | - | - | - | 3,797,495 | 999 | 962 | 1_049 | 1_043 | 3 |
| tags contains 'alpha' | PAGINATION | first page | No | - | 100 | 726 | 622 | 779 | 779 | 3 |
| tags contains 'alpha' | PAGINATION | first page | Yes | - | 100 | 1_331 | 1_214 | 1_538 | 1_509 | 3 |
| tags contains 'alpha' | PAGINATION | 100th page | No | - | 100 | 777 | 775 | 779 | 779 | 3 |
| tags contains 'alpha' | PAGINATION | 100th page | Yes | - | 100 | 1_285 | 1_273 | 1_299 | 1_298 | 3 |
| tags contains 'alpha' | AGGREGATION | - | - | status | 4 | 1_192 | 1_167 | 1_210 | 1_209 | 3 |
| tags contains 'alpha' | AGGREGATION | - | - | country | 6 | 1_246 | 1_227 | 1_265 | 1_263 | 3 |
| tags contains 'alpha' | AGGREGATION | - | - | age | 62 | 1_248 | 1_220 | 1_281 | 1_278 | 3 |
| note IS NOT NULL | COUNT | - | - | - | 9,001,257 | 723 | 624 | 772 | 772 | 3 |
| note IS NOT NULL | PAGINATION | first page | No | - | 100 | 778 | 777 | 778 | 778 | 3 |
| note IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 919 | 905 | 932 | 931 | 3 |
| note IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 777 | 776 | 778 | 778 | 3 |
| note IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 1_158 | 1_012 | 1_259 | 1_254 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | status | 4 | 779 | 774 | 781 | 781 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | country | 6 | 877 | 773 | 930 | 930 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | age | 62 | 836 | 773 | 960 | 942 | 3 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 `
- **Count/Rows:** 10,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 776ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 776ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 676ms
- **Min Duration:** 623ms
- **Max Duration:** 778ms
- **P95 Duration:** 763ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 820ms
- **Min Duration:** 775ms
- **Max Duration:** 860ms
- **P95 Duration:** 857ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 725ms
- **Min Duration:** 624ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000  GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 778ms
- **Min Duration:** 775ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000  GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 774ms
- **Min Duration:** 773ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms
- **Runs:** 3

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid'`
- **Count/Rows:** 2,500,451
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 776ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 775ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 737ms
- **Min Duration:** 656ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 677ms
- **Min Duration:** 622ms
- **Max Duration:** 779ms
- **P95 Duration:** 764ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 760ms
- **Min Duration:** 732ms
- **Max Duration:** 774ms
- **P95 Duration:** 774ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' GROUP BY status`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 678ms
- **Min Duration:** 626ms
- **Max Duration:** 773ms
- **P95 Duration:** 760ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 778ms
- **Min Duration:** 776ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 778ms
- **Min Duration:** 775ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US'`
- **Count/Rows:** 1,961,199
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 638ms
- **Min Duration:** 624ms
- **Max Duration:** 664ms
- **P95 Duration:** 660ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 728ms
- **Min Duration:** 626ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 707ms
- **Min Duration:** 656ms
- **Max Duration:** 776ms
- **P95 Duration:** 768ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 779ms
- **Min Duration:** 775ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 845ms
- **Min Duration:** 810ms
- **Max Duration:** 888ms
- **P95 Duration:** 883ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 679ms
- **Min Duration:** 625ms
- **Max Duration:** 773ms
- **P95 Duration:** 760ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 724ms
- **Min Duration:** 626ms
- **Max Duration:** 773ms
- **P95 Duration:** 773ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 780ms
- **Min Duration:** 777ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age > 30`
- **Count/Rows:** 7,631,939
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 672ms
- **Min Duration:** 619ms
- **Max Duration:** 774ms
- **P95 Duration:** 759ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 725ms
- **Min Duration:** 624ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 786ms
- **Min Duration:** 776ms
- **Max Duration:** 798ms
- **P95 Duration:** 797ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 776ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 802ms
- **Min Duration:** 794ms
- **Max Duration:** 818ms
- **P95 Duration:** 816ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 726ms
- **Min Duration:** 623ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 777ms
- **Min Duration:** 776ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age > 30 GROUP BY age`
- **Count/Rows:** 48
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 774ms
- **Min Duration:** 772ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms
- **Runs:** 3

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000`
- **Count/Rows:** 8,550,425
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 736ms
- **Min Duration:** 657ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_017ms
- **Min Duration:** 960ms
- **Max Duration:** 1_056ms
- **P95 Duration:** 1_054ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 774ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_002ms
- **Min Duration:** 968ms
- **Max Duration:** 1_022ms
- **P95 Duration:** 1_022ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 843ms
- **Min Duration:** 770ms
- **Max Duration:** 981ms
- **P95 Duration:** 961ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 774ms
- **Min Duration:** 773ms
- **Max Duration:** 774ms
- **P95 Duration:** 774ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE amount > 1000 GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 960ms
- **Min Duration:** 937ms
- **Max Duration:** 979ms
- **P95 Duration:** 978ms
- **Runs:** 3

### date >= 2024-06-01 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01'`
- **Count/Rows:** 5,845,591
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 775ms
- **Min Duration:** 774ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 779ms
- **Min Duration:** 777ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 917ms
- **Min Duration:** 894ms
- **Max Duration:** 956ms
- **P95 Duration:** 951ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 777ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 900ms
- **Min Duration:** 872ms
- **Max Duration:** 955ms
- **P95 Duration:** 947ms
- **Runs:** 3

### date >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 725ms
- **Min Duration:** 623ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms
- **Runs:** 3

### date >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 774ms
- **Min Duration:** 769ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### date >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 786ms
- **Min Duration:** 775ms
- **Max Duration:** 807ms
- **P95 Duration:** 804ms
- **Runs:** 3

### status='paid' AND country='US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US'`
- **Count/Rows:** 490,261
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 725ms
- **Min Duration:** 626ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 775ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 781ms
- **Min Duration:** 774ms
- **Max Duration:** 792ms
- **P95 Duration:** 791ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 775ms
- **Min Duration:** 773ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 774ms
- **Min Duration:** 772ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms
- **Runs:** 3

### status='paid' AND country='US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY status`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 778ms
- **Min Duration:** 776ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### status='paid' AND country='US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 776ms
- **Min Duration:** 774ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### status='paid' AND country='US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 777ms
- **Min Duration:** 773ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45`
- **Count/Rows:** 3,338,630
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 775ms
- **Min Duration:** 772ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 698ms
- **Min Duration:** 619ms
- **Max Duration:** 772ms
- **P95 Duration:** 765ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 775ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 774ms
- **Min Duration:** 773ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 776ms
- **Min Duration:** 774ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 723ms
- **Min Duration:** 622ms
- **Max Duration:** 773ms
- **P95 Duration:** 773ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY age`
- **Count/Rows:** 21
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 775ms
- **Min Duration:** 773ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms
- **Runs:** 3

### tags contains 'alpha' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha')`
- **Count/Rows:** 3,797,495
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 999ms
- **Min Duration:** 962ms
- **Max Duration:** 1_049ms
- **P95 Duration:** 1_043ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 726ms
- **Min Duration:** 622ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_331ms
- **Min Duration:** 1_214ms
- **Max Duration:** 1_538ms
- **P95 Duration:** 1_509ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_285ms
- **Min Duration:** 1_273ms
- **Max Duration:** 1_299ms
- **P95 Duration:** 1_298ms
- **Runs:** 3

### tags contains 'alpha' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 1_192ms
- **Min Duration:** 1_167ms
- **Max Duration:** 1_210ms
- **P95 Duration:** 1_209ms
- **Runs:** 3

### tags contains 'alpha' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 1_246ms
- **Min Duration:** 1_227ms
- **Max Duration:** 1_265ms
- **P95 Duration:** 1_263ms
- **Runs:** 3

### tags contains 'alpha' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE contains(tags, 'alpha') GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 1_248ms
- **Min Duration:** 1_220ms
- **Max Duration:** 1_281ms
- **P95 Duration:** 1_278ms
- **Runs:** 3

### note IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL`
- **Count/Rows:** 9,001,257
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 723ms
- **Min Duration:** 624ms
- **Max Duration:** 772ms
- **P95 Duration:** 772ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 777ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 919ms
- **Min Duration:** 905ms
- **Max Duration:** 932ms
- **P95 Duration:** 931ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 776ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_158ms
- **Min Duration:** 1_012ms
- **Max Duration:** 1_259ms
- **P95 Duration:** 1_254ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 779ms
- **Min Duration:** 774ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 877ms
- **Min Duration:** 773ms
- **Max Duration:** 930ms
- **P95 Duration:** 930ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_10_000_000 WHERE note IS NOT NULL GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 836ms
- **Min Duration:** 773ms
- **Max Duration:** 960ms
- **P95 Duration:** 942ms
- **Runs:** 3

