# Query Performance Report

**Table:** iceberg.lab.wide_1_000_000  
**Generated:** 2025-10-10T21:28:42.280Z  
**Total Rows:** 1,000,000  
**Table Size:** 296.9 MB

## Summary

- **Total Queries:** 240
- **Iterations:** 3
- **Average Duration:** 700ms
- **Fastest Query:** 607ms
- **Slowest Query:** 767ms
- **95th Percentile:** 764ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 1,000,000 | 762 | 760 | 762 | 762 |
| no filters | PAGINATION | first page | No | - | 100 | 763 | 762 | 764 | 764 |
| no filters | PAGINATION | first page | Yes | - | 100 | 763 | 761 | 764 | 764 |
| no filters | PAGINATION | 100th page | No | - | 100 | 762 | 761 | 762 | 762 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 762 | 760 | 764 | 764 |
| no filters | AGGREGATION | - | - | row_28 | 5 | 713 | 612 | 764 | 764 |
| no filters | AGGREGATION | - | - | row_48 | 7 | 761 | 761 | 761 | 761 |
| no filters | AGGREGATION | - | - | row_54 | 7 | 762 | 761 | 764 | 764 |
| row_9 > 5000 | COUNT | - | - | - | 526,937 | 713 | 613 | 764 | 764 |
| row_9 > 5000 | PAGINATION | first page | No | - | 100 | 763 | 762 | 763 | 763 |
| row_9 > 5000 | PAGINATION | first page | Yes | - | 100 | 762 | 762 | 762 | 762 |
| row_9 > 5000 | PAGINATION | 100th page | No | - | 100 | 712 | 610 | 763 | 763 |
| row_9 > 5000 | PAGINATION | 100th page | Yes | - | 100 | 762 | 761 | 763 | 763 |
| row_9 > 5000 | AGGREGATION | - | - | row_28 | 5 | 762 | 761 | 762 | 762 |
| row_9 > 5000 | AGGREGATION | - | - | row_48 | 7 | 762 | 761 | 762 | 762 |
| row_9 > 5000 | AGGREGATION | - | - | row_54 | 7 | 763 | 762 | 764 | 764 |
| row_28 = 'value1' | COUNT | - | - | - | 0 | 762 | 761 | 762 | 762 |
| row_28 = 'value1' | PAGINATION | first page | No | - | 0 | 610 | 608 | 610 | 610 |
| row_28 = 'value1' | PAGINATION | first page | Yes | - | 0 | 611 | 610 | 613 | 613 |
| row_28 = 'value1' | PAGINATION | 100th page | No | - | 0 | 609 | 608 | 610 | 610 |
| row_28 = 'value1' | PAGINATION | 100th page | Yes | - | 0 | 611 | 610 | 611 | 611 |
| row_28 = 'value1' | AGGREGATION | - | - | row_28 | 0 | 611 | 610 | 611 | 611 |
| row_28 = 'value1' | AGGREGATION | - | - | row_48 | 0 | 611 | 610 | 611 | 611 |
| row_28 = 'value1' | AGGREGATION | - | - | row_54 | 0 | 610 | 609 | 611 | 611 |
| row_48 = 'enum1' | COUNT | - | - | - | 0 | 712 | 610 | 762 | 762 |
| row_48 = 'enum1' | PAGINATION | first page | No | - | 0 | 611 | 609 | 611 | 611 |
| row_48 = 'enum1' | PAGINATION | first page | Yes | - | 0 | 610 | 608 | 611 | 611 |
| row_48 = 'enum1' | PAGINATION | 100th page | No | - | 0 | 610 | 608 | 610 | 610 |
| row_48 = 'enum1' | PAGINATION | 100th page | Yes | - | 0 | 610 | 609 | 611 | 611 |
| row_48 = 'enum1' | AGGREGATION | - | - | row_28 | 0 | 611 | 609 | 612 | 612 |
| row_48 = 'enum1' | AGGREGATION | - | - | row_48 | 0 | 610 | 609 | 610 | 610 |
| row_48 = 'enum1' | AGGREGATION | - | - | row_54 | 0 | 610 | 610 | 610 | 610 |
| row_10 > 2000 | COUNT | - | - | - | 323,415 | 762 | 761 | 762 | 762 |
| row_10 > 2000 | PAGINATION | first page | No | - | 100 | 762 | 760 | 762 | 762 |
| row_10 > 2000 | PAGINATION | first page | Yes | - | 100 | 762 | 761 | 762 | 762 |
| row_10 > 2000 | PAGINATION | 100th page | No | - | 100 | 662 | 610 | 763 | 748 |
| row_10 > 2000 | PAGINATION | 100th page | Yes | - | 100 | 763 | 761 | 764 | 764 |
| row_10 > 2000 | AGGREGATION | - | - | row_28 | 5 | 712 | 610 | 763 | 763 |
| row_10 > 2000 | AGGREGATION | - | - | row_48 | 7 | 660 | 608 | 761 | 746 |
| row_10 > 2000 | AGGREGATION | - | - | row_54 | 7 | 710 | 609 | 760 | 760 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | COUNT | - | - | - | 584,404 | 764 | 762 | 767 | 767 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | first page | No | - | 100 | 762 | 761 | 762 | 762 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | first page | Yes | - | 100 | 763 | 762 | 763 | 763 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | 100th page | No | - | 100 | 761 | 761 | 761 | 761 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | PAGINATION | 100th page | Yes | - | 100 | 763 | 761 | 763 | 763 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | AGGREGATION | - | - | row_28 | 5 | 762 | 761 | 763 | 763 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | AGGREGATION | - | - | row_48 | 7 | 761 | 760 | 762 | 762 |
| row_1 >= TIMESTAMP '2024-06-01 00:00:00' | AGGREGATION | - | - | row_54 | 7 | 763 | 761 | 764 | 764 |
| row_28 = 'value1' AND row_48 = 'enum1' | COUNT | - | - | - | 0 | 712 | 611 | 763 | 763 |
| row_28 = 'value1' AND row_48 = 'enum1' | PAGINATION | first page | No | - | 0 | 610 | 609 | 611 | 611 |
| row_28 = 'value1' AND row_48 = 'enum1' | PAGINATION | first page | Yes | - | 0 | 610 | 609 | 611 | 611 |
| row_28 = 'value1' AND row_48 = 'enum1' | PAGINATION | 100th page | No | - | 0 | 610 | 609 | 610 | 610 |
| row_28 = 'value1' AND row_48 = 'enum1' | PAGINATION | 100th page | Yes | - | 0 | 611 | 610 | 612 | 612 |
| row_28 = 'value1' AND row_48 = 'enum1' | AGGREGATION | - | - | row_28 | 0 | 611 | 609 | 612 | 612 |
| row_28 = 'value1' AND row_48 = 'enum1' | AGGREGATION | - | - | row_48 | 0 | 610 | 609 | 610 | 610 |
| row_28 = 'value1' AND row_48 = 'enum1' | AGGREGATION | - | - | row_54 | 0 | 610 | 609 | 610 | 610 |
| row_9 BETWEEN 2000 AND 8000 | COUNT | - | - | - | 633,498 | 761 | 760 | 761 | 761 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | first page | No | - | 100 | 712 | 612 | 763 | 763 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | first page | Yes | - | 100 | 762 | 761 | 762 | 762 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | 100th page | No | - | 100 | 761 | 759 | 763 | 763 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | 100th page | Yes | - | 100 | 763 | 761 | 764 | 764 |
| row_9 BETWEEN 2000 AND 8000 | AGGREGATION | - | - | row_28 | 5 | 762 | 760 | 763 | 763 |
| row_9 BETWEEN 2000 AND 8000 | AGGREGATION | - | - | row_48 | 7 | 711 | 610 | 761 | 761 |
| row_9 BETWEEN 2000 AND 8000 | AGGREGATION | - | - | row_54 | 7 | 761 | 759 | 762 | 762 |
| row_54 = 'tag1' | COUNT | - | - | - | 0 | 762 | 761 | 763 | 763 |
| row_54 = 'tag1' | PAGINATION | first page | No | - | 0 | 610 | 609 | 610 | 610 |
| row_54 = 'tag1' | PAGINATION | first page | Yes | - | 0 | 610 | 609 | 612 | 612 |
| row_54 = 'tag1' | PAGINATION | 100th page | No | - | 0 | 609 | 609 | 609 | 609 |
| row_54 = 'tag1' | PAGINATION | 100th page | Yes | - | 0 | 610 | 609 | 610 | 610 |
| row_54 = 'tag1' | AGGREGATION | - | - | row_28 | 0 | 610 | 610 | 610 | 610 |
| row_54 = 'tag1' | AGGREGATION | - | - | row_48 | 0 | 610 | 607 | 611 | 611 |
| row_54 = 'tag1' | AGGREGATION | - | - | row_54 | 0 | 609 | 608 | 610 | 610 |
| row_29 IS NOT NULL | COUNT | - | - | - | 1,000,000 | 762 | 761 | 762 | 762 |
| row_29 IS NOT NULL | PAGINATION | first page | No | - | 100 | 761 | 761 | 761 | 761 |
| row_29 IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 762 | 760 | 762 | 762 |
| row_29 IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 711 | 610 | 761 | 761 |
| row_29 IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 762 | 760 | 763 | 763 |
| row_29 IS NOT NULL | AGGREGATION | - | - | row_28 | 5 | 763 | 762 | 764 | 764 |
| row_29 IS NOT NULL | AGGREGATION | - | - | row_48 | 7 | 761 | 760 | 761 | 761 |
| row_29 IS NOT NULL | AGGREGATION | - | - | row_54 | 7 | 761 | 760 | 762 | 762 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_1_000_000 `
- **Count/Rows:** 1,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 760ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 761ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 760ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### no filters - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_1_000_000  GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 713ms
- **Min Duration:** 612ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### no filters - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_1_000_000  GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 761ms
- **Min Duration:** 761ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### no filters - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_1_000_000  GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### row_9 > 5000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_9 > 5000`
- **Count/Rows:** 526,937
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 713ms
- **Min Duration:** 613ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_9 > 5000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_9 > 5000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 762ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_9 > 5000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 610ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_9 > 5000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_9 > 5000 GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_9 > 5000 GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_9 > 5000 GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### row_28 = 'value1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 608ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 611ms
- **Min Duration:** 610ms
- **Max Duration:** 613ms
- **P95 Duration:** 613ms

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 609ms
- **Min Duration:** 608ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 611ms
- **Min Duration:** 610ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### row_28 = 'value1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' GROUP BY row_28`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 611ms
- **Min Duration:** 610ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### row_28 = 'value1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' GROUP BY row_48`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 611ms
- **Min Duration:** 610ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### row_28 = 'value1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' GROUP BY row_54`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### row_48 = 'enum1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_48 = 'enum1'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 610ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_48 = 'enum1' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 611ms
- **Min Duration:** 609ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_48 = 'enum1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 608ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_48 = 'enum1' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 608ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_48 = 'enum1' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_48 = 'enum1' GROUP BY row_28`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 611ms
- **Min Duration:** 609ms
- **Max Duration:** 612ms
- **P95 Duration:** 612ms

