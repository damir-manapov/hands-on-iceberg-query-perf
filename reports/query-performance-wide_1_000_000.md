# Query Performance Report

**Table:** iceberg.lab.wide_1_000_000  
**Generated:** 2025-10-10T19:42:22.974Z  
**Total Rows:** 1,000,000  
**Table Size:** 296.9 MB

## Summary

- **Total Queries:** 240
- **Average Duration:** 712ms
- **Fastest Query:** 617ms
- **Slowest Query:** 788ms
- **95th Percentile:** 783ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
| no filters | COUNT | - | - | - | 1,000,000 | 783 | 779 | 784 | 784 | 3 |
| no filters | PAGINATION | first page | No | - | 100 | 781 | 779 | 782 | 782 | 3 |
| no filters | PAGINATION | first page | Yes | - | 100 | 783 | 779 | 785 | 785 | 3 |
| no filters | PAGINATION | 100th page | No | - | 100 | 731 | 624 | 784 | 784 | 3 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 729 | 630 | 779 | 779 | 3 |
| no filters | AGGREGATION | - | - | row_28 | 5 | 781 | 776 | 783 | 783 | 3 |
| no filters | AGGREGATION | - | - | row_48 | 7 | 778 | 773 | 781 | 781 | 3 |
| no filters | AGGREGATION | - | - | row_54 | 7 | 782 | 780 | 783 | 783 | 3 |
| row_9 > 5000 | COUNT | - | - | - | 526,937 | 727 | 622 | 780 | 780 | 3 |
| row_9 > 5000 | PAGINATION | first page | No | - | 100 | 781 | 780 | 782 | 782 | 3 |
| row_9 > 5000 | PAGINATION | first page | Yes | - | 100 | 779 | 776 | 781 | 781 | 3 |
| row_9 > 5000 | PAGINATION | 100th page | No | - | 100 | 782 | 778 | 787 | 787 | 3 |
| row_9 > 5000 | PAGINATION | 100th page | Yes | - | 100 | 777 | 774 | 779 | 779 | 3 |
| row_9 > 5000 | AGGREGATION | - | - | row_28 | 5 | 783 | 780 | 785 | 785 | 3 |
| row_9 > 5000 | AGGREGATION | - | - | row_48 | 7 | 727 | 624 | 779 | 779 | 3 |
| row_9 > 5000 | AGGREGATION | - | - | row_54 | 7 | 780 | 779 | 781 | 781 | 3 |
| row_28 = 'value1' | COUNT | - | - | - | 0 | 728 | 628 | 778 | 778 | 3 |
| row_28 = 'value1' | PAGINATION | first page | No | - | 0 | 626 | 624 | 627 | 627 | 3 |
| row_28 = 'value1' | PAGINATION | first page | Yes | - | 0 | 623 | 619 | 626 | 626 | 3 |
| row_28 = 'value1' | PAGINATION | 100th page | No | - | 0 | 626 | 623 | 628 | 628 | 3 |
| row_28 = 'value1' | PAGINATION | 100th page | Yes | - | 0 | 622 | 620 | 624 | 624 | 3 |
| row_28 = 'value1' | AGGREGATION | - | - | row_28 | 0 | 623 | 620 | 625 | 625 | 3 |
| row_28 = 'value1' | AGGREGATION | - | - | row_48 | 0 | 624 | 622 | 625 | 625 | 3 |
| row_28 = 'value1' | AGGREGATION | - | - | row_54 | 0 | 622 | 618 | 627 | 627 | 3 |
| row_48 = 'enum1' | COUNT | - | - | - | 0 | 779 | 777 | 781 | 781 | 3 |
| row_48 = 'enum1' | PAGINATION | first page | No | - | 0 | 627 | 624 | 628 | 628 | 3 |
| row_48 = 'enum1' | PAGINATION | first page | Yes | - | 0 | 625 | 624 | 625 | 625 | 3 |
| row_48 = 'enum1' | PAGINATION | 100th page | No | - | 0 | 624 | 623 | 625 | 625 | 3 |
| row_48 = 'enum1' | PAGINATION | 100th page | Yes | - | 0 | 624 | 623 | 625 | 625 | 3 |
| row_48 = 'enum1' | AGGREGATION | - | - | row_28 | 0 | 623 | 622 | 624 | 624 | 3 |
| row_48 = 'enum1' | AGGREGATION | - | - | row_48 | 0 | 623 | 621 | 624 | 624 | 3 |
| row_48 = 'enum1' | AGGREGATION | - | - | row_54 | 0 | 623 | 620 | 625 | 625 | 3 |
| row_10 > 2000 | COUNT | - | - | - | 323,415 | 777 | 776 | 778 | 778 | 3 |
| row_10 > 2000 | PAGINATION | first page | No | - | 100 | 729 | 628 | 782 | 782 | 3 |
| row_10 > 2000 | PAGINATION | first page | Yes | - | 100 | 781 | 780 | 781 | 781 | 3 |
| row_10 > 2000 | PAGINATION | 100th page | No | - | 100 | 780 | 776 | 787 | 786 | 3 |
| row_10 > 2000 | PAGINATION | 100th page | Yes | - | 100 | 776 | 774 | 777 | 777 | 3 |
| row_10 > 2000 | AGGREGATION | - | - | row_28 | 5 | 779 | 776 | 780 | 780 | 3 |
| row_10 > 2000 | AGGREGATION | - | - | row_48 | 7 | 778 | 776 | 779 | 779 | 3 |
| row_10 > 2000 | AGGREGATION | - | - | row_54 | 7 | 727 | 622 | 780 | 780 | 3 |
| row_1 >= 2024-06-01 | COUNT | - | - | - | 584,404 | 726 | 621 | 779 | 779 | 3 |
| row_1 >= 2024-06-01 | PAGINATION | first page | No | - | 100 | 779 | 774 | 783 | 783 | 3 |
| row_1 >= 2024-06-01 | PAGINATION | first page | Yes | - | 100 | 778 | 776 | 781 | 781 | 3 |
| row_1 >= 2024-06-01 | PAGINATION | 100th page | No | - | 100 | 778 | 777 | 780 | 780 | 3 |
| row_1 >= 2024-06-01 | PAGINATION | 100th page | Yes | - | 100 | 776 | 774 | 777 | 777 | 3 |
| row_1 >= 2024-06-01 | AGGREGATION | - | - | row_28 | 5 | 727 | 624 | 778 | 778 | 3 |
| row_1 >= 2024-06-01 | AGGREGATION | - | - | row_48 | 7 | 728 | 625 | 779 | 779 | 3 |
| row_1 >= 2024-06-01 | AGGREGATION | - | - | row_54 | 7 | 776 | 774 | 777 | 777 | 3 |
| row_28='value1' AND row_48='enum1' | COUNT | - | - | - | 0 | 676 | 625 | 777 | 762 | 3 |
| row_28='value1' AND row_48='enum1' | PAGINATION | first page | No | - | 0 | 624 | 621 | 625 | 625 | 3 |
| row_28='value1' AND row_48='enum1' | PAGINATION | first page | Yes | - | 0 | 623 | 621 | 626 | 626 | 3 |
| row_28='value1' AND row_48='enum1' | PAGINATION | 100th page | No | - | 0 | 624 | 622 | 625 | 625 | 3 |
| row_28='value1' AND row_48='enum1' | PAGINATION | 100th page | Yes | - | 0 | 621 | 621 | 621 | 621 | 3 |
| row_28='value1' AND row_48='enum1' | AGGREGATION | - | - | row_28 | 0 | 625 | 620 | 632 | 631 | 3 |
| row_28='value1' AND row_48='enum1' | AGGREGATION | - | - | row_48 | 0 | 624 | 622 | 625 | 625 | 3 |
| row_28='value1' AND row_48='enum1' | AGGREGATION | - | - | row_54 | 0 | 625 | 620 | 628 | 628 | 3 |
| row_9 BETWEEN 2000 AND 8000 | COUNT | - | - | - | 633,498 | 732 | 633 | 785 | 785 | 3 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | first page | No | - | 100 | 780 | 778 | 781 | 781 | 3 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | first page | Yes | - | 100 | 724 | 617 | 778 | 778 | 3 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | 100th page | No | - | 100 | 778 | 776 | 779 | 779 | 3 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | 100th page | Yes | - | 100 | 728 | 622 | 782 | 782 | 3 |
| row_9 BETWEEN 2000 AND 8000 | AGGREGATION | - | - | row_28 | 5 | 730 | 621 | 788 | 788 | 3 |
| row_9 BETWEEN 2000 AND 8000 | AGGREGATION | - | - | row_48 | 7 | 779 | 774 | 781 | 781 | 3 |
| row_9 BETWEEN 2000 AND 8000 | AGGREGATION | - | - | row_54 | 7 | 782 | 781 | 782 | 782 | 3 |
| row_54 = 'tag1' | COUNT | - | - | - | 0 | 776 | 775 | 776 | 776 | 3 |
| row_54 = 'tag1' | PAGINATION | first page | No | - | 0 | 622 | 620 | 622 | 622 | 3 |
| row_54 = 'tag1' | PAGINATION | first page | Yes | - | 0 | 624 | 620 | 626 | 626 | 3 |
| row_54 = 'tag1' | PAGINATION | 100th page | No | - | 0 | 621 | 620 | 621 | 621 | 3 |
| row_54 = 'tag1' | PAGINATION | 100th page | Yes | - | 0 | 623 | 618 | 629 | 629 | 3 |
| row_54 = 'tag1' | AGGREGATION | - | - | row_28 | 0 | 623 | 622 | 623 | 623 | 3 |
| row_54 = 'tag1' | AGGREGATION | - | - | row_48 | 0 | 622 | 621 | 623 | 623 | 3 |
| row_54 = 'tag1' | AGGREGATION | - | - | row_54 | 0 | 623 | 622 | 623 | 623 | 3 |
| row_29 IS NOT NULL | COUNT | - | - | - | 1,000,000 | 778 | 776 | 779 | 779 | 3 |
| row_29 IS NOT NULL | PAGINATION | first page | No | - | 100 | 776 | 774 | 778 | 778 | 3 |
| row_29 IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 724 | 625 | 774 | 774 | 3 |
| row_29 IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 777 | 776 | 778 | 778 | 3 |
| row_29 IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 725 | 623 | 777 | 777 | 3 |
| row_29 IS NOT NULL | AGGREGATION | - | - | row_28 | 5 | 726 | 624 | 781 | 780 | 3 |
| row_29 IS NOT NULL | AGGREGATION | - | - | row_48 | 7 | 725 | 622 | 778 | 778 | 3 |
| row_29 IS NOT NULL | AGGREGATION | - | - | row_54 | 7 | 778 | 776 | 781 | 781 | 3 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_1_000_000 `
- **Count/Rows:** 1,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 783ms
- **Min Duration:** 779ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 781ms
- **Min Duration:** 779ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 783ms
- **Min Duration:** 779ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 731ms
- **Min Duration:** 624ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 729ms
- **Min Duration:** 630ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_1_000_000  GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 781ms
- **Min Duration:** 776ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_1_000_000  GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 778ms
- **Min Duration:** 773ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_1_000_000  GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 782ms
- **Min Duration:** 780ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### row_9 > 5000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_9 > 5000`
- **Count/Rows:** 526,937
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 727ms
- **Min Duration:** 622ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_9 > 5000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 781ms
- **Min Duration:** 780ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_9 > 5000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 779ms
- **Min Duration:** 776ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_9 > 5000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 782ms
- **Min Duration:** 778ms
- **Max Duration:** 787ms
- **P95 Duration:** 787ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_9 > 5000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 774ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_9 > 5000 GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 783ms
- **Min Duration:** 780ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_9 > 5000 GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 727ms
- **Min Duration:** 624ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_9 > 5000 GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 780ms
- **Min Duration:** 779ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### row_28 = 'value1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 728ms
- **Min Duration:** 628ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 626ms
- **Min Duration:** 624ms
- **Max Duration:** 627ms
- **P95 Duration:** 627ms
- **Runs:** 3

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 623ms
- **Min Duration:** 619ms
- **Max Duration:** 626ms
- **P95 Duration:** 626ms
- **Runs:** 3

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 626ms
- **Min Duration:** 623ms
- **Max Duration:** 628ms
- **P95 Duration:** 628ms
- **Runs:** 3

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 622ms
- **Min Duration:** 620ms
- **Max Duration:** 624ms
- **P95 Duration:** 624ms
- **Runs:** 3

