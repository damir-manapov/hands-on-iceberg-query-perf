# Query Performance Report

**Table:** iceberg.lab.narrow_100_000_000  
**Generated:** 2025-10-10T08:40:52.199Z  
**Total Rows:** 100,000,000  
**Table Size:** 2.9 GB

## Summary

- **Total Queries:** 240
- **Average Duration:** 796ms
- **Fastest Query:** 154ms
- **Slowest Query:** 2782ms
- **95th Percentile:** 1946ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
| no filters | COUNT | - | - | - | 100,000,000 | 775 | 772 | 777 | 777 | 3 |
| no filters | PAGINATION | first page | No | - | 100 | 727 | 625 | 780 | 780 | 3 |
| no filters | PAGINATION | first page | Yes | - | 100 | 1124 | 1106 | 1137 | 1136 | 3 |
| no filters | PAGINATION | 100th page | No | - | 0 | 159 | 158 | 160 | 160 | 3 |
| no filters | PAGINATION | 100th page | Yes | - | 0 | 160 | 160 | 160 | 160 | 3 |
| no filters | AGGREGATION | - | - | status GROUP BY | 4 | 778 | 775 | 782 | 782 | 3 |
| no filters | AGGREGATION | - | - | country GROUP BY | 6 | 777 | 773 | 782 | 782 | 3 |
| no filters | AGGREGATION | - | - | age GROUP BY | 62 | 813 | 775 | 884 | 874 | 3 |
| status = 'paid' | COUNT | - | - | - | 25,002,854 | 724 | 622 | 778 | 778 | 3 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 732 | 632 | 787 | 786 | 3 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 865 | 840 | 908 | 902 | 3 |
| status = 'paid' | PAGINATION | 100th page | No | - | 0 | 162 | 159 | 167 | 167 | 3 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 0 | 158 | 156 | 159 | 159 | 3 |
| status = 'paid' | AGGREGATION | - | - | status GROUP BY | 1 | 774 | 772 | 776 | 776 | 3 |
| status = 'paid' | AGGREGATION | - | - | country GROUP BY | 6 | 776 | 775 | 777 | 777 | 3 |
| status = 'paid' | AGGREGATION | - | - | age GROUP BY | 62 | 739 | 638 | 794 | 793 | 3 |
| country = 'US' | COUNT | - | - | - | 19,600,445 | 775 | 773 | 777 | 777 | 3 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 778 | 776 | 781 | 781 | 3 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 839 | 815 | 852 | 852 | 3 |
| country = 'US' | PAGINATION | 100th page | No | - | 0 | 156 | 154 | 159 | 159 | 3 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 0 | 160 | 159 | 160 | 160 | 3 |
| country = 'US' | AGGREGATION | - | - | status GROUP BY | 4 | 781 | 778 | 784 | 784 | 3 |
| country = 'US' | AGGREGATION | - | - | country GROUP BY | 1 | 778 | 776 | 781 | 781 | 3 |
| country = 'US' | AGGREGATION | - | - | age GROUP BY | 62 | 802 | 776 | 814 | 814 | 3 |
| age > 30 | COUNT | - | - | - | 76,316,740 | 777 | 770 | 784 | 784 | 3 |
| age > 30 | PAGINATION | first page | No | - | 100 | 774 | 771 | 775 | 775 | 3 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 1006 | 986 | 1017 | 1017 | 3 |
| age > 30 | PAGINATION | 100th page | No | - | 0 | 160 | 159 | 160 | 160 | 3 |
| age > 30 | PAGINATION | 100th page | Yes | - | 0 | 159 | 158 | 160 | 160 | 3 |
| age > 30 | AGGREGATION | - | - | status GROUP BY | 4 | 1166 | 775 | 1943 | 1827 | 3 |
| age > 30 | AGGREGATION | - | - | country GROUP BY | 6 | 795 | 785 | 805 | 804 | 3 |
| age > 30 | AGGREGATION | - | - | age GROUP BY | 48 | 820 | 779 | 901 | 889 | 3 |
| amount > 1000 | COUNT | - | - | - | 85,501,768 | 829 | 802 | 876 | 870 | 3 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 781 | 773 | 790 | 789 | 3 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 1394 | 1358 | 1444 | 1438 | 3 |
| amount > 1000 | PAGINATION | 100th page | No | - | 0 | 160 | 158 | 160 | 160 | 3 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 0 | 160 | 157 | 161 | 161 | 3 |
| amount > 1000 | AGGREGATION | - | - | status GROUP BY | 4 | 1035 | 1012 | 1053 | 1052 | 3 |
| amount > 1000 | AGGREGATION | - | - | country GROUP BY | 6 | 1067 | 994 | 1132 | 1127 | 3 |
| amount > 1000 | AGGREGATION | - | - | age GROUP BY | 62 | 1212 | 1200 | 1220 | 1220 | 3 |
| date >= 2024-06-01 | COUNT | - | - | - | 58,468,297 | 760 | 733 | 792 | 789 | 3 |
| date >= 2024-06-01 | PAGINATION | first page | No | - | 100 | 781 | 777 | 784 | 784 | 3 |
| date >= 2024-06-01 | PAGINATION | first page | Yes | - | 100 | 1225 | 1169 | 1259 | 1258 | 3 |
| date >= 2024-06-01 | PAGINATION | 100th page | No | - | 0 | 159 | 158 | 159 | 159 | 3 |
| date >= 2024-06-01 | PAGINATION | 100th page | Yes | - | 0 | 158 | 156 | 160 | 160 | 3 |
| date >= 2024-06-01 | AGGREGATION | - | - | status GROUP BY | 4 | 897 | 772 | 973 | 971 | 3 |
| date >= 2024-06-01 | AGGREGATION | - | - | country GROUP BY | 6 | 1002 | 993 | 1011 | 1010 | 3 |
| date >= 2024-06-01 | AGGREGATION | - | - | age GROUP BY | 62 | 1070 | 1020 | 1099 | 1098 | 3 |
| status='paid' AND country='US' | COUNT | - | - | - | 4,902,972 | 777 | 774 | 778 | 778 | 3 |
| status='paid' AND country='US' | PAGINATION | first page | No | - | 100 | 775 | 772 | 776 | 776 | 3 |
| status='paid' AND country='US' | PAGINATION | first page | Yes | - | 100 | 802 | 772 | 839 | 835 | 3 |
| status='paid' AND country='US' | PAGINATION | 100th page | No | - | 0 | 159 | 159 | 159 | 159 | 3 |
| status='paid' AND country='US' | PAGINATION | 100th page | Yes | - | 0 | 158 | 155 | 160 | 160 | 3 |
| status='paid' AND country='US' | AGGREGATION | - | - | status GROUP BY | 1 | 723 | 620 | 777 | 777 | 3 |
| status='paid' AND country='US' | AGGREGATION | - | - | country GROUP BY | 1 | 777 | 772 | 783 | 783 | 3 |
| status='paid' AND country='US' | AGGREGATION | - | - | age GROUP BY | 62 | 784 | 775 | 794 | 793 | 3 |
| age BETWEEN 25 AND 45 | COUNT | - | - | - | 33,395,229 | 779 | 773 | 787 | 786 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | No | - | 100 | 725 | 624 | 780 | 780 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | Yes | - | 100 | 883 | 869 | 899 | 898 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | No | - | 0 | 159 | 158 | 160 | 160 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | Yes | - | 0 | 158 | 156 | 161 | 161 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | status GROUP BY | 4 | 791 | 773 | 824 | 820 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | country GROUP BY | 6 | 737 | 624 | 810 | 807 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | age GROUP BY | 21 | 790 | 786 | 797 | 796 | 3 |
| tags contains 'alpha' | COUNT | - | - | - | 37,972,095 | 1611 | 1569 | 1663 | 1657 | 3 |
| tags contains 'alpha' | PAGINATION | first page | No | - | 100 | 776 | 766 | 785 | 785 | 3 |
| tags contains 'alpha' | PAGINATION | first page | Yes | - | 100 | 2204 | 2002 | 2504 | 2465 | 3 |
| tags contains 'alpha' | PAGINATION | 100th page | No | - | 0 | 159 | 157 | 160 | 160 | 3 |
| tags contains 'alpha' | PAGINATION | 100th page | Yes | - | 0 | 157 | 154 | 159 | 159 | 3 |
| tags contains 'alpha' | AGGREGATION | - | - | status GROUP BY | 4 | 2445 | 2048 | 2782 | 2755 | 3 |
| tags contains 'alpha' | AGGREGATION | - | - | country GROUP BY | 6 | 2496 | 2470 | 2535 | 2530 | 3 |
| tags contains 'alpha' | AGGREGATION | - | - | age GROUP BY | 62 | 2657 | 2596 | 2768 | 2752 | 3 |
| note IS NOT NULL | COUNT | - | - | - | 90,001,746 | 934 | 926 | 942 | 942 | 3 |
| note IS NOT NULL | PAGINATION | first page | No | - | 100 | 784 | 778 | 790 | 790 | 3 |
| note IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 1614 | 1454 | 1903 | 1861 | 3 |
| note IS NOT NULL | PAGINATION | 100th page | No | - | 0 | 157 | 155 | 158 | 158 | 3 |
| note IS NOT NULL | PAGINATION | 100th page | Yes | - | 0 | 158 | 157 | 158 | 158 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | status GROUP BY | 4 | 1121 | 1094 | 1134 | 1134 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | country GROUP BY | 6 | 1170 | 1143 | 1185 | 1185 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | age GROUP BY | 62 | 1576 | 1573 | 1580 | 1580 | 3 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 `
- **Count/Rows:** 100,000,000
- **Average Duration:** 775ms
- **Min Duration:** 772ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 727ms
- **Min Duration:** 625ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 1124ms
- **Min Duration:** 1106ms
- **Max Duration:** 1137ms
- **P95 Duration:** 1136ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 160ms
- **Min Duration:** 160ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 778ms
- **Min Duration:** 775ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000  GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 777ms
- **Min Duration:** 773ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000  GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 813ms
- **Min Duration:** 775ms
- **Max Duration:** 884ms
- **P95 Duration:** 874ms
- **Runs:** 3

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid'`
- **Count/Rows:** 25,002,854
- **Average Duration:** 724ms
- **Min Duration:** 622ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 732ms
- **Min Duration:** 632ms
- **Max Duration:** 787ms
- **P95 Duration:** 786ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 865ms
- **Min Duration:** 840ms
- **Max Duration:** 908ms
- **P95 Duration:** 902ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 162ms
- **Min Duration:** 159ms
- **Max Duration:** 167ms
- **P95 Duration:** 167ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 156ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' GROUP BY status`
- **Count/Rows:** 1
- **Average Duration:** 774ms
- **Min Duration:** 772ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 776ms
- **Min Duration:** 775ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 739ms
- **Min Duration:** 638ms
- **Max Duration:** 794ms
- **P95 Duration:** 793ms
- **Runs:** 3

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US'`
- **Count/Rows:** 19,600,445
- **Average Duration:** 775ms
- **Min Duration:** 773ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 778ms
- **Min Duration:** 776ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 839ms
- **Min Duration:** 815ms
- **Max Duration:** 852ms
- **P95 Duration:** 852ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 156ms
- **Min Duration:** 154ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 160ms
- **Min Duration:** 159ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 781ms
- **Min Duration:** 778ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Average Duration:** 778ms
- **Min Duration:** 776ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 802ms
- **Min Duration:** 776ms
- **Max Duration:** 814ms
- **P95 Duration:** 814ms
- **Runs:** 3

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age > 30`
- **Count/Rows:** 76,316,740
- **Average Duration:** 777ms
- **Min Duration:** 770ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 774ms
- **Min Duration:** 771ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 1006ms
- **Min Duration:** 986ms
- **Max Duration:** 1017ms
- **P95 Duration:** 1017ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 160ms
- **Min Duration:** 159ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 1166ms
- **Min Duration:** 775ms
- **Max Duration:** 1943ms
- **P95 Duration:** 1827ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 795ms
- **Min Duration:** 785ms
- **Max Duration:** 805ms
- **P95 Duration:** 804ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 GROUP BY age`
- **Count/Rows:** 48
- **Average Duration:** 820ms
- **Min Duration:** 779ms
- **Max Duration:** 901ms
- **P95 Duration:** 889ms
- **Runs:** 3

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000`
- **Count/Rows:** 85,501,768
- **Average Duration:** 829ms
- **Min Duration:** 802ms
- **Max Duration:** 876ms
- **P95 Duration:** 870ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 781ms
- **Min Duration:** 773ms
- **Max Duration:** 790ms
- **P95 Duration:** 789ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 1394ms
- **Min Duration:** 1358ms
- **Max Duration:** 1444ms
- **P95 Duration:** 1438ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 160ms
- **Min Duration:** 158ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 160ms
- **Min Duration:** 157ms
- **Max Duration:** 161ms
- **P95 Duration:** 161ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 1035ms
- **Min Duration:** 1012ms
- **Max Duration:** 1053ms
- **P95 Duration:** 1052ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 1067ms
- **Min Duration:** 994ms
- **Max Duration:** 1132ms
- **P95 Duration:** 1127ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 1212ms
- **Min Duration:** 1200ms
- **Max Duration:** 1220ms
- **P95 Duration:** 1220ms
- **Runs:** 3

### date >= 2024-06-01 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01'`
- **Count/Rows:** 58,468,297
- **Average Duration:** 760ms
- **Min Duration:** 733ms
- **Max Duration:** 792ms
- **P95 Duration:** 789ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 781ms
- **Min Duration:** 777ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 1225ms
- **Min Duration:** 1169ms
- **Max Duration:** 1259ms
- **P95 Duration:** 1258ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 156ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### date >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 897ms
- **Min Duration:** 772ms
- **Max Duration:** 973ms
- **P95 Duration:** 971ms
- **Runs:** 3

