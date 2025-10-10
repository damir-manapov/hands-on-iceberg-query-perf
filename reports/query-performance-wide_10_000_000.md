# Query Performance Report

**Table:** iceberg.lab.wide_10_000_000  
**Generated:** 2025-10-10T09:06:26.522Z  
**Total Rows:** 10,000,000  
**Table Size:** 2.9 GB

## Summary

- **Total Queries:** 240
- **Average Duration:** 571ms
- **Fastest Query:** 155ms
- **Slowest Query:** 800ms
- **95th Percentile:** 778ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
| no filters | COUNT | - | - | - | 10,000,000 | 777 | 776 | 779 | 779 | 3 |
| no filters | PAGINATION | first page | No | - | 100 | 773 | 771 | 774 | 774 | 3 |
| no filters | PAGINATION | first page | Yes | - | 100 | 724 | 621 | 775 | 775 | 3 |
| no filters | PAGINATION | 100th page | No | - | 0 | 158 | 157 | 158 | 158 | 3 |
| no filters | PAGINATION | 100th page | Yes | - | 0 | 157 | 155 | 158 | 158 | 3 |
| no filters | AGGREGATION | - | - | row_28 GROUP BY | 5 | 773 | 772 | 775 | 775 | 3 |
| no filters | AGGREGATION | - | - | row_48 GROUP BY | 7 | 775 | 773 | 776 | 776 | 3 |
| no filters | AGGREGATION | - | - | row_54 GROUP BY | 7 | 771 | 769 | 774 | 774 | 3 |
| row_9 > 5000 | COUNT | - | - | - | 5,276,147 | 772 | 770 | 774 | 774 | 3 |
| row_9 > 5000 | PAGINATION | first page | No | - | 100 | 772 | 770 | 774 | 774 | 3 |
| row_9 > 5000 | PAGINATION | first page | Yes | - | 100 | 680 | 627 | 784 | 769 | 3 |
| row_9 > 5000 | PAGINATION | 100th page | No | - | 0 | 159 | 157 | 159 | 159 | 3 |
| row_9 > 5000 | PAGINATION | 100th page | Yes | - | 0 | 159 | 158 | 159 | 159 | 3 |
| row_9 > 5000 | AGGREGATION | - | - | row_28 GROUP BY | 5 | 722 | 618 | 773 | 773 | 3 |
| row_9 > 5000 | AGGREGATION | - | - | row_48 GROUP BY | 7 | 724 | 622 | 776 | 776 | 3 |
| row_9 > 5000 | AGGREGATION | - | - | row_54 GROUP BY | 7 | 721 | 615 | 775 | 775 | 3 |
| row_28 = 'value1' | COUNT | - | - | - | 0 | 772 | 771 | 773 | 773 | 3 |
| row_28 = 'value1' | PAGINATION | first page | No | - | 0 | 621 | 618 | 622 | 622 | 3 |
| row_28 = 'value1' | PAGINATION | first page | Yes | - | 0 | 621 | 619 | 623 | 623 | 3 |
| row_28 = 'value1' | PAGINATION | 100th page | No | - | 0 | 157 | 155 | 158 | 158 | 3 |
| row_28 = 'value1' | PAGINATION | 100th page | Yes | - | 0 | 158 | 156 | 159 | 159 | 3 |
| row_28 = 'value1' | AGGREGATION | - | - | row_28 GROUP BY | 0 | 623 | 621 | 624 | 624 | 3 |
| row_28 = 'value1' | AGGREGATION | - | - | row_48 GROUP BY | 0 | 621 | 619 | 622 | 622 | 3 |
| row_28 = 'value1' | AGGREGATION | - | - | row_54 GROUP BY | 0 | 620 | 618 | 620 | 620 | 3 |
| row_48 = 'enum1' | COUNT | - | - | - | 0 | 773 | 771 | 776 | 776 | 3 |
| row_48 = 'enum1' | PAGINATION | first page | No | - | 0 | 619 | 614 | 621 | 621 | 3 |
| row_48 = 'enum1' | PAGINATION | first page | Yes | - | 0 | 621 | 620 | 622 | 622 | 3 |
| row_48 = 'enum1' | PAGINATION | 100th page | No | - | 0 | 159 | 158 | 159 | 159 | 3 |
| row_48 = 'enum1' | PAGINATION | 100th page | Yes | - | 0 | 159 | 158 | 160 | 160 | 3 |
| row_48 = 'enum1' | AGGREGATION | - | - | row_28 GROUP BY | 0 | 622 | 621 | 622 | 622 | 3 |
| row_48 = 'enum1' | AGGREGATION | - | - | row_48 GROUP BY | 0 | 621 | 620 | 623 | 623 | 3 |
| row_48 = 'enum1' | AGGREGATION | - | - | row_54 GROUP BY | 0 | 620 | 616 | 624 | 624 | 3 |
| row_10 > 2000 | COUNT | - | - | - | 3,230,742 | 721 | 620 | 773 | 773 | 3 |
| row_10 > 2000 | PAGINATION | first page | No | - | 100 | 774 | 772 | 776 | 776 | 3 |
| row_10 > 2000 | PAGINATION | first page | Yes | - | 100 | 723 | 621 | 777 | 777 | 3 |
| row_10 > 2000 | PAGINATION | 100th page | No | - | 0 | 159 | 158 | 159 | 159 | 3 |
| row_10 > 2000 | PAGINATION | 100th page | Yes | - | 0 | 158 | 157 | 159 | 159 | 3 |
| row_10 > 2000 | AGGREGATION | - | - | row_28 GROUP BY | 5 | 671 | 618 | 772 | 757 | 3 |
| row_10 > 2000 | AGGREGATION | - | - | row_48 GROUP BY | 7 | 773 | 772 | 773 | 773 | 3 |
| row_10 > 2000 | AGGREGATION | - | - | row_54 GROUP BY | 7 | 667 | 611 | 772 | 757 | 3 |
| row_1 >= 2024-06-01 | COUNT | - | - | - | 5,844,513 | 773 | 772 | 773 | 773 | 3 |
| row_1 >= 2024-06-01 | PAGINATION | first page | No | - | 100 | 774 | 771 | 777 | 777 | 3 |
| row_1 >= 2024-06-01 | PAGINATION | first page | Yes | - | 100 | 784 | 775 | 799 | 797 | 3 |
| row_1 >= 2024-06-01 | PAGINATION | 100th page | No | - | 0 | 159 | 158 | 159 | 159 | 3 |
| row_1 >= 2024-06-01 | PAGINATION | 100th page | Yes | - | 0 | 159 | 158 | 159 | 159 | 3 |
| row_1 >= 2024-06-01 | AGGREGATION | - | - | row_28 GROUP BY | 5 | 722 | 618 | 775 | 775 | 3 |
| row_1 >= 2024-06-01 | AGGREGATION | - | - | row_48 GROUP BY | 7 | 725 | 621 | 781 | 781 | 3 |
| row_1 >= 2024-06-01 | AGGREGATION | - | - | row_54 GROUP BY | 7 | 778 | 772 | 786 | 785 | 3 |
| row_28='value1' AND row_48='enum1' | COUNT | - | - | - | 0 | 775 | 774 | 776 | 776 | 3 |
| row_28='value1' AND row_48='enum1' | PAGINATION | first page | No | - | 0 | 622 | 620 | 622 | 622 | 3 |
| row_28='value1' AND row_48='enum1' | PAGINATION | first page | Yes | - | 0 | 622 | 621 | 622 | 622 | 3 |
| row_28='value1' AND row_48='enum1' | PAGINATION | 100th page | No | - | 0 | 158 | 156 | 159 | 159 | 3 |
| row_28='value1' AND row_48='enum1' | PAGINATION | 100th page | Yes | - | 0 | 158 | 157 | 158 | 158 | 3 |
| row_28='value1' AND row_48='enum1' | AGGREGATION | - | - | row_28 GROUP BY | 0 | 622 | 621 | 622 | 622 | 3 |
| row_28='value1' AND row_48='enum1' | AGGREGATION | - | - | row_48 GROUP BY | 0 | 620 | 618 | 620 | 620 | 3 |
| row_28='value1' AND row_48='enum1' | AGGREGATION | - | - | row_54 GROUP BY | 0 | 620 | 617 | 623 | 623 | 3 |
| row_9 BETWEEN 2000 AND 8000 | COUNT | - | - | - | 6,333,281 | 773 | 769 | 777 | 777 | 3 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | first page | No | - | 100 | 774 | 772 | 777 | 777 | 3 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | first page | Yes | - | 100 | 777 | 775 | 778 | 778 | 3 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | 100th page | No | - | 0 | 159 | 157 | 159 | 159 | 3 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | 100th page | Yes | - | 0 | 158 | 158 | 158 | 158 | 3 |
| row_9 BETWEEN 2000 AND 8000 | AGGREGATION | - | - | row_28 GROUP BY | 5 | 777 | 773 | 782 | 782 | 3 |
| row_9 BETWEEN 2000 AND 8000 | AGGREGATION | - | - | row_48 GROUP BY | 7 | 775 | 773 | 777 | 777 | 3 |
| row_9 BETWEEN 2000 AND 8000 | AGGREGATION | - | - | row_54 GROUP BY | 7 | 775 | 772 | 777 | 777 | 3 |
| row_54 = 'tag1' | COUNT | - | - | - | 0 | 777 | 776 | 778 | 778 | 3 |
| row_54 = 'tag1' | PAGINATION | first page | No | - | 0 | 621 | 619 | 621 | 621 | 3 |
| row_54 = 'tag1' | PAGINATION | first page | Yes | - | 0 | 622 | 620 | 623 | 623 | 3 |
| row_54 = 'tag1' | PAGINATION | 100th page | No | - | 0 | 159 | 158 | 160 | 160 | 3 |
| row_54 = 'tag1' | PAGINATION | 100th page | Yes | - | 0 | 158 | 155 | 159 | 159 | 3 |
| row_54 = 'tag1' | AGGREGATION | - | - | row_28 GROUP BY | 0 | 620 | 618 | 622 | 622 | 3 |
| row_54 = 'tag1' | AGGREGATION | - | - | row_48 GROUP BY | 0 | 620 | 616 | 623 | 623 | 3 |
| row_54 = 'tag1' | AGGREGATION | - | - | row_54 GROUP BY | 0 | 621 | 618 | 622 | 622 | 3 |
| row_29 IS NOT NULL | COUNT | - | - | - | 10,000,000 | 773 | 769 | 777 | 777 | 3 |
| row_29 IS NOT NULL | PAGINATION | first page | No | - | 100 | 772 | 770 | 775 | 775 | 3 |
| row_29 IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 782 | 780 | 784 | 784 | 3 |
| row_29 IS NOT NULL | PAGINATION | 100th page | No | - | 0 | 156 | 155 | 156 | 156 | 3 |
| row_29 IS NOT NULL | PAGINATION | 100th page | Yes | - | 0 | 158 | 156 | 158 | 158 | 3 |
| row_29 IS NOT NULL | AGGREGATION | - | - | row_28 GROUP BY | 5 | 621 | 618 | 623 | 623 | 3 |
| row_29 IS NOT NULL | AGGREGATION | - | - | row_48 GROUP BY | 7 | 785 | 770 | 800 | 799 | 3 |
| row_29 IS NOT NULL | AGGREGATION | - | - | row_54 GROUP BY | 7 | 724 | 628 | 775 | 775 | 3 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_10_000_000 `
- **Count/Rows:** 10,000,000
- **Average Duration:** 777ms
- **Min Duration:** 776ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 773ms
- **Min Duration:** 771ms
- **Max Duration:** 774ms
- **P95 Duration:** 774ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 724ms
- **Min Duration:** 621ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000  LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 157ms
- **Max Duration:** 158ms
- **P95 Duration:** 158ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000  ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 157ms
- **Min Duration:** 155ms
- **Max Duration:** 158ms
- **P95 Duration:** 158ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_10_000_000  GROUP BY row_28`
- **Count/Rows:** 5
- **Average Duration:** 773ms
- **Min Duration:** 772ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_10_000_000  GROUP BY row_48`
- **Count/Rows:** 7
- **Average Duration:** 775ms
- **Min Duration:** 773ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_10_000_000  GROUP BY row_54`
- **Count/Rows:** 7
- **Average Duration:** 771ms
- **Min Duration:** 769ms
- **Max Duration:** 774ms
- **P95 Duration:** 774ms
- **Runs:** 3

