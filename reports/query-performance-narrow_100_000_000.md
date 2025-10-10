# Query Performance Report

**Table:** iceberg.lab.narrow_100_000_000  
**Generated:** 2025-10-10T19:09:35.280Z  
**Total Rows:** 100,000,000  
**Table Size:** 2.9 GB

## Summary

- **Total Queries:** 240
- **Average Duration:** 1_295ms
- **Fastest Query:** 622ms
- **Slowest Query:** 3_866ms
- **95th Percentile:** 2_811ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
| no filters | COUNT | - | - | - | 100,000,000 | 676 | 625 | 775 | 761 | 3 |
| no filters | PAGINATION | first page | No | - | 100 | 727 | 625 | 780 | 780 | 3 |
| no filters | PAGINATION | first page | Yes | - | 100 | 1_543 | 1_507 | 1_583 | 1_579 | 3 |
| no filters | PAGINATION | 100th page | No | - | 100 | 775 | 772 | 777 | 777 | 3 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 1_861 | 1_728 | 2_098 | 2_064 | 3 |
| no filters | AGGREGATION | - | - | status | 4 | 786 | 779 | 794 | 793 | 3 |
| no filters | AGGREGATION | - | - | country | 6 | 798 | 786 | 822 | 819 | 3 |
| no filters | AGGREGATION | - | - | age | 62 | 1_126 | 1_118 | 1_136 | 1_135 | 3 |
| status = 'paid' | COUNT | - | - | - | 25,002,854 | 790 | 783 | 794 | 794 | 3 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 783 | 782 | 784 | 784 | 3 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 1_279 | 1_260 | 1_304 | 1_301 | 3 |
| status = 'paid' | PAGINATION | 100th page | No | - | 100 | 798 | 782 | 827 | 823 | 3 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 100 | 1_624 | 1_583 | 1_649 | 1_648 | 3 |
| status = 'paid' | AGGREGATION | - | - | status | 1 | 782 | 779 | 785 | 785 | 3 |
| status = 'paid' | AGGREGATION | - | - | country | 6 | 844 | 793 | 870 | 870 | 3 |
| status = 'paid' | AGGREGATION | - | - | age | 62 | 1_001 | 974 | 1_022 | 1_021 | 3 |
| country = 'US' | COUNT | - | - | - | 19,600,445 | 787 | 782 | 794 | 794 | 3 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 734 | 623 | 798 | 797 | 3 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 1_230 | 1_202 | 1_266 | 1_262 | 3 |
| country = 'US' | PAGINATION | 100th page | No | - | 100 | 736 | 627 | 793 | 793 | 3 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 1_540 | 1_495 | 1_595 | 1_589 | 3 |
| country = 'US' | AGGREGATION | - | - | status | 4 | 782 | 780 | 783 | 783 | 3 |
| country = 'US' | AGGREGATION | - | - | country | 1 | 633 | 628 | 637 | 637 | 3 |
| country = 'US' | AGGREGATION | - | - | age | 62 | 1_057 | 993 | 1_095 | 1_094 | 3 |
| age > 30 | COUNT | - | - | - | 76,316,740 | 752 | 661 | 809 | 807 | 3 |
| age > 30 | PAGINATION | first page | No | - | 100 | 689 | 631 | 782 | 769 | 3 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 1_567 | 1_544 | 1_596 | 1_593 | 3 |
| age > 30 | PAGINATION | 100th page | No | - | 100 | 731 | 629 | 784 | 784 | 3 |
| age > 30 | PAGINATION | 100th page | Yes | - | 100 | 1_891 | 1_793 | 1_939 | 1_939 | 3 |
| age > 30 | AGGREGATION | - | - | status | 4 | 978 | 963 | 996 | 994 | 3 |
| age > 30 | AGGREGATION | - | - | country | 6 | 1_060 | 1_023 | 1_102 | 1_098 | 3 |
| age > 30 | AGGREGATION | - | - | age | 48 | 1_118 | 1_109 | 1_130 | 1_129 | 3 |
| amount > 1000 | COUNT | - | - | - | 85,501,768 | 1_161 | 1_087 | 1_263 | 1_250 | 3 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 684 | 637 | 778 | 764 | 3 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 2_101 | 2_068 | 2_117 | 2_117 | 3 |
| amount > 1000 | PAGINATION | 100th page | No | - | 100 | 640 | 632 | 646 | 646 | 3 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 100 | 2_509 | 2_459 | 2_549 | 2_546 | 3 |
| amount > 1000 | AGGREGATION | - | - | status | 4 | 1_381 | 1_351 | 1_396 | 1_396 | 3 |
| amount > 1000 | AGGREGATION | - | - | country | 6 | 1_504 | 1_422 | 1_637 | 1_619 | 3 |
| amount > 1000 | AGGREGATION | - | - | age | 62 | 1_808 | 1_780 | 1_845 | 1_841 | 3 |
| date >= 2024-06-01 | COUNT | - | - | - | 58,468,297 | 1_032 | 980 | 1_110 | 1_100 | 3 |
| date >= 2024-06-01 | PAGINATION | first page | No | - | 100 | 735 | 635 | 787 | 787 | 3 |
| date >= 2024-06-01 | PAGINATION | first page | Yes | - | 100 | 1_902 | 1_809 | 1_949 | 1_949 | 3 |
| date >= 2024-06-01 | PAGINATION | 100th page | No | - | 100 | 790 | 783 | 797 | 797 | 3 |
| date >= 2024-06-01 | PAGINATION | 100th page | Yes | - | 100 | 2_262 | 2_233 | 2_286 | 2_284 | 3 |
| date >= 2024-06-01 | AGGREGATION | - | - | status | 4 | 1_256 | 1_236 | 1_275 | 1_274 | 3 |
| date >= 2024-06-01 | AGGREGATION | - | - | country | 6 | 1_297 | 1_276 | 1_315 | 1_314 | 3 |
| date >= 2024-06-01 | AGGREGATION | - | - | age | 62 | 1_563 | 1_537 | 1_599 | 1_595 | 3 |
| status='paid' AND country='US' | COUNT | - | - | - | 4,902,972 | 799 | 791 | 813 | 811 | 3 |
| status='paid' AND country='US' | PAGINATION | first page | No | - | 100 | 783 | 780 | 785 | 785 | 3 |
| status='paid' AND country='US' | PAGINATION | first page | Yes | - | 100 | 1_143 | 1_104 | 1_178 | 1_175 | 3 |
| status='paid' AND country='US' | PAGINATION | 100th page | No | - | 100 | 786 | 779 | 797 | 796 | 3 |
| status='paid' AND country='US' | PAGINATION | 100th page | Yes | - | 100 | 1_501 | 1_437 | 1_574 | 1_566 | 3 |
| status='paid' AND country='US' | AGGREGATION | - | - | status | 1 | 720 | 682 | 796 | 785 | 3 |
| status='paid' AND country='US' | AGGREGATION | - | - | country | 1 | 754 | 695 | 797 | 795 | 3 |
| status='paid' AND country='US' | AGGREGATION | - | - | age | 62 | 1_009 | 995 | 1_019 | 1_019 | 3 |
| age BETWEEN 25 AND 45 | COUNT | - | - | - | 33,395,229 | 717 | 678 | 787 | 777 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | No | - | 100 | 730 | 627 | 783 | 783 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | Yes | - | 100 | 1_350 | 1_313 | 1_369 | 1_369 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | No | - | 100 | 682 | 628 | 786 | 771 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | Yes | - | 100 | 1_652 | 1_641 | 1_659 | 1_659 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | status | 4 | 912 | 800 | 971 | 971 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | country | 6 | 1_017 | 1_001 | 1_033 | 1_032 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | age | 21 | 1_019 | 972 | 1_077 | 1_070 | 3 |
| tags contains 'alpha' | COUNT | - | - | - | 37,972,095 | 2_560 | 2_523 | 2_586 | 2_585 | 3 |
| tags contains 'alpha' | PAGINATION | first page | No | - | 100 | 732 | 629 | 786 | 786 | 3 |
| tags contains 'alpha' | PAGINATION | first page | Yes | - | 100 | 3_360 | 3_321 | 3_406 | 3_401 | 3 |
| tags contains 'alpha' | PAGINATION | 100th page | No | - | 100 | 795 | 785 | 811 | 809 | 3 |
| tags contains 'alpha' | PAGINATION | 100th page | Yes | - | 100 | 3_727 | 3_637 | 3_866 | 3_848 | 3 |
| tags contains 'alpha' | AGGREGATION | - | - | status | 4 | 2_805 | 2_739 | 2_867 | 2_862 | 3 |
| tags contains 'alpha' | AGGREGATION | - | - | country | 6 | 2_822 | 2_773 | 2_853 | 2_852 | 3 |
| tags contains 'alpha' | AGGREGATION | - | - | age | 62 | 3_062 | 3_014 | 3_112 | 3_107 | 3 |
| note IS NOT NULL | COUNT | - | - | - | 90,001,746 | 1_305 | 1_256 | 1_348 | 1_345 | 3 |
| note IS NOT NULL | PAGINATION | first page | No | - | 100 | 731 | 622 | 786 | 786 | 3 |
| note IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 2_351 | 2_290 | 2_406 | 2_401 | 3 |
| note IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 741 | 641 | 795 | 794 | 3 |
| note IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 2_649 | 2_635 | 2_670 | 2_668 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | status | 4 | 1_674 | 1_588 | 1_808 | 1_790 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | country | 6 | 1_677 | 1_662 | 1_686 | 1_686 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | age | 62 | 1_946 | 1_943 | 1_948 | 1_948 | 3 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 `
- **Count/Rows:** 100,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 676ms
- **Min Duration:** 625ms
- **Max Duration:** 775ms
- **P95 Duration:** 761ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 727ms
- **Min Duration:** 625ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_543ms
- **Min Duration:** 1_507ms
- **Max Duration:** 1_583ms
- **P95 Duration:** 1_579ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 775ms
- **Min Duration:** 772ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_861ms
- **Min Duration:** 1_728ms
- **Max Duration:** 2_098ms
- **P95 Duration:** 2_064ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 786ms
- **Min Duration:** 779ms
- **Max Duration:** 794ms
- **P95 Duration:** 793ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000  GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 798ms
- **Min Duration:** 786ms
- **Max Duration:** 822ms
- **P95 Duration:** 819ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000  GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 1_126ms
- **Min Duration:** 1_118ms
- **Max Duration:** 1_136ms
- **P95 Duration:** 1_135ms
- **Runs:** 3

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid'`
- **Count/Rows:** 25,002,854
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 790ms
- **Min Duration:** 783ms
- **Max Duration:** 794ms
- **P95 Duration:** 794ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 783ms
- **Min Duration:** 782ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_279ms
- **Min Duration:** 1_260ms
- **Max Duration:** 1_304ms
- **P95 Duration:** 1_301ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 798ms
- **Min Duration:** 782ms
- **Max Duration:** 827ms
- **P95 Duration:** 823ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_624ms
- **Min Duration:** 1_583ms
- **Max Duration:** 1_649ms
- **P95 Duration:** 1_648ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' GROUP BY status`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 782ms
- **Min Duration:** 779ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 844ms
- **Min Duration:** 793ms
- **Max Duration:** 870ms
- **P95 Duration:** 870ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 1_001ms
- **Min Duration:** 974ms
- **Max Duration:** 1_022ms
- **P95 Duration:** 1_021ms
- **Runs:** 3

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US'`
- **Count/Rows:** 19,600,445
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 787ms
- **Min Duration:** 782ms
- **Max Duration:** 794ms
- **P95 Duration:** 794ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 734ms
- **Min Duration:** 623ms
- **Max Duration:** 798ms
- **P95 Duration:** 797ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_230ms
- **Min Duration:** 1_202ms
- **Max Duration:** 1_266ms
- **P95 Duration:** 1_262ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 736ms
- **Min Duration:** 627ms
- **Max Duration:** 793ms
- **P95 Duration:** 793ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_540ms
- **Min Duration:** 1_495ms
- **Max Duration:** 1_595ms
- **P95 Duration:** 1_589ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 782ms
- **Min Duration:** 780ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 633ms
- **Min Duration:** 628ms
- **Max Duration:** 637ms
- **P95 Duration:** 637ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 1_057ms
- **Min Duration:** 993ms
- **Max Duration:** 1_095ms
- **P95 Duration:** 1_094ms
- **Runs:** 3

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age > 30`
- **Count/Rows:** 76,316,740
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 752ms
- **Min Duration:** 661ms
- **Max Duration:** 809ms
- **P95 Duration:** 807ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 689ms
- **Min Duration:** 631ms
- **Max Duration:** 782ms
- **P95 Duration:** 769ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_567ms
- **Min Duration:** 1_544ms
- **Max Duration:** 1_596ms
- **P95 Duration:** 1_593ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 731ms
- **Min Duration:** 629ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_891ms
- **Min Duration:** 1_793ms
- **Max Duration:** 1_939ms
- **P95 Duration:** 1_939ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 978ms
- **Min Duration:** 963ms
- **Max Duration:** 996ms
- **P95 Duration:** 994ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 1_060ms
- **Min Duration:** 1_023ms
- **Max Duration:** 1_102ms
- **P95 Duration:** 1_098ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 GROUP BY age`
- **Count/Rows:** 48
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 1_118ms
- **Min Duration:** 1_109ms
- **Max Duration:** 1_130ms
- **P95 Duration:** 1_129ms
- **Runs:** 3

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000`
- **Count/Rows:** 85,501,768
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_161ms
- **Min Duration:** 1_087ms
- **Max Duration:** 1_263ms
- **P95 Duration:** 1_250ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 684ms
- **Min Duration:** 637ms
- **Max Duration:** 778ms
- **P95 Duration:** 764ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_101ms
- **Min Duration:** 2_068ms
- **Max Duration:** 2_117ms
- **P95 Duration:** 2_117ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 640ms
- **Min Duration:** 632ms
- **Max Duration:** 646ms
- **P95 Duration:** 646ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_509ms
- **Min Duration:** 2_459ms
- **Max Duration:** 2_549ms
- **P95 Duration:** 2_546ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 1_381ms
- **Min Duration:** 1_351ms
- **Max Duration:** 1_396ms
- **P95 Duration:** 1_396ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 1_504ms
- **Min Duration:** 1_422ms
- **Max Duration:** 1_637ms
- **P95 Duration:** 1_619ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 1_808ms
- **Min Duration:** 1_780ms
- **Max Duration:** 1_845ms
- **P95 Duration:** 1_841ms
- **Runs:** 3

### date >= 2024-06-01 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01'`
- **Count/Rows:** 58,468,297
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_032ms
- **Min Duration:** 980ms
- **Max Duration:** 1_110ms
- **P95 Duration:** 1_100ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 735ms
- **Min Duration:** 635ms
- **Max Duration:** 787ms
- **P95 Duration:** 787ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_902ms
- **Min Duration:** 1_809ms
- **Max Duration:** 1_949ms
- **P95 Duration:** 1_949ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 790ms
- **Min Duration:** 783ms
- **Max Duration:** 797ms
- **P95 Duration:** 797ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_262ms
- **Min Duration:** 2_233ms
- **Max Duration:** 2_286ms
- **P95 Duration:** 2_284ms
- **Runs:** 3