### date >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 1002ms
- **Min Duration:** 993ms
- **Max Duration:** 1011ms
- **P95 Duration:** 1010ms
- **Runs:** 3

### date >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 1070ms
- **Min Duration:** 1020ms
- **Max Duration:** 1099ms
- **P95 Duration:** 1098ms
- **Runs:** 3

### status='paid' AND country='US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND country = 'US'`
- **Count/Rows:** 4,902,972
- **Average Duration:** 777ms
- **Min Duration:** 774ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 775ms
- **Min Duration:** 772ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 802ms
- **Min Duration:** 772ms
- **Max Duration:** 839ms
- **P95 Duration:** 835ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND country = 'US' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 159ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 155ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### status='paid' AND country='US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY status`
- **Count/Rows:** 1
- **Average Duration:** 723ms
- **Min Duration:** 620ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### status='paid' AND country='US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Average Duration:** 777ms
- **Min Duration:** 772ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### status='paid' AND country='US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 784ms
- **Min Duration:** 775ms
- **Max Duration:** 794ms
- **P95 Duration:** 793ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age BETWEEN 25 AND 45`
- **Count/Rows:** 33,395,229
- **Average Duration:** 779ms
- **Min Duration:** 773ms
- **Max Duration:** 787ms
- **P95 Duration:** 786ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age BETWEEN 25 AND 45 LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 725ms
- **Min Duration:** 624ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 883ms
- **Min Duration:** 869ms
- **Max Duration:** 899ms
- **P95 Duration:** 898ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age BETWEEN 25 AND 45 LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 156ms
- **Max Duration:** 161ms
- **P95 Duration:** 161ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 791ms
- **Min Duration:** 773ms
- **Max Duration:** 824ms
- **P95 Duration:** 820ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 737ms
- **Min Duration:** 624ms
- **Max Duration:** 810ms
- **P95 Duration:** 807ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY age`
- **Count/Rows:** 21
- **Average Duration:** 790ms
- **Min Duration:** 786ms
- **Max Duration:** 797ms
- **P95 Duration:** 796ms
- **Runs:** 3