### row_9 > 5000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_9 > 5000`
- **Count/Rows:** 5,276,147
- **Average Duration:** 772ms
- **Min Duration:** 770ms
- **Max Duration:** 774ms
- **P95 Duration:** 774ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_9 > 5000 LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 772ms
- **Min Duration:** 770ms
- **Max Duration:** 774ms
- **P95 Duration:** 774ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_9 > 5000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 680ms
- **Min Duration:** 627ms
- **Max Duration:** 784ms
- **P95 Duration:** 769ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_9 > 5000 LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 157ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_9 > 5000 ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_9 > 5000 GROUP BY row_28`
- **Count/Rows:** 5
- **Average Duration:** 722ms
- **Min Duration:** 618ms
- **Max Duration:** 773ms
- **P95 Duration:** 773ms
- **Runs:** 3

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_9 > 5000 GROUP BY row_48`
- **Count/Rows:** 7
- **Average Duration:** 724ms
- **Min Duration:** 622ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms
- **Runs:** 3

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_9 > 5000 GROUP BY row_54`
- **Count/Rows:** 7
- **Average Duration:** 721ms
- **Min Duration:** 615ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms
- **Runs:** 3

### row_28 = 'value1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1'`
- **Count/Rows:** 0
- **Average Duration:** 772ms
- **Min Duration:** 771ms
- **Max Duration:** 773ms
- **P95 Duration:** 773ms
- **Runs:** 3

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' LIMIT 100`
- **Count/Rows:** 0
- **Average Duration:** 621ms
- **Min Duration:** 618ms
- **Max Duration:** 622ms
- **P95 Duration:** 622ms
- **Runs:** 3

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Average Duration:** 621ms
- **Min Duration:** 619ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 157ms
- **Min Duration:** 155ms
- **Max Duration:** 158ms
- **P95 Duration:** 158ms
- **Runs:** 3

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 156ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### row_28 = 'value1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' GROUP BY row_28`
- **Count/Rows:** 0
- **Average Duration:** 623ms
- **Min Duration:** 621ms
- **Max Duration:** 624ms
- **P95 Duration:** 624ms
- **Runs:** 3