### row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_48 = 'enum1' GROUP BY row_48`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_48 = 'enum1' GROUP BY row_54`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 610ms
- **Min Duration:** 610ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_10 > 2000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_10 > 2000`
- **Count/Rows:** 323,415
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_10 > 2000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 760ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_10 > 2000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_10 > 2000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 662ms
- **Min Duration:** 610ms
- **Max Duration:** 763ms
- **P95 Duration:** 748ms

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_10 > 2000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 761ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### row_10 > 2000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_10 > 2000 GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 712ms
- **Min Duration:** 610ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### row_10 > 2000 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_10 > 2000 GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 660ms
- **Min Duration:** 608ms
- **Max Duration:** 761ms
- **P95 Duration:** 746ms

### row_10 > 2000 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_10 > 2000 GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 710ms
- **Min Duration:** 609ms
- **Max Duration:** 760ms
- **P95 Duration:** 760ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00'`
- **Count/Rows:** 584,404
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 762ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 761ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_1 >= TIMESTAMP '2024-06-01 00:00:00' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 763ms
- **Min Duration:** 761ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### row_28 = 'value1' AND row_48 = 'enum1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 611ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### row_28 = 'value1' AND row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### row_28 = 'value1' AND row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### row_28 = 'value1' AND row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_28 = 'value1' AND row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 611ms
- **Min Duration:** 610ms
- **Max Duration:** 612ms
- **P95 Duration:** 612ms