### tags contains 'alpha' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha')`
- **Count/Rows:** 37,972,095
- **Average Duration:** 1611ms
- **Min Duration:** 1569ms
- **Max Duration:** 1663ms
- **P95 Duration:** 1657ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 776ms
- **Min Duration:** 766ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 2204ms
- **Min Duration:** 2002ms
- **Max Duration:** 2504ms
- **P95 Duration:** 2465ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 157ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 157ms
- **Min Duration:** 154ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### tags contains 'alpha' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 2445ms
- **Min Duration:** 2048ms
- **Max Duration:** 2782ms
- **P95 Duration:** 2755ms
- **Runs:** 3

### tags contains 'alpha' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 2496ms
- **Min Duration:** 2470ms
- **Max Duration:** 2535ms
- **P95 Duration:** 2530ms
- **Runs:** 3

### tags contains 'alpha' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 2657ms
- **Min Duration:** 2596ms
- **Max Duration:** 2768ms
- **P95 Duration:** 2752ms
- **Runs:** 3

### note IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL`
- **Count/Rows:** 90,001,746
- **Average Duration:** 934ms
- **Min Duration:** 926ms
- **Max Duration:** 942ms
- **P95 Duration:** 942ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 784ms
- **Min Duration:** 778ms
- **Max Duration:** 790ms
- **P95 Duration:** 790ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 1614ms
- **Min Duration:** 1454ms
- **Max Duration:** 1903ms
- **P95 Duration:** 1861ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 157ms
- **Min Duration:** 155ms
- **Max Duration:** 158ms
- **P95 Duration:** 158ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 157ms
- **Max Duration:** 158ms
- **P95 Duration:** 158ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 1121ms
- **Min Duration:** 1094ms
- **Max Duration:** 1134ms
- **P95 Duration:** 1134ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 1170ms
- **Min Duration:** 1143ms
- **Max Duration:** 1185ms
- **P95 Duration:** 1185ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 1576ms
- **Min Duration:** 1573ms
- **Max Duration:** 1580ms
- **P95 Duration:** 1580ms
- **Runs:** 3