### date >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 1_256ms
- **Min Duration:** 1_236ms
- **Max Duration:** 1_275ms
- **P95 Duration:** 1_274ms
- **Runs:** 3

### date >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 1_297ms
- **Min Duration:** 1_276ms
- **Max Duration:** 1_315ms
- **P95 Duration:** 1_314ms
- **Runs:** 3

### date >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 1_563ms
- **Min Duration:** 1_537ms
- **Max Duration:** 1_599ms
- **P95 Duration:** 1_595ms
- **Runs:** 3

### status='paid' AND country='US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND country = 'US'`
- **Count/Rows:** 4,902,972
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 799ms
- **Min Duration:** 791ms
- **Max Duration:** 813ms
- **P95 Duration:** 811ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 783ms
- **Min Duration:** 780ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_143ms
- **Min Duration:** 1_104ms
- **Max Duration:** 1_178ms
- **P95 Duration:** 1_175ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 786ms
- **Min Duration:** 779ms
- **Max Duration:** 797ms
- **P95 Duration:** 796ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_501ms
- **Min Duration:** 1_437ms
- **Max Duration:** 1_574ms
- **P95 Duration:** 1_566ms
- **Runs:** 3

### status='paid' AND country='US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY status`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 720ms
- **Min Duration:** 682ms
- **Max Duration:** 796ms
- **P95 Duration:** 785ms
- **Runs:** 3