### row_28 = 'value1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' GROUP BY row_48`
- **Count/Rows:** 0
- **Average Duration:** 621ms
- **Min Duration:** 619ms
- **Max Duration:** 622ms
- **P95 Duration:** 622ms
- **Runs:** 3

### row_28 = 'value1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' GROUP BY row_54`
- **Count/Rows:** 0
- **Average Duration:** 620ms
- **Min Duration:** 618ms
- **Max Duration:** 620ms
- **P95 Duration:** 620ms
- **Runs:** 3

### row_48 = 'enum1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_48 = 'enum1'`
- **Count/Rows:** 0
- **Average Duration:** 773ms
- **Min Duration:** 771ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms
- **Runs:** 3

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_48 = 'enum1' LIMIT 100`
- **Count/Rows:** 0
- **Average Duration:** 619ms
- **Min Duration:** 614ms
- **Max Duration:** 621ms
- **P95 Duration:** 621ms
- **Runs:** 3

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_48 = 'enum1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Average Duration:** 621ms
- **Min Duration:** 620ms
- **Max Duration:** 622ms
- **P95 Duration:** 622ms
- **Runs:** 3

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_48 = 'enum1' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_48 = 'enum1' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_48 = 'enum1' GROUP BY row_28`
- **Count/Rows:** 0
- **Average Duration:** 622ms
- **Min Duration:** 621ms
- **Max Duration:** 622ms
- **P95 Duration:** 622ms
- **Runs:** 3