### row_28 = 'value1' AND row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' GROUP BY row_28`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 611ms
- **Min Duration:** 609ms
- **Max Duration:** 612ms
- **P95 Duration:** 612ms

### row_28 = 'value1' AND row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' GROUP BY row_48`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_28 = 'value1' AND row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' GROUP BY row_54`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_9 BETWEEN 2000 AND 8000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_9 BETWEEN 2000 AND 8000`
- **Count/Rows:** 633,498
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_9 BETWEEN 2000 AND 8000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 612ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_9 BETWEEN 2000 AND 8000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_9 BETWEEN 2000 AND 8000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 759ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_9 BETWEEN 2000 AND 8000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 763ms
- **Min Duration:** 761ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### row_9 BETWEEN 2000 AND 8000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_9 BETWEEN 2000 AND 8000 GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 762ms
- **Min Duration:** 760ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### row_9 BETWEEN 2000 AND 8000 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_9 BETWEEN 2000 AND 8000 GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 711ms
- **Min Duration:** 610ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### row_9 BETWEEN 2000 AND 8000 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_9 BETWEEN 2000 AND 8000 GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 761ms
- **Min Duration:** 759ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_54 = 'tag1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_54 = 'tag1'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_54 = 'tag1' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_54 = 'tag1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 612ms
- **P95 Duration:** 612ms

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_54 = 'tag1' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 609ms
- **Min Duration:** 609ms
- **Max Duration:** 609ms
- **P95 Duration:** 609ms

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_54 = 'tag1' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 610ms
- **Min Duration:** 609ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_54 = 'tag1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_54 = 'tag1' GROUP BY row_28`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 610ms
- **Min Duration:** 610ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_54 = 'tag1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_54 = 'tag1' GROUP BY row_48`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 610ms
- **Min Duration:** 607ms
- **Max Duration:** 611ms
- **P95 Duration:** 611ms

### row_54 = 'tag1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_54 = 'tag1' GROUP BY row_54`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 609ms
- **Min Duration:** 608ms
- **Max Duration:** 610ms
- **P95 Duration:** 610ms

### row_29 IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_29 IS NOT NULL`
- **Count/Rows:** 1,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_29 IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 761ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_29 IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 760ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_29 IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 610ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_29 IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 760ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### row_29 IS NOT NULL - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_29 IS NOT NULL GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 763ms
- **Min Duration:** 762ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### row_29 IS NOT NULL - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_29 IS NOT NULL GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### row_29 IS NOT NULL - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_29 IS NOT NULL GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