### status='paid' AND country='US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 754ms
- **Min Duration:** 695ms
- **Max Duration:** 797ms
- **P95 Duration:** 795ms
- **Runs:** 3

### status='paid' AND country='US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 1_009ms
- **Min Duration:** 995ms
- **Max Duration:** 1_019ms
- **P95 Duration:** 1_019ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age BETWEEN 25 AND 45`
- **Count/Rows:** 33,395,229
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 717ms
- **Min Duration:** 678ms
- **Max Duration:** 787ms
- **P95 Duration:** 777ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age BETWEEN 25 AND 45 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 730ms
- **Min Duration:** 627ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_350ms
- **Min Duration:** 1_313ms
- **Max Duration:** 1_369ms
- **P95 Duration:** 1_369ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age BETWEEN 25 AND 45 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 682ms
- **Min Duration:** 628ms
- **Max Duration:** 786ms
- **P95 Duration:** 771ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_652ms
- **Min Duration:** 1_641ms
- **Max Duration:** 1_659ms
- **P95 Duration:** 1_659ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 912ms
- **Min Duration:** 800ms
- **Max Duration:** 971ms
- **P95 Duration:** 971ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 1_017ms
- **Min Duration:** 1_001ms
- **Max Duration:** 1_033ms
- **P95 Duration:** 1_032ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY age`
- **Count/Rows:** 21
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 1_019ms
- **Min Duration:** 972ms
- **Max Duration:** 1_077ms
- **P95 Duration:** 1_070ms
- **Runs:** 3

