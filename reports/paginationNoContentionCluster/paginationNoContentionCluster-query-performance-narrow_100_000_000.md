# Query Performance Report

**Table:** iceberg.lab.narrow_100_000_000  
**Generated:** 2025-10-12T19:04:58.164Z  
**Total Rows:** 100,000,000  
**Table Size:** 2.9 GB  
**Trino Configuration:** two-node Trino cluster

## Summary

- **Total Queries:** 60
- **Iterations:** 3
- **Concurrency Simulation Streams:** 0
- **Average Duration:** 1_360ms
- **Fastest Query:** 586ms
- **Slowest Query:** 5_432ms
- **95th Percentile:** 3_852ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 100,000,000 | 717 | 617 | 768 | 768 |
| no filters | PAGINATION | first page | No | - | 100 | 651 | 512 | 794 | 780 |
| no filters | PAGINATION | first page | Yes | - | 100 | 1_288 | 1_055 | 1_634 | 1_588 |
| no filters | PAGINATION | 100th page | No | - | 100 | 730 | 621 | 800 | 797 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 1_644 | 1_441 | 1_811 | 1_798 |
| status = 'paid' | COUNT | - | - | - | 25,002,854 | 793 | 645 | 921 | 911 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 720 | 622 | 772 | 772 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 1_414 | 1_167 | 1_793 | 1_742 |
| status = 'paid' | PAGINATION | 100th page | No | - | 100 | 694 | 632 | 769 | 761 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 100 | 1_301 | 1_086 | 1_540 | 1_514 |
| country = 'US' | COUNT | - | - | - | 19,600,445 | 804 | 782 | 830 | 827 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 753 | 672 | 818 | 813 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 916 | 858 | 969 | 965 |
| country = 'US' | PAGINATION | 100th page | No | - | 100 | 776 | 768 | 787 | 786 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 1_281 | 1_133 | 1_566 | 1_524 |
| age > 30 | COUNT | - | - | - | 76,316,740 | 724 | 620 | 776 | 776 |
| age > 30 | PAGINATION | first page | No | - | 100 | 718 | 615 | 773 | 773 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 1_077 | 1_059 | 1_086 | 1_086 |
| age > 30 | PAGINATION | 100th page | No | - | 100 | 666 | 613 | 766 | 752 |
| age > 30 | PAGINATION | 100th page | Yes | - | 100 | 1_359 | 1_220 | 1_594 | 1_561 |
| created_at >= DATE '2024-06-01' | COUNT | - | - | - | 58,468,297 | 1_078 | 796 | 1_302 | 1_286 |
| created_at >= DATE '2024-06-01' | PAGINATION | first page | No | - | 100 | 724 | 612 | 780 | 780 |
| created_at >= DATE '2024-06-01' | PAGINATION | first page | Yes | - | 100 | 2_207 | 1_686 | 2_538 | 2_524 |
| created_at >= DATE '2024-06-01' | PAGINATION | 100th page | No | - | 100 | 691 | 627 | 765 | 757 |
| created_at >= DATE '2024-06-01' | PAGINATION | 100th page | Yes | - | 100 | 2_510 | 1_769 | 3_081 | 3_041 |
| amount > 1000 | COUNT | - | - | - | 85,501,768 | 787 | 760 | 819 | 816 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 715 | 614 | 766 | 766 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 1_553 | 1_332 | 1_825 | 1_793 |
| amount > 1000 | PAGINATION | 100th page | No | - | 100 | 723 | 644 | 794 | 788 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 100 | 2_522 | 1_865 | 2_890 | 2_882 |
| id > 50000000 | COUNT | - | - | - | 50,000,000 | 956 | 772 | 1_076 | 1_071 |
| id > 50000000 | PAGINATION | first page | No | - | 100 | 774 | 730 | 820 | 816 |
| id > 50000000 | PAGINATION | first page | Yes | - | 100 | 1_420 | 983 | 2_124 | 2_027 |
| id > 50000000 | PAGINATION | 100th page | No | - | 100 | 768 | 762 | 777 | 776 |
| id > 50000000 | PAGINATION | 100th page | Yes | - | 100 | 1_728 | 1_011 | 2_178 | 2_160 |
| id > 500000000 | COUNT | - | - | - | 0 | 644 | 623 | 659 | 658 |
| id > 500000000 | PAGINATION | first page | No | - | 0 | 629 | 628 | 630 | 630 |
| id > 500000000 | PAGINATION | first page | Yes | - | 0 | 630 | 613 | 641 | 641 |
| id > 500000000 | PAGINATION | 100th page | No | - | 0 | 612 | 611 | 613 | 613 |
| id > 500000000 | PAGINATION | 100th page | Yes | - | 0 | 586 | 503 | 635 | 634 |
| amount > 1000 AND id > 50000000 | COUNT | - | - | - | 42,748,556 | 1_545 | 946 | 1_939 | 1_920 |
| amount > 1000 AND id > 50000000 | PAGINATION | first page | No | - | 100 | 760 | 613 | 901 | 888 |
| amount > 1000 AND id > 50000000 | PAGINATION | first page | Yes | - | 100 | 2_421 | 1_991 | 2_784 | 2_755 |
| amount > 1000 AND id > 50000000 | PAGINATION | 100th page | No | - | 100 | 715 | 613 | 766 | 766 |
| amount > 1000 AND id > 50000000 | PAGINATION | 100th page | Yes | - | 100 | 1_140 | 1_057 | 1_182 | 1_182 |
| amount > 1000 AND id > 500000000 | COUNT | - | - | - | 0 | 1_033 | 804 | 1_305 | 1_274 |
| amount > 1000 AND id > 500000000 | PAGINATION | first page | No | - | 0 | 998 | 648 | 1_244 | 1_230 |
| amount > 1000 AND id > 500000000 | PAGINATION | first page | Yes | - | 0 | 1_061 | 614 | 1_561 | 1_506 |
| amount > 1000 AND id > 500000000 | PAGINATION | 100th page | No | - | 0 | 946 | 698 | 1_225 | 1_194 |
| amount > 1000 AND id > 500000000 | PAGINATION | 100th page | Yes | - | 0 | 903 | 612 | 1_419 | 1_345 |
| contains(tags, 'alpha') | COUNT | - | - | - | 37,972,095 | 3_349 | 1_928 | 4_641 | 4_525 |
| contains(tags, 'alpha') | PAGINATION | first page | No | - | 100 | 1_238 | 1_160 | 1_341 | 1_328 |
| contains(tags, 'alpha') | PAGINATION | first page | Yes | - | 100 | 5_432 | 4_101 | 8_080 | 7_684 |
| contains(tags, 'alpha') | PAGINATION | 100th page | No | - | 100 | 1_773 | 1_447 | 2_370 | 2_284 |
| contains(tags, 'alpha') | PAGINATION | 100th page | Yes | - | 100 | 4_561 | 3_526 | 5_813 | 5_666 |
| note IS NOT NULL | COUNT | - | - | - | 90,001,746 | 2_391 | 1_111 | 3_189 | 3_158 |
| note IS NOT NULL | PAGINATION | first page | No | - | 100 | 841 | 619 | 1_281 | 1_216 |
| note IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 4_568 | 3_797 | 5_341 | 5_264 |
| note IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 790 | 727 | 832 | 830 |
| note IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 3_815 | 2_936 | 4_958 | 4_818 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 `
- **Count/Rows:** 100,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 717ms
- **Min Duration:** 617ms
- **Max Duration:** 768ms
- **P95 Duration:** 768ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 651ms
- **Min Duration:** 512ms
- **Max Duration:** 794ms
- **P95 Duration:** 780ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_288ms
- **Min Duration:** 1_055ms
- **Max Duration:** 1_634ms
- **P95 Duration:** 1_588ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 730ms
- **Min Duration:** 621ms
- **Max Duration:** 800ms
- **P95 Duration:** 797ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_644ms
- **Min Duration:** 1_441ms
- **Max Duration:** 1_811ms
- **P95 Duration:** 1_798ms

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid'`
- **Count/Rows:** 25,002,854
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 793ms
- **Min Duration:** 645ms
- **Max Duration:** 921ms
- **P95 Duration:** 911ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 720ms
- **Min Duration:** 622ms
- **Max Duration:** 772ms
- **P95 Duration:** 772ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_414ms
- **Min Duration:** 1_167ms
- **Max Duration:** 1_793ms
- **P95 Duration:** 1_742ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 694ms
- **Min Duration:** 632ms
- **Max Duration:** 769ms
- **P95 Duration:** 761ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_301ms
- **Min Duration:** 1_086ms
- **Max Duration:** 1_540ms
- **P95 Duration:** 1_514ms

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US'`
- **Count/Rows:** 19,600,445
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 804ms
- **Min Duration:** 782ms
- **Max Duration:** 830ms
- **P95 Duration:** 827ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 753ms
- **Min Duration:** 672ms
- **Max Duration:** 818ms
- **P95 Duration:** 813ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 916ms
- **Min Duration:** 858ms
- **Max Duration:** 969ms
- **P95 Duration:** 965ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 768ms
- **Max Duration:** 787ms
- **P95 Duration:** 786ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_281ms
- **Min Duration:** 1_133ms
- **Max Duration:** 1_566ms
- **P95 Duration:** 1_524ms

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age > 30`
- **Count/Rows:** 76,316,740
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 724ms
- **Min Duration:** 620ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 718ms
- **Min Duration:** 615ms
- **Max Duration:** 773ms
- **P95 Duration:** 773ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_077ms
- **Min Duration:** 1_059ms
- **Max Duration:** 1_086ms
- **P95 Duration:** 1_086ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 666ms
- **Min Duration:** 613ms
- **Max Duration:** 766ms
- **P95 Duration:** 752ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_359ms
- **Min Duration:** 1_220ms
- **Max Duration:** 1_594ms
- **P95 Duration:** 1_561ms

### created_at >= DATE '2024-06-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01'`
- **Count/Rows:** 58,468,297
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_078ms
- **Min Duration:** 796ms
- **Max Duration:** 1_302ms
- **P95 Duration:** 1_286ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 724ms
- **Min Duration:** 612ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_207ms
- **Min Duration:** 1_686ms
- **Max Duration:** 2_538ms
- **P95 Duration:** 2_524ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 691ms
- **Min Duration:** 627ms
- **Max Duration:** 765ms
- **P95 Duration:** 757ms

