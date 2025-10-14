# Query Performance Report

**Table:** iceberg.lab.narrow_100_000_000  
**Generated:** 2025-10-13T08:57:09.526Z  
**Total Rows:** 100,000,000  
**Table Size:** 2.3 GB  
**Trino Configuration:** Single-node Trino

## Summary

- **Total Queries:** 60
- **Iterations:** 3
- **Concurrency Simulation Streams:** 0
- **Average Duration:** 757ms
- **Fastest Query:** 608ms
- **Slowest Query:** 1_712ms
- **95th Percentile:** 814ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 100,000,000 | 762 | 761 | 762 | 762 |
| no filters | PAGINATION | first page | No | - | 100 | 761 | 760 | 761 | 761 |
| no filters | PAGINATION | first page | Yes | - | 100 | 1_190 | 1_182 | 1_205 | 1_203 |
| no filters | PAGINATION | 100th page | No | - | 100 | 712 | 611 | 762 | 762 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 1_712 | 1_672 | 1_767 | 1_760 |
| status = 'paid' AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 6,279,642 | 764 | 761 | 765 | 765 |
| status = 'paid' AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 762 | 759 | 764 | 764 |
| status = 'paid' AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 764 | 762 | 766 | 766 |
| status = 'paid' AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 711 | 611 | 761 | 761 |
| status = 'paid' AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 738 | 676 | 772 | 772 |
| country = 'US' AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 4,929,077 | 714 | 614 | 763 | 763 |
| country = 'US' AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 762 | 762 | 762 | 762 |
| country = 'US' AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 765 | 762 | 767 | 767 |
| country = 'US' AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 765 | 761 | 772 | 771 |
| country = 'US' AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 773 | 767 | 775 | 775 |
| age > 30 AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 19,187,449 | 714 | 620 | 763 | 763 |
| age > 30 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 710 | 609 | 760 | 760 |
| age > 30 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 721 | 621 | 770 | 770 |
| age > 30 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 761 | 760 | 761 | 761 |
| age > 30 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 769 | 766 | 773 | 773 |
| created_at >= DATE '2024-10-01' | COUNT | - | - | - | 25,136,612 | 761 | 759 | 762 | 762 |
| created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 711 | 610 | 761 | 761 |
| created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 765 | 764 | 766 | 766 |
| created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 710 | 609 | 760 | 760 |
| created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 727 | 702 | 775 | 768 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 21,492,658 | 764 | 762 | 766 | 766 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 760 | 759 | 761 | 761 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 721 | 622 | 775 | 774 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 763 | 761 | 766 | 766 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 782 | 778 | 786 | 786 |
| id > 50000000 AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 25,136,612 | 766 | 762 | 767 | 767 |
| id > 50000000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 762 | 761 | 762 | 762 |
| id > 50000000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 719 | 614 | 776 | 775 |
| id > 50000000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 761 | 760 | 762 | 762 |
| id > 50000000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 723 | 693 | 767 | 761 |
| id > 500000000 AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 0 | 761 | 760 | 762 | 762 |
| id > 500000000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 0 | 610 | 609 | 610 | 610 |
| id > 500000000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 0 | 609 | 608 | 609 | 609 |
| id > 500000000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 0 | 609 | 608 | 610 | 610 |
| id > 500000000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 0 | 610 | 610 | 610 | 610 |
| amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 21,492,658 | 715 | 611 | 767 | 767 |
| amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 762 | 761 | 763 | 763 |
| amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 725 | 642 | 766 | 766 |
| amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 761 | 760 | 762 | 762 |
| amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 776 | 774 | 778 | 778 |
| amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 0 | 711 | 609 | 762 | 762 |
| amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 0 | 609 | 607 | 611 | 611 |
| amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 0 | 608 | 606 | 609 | 609 |
| amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 0 | 609 | 608 | 609 | 609 |
| amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 0 | 609 | 608 | 610 | 610 |
| contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 9,546,070 | 745 | 683 | 787 | 785 |
| contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 761 | 760 | 761 | 761 |
| contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 770 | 766 | 776 | 776 |
| contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 762 | 760 | 764 | 764 |
| contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 926 | 913 | 943 | 941 |
| note IS NOT NULL AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 22,622,727 | 764 | 762 | 765 | 765 |
| note IS NOT NULL AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 761 | 759 | 762 | 762 |
| note IS NOT NULL AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 725 | 632 | 772 | 772 |
| note IS NOT NULL AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 763 | 760 | 765 | 765 |
| note IS NOT NULL AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 808 | 783 | 821 | 821 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 `
- **Count/Rows:** 100,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_190ms
- **Min Duration:** 1_182ms
- **Max Duration:** 1_205ms
- **P95 Duration:** 1_203ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 611ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_712ms
- **Min Duration:** 1_672ms
- **Max Duration:** 1_767ms
- **P95 Duration:** 1_760ms

### status = 'paid' AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 6,279,642
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 761ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### status = 'paid' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 759ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### status = 'paid' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 762ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### status = 'paid' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 611ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### status = 'paid' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE status = 'paid' AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 738ms
- **Min Duration:** 676ms
- **Max Duration:** 772ms
- **P95 Duration:** 772ms

### country = 'US' AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 4,929,077
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 714ms
- **Min Duration:** 614ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### country = 'US' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 762ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### country = 'US' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 762ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### country = 'US' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 761ms
- **Max Duration:** 772ms
- **P95 Duration:** 771ms

### country = 'US' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE country = 'US' AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 773ms
- **Min Duration:** 767ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms

### age > 30 AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 19,187,449
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 714ms
- **Min Duration:** 620ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### age > 30 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 710ms
- **Min Duration:** 609ms
- **Max Duration:** 760ms
- **P95 Duration:** 760ms

### age > 30 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 721ms
- **Min Duration:** 621ms
- **Max Duration:** 770ms
- **P95 Duration:** 770ms

### age > 30 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### age > 30 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE age > 30 AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 769ms
- **Min Duration:** 766ms
- **Max Duration:** 773ms
- **P95 Duration:** 773ms

### created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-10-01'`
- **Count/Rows:** 25,136,612
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 759ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 610ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 764ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 710ms
- **Min Duration:** 609ms
- **Max Duration:** 760ms
- **P95 Duration:** 760ms