### tags contains 'alpha' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha')`
- **Count/Rows:** 37,972,095
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 2_560ms
- **Min Duration:** 2_523ms
- **Max Duration:** 2_586ms
- **P95 Duration:** 2_585ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 732ms
- **Min Duration:** 629ms
- **Max Duration:** 786ms
- **P95 Duration:** 786ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 3_360ms
- **Min Duration:** 3_321ms
- **Max Duration:** 3_406ms
- **P95 Duration:** 3_401ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 795ms
- **Min Duration:** 785ms
- **Max Duration:** 811ms
- **P95 Duration:** 809ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 3_727ms
- **Min Duration:** 3_637ms
- **Max Duration:** 3_866ms
- **P95 Duration:** 3_848ms
- **Runs:** 3

### tags contains 'alpha' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 2_805ms
- **Min Duration:** 2_739ms
- **Max Duration:** 2_867ms
- **P95 Duration:** 2_862ms
- **Runs:** 3

### tags contains 'alpha' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 2_822ms
- **Min Duration:** 2_773ms
- **Max Duration:** 2_853ms
- **P95 Duration:** 2_852ms
- **Runs:** 3

### tags contains 'alpha' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 3_062ms
- **Min Duration:** 3_014ms
- **Max Duration:** 3_112ms
- **P95 Duration:** 3_107ms
- **Runs:** 3