### row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_48 = 'enum1' GROUP BY row_48`
- **Count/Rows:** 0
- **Average Duration:** 621ms
- **Min Duration:** 620ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_48 = 'enum1' GROUP BY row_54`
- **Count/Rows:** 0
- **Average Duration:** 620ms
- **Min Duration:** 616ms
- **Max Duration:** 624ms
- **P95 Duration:** 624ms
- **Runs:** 3

### row_10 > 2000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_10 > 2000`
- **Count/Rows:** 3,230,742
- **Average Duration:** 721ms
- **Min Duration:** 620ms
- **Max Duration:** 773ms
- **P95 Duration:** 773ms
- **Runs:** 3

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_10 > 2000 LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 774ms
- **Min Duration:** 772ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms
- **Runs:** 3

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_10 > 2000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 723ms
- **Min Duration:** 621ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_10 > 2000 LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_10 > 2000 ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 157ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### row_10 > 2000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_10 > 2000 GROUP BY row_28`
- **Count/Rows:** 5
- **Average Duration:** 671ms
- **Min Duration:** 618ms
- **Max Duration:** 772ms
- **P95 Duration:** 757ms
- **Runs:** 3

### row_10 > 2000 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_10 > 2000 GROUP BY row_48`
- **Count/Rows:** 7
- **Average Duration:** 773ms
- **Min Duration:** 772ms
- **Max Duration:** 773ms
- **P95 Duration:** 773ms
- **Runs:** 3