### created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 727ms
- **Min Duration:** 702ms
- **Max Duration:** 775ms
- **P95 Duration:** 768ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 21,492,658
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 762ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 760ms
- **Min Duration:** 759ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 721ms
- **Min Duration:** 622ms
- **Max Duration:** 775ms
- **P95 Duration:** 774ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 761ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 782ms
- **Min Duration:** 778ms
- **Max Duration:** 786ms
- **P95 Duration:** 786ms

### id > 50000000 AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 25,136,612
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 766ms
- **Min Duration:** 762ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### id > 50000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### id > 50000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 719ms
- **Min Duration:** 614ms
- **Max Duration:** 776ms
- **P95 Duration:** 775ms

### id > 50000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### id > 50000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 50000000 AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 723ms
- **Min Duration:** 693ms
- **Max Duration:** 767ms
- **P95 Duration:** 761ms

### id > 500000000 AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### id > 500000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### id > 500000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 609ms
- **Min Duration:** 608ms
- **Max Duration:** 609ms
- **P95 Duration:** 609ms

### id > 500000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 609ms
- **Min Duration:** 608ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### id > 500000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE id > 500000000 AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 610ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 21,492,658
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 715ms
- **Min Duration:** 611ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 725ms
- **Min Duration:** 642ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 774ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms

### amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 609ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 609ms
- **Min Duration:** 607ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 608ms
- **Min Duration:** 606ms
- **Max Duration:** 609ms
- **P95 Duration:** 609ms

### amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 609ms
- **Min Duration:** 608ms
- **Max Duration:** 609ms
- **P95 Duration:** 609ms

### amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 609ms
- **Min Duration:** 608ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 9,546,070
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 745ms
- **Min Duration:** 683ms
- **Max Duration:** 787ms
- **P95 Duration:** 785ms

### contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 770ms
- **Min Duration:** 766ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms

### contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 760ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 926ms
- **Min Duration:** 913ms
- **Max Duration:** 943ms
- **P95 Duration:** 941ms

### note IS NOT NULL AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 22,622,727
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 762ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### note IS NOT NULL AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 759ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### note IS NOT NULL AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 725ms
- **Min Duration:** 632ms
- **Max Duration:** 772ms
- **P95 Duration:** 772ms

### note IS NOT NULL AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 760ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### note IS NOT NULL AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_100_000_000 WHERE note IS NOT NULL AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 808ms
- **Min Duration:** 783ms
- **Max Duration:** 821ms
- **P95 Duration:** 821ms