### row_28 = 'value1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' GROUP BY row_28`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 623ms
- **Min Duration:** 620ms
- **Max Duration:** 625ms
- **P95 Duration:** 625ms
- **Runs:** 3

### row_28 = 'value1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' GROUP BY row_48`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 624ms
- **Min Duration:** 622ms
- **Max Duration:** 625ms
- **P95 Duration:** 625ms
- **Runs:** 3

### row_28 = 'value1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' GROUP BY row_54`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 622ms
- **Min Duration:** 618ms
- **Max Duration:** 627ms
- **P95 Duration:** 627ms
- **Runs:** 3

### row_48 = 'enum1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_48 = 'enum1'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 779ms
- **Min Duration:** 777ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_48 = 'enum1' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 627ms
- **Min Duration:** 624ms
- **Max Duration:** 628ms
- **P95 Duration:** 628ms
- **Runs:** 3

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_48 = 'enum1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 625ms
- **Min Duration:** 624ms
- **Max Duration:** 625ms
- **P95 Duration:** 625ms
- **Runs:** 3

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_48 = 'enum1' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 624ms
- **Min Duration:** 623ms
- **Max Duration:** 625ms
- **P95 Duration:** 625ms
- **Runs:** 3

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_48 = 'enum1' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 624ms
- **Min Duration:** 623ms
- **Max Duration:** 625ms
- **P95 Duration:** 625ms
- **Runs:** 3