### created_at >= DATE '2024-06-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_510ms
- **Min Duration:** 1_769ms
- **Max Duration:** 3_081ms
- **P95 Duration:** 3_041ms

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000`
- **Count/Rows:** 85,501,768
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 787ms
- **Min Duration:** 760ms
- **Max Duration:** 819ms
- **P95 Duration:** 816ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 715ms
- **Min Duration:** 614ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_553ms
- **Min Duration:** 1_332ms
- **Max Duration:** 1_825ms
- **P95 Duration:** 1_793ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 723ms
- **Min Duration:** 644ms
- **Max Duration:** 794ms
- **P95 Duration:** 788ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_522ms
- **Min Duration:** 1_865ms
- **Max Duration:** 2_890ms
- **P95 Duration:** 2_882ms

### id > 50000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000`
- **Count/Rows:** 50,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 956ms
- **Min Duration:** 772ms
- **Max Duration:** 1_076ms
- **P95 Duration:** 1_071ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 774ms
- **Min Duration:** 730ms
- **Max Duration:** 820ms
- **P95 Duration:** 816ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_420ms
- **Min Duration:** 983ms
- **Max Duration:** 2_124ms
- **P95 Duration:** 2_027ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 768ms
- **Min Duration:** 762ms
- **Max Duration:** 777ms
- **P95 Duration:** 776ms

