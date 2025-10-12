# Query Performance Report

**Table:** iceberg.lab.narrow_100_000_000  
**Generated:** 2025-10-12T19:22:16.084Z  
**Total Rows:** 100,000,000  
**Table Size:** 2.9 GB  
**Trino Configuration:** two-node Trino cluster

## Summary

- **Total Queries:** 60
- **Iterations:** 3
- **Concurrency Simulation Streams:** 0
- **Average Duration:** 900ms
- **Fastest Query:** 613ms
- **Slowest Query:** 2_054ms
- **95th Percentile:** 1_662ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 100,000,000 | 725 | 624 | 777 | 777 |
| no filters | PAGINATION | first page | No | - | 100 | 680 | 624 | 789 | 773 |
| no filters | PAGINATION | first page | Yes | - | 100 | 1_658 | 1_175 | 2_558 | 2_427 |
| no filters | PAGINATION | 100th page | No | - | 100 | 723 | 623 | 774 | 774 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 1_169 | 1_118 | 1_252 | 1_241 |
| status = 'paid' | COUNT | - | - | - | 25,002,854 | 725 | 622 | 782 | 781 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 724 | 622 | 775 | 775 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 902 | 818 | 947 | 947 |
| status = 'paid' | PAGINATION | 100th page | No | - | 100 | 727 | 626 | 781 | 781 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 100 | 985 | 976 | 995 | 994 |
| country = 'US' | COUNT | - | - | - | 19,600,445 | 725 | 625 | 777 | 777 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 772 | 770 | 773 | 773 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 855 | 778 | 967 | 953 |
| country = 'US' | PAGINATION | 100th page | No | - | 100 | 719 | 619 | 769 | 769 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 929 | 904 | 960 | 957 |
| age > 30 | COUNT | - | - | - | 76,316,740 | 725 | 629 | 773 | 773 |
| age > 30 | PAGINATION | first page | No | - | 100 | 770 | 770 | 770 | 770 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 944 | 906 | 986 | 982 |
| age > 30 | PAGINATION | 100th page | No | - | 100 | 769 | 767 | 769 | 769 |
| age > 30 | PAGINATION | 100th page | Yes | - | 100 | 1_033 | 1_008 | 1_061 | 1_058 |
| created_at >= DATE '2024-06-01' | COUNT | - | - | - | 58,468,297 | 783 | 680 | 894 | 882 |
| created_at >= DATE '2024-06-01' | PAGINATION | first page | No | - | 100 | 769 | 768 | 769 | 769 |
| created_at >= DATE '2024-06-01' | PAGINATION | first page | Yes | - | 100 | 1_167 | 1_085 | 1_267 | 1_256 |
| created_at >= DATE '2024-06-01' | PAGINATION | 100th page | No | - | 100 | 771 | 769 | 773 | 773 |
| created_at >= DATE '2024-06-01' | PAGINATION | 100th page | Yes | - | 100 | 1_277 | 1_236 | 1_299 | 1_299 |
| amount > 1000 | COUNT | - | - | - | 85,501,768 | 837 | 767 | 964 | 946 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 719 | 617 | 770 | 770 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 1_310 | 1_277 | 1_359 | 1_353 |
| amount > 1000 | PAGINATION | 100th page | No | - | 100 | 769 | 768 | 770 | 770 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 100 | 1_357 | 1_325 | 1_404 | 1_398 |
| id > 50000000 | COUNT | - | - | - | 50,000,000 | 729 | 627 | 789 | 787 |
| id > 50000000 | PAGINATION | first page | No | - | 100 | 718 | 617 | 768 | 768 |
| id > 50000000 | PAGINATION | first page | Yes | - | 100 | 747 | 699 | 773 | 773 |
| id > 50000000 | PAGINATION | 100th page | No | - | 100 | 717 | 616 | 768 | 768 |
| id > 50000000 | PAGINATION | 100th page | Yes | - | 100 | 879 | 844 | 906 | 904 |
| id > 500000000 | COUNT | - | - | - | 0 | 768 | 767 | 769 | 769 |
| id > 500000000 | PAGINATION | first page | No | - | 0 | 614 | 612 | 614 | 614 |
| id > 500000000 | PAGINATION | first page | Yes | - | 0 | 614 | 613 | 615 | 615 |
| id > 500000000 | PAGINATION | 100th page | No | - | 0 | 615 | 614 | 616 | 616 |
| id > 500000000 | PAGINATION | 100th page | Yes | - | 0 | 615 | 614 | 615 | 615 |
| amount > 1000 AND id > 50000000 | COUNT | - | - | - | 42,748,556 | 846 | 770 | 996 | 974 |
| amount > 1000 AND id > 50000000 | PAGINATION | first page | No | - | 100 | 768 | 766 | 768 | 768 |
| amount > 1000 AND id > 50000000 | PAGINATION | first page | Yes | - | 100 | 866 | 859 | 870 | 870 |
| amount > 1000 AND id > 50000000 | PAGINATION | 100th page | No | - | 100 | 768 | 767 | 768 | 768 |
| amount > 1000 AND id > 50000000 | PAGINATION | 100th page | Yes | - | 100 | 979 | 961 | 992 | 991 |
| amount > 1000 AND id > 500000000 | COUNT | - | - | - | 0 | 768 | 767 | 768 | 768 |
| amount > 1000 AND id > 500000000 | PAGINATION | first page | No | - | 0 | 614 | 612 | 615 | 615 |
| amount > 1000 AND id > 500000000 | PAGINATION | first page | Yes | - | 0 | 615 | 613 | 617 | 617 |
| amount > 1000 AND id > 500000000 | PAGINATION | 100th page | No | - | 0 | 613 | 613 | 613 | 613 |
| amount > 1000 AND id > 500000000 | PAGINATION | 100th page | Yes | - | 0 | 613 | 612 | 614 | 614 |
| contains(tags, 'alpha') | COUNT | - | - | - | 37,972,095 | 2_054 | 1_385 | 3_227 | 3_060 |
| contains(tags, 'alpha') | PAGINATION | first page | No | - | 100 | 767 | 766 | 767 | 767 |
| contains(tags, 'alpha') | PAGINATION | first page | Yes | - | 100 | 1_736 | 1_710 | 1_760 | 1_758 |
| contains(tags, 'alpha') | PAGINATION | 100th page | No | - | 100 | 766 | 765 | 767 | 767 |
| contains(tags, 'alpha') | PAGINATION | 100th page | Yes | - | 100 | 1_890 | 1_844 | 1_940 | 1_935 |
| note IS NOT NULL | COUNT | - | - | - | 90,001,746 | 1_052 | 775 | 1_587 | 1_508 |
| note IS NOT NULL | PAGINATION | first page | No | - | 100 | 666 | 614 | 768 | 753 |
| note IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 1_346 | 1_329 | 1_378 | 1_374 |
| note IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 767 | 766 | 767 | 767 |
| note IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 1_475 | 1_412 | 1_526 | 1_522 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 `
- **Count/Rows:** 100,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 725ms
- **Min Duration:** 624ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 680ms
- **Min Duration:** 624ms
- **Max Duration:** 789ms
- **P95 Duration:** 773ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_658ms
- **Min Duration:** 1_175ms
- **Max Duration:** 2_558ms
- **P95 Duration:** 2_427ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 723ms
- **Min Duration:** 623ms
- **Max Duration:** 774ms
- **P95 Duration:** 774ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_169ms
- **Min Duration:** 1_118ms
- **Max Duration:** 1_252ms
- **P95 Duration:** 1_241ms

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid'`
- **Count/Rows:** 25,002,854
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 725ms
- **Min Duration:** 622ms
- **Max Duration:** 782ms
- **P95 Duration:** 781ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 724ms
- **Min Duration:** 622ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 902ms
- **Min Duration:** 818ms
- **Max Duration:** 947ms
- **P95 Duration:** 947ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 727ms
- **Min Duration:** 626ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 985ms
- **Min Duration:** 976ms
- **Max Duration:** 995ms
- **P95 Duration:** 994ms

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US'`
- **Count/Rows:** 19,600,445
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 725ms
- **Min Duration:** 625ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 772ms
- **Min Duration:** 770ms
- **Max Duration:** 773ms
- **P95 Duration:** 773ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 855ms
- **Min Duration:** 778ms
- **Max Duration:** 967ms
- **P95 Duration:** 953ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 719ms
- **Min Duration:** 619ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 929ms
- **Min Duration:** 904ms
- **Max Duration:** 960ms
- **P95 Duration:** 957ms

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age > 30`
- **Count/Rows:** 76,316,740
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 725ms
- **Min Duration:** 629ms
- **Max Duration:** 773ms
- **P95 Duration:** 773ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 770ms
- **Min Duration:** 770ms
- **Max Duration:** 770ms
- **P95 Duration:** 770ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 944ms
- **Min Duration:** 906ms
- **Max Duration:** 986ms
- **P95 Duration:** 982ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 769ms
- **Min Duration:** 767ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_033ms
- **Min Duration:** 1_008ms
- **Max Duration:** 1_061ms
- **P95 Duration:** 1_058ms

### created_at >= DATE '2024-06-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01'`
- **Count/Rows:** 58,468,297
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 783ms
- **Min Duration:** 680ms
- **Max Duration:** 894ms
- **P95 Duration:** 882ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 769ms
- **Min Duration:** 768ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_167ms
- **Min Duration:** 1_085ms
- **Max Duration:** 1_267ms
- **P95 Duration:** 1_256ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 771ms
- **Min Duration:** 769ms
- **Max Duration:** 773ms
- **P95 Duration:** 773ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_277ms
- **Min Duration:** 1_236ms
- **Max Duration:** 1_299ms
- **P95 Duration:** 1_299ms

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000`
- **Count/Rows:** 85,501,768
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 837ms
- **Min Duration:** 767ms
- **Max Duration:** 964ms
- **P95 Duration:** 946ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 719ms
- **Min Duration:** 617ms
- **Max Duration:** 770ms
- **P95 Duration:** 770ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_310ms
- **Min Duration:** 1_277ms
- **Max Duration:** 1_359ms
- **P95 Duration:** 1_353ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 769ms
- **Min Duration:** 768ms
- **Max Duration:** 770ms
- **P95 Duration:** 770ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_357ms
- **Min Duration:** 1_325ms
- **Max Duration:** 1_404ms
- **P95 Duration:** 1_398ms

### id > 50000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000`
- **Count/Rows:** 50,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 729ms
- **Min Duration:** 627ms
- **Max Duration:** 789ms
- **P95 Duration:** 787ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 718ms
- **Min Duration:** 617ms
- **Max Duration:** 768ms
- **P95 Duration:** 768ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 747ms
- **Min Duration:** 699ms
- **Max Duration:** 773ms
- **P95 Duration:** 773ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 717ms
- **Min Duration:** 616ms
- **Max Duration:** 768ms
- **P95 Duration:** 768ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 879ms
- **Min Duration:** 844ms
- **Max Duration:** 906ms
- **P95 Duration:** 904ms