### note IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL`
- **Count/Rows:** 90,001,746
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_305ms
- **Min Duration:** 1_256ms
- **Max Duration:** 1_348ms
- **P95 Duration:** 1_345ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 731ms
- **Min Duration:** 622ms
- **Max Duration:** 786ms
- **P95 Duration:** 786ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_351ms
- **Min Duration:** 2_290ms
- **Max Duration:** 2_406ms
- **P95 Duration:** 2_401ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 741ms
- **Min Duration:** 641ms
- **Max Duration:** 795ms
- **P95 Duration:** 794ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_649ms
- **Min Duration:** 2_635ms
- **Max Duration:** 2_670ms
- **P95 Duration:** 2_668ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 1_674ms
- **Min Duration:** 1_588ms
- **Max Duration:** 1_808ms
- **P95 Duration:** 1_790ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL GROUP BY country`
- **Count/Rows:** 6
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** country
- **Average Duration:** 1_677ms
- **Min Duration:** 1_662ms
- **Max Duration:** 1_686ms
- **P95 Duration:** 1_686ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL GROUP BY age`
- **Count/Rows:** 62
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** age
- **Average Duration:** 1_946ms
- **Min Duration:** 1_943ms
- **Max Duration:** 1_948ms
- **P95 Duration:** 1_948ms
- **Runs:** 3

