# Query Performance Report

**Table:** iceberg.lab.wide_100_000_000  
**Generated:** 2025-10-13T09:03:45.550Z  
**Total Rows:** 102,000,000  
**Table Size:** 29.8 GB  
**Trino Configuration:** Single-node Trino

## Summary

- **Total Queries:** 40
- **Iterations:** 3
- **Concurrency Simulation Streams:** 0
- **Average Duration:** 787ms
- **Fastest Query:** 652ms
- **Slowest Query:** 1_743ms
- **95th Percentile:** 840ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 102,000,000 | 761 | 760 | 761 | 761 |
| no filters | PAGINATION | first page | No | - | 100 | 762 | 761 | 762 | 762 |
| no filters | PAGINATION | first page | Yes | - | 100 | 1_255 | 1_242 | 1_265 | 1_265 |
| no filters | PAGINATION | 100th page | No | - | 100 | 710 | 609 | 760 | 760 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 1_743 | 1_714 | 1_766 | 1_765 |
| row_9 > 5000 AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 13,262,725 | 761 | 759 | 762 | 762 |
| row_9 > 5000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 712 | 610 | 763 | 763 |
| row_9 > 5000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 765 | 763 | 766 | 766 |
| row_9 > 5000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 761 | 760 | 762 | 762 |
| row_9 > 5000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 739 | 721 | 768 | 764 |
| row_28 = 'c' AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 5,029,941 | 761 | 759 | 762 | 762 |
| row_28 = 'c' AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 761 | 761 | 761 | 761 |
| row_28 = 'c' AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 765 | 762 | 767 | 767 |
| row_28 = 'c' AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 761 | 760 | 761 | 761 |
| row_28 = 'c' AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 747 | 698 | 776 | 775 |
| row_10 > 2000 AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 8,124,762 | 761 | 760 | 761 | 761 |
| row_10 > 2000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 761 | 759 | 761 | 761 |
| row_10 > 2000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 714 | 611 | 766 | 766 |
| row_10 > 2000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 762 | 761 | 762 | 762 |
| row_10 > 2000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 776 | 774 | 777 | 777 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 14,698,905 | 761 | 760 | 762 | 762 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 761 | 760 | 761 | 761 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 664 | 613 | 760 | 746 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 710 | 609 | 762 | 762 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 774 | 770 | 777 | 777 |
| row_10 > 2000 AND row_28 = 'c' AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 1,626,498 | 761 | 759 | 764 | 764 |
| row_10 > 2000 AND row_28 = 'c' AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 762 | 761 | 762 | 762 |
| row_10 > 2000 AND row_28 = 'c' AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 764 | 763 | 765 | 765 |
| row_10 > 2000 AND row_28 = 'c' AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 762 | 761 | 762 | 762 |
| row_10 > 2000 AND row_28 = 'c' AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 747 | 729 | 770 | 768 |
| row_9 BETWEEN 2000 AND 8000 AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 15,919,726 | 761 | 760 | 762 | 762 |
| row_9 BETWEEN 2000 AND 8000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 709 | 607 | 760 | 760 |
| row_9 BETWEEN 2000 AND 8000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 765 | 763 | 766 | 766 |
| row_9 BETWEEN 2000 AND 8000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 711 | 610 | 762 | 762 |
| row_9 BETWEEN 2000 AND 8000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 756 | 721 | 777 | 777 |
| row_29 IS NOT NULL AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 25,136,612 | 764 | 762 | 765 | 765 |
| row_29 IS NOT NULL AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 760 | 759 | 760 | 760 |
| row_29 IS NOT NULL AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 652 | 649 | 657 | 657 |
| row_29 IS NOT NULL AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 763 | 760 | 769 | 769 |
| row_29 IS NOT NULL AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 818 | 789 | 837 | 836 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 `
- **Count/Rows:** 102,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_255ms
- **Min Duration:** 1_242ms
- **Max Duration:** 1_265ms
- **P95 Duration:** 1_265ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 710ms
- **Min Duration:** 609ms
- **Max Duration:** 760ms
- **P95 Duration:** 760ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_743ms
- **Min Duration:** 1_714ms
- **Max Duration:** 1_766ms
- **P95 Duration:** 1_765ms

### row_9 > 5000 AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 13,262,725
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 759ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_9 > 5000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 610ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### row_9 > 5000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 763ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### row_9 > 5000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_9 > 5000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 739ms
- **Min Duration:** 721ms
- **Max Duration:** 768ms
- **P95 Duration:** 764ms

### row_28 = 'c' AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'c' AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 5,029,941
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 759ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_28 = 'c' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'c' AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 761ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### row_28 = 'c' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'c' AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 762ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### row_28 = 'c' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'c' AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### row_28 = 'c' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'c' AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 747ms
- **Min Duration:** 698ms
- **Max Duration:** 776ms
- **P95 Duration:** 775ms

### row_10 > 2000 AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 8,124,762
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### row_10 > 2000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 759ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### row_10 > 2000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 714ms
- **Min Duration:** 611ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### row_10 > 2000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_10 > 2000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 774ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 14,698,905
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 664ms
- **Min Duration:** 613ms
- **Max Duration:** 760ms
- **P95 Duration:** 746ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 710ms
- **Min Duration:** 609ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 774ms
- **Min Duration:** 770ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms

### row_10 > 2000 AND row_28 = 'c' AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND row_28 = 'c' AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 1,626,498
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 759ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### row_10 > 2000 AND row_28 = 'c' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND row_28 = 'c' AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_10 > 2000 AND row_28 = 'c' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND row_28 = 'c' AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 763ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### row_10 > 2000 AND row_28 = 'c' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND row_28 = 'c' AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_10 > 2000 AND row_28 = 'c' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 AND row_28 = 'c' AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 747ms
- **Min Duration:** 729ms
- **Max Duration:** 770ms
- **P95 Duration:** 768ms

### row_9 BETWEEN 2000 AND 8000 AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 15,919,726
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_9 BETWEEN 2000 AND 8000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 709ms
- **Min Duration:** 607ms
- **Max Duration:** 760ms
- **P95 Duration:** 760ms

### row_9 BETWEEN 2000 AND 8000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 765ms
- **Min Duration:** 763ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### row_9 BETWEEN 2000 AND 8000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 610ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_9 BETWEEN 2000 AND 8000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 756ms
- **Min Duration:** 721ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms

### row_29 IS NOT NULL AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 25,136,612
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 762ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### row_29 IS NOT NULL AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 760ms
- **Min Duration:** 759ms
- **Max Duration:** 760ms
- **P95 Duration:** 760ms

### row_29 IS NOT NULL AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 652ms
- **Min Duration:** 649ms
- **Max Duration:** 657ms
- **P95 Duration:** 657ms

### row_29 IS NOT NULL AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 760ms
- **Max Duration:** 769ms
- **P95 Duration:** 769ms

### row_29 IS NOT NULL AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 818ms
- **Min Duration:** 789ms
- **Max Duration:** 837ms
- **P95 Duration:** 836ms