### row_10 > 2000 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_10 > 2000 GROUP BY row_54`
- **Count/Rows:** 7
- **Average Duration:** 667ms
- **Min Duration:** 611ms
- **Max Duration:** 772ms
- **P95 Duration:** 757ms
- **Runs:** 3

### row_1 >= 2024-06-01 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00'`
- **Count/Rows:** 5,844,513
- **Average Duration:** 773ms
- **Min Duration:** 772ms
- **Max Duration:** 773ms
- **P95 Duration:** 773ms
- **Runs:** 3

### row_1 >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 774ms
- **Min Duration:** 771ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### row_1 >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 784ms
- **Min Duration:** 775ms
- **Max Duration:** 799ms
- **P95 Duration:** 797ms
- **Runs:** 3

### row_1 >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### row_1 >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### row_1 >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' GROUP BY row_28`
- **Count/Rows:** 5
- **Average Duration:** 722ms
- **Min Duration:** 618ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms
- **Runs:** 3

### row_1 >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' GROUP BY row_48`
- **Count/Rows:** 7
- **Average Duration:** 725ms
- **Min Duration:** 621ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### row_1 >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' GROUP BY row_54`
- **Count/Rows:** 7
- **Average Duration:** 778ms
- **Min Duration:** 772ms
- **Max Duration:** 786ms
- **P95 Duration:** 785ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1'`
- **Count/Rows:** 0
- **Average Duration:** 775ms
- **Min Duration:** 774ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' LIMIT 100`
- **Count/Rows:** 0
- **Average Duration:** 622ms
- **Min Duration:** 620ms
- **Max Duration:** 622ms
- **P95 Duration:** 622ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Average Duration:** 622ms
- **Min Duration:** 621ms
- **Max Duration:** 622ms
- **P95 Duration:** 622ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 156ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 157ms
- **Max Duration:** 158ms
- **P95 Duration:** 158ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' GROUP BY row_28`
- **Count/Rows:** 0
- **Average Duration:** 622ms
- **Min Duration:** 621ms
- **Max Duration:** 622ms
- **P95 Duration:** 622ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' GROUP BY row_48`
- **Count/Rows:** 0
- **Average Duration:** 620ms
- **Min Duration:** 618ms
- **Max Duration:** 620ms
- **P95 Duration:** 620ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' GROUP BY row_54`
- **Count/Rows:** 0
- **Average Duration:** 620ms
- **Min Duration:** 617ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_9 BETWEEN 2000 AND 8000`
- **Count/Rows:** 6,333,281
- **Average Duration:** 773ms
- **Min Duration:** 769ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_9 BETWEEN 2000 AND 8000 LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 774ms
- **Min Duration:** 772ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_9 BETWEEN 2000 AND 8000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_9 BETWEEN 2000 AND 8000 LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 157ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_9 BETWEEN 2000 AND 8000 ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 158ms
- **Max Duration:** 158ms
- **P95 Duration:** 158ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_9 BETWEEN 2000 AND 8000 GROUP BY row_28`
- **Count/Rows:** 5
- **Average Duration:** 777ms
- **Min Duration:** 773ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_9 BETWEEN 2000 AND 8000 GROUP BY row_48`
- **Count/Rows:** 7
- **Average Duration:** 775ms
- **Min Duration:** 773ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_9 BETWEEN 2000 AND 8000 GROUP BY row_54`
- **Count/Rows:** 7
- **Average Duration:** 775ms
- **Min Duration:** 772ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### row_54 = 'tag1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_54 = 'tag1'`
- **Count/Rows:** 0
- **Average Duration:** 777ms
- **Min Duration:** 776ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_54 = 'tag1' LIMIT 100`
- **Count/Rows:** 0
- **Average Duration:** 621ms
- **Min Duration:** 619ms
- **Max Duration:** 621ms
- **P95 Duration:** 621ms
- **Runs:** 3

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_54 = 'tag1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Average Duration:** 622ms
- **Min Duration:** 620ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_54 = 'tag1' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_54 = 'tag1' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 155ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### row_54 = 'tag1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_54 = 'tag1' GROUP BY row_28`
- **Count/Rows:** 0
- **Average Duration:** 620ms
- **Min Duration:** 618ms
- **Max Duration:** 622ms
- **P95 Duration:** 622ms
- **Runs:** 3