### id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_728ms
- **Min Duration:** 1_011ms
- **Max Duration:** 2_178ms
- **P95 Duration:** 2_160ms

### id > 500000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 644ms
- **Min Duration:** 623ms
- **Max Duration:** 659ms
- **P95 Duration:** 658ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 629ms
- **Min Duration:** 628ms
- **Max Duration:** 630ms
- **P95 Duration:** 630ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 630ms
- **Min Duration:** 613ms
- **Max Duration:** 641ms
- **P95 Duration:** 641ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 612ms
- **Min Duration:** 611ms
- **Max Duration:** 613ms
- **P95 Duration:** 613ms

### id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 586ms
- **Min Duration:** 503ms
- **Max Duration:** 635ms
- **P95 Duration:** 634ms

### amount > 1000 AND id > 50000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000`
- **Count/Rows:** 42,748,556
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_545ms
- **Min Duration:** 946ms
- **Max Duration:** 1_939ms
- **P95 Duration:** 1_920ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 760ms
- **Min Duration:** 613ms
- **Max Duration:** 901ms
- **P95 Duration:** 888ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_421ms
- **Min Duration:** 1_991ms
- **Max Duration:** 2_784ms
- **P95 Duration:** 2_755ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 715ms
- **Min Duration:** 613ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### amount > 1000 AND id > 50000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_140ms
- **Min Duration:** 1_057ms
- **Max Duration:** 1_182ms
- **P95 Duration:** 1_182ms