### row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_48 = 'enum1' GROUP BY row_28`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 623ms
- **Min Duration:** 622ms
- **Max Duration:** 624ms
- **P95 Duration:** 624ms
- **Runs:** 3

### row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_48 = 'enum1' GROUP BY row_48`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 623ms
- **Min Duration:** 621ms
- **Max Duration:** 624ms
- **P95 Duration:** 624ms
- **Runs:** 3

### row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_48 = 'enum1' GROUP BY row_54`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 623ms
- **Min Duration:** 620ms
- **Max Duration:** 625ms
- **P95 Duration:** 625ms
- **Runs:** 3

### row_10 > 2000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_10 > 2000`
- **Count/Rows:** 323,415
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 776ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_10 > 2000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 729ms
- **Min Duration:** 628ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_10 > 2000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 781ms
- **Min Duration:** 780ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_10 > 2000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 780ms
- **Min Duration:** 776ms
- **Max Duration:** 787ms
- **P95 Duration:** 786ms
- **Runs:** 3

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_10 > 2000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 774ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### row_10 > 2000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_10 > 2000 GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 779ms
- **Min Duration:** 776ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### row_10 > 2000 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_10 > 2000 GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 778ms
- **Min Duration:** 776ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### row_10 > 2000 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_10 > 2000 GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 727ms
- **Min Duration:** 622ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### row_1 >= 2024-06-01 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00'`
- **Count/Rows:** 584,404
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 726ms
- **Min Duration:** 621ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### row_1 >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 779ms
- **Min Duration:** 774ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### row_1 >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 776ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### row_1 >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 777ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### row_1 >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 774ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### row_1 >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 727ms
- **Min Duration:** 624ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### row_1 >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 728ms
- **Min Duration:** 625ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### row_1 >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 776ms
- **Min Duration:** 774ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 676ms
- **Min Duration:** 625ms
- **Max Duration:** 777ms
- **P95 Duration:** 762ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 624ms
- **Min Duration:** 621ms
- **Max Duration:** 625ms
- **P95 Duration:** 625ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 623ms
- **Min Duration:** 621ms
- **Max Duration:** 626ms
- **P95 Duration:** 626ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 624ms
- **Min Duration:** 622ms
- **Max Duration:** 625ms
- **P95 Duration:** 625ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 621ms
- **Min Duration:** 621ms
- **Max Duration:** 621ms
- **P95 Duration:** 621ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' GROUP BY row_28`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 625ms
- **Min Duration:** 620ms
- **Max Duration:** 632ms
- **P95 Duration:** 631ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' GROUP BY row_48`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 624ms
- **Min Duration:** 622ms
- **Max Duration:** 625ms
- **P95 Duration:** 625ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' GROUP BY row_54`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 625ms
- **Min Duration:** 620ms
- **Max Duration:** 628ms
- **P95 Duration:** 628ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_9 BETWEEN 2000 AND 8000`
- **Count/Rows:** 633,498
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 732ms
- **Min Duration:** 633ms
- **Max Duration:** 785ms
- **P95 Duration:** 785ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_9 BETWEEN 2000 AND 8000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 780ms
- **Min Duration:** 778ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_9 BETWEEN 2000 AND 8000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 724ms
- **Min Duration:** 617ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_9 BETWEEN 2000 AND 8000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 776ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_9 BETWEEN 2000 AND 8000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 728ms
- **Min Duration:** 622ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_9 BETWEEN 2000 AND 8000 GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 730ms
- **Min Duration:** 621ms
- **Max Duration:** 788ms
- **P95 Duration:** 788ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_9 BETWEEN 2000 AND 8000 GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 779ms
- **Min Duration:** 774ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_9 BETWEEN 2000 AND 8000 GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 782ms
- **Min Duration:** 781ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### row_54 = 'tag1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_54 = 'tag1'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 775ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms
- **Runs:** 3

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_54 = 'tag1' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 622ms
- **Min Duration:** 620ms
- **Max Duration:** 622ms
- **P95 Duration:** 622ms
- **Runs:** 3

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_54 = 'tag1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 624ms
- **Min Duration:** 620ms
- **Max Duration:** 626ms
- **P95 Duration:** 626ms
- **Runs:** 3

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_54 = 'tag1' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 621ms
- **Min Duration:** 620ms
- **Max Duration:** 621ms
- **P95 Duration:** 621ms
- **Runs:** 3

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_54 = 'tag1' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 623ms
- **Min Duration:** 618ms
- **Max Duration:** 629ms
- **P95 Duration:** 629ms
- **Runs:** 3

### row_54 = 'tag1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_54 = 'tag1' GROUP BY row_28`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 623ms
- **Min Duration:** 622ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_54 = 'tag1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_54 = 'tag1' GROUP BY row_48`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 622ms
- **Min Duration:** 621ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_54 = 'tag1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_54 = 'tag1' GROUP BY row_54`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 623ms
- **Min Duration:** 622ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_29 IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_29 IS NOT NULL`
- **Count/Rows:** 1,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 776ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_29 IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 774ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_29 IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 724ms
- **Min Duration:** 625ms
- **Max Duration:** 774ms
- **P95 Duration:** 774ms
- **Runs:** 3

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_29 IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 776ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_1_000_000 WHERE row_29 IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 725ms
- **Min Duration:** 623ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### row_29 IS NOT NULL - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_29 IS NOT NULL GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 726ms
- **Min Duration:** 624ms
- **Max Duration:** 781ms
- **P95 Duration:** 780ms
- **Runs:** 3

### row_29 IS NOT NULL - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_29 IS NOT NULL GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 725ms
- **Min Duration:** 622ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### row_29 IS NOT NULL - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_1_000_000 WHERE row_29 IS NOT NULL GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 778ms
- **Min Duration:** 776ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