### row_54 = 'tag1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_54 = 'tag1' GROUP BY row_48`
- **Count/Rows:** 0
- **Average Duration:** 620ms
- **Min Duration:** 616ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_54 = 'tag1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_54 = 'tag1' GROUP BY row_54`
- **Count/Rows:** 0
- **Average Duration:** 621ms
- **Min Duration:** 618ms
- **Max Duration:** 622ms
- **P95 Duration:** 622ms
- **Runs:** 3

### row_29 IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_29 IS NOT NULL`
- **Count/Rows:** 10,000,000
- **Average Duration:** 773ms
- **Min Duration:** 769ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_29 IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 772ms
- **Min Duration:** 770ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms
- **Runs:** 3

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_29 IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 782ms
- **Min Duration:** 780ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_29 IS NOT NULL LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 156ms
- **Min Duration:** 155ms
- **Max Duration:** 156ms
- **P95 Duration:** 156ms
- **Runs:** 3

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_29 IS NOT NULL ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 156ms
- **Max Duration:** 158ms
- **P95 Duration:** 158ms
- **Runs:** 3

### row_29 IS NOT NULL - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_29 IS NOT NULL GROUP BY row_28`
- **Count/Rows:** 5
- **Average Duration:** 621ms
- **Min Duration:** 618ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_29 IS NOT NULL - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_29 IS NOT NULL GROUP BY row_48`
- **Count/Rows:** 7
- **Average Duration:** 785ms
- **Min Duration:** 770ms
- **Max Duration:** 800ms
- **P95 Duration:** 799ms
- **Runs:** 3

### row_29 IS NOT NULL - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_29 IS NOT NULL GROUP BY row_54`
- **Count/Rows:** 7
- **Average Duration:** 724ms
- **Min Duration:** 628ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms
- **Runs:** 3