### amount > 1000 AND id > 500000000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_033ms
- **Min Duration:** 804ms
- **Max Duration:** 1_305ms
- **P95 Duration:** 1_274ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 998ms
- **Min Duration:** 648ms
- **Max Duration:** 1_244ms
- **P95 Duration:** 1_230ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_061ms
- **Min Duration:** 614ms
- **Max Duration:** 1_561ms
- **P95 Duration:** 1_506ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 946ms
- **Min Duration:** 698ms
- **Max Duration:** 1_225ms
- **P95 Duration:** 1_194ms

### amount > 1000 AND id > 500000000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 903ms
- **Min Duration:** 612ms
- **Max Duration:** 1_419ms
- **P95 Duration:** 1_345ms

### contains(tags, 'alpha') - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha')`
- **Count/Rows:** 37,972,095
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 3_349ms
- **Min Duration:** 1_928ms
- **Max Duration:** 4_641ms
- **P95 Duration:** 4_525ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_238ms
- **Min Duration:** 1_160ms
- **Max Duration:** 1_341ms
- **P95 Duration:** 1_328ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_432ms
- **Min Duration:** 4_101ms
- **Max Duration:** 8_080ms
- **P95 Duration:** 7_684ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 1_773ms
- **Min Duration:** 1_447ms
- **Max Duration:** 2_370ms
- **P95 Duration:** 2_284ms

### contains(tags, 'alpha') - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 4_561ms
- **Min Duration:** 3_526ms
- **Max Duration:** 5_813ms
- **P95 Duration:** 5_666ms

### note IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL`
- **Count/Rows:** 90,001,746
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 2_391ms
- **Min Duration:** 1_111ms
- **Max Duration:** 3_189ms
- **P95 Duration:** 3_158ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 841ms
- **Min Duration:** 619ms
- **Max Duration:** 1_281ms
- **P95 Duration:** 1_216ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 4_568ms
- **Min Duration:** 3_797ms
- **Max Duration:** 5_341ms
- **P95 Duration:** 5_264ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 790ms
- **Min Duration:** 727ms
- **Max Duration:** 832ms
- **P95 Duration:** 830ms

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 3_815ms
- **Min Duration:** 2_936ms
- **Max Duration:** 4_958ms
- **P95 Duration:** 4_818ms