### id > 500000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 768ms
- **Min Duration:** 767ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 614ms
- **Min Duration:** 612ms
- **Max Duration:** 614ms
- **P95 Duration:** 614ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 614ms
- **Min Duration:** 613ms
- **Max Duration:** 615ms
- **P95 Duration:** 615ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 615ms
- **Min Duration:** 614ms
- **Max Duration:** 616ms
- **P95 Duration:** 616ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 615ms
- **Min Duration:** 614ms
- **Max Duration:** 615ms
- **P95 Duration:** 615ms

### amount > 1000 AND id > 50000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000`
- **Count/Rows:** 42,748,556
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 846ms
- **Min Duration:** 770ms
- **Max Duration:** 996ms
- **P95 Duration:** 974ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 768ms
- **Min Duration:** 766ms
- **Max Duration:** 768ms
- **P95 Duration:** 768ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 866ms
- **Min Duration:** 859ms
- **Max Duration:** 870ms
- **P95 Duration:** 870ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 768ms
- **Min Duration:** 767ms
- **Max Duration:** 768ms
- **P95 Duration:** 768ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 979ms
- **Min Duration:** 961ms
- **Max Duration:** 992ms
- **P95 Duration:** 991ms

### amount > 1000 AND id > 500000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 768ms
- **Min Duration:** 767ms
- **Max Duration:** 768ms
- **P95 Duration:** 768ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 614ms
- **Min Duration:** 612ms
- **Max Duration:** 615ms
- **P95 Duration:** 615ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 615ms
- **Min Duration:** 613ms
- **Max Duration:** 617ms
- **P95 Duration:** 617ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 613ms
- **Min Duration:** 613ms
- **Max Duration:** 613ms
- **P95 Duration:** 613ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 613ms
- **Min Duration:** 612ms
- **Max Duration:** 614ms
- **P95 Duration:** 614ms

### contains(tags, 'alpha') - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha')`
- **Count/Rows:** 37,972,095
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 2_054ms
- **Min Duration:** 1_385ms
- **Max Duration:** 3_227ms
- **P95 Duration:** 3_060ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 767ms
- **Min Duration:** 766ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_736ms
- **Min Duration:** 1_710ms
- **Max Duration:** 1_760ms
- **P95 Duration:** 1_758ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 766ms
- **Min Duration:** 765ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_890ms
- **Min Duration:** 1_844ms
- **Max Duration:** 1_940ms
- **P95 Duration:** 1_935ms

### note IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL`
- **Count/Rows:** 90,001,746
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_052ms
- **Min Duration:** 775ms
- **Max Duration:** 1_587ms
- **P95 Duration:** 1_508ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 666ms
- **Min Duration:** 614ms
- **Max Duration:** 768ms
- **P95 Duration:** 753ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_346ms
- **Min Duration:** 1_329ms
- **Max Duration:** 1_378ms
- **P95 Duration:** 1_374ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 767ms
- **Min Duration:** 766ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_475ms
- **Min Duration:** 1_412ms
- **Max Duration:** 1_526ms
- **P95 Duration:** 1_522ms

