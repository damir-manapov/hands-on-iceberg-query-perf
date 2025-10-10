# Query Performance Report

**Table:** iceberg.lab.wide_100_000_000  
**Generated:** 2025-10-10T09:09:44.597Z  
**Total Rows:** 100,000,000  
**Table Size:** 29.0 GB

## Summary

- **Total Queries:** 240
- **Average Duration:** 752ms
- **Fastest Query:** 154ms
- **Slowest Query:** 2617ms
- **95th Percentile:** 1588ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
| no filters | COUNT | - | - | - | 100,000,000 | 773 | 770 | 775 | 775 | 3 |
| no filters | PAGINATION | first page | No | - | 100 | 775 | 772 | 778 | 778 | 3 |
| no filters | PAGINATION | first page | Yes | - | 100 | 1536 | 1500 | 1582 | 1577 | 3 |
| no filters | PAGINATION | 100th page | No | - | 0 | 157 | 154 | 159 | 159 | 3 |
| no filters | PAGINATION | 100th page | Yes | - | 0 | 158 | 157 | 159 | 159 | 3 |
| no filters | AGGREGATION | - | - | row_28 GROUP BY | 5 | 773 | 771 | 775 | 775 | 3 |
| no filters | AGGREGATION | - | - | row_48 GROUP BY | 7 | 829 | 770 | 860 | 860 | 3 |
| no filters | AGGREGATION | - | - | row_54 GROUP BY | 7 | 831 | 773 | 865 | 864 | 3 |
| row_9 > 5000 | COUNT | - | - | - | 52,774,709 | 912 | 896 | 928 | 927 | 3 |
| row_9 > 5000 | PAGINATION | first page | No | - | 100 | 672 | 620 | 774 | 759 | 3 |
| row_9 > 5000 | PAGINATION | first page | Yes | - | 100 | 1580 | 1566 | 1587 | 1587 | 3 |
| row_9 > 5000 | PAGINATION | 100th page | No | - | 0 | 159 | 158 | 159 | 159 | 3 |
| row_9 > 5000 | PAGINATION | 100th page | Yes | - | 0 | 157 | 155 | 158 | 158 | 3 |
| row_9 > 5000 | AGGREGATION | - | - | row_28 GROUP BY | 5 | 1201 | 1153 | 1227 | 1227 | 3 |
| row_9 > 5000 | AGGREGATION | - | - | row_48 GROUP BY | 7 | 1193 | 1171 | 1208 | 1208 | 3 |
| row_9 > 5000 | AGGREGATION | - | - | row_54 GROUP BY | 7 | 1215 | 1161 | 1277 | 1270 | 3 |
| row_28 = 'value1' | COUNT | - | - | - | 0 | 774 | 769 | 777 | 777 | 3 |
| row_28 = 'value1' | PAGINATION | first page | No | - | 0 | 620 | 620 | 620 | 620 | 3 |
| row_28 = 'value1' | PAGINATION | first page | Yes | - | 0 | 621 | 619 | 621 | 621 | 3 |
| row_28 = 'value1' | PAGINATION | 100th page | No | - | 0 | 158 | 157 | 159 | 159 | 3 |
| row_28 = 'value1' | PAGINATION | 100th page | Yes | - | 0 | 158 | 158 | 158 | 158 | 3 |
| row_28 = 'value1' | AGGREGATION | - | - | row_28 GROUP BY | 0 | 621 | 618 | 622 | 622 | 3 |
| row_28 = 'value1' | AGGREGATION | - | - | row_48 GROUP BY | 0 | 619 | 617 | 621 | 621 | 3 |
| row_28 = 'value1' | AGGREGATION | - | - | row_54 GROUP BY | 0 | 618 | 615 | 620 | 620 | 3 |
| row_48 = 'enum1' | COUNT | - | - | - | 0 | 692 | 649 | 772 | 761 | 3 |
| row_48 = 'enum1' | PAGINATION | first page | No | - | 0 | 619 | 617 | 621 | 621 | 3 |
| row_48 = 'enum1' | PAGINATION | first page | Yes | - | 0 | 618 | 616 | 621 | 621 | 3 |
| row_48 = 'enum1' | PAGINATION | 100th page | No | - | 0 | 159 | 158 | 159 | 159 | 3 |
| row_48 = 'enum1' | PAGINATION | 100th page | Yes | - | 0 | 157 | 157 | 157 | 157 | 3 |
| row_48 = 'enum1' | AGGREGATION | - | - | row_28 GROUP BY | 0 | 621 | 615 | 632 | 631 | 3 |
| row_48 = 'enum1' | AGGREGATION | - | - | row_48 GROUP BY | 0 | 624 | 615 | 637 | 636 | 3 |
| row_48 = 'enum1' | AGGREGATION | - | - | row_54 GROUP BY | 0 | 617 | 615 | 619 | 619 | 3 |
| row_10 > 2000 | COUNT | - | - | - | 32,315,005 | 862 | 851 | 877 | 876 | 3 |
| row_10 > 2000 | PAGINATION | first page | No | - | 100 | 723 | 620 | 774 | 774 | 3 |
| row_10 > 2000 | PAGINATION | first page | Yes | - | 100 | 1687 | 1637 | 1771 | 1759 | 3 |
| row_10 > 2000 | PAGINATION | 100th page | No | - | 0 | 158 | 156 | 159 | 159 | 3 |
| row_10 > 2000 | PAGINATION | 100th page | Yes | - | 0 | 158 | 156 | 159 | 159 | 3 |
| row_10 > 2000 | AGGREGATION | - | - | row_28 GROUP BY | 5 | 1156 | 1151 | 1159 | 1159 | 3 |
| row_10 > 2000 | AGGREGATION | - | - | row_48 GROUP BY | 7 | 1123 | 1106 | 1144 | 1142 | 3 |
| row_10 > 2000 | AGGREGATION | - | - | row_54 GROUP BY | 7 | 1161 | 1141 | 1172 | 1172 | 3 |
| row_1 >= 2024-06-01 | COUNT | - | - | - | 58,465,692 | 967 | 927 | 987 | 987 | 3 |
| row_1 >= 2024-06-01 | PAGINATION | first page | No | - | 100 | 723 | 623 | 774 | 774 | 3 |
| row_1 >= 2024-06-01 | PAGINATION | first page | Yes | - | 100 | 2238 | 1776 | 2617 | 2588 | 3 |
| row_1 >= 2024-06-01 | PAGINATION | 100th page | No | - | 0 | 158 | 155 | 159 | 159 | 3 |
| row_1 >= 2024-06-01 | PAGINATION | 100th page | Yes | - | 0 | 158 | 157 | 158 | 158 | 3 |
| row_1 >= 2024-06-01 | AGGREGATION | - | - | row_28 GROUP BY | 5 | 1287 | 1268 | 1298 | 1298 | 3 |
| row_1 >= 2024-06-01 | AGGREGATION | - | - | row_48 GROUP BY | 7 | 1431 | 1423 | 1439 | 1438 | 3 |
| row_1 >= 2024-06-01 | AGGREGATION | - | - | row_54 GROUP BY | 7 | 1465 | 1441 | 1511 | 1504 | 3 |
| row_28='value1' AND row_48='enum1' | COUNT | - | - | - | 0 | 670 | 616 | 775 | 760 | 3 |
| row_28='value1' AND row_48='enum1' | PAGINATION | first page | No | - | 0 | 619 | 619 | 619 | 619 | 3 |
| row_28='value1' AND row_48='enum1' | PAGINATION | first page | Yes | - | 0 | 620 | 618 | 623 | 623 | 3 |
| row_28='value1' AND row_48='enum1' | PAGINATION | 100th page | No | - | 0 | 158 | 158 | 158 | 158 | 3 |
| row_28='value1' AND row_48='enum1' | PAGINATION | 100th page | Yes | - | 0 | 158 | 158 | 158 | 158 | 3 |
| row_28='value1' AND row_48='enum1' | AGGREGATION | - | - | row_28 GROUP BY | 0 | 620 | 619 | 621 | 621 | 3 |
| row_28='value1' AND row_48='enum1' | AGGREGATION | - | - | row_48 GROUP BY | 0 | 621 | 620 | 621 | 621 | 3 |
| row_28='value1' AND row_48='enum1' | AGGREGATION | - | - | row_54 GROUP BY | 0 | 618 | 617 | 619 | 619 | 3 |
| row_9 BETWEEN 2000 AND 8000 | COUNT | - | - | - | 63,341,035 | 914 | 883 | 937 | 936 | 3 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | first page | No | - | 100 | 775 | 772 | 776 | 776 | 3 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | first page | Yes | - | 100 | 1658 | 1593 | 1775 | 1758 | 3 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | 100th page | No | - | 0 | 155 | 154 | 156 | 156 | 3 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | 100th page | Yes | - | 0 | 158 | 156 | 159 | 159 | 3 |
| row_9 BETWEEN 2000 AND 8000 | AGGREGATION | - | - | row_28 GROUP BY | 5 | 1247 | 1210 | 1302 | 1295 | 3 |
| row_9 BETWEEN 2000 AND 8000 | AGGREGATION | - | - | row_48 GROUP BY | 7 | 1245 | 1159 | 1390 | 1370 | 3 |
| row_9 BETWEEN 2000 AND 8000 | AGGREGATION | - | - | row_54 GROUP BY | 7 | 1115 | 1103 | 1137 | 1134 | 3 |
| row_54 = 'tag1' | COUNT | - | - | - | 0 | 773 | 771 | 774 | 774 | 3 |
| row_54 = 'tag1' | PAGINATION | first page | No | - | 0 | 617 | 614 | 619 | 619 | 3 |
| row_54 = 'tag1' | PAGINATION | first page | Yes | - | 0 | 621 | 621 | 621 | 621 | 3 |
| row_54 = 'tag1' | PAGINATION | 100th page | No | - | 0 | 158 | 157 | 158 | 158 | 3 |
| row_54 = 'tag1' | PAGINATION | 100th page | Yes | - | 0 | 157 | 155 | 160 | 160 | 3 |
| row_54 = 'tag1' | AGGREGATION | - | - | row_28 GROUP BY | 0 | 623 | 622 | 623 | 623 | 3 |
| row_54 = 'tag1' | AGGREGATION | - | - | row_48 GROUP BY | 0 | 621 | 620 | 621 | 621 | 3 |
| row_54 = 'tag1' | AGGREGATION | - | - | row_54 GROUP BY | 0 | 621 | 619 | 621 | 621 | 3 |
| row_29 IS NOT NULL | COUNT | - | - | - | 100,000,000 | 1066 | 989 | 1163 | 1152 | 3 |
| row_29 IS NOT NULL | PAGINATION | first page | No | - | 100 | 722 | 620 | 776 | 776 | 3 |
| row_29 IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 1772 | 1763 | 1777 | 1777 | 3 |
| row_29 IS NOT NULL | PAGINATION | 100th page | No | - | 0 | 158 | 157 | 158 | 158 | 3 |
| row_29 IS NOT NULL | PAGINATION | 100th page | Yes | - | 0 | 158 | 158 | 158 | 158 | 3 |
| row_29 IS NOT NULL | AGGREGATION | - | - | row_28 GROUP BY | 5 | 1212 | 1196 | 1226 | 1225 | 3 |
| row_29 IS NOT NULL | AGGREGATION | - | - | row_48 GROUP BY | 7 | 1300 | 1264 | 1345 | 1340 | 3 |
| row_29 IS NOT NULL | AGGREGATION | - | - | row_54 GROUP BY | 7 | 1551 | 1541 | 1566 | 1564 | 3 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 `
- **Count/Rows:** 100,000,000
- **Average Duration:** 773ms
- **Min Duration:** 770ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 775ms
- **Min Duration:** 772ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 1536ms
- **Min Duration:** 1500ms
- **Max Duration:** 1582ms
- **P95 Duration:** 1577ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 157ms
- **Min Duration:** 154ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 157ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000  GROUP BY row_28`
- **Count/Rows:** 5
- **Average Duration:** 773ms
- **Min Duration:** 771ms
- **Max Duration:** 775ms
- **P95 Duration:** 775ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000  GROUP BY row_48`
- **Count/Rows:** 7
- **Average Duration:** 829ms
- **Min Duration:** 770ms
- **Max Duration:** 860ms
- **P95 Duration:** 860ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000  GROUP BY row_54`
- **Count/Rows:** 7
- **Average Duration:** 831ms
- **Min Duration:** 773ms
- **Max Duration:** 865ms
- **P95 Duration:** 864ms
- **Runs:** 3

### row_9 > 5000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000`
- **Count/Rows:** 52,774,709
- **Average Duration:** 912ms
- **Min Duration:** 896ms
- **Max Duration:** 928ms
- **P95 Duration:** 927ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 672ms
- **Min Duration:** 620ms
- **Max Duration:** 774ms
- **P95 Duration:** 759ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 1580ms
- **Min Duration:** 1566ms
- **Max Duration:** 1587ms
- **P95 Duration:** 1587ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 157ms
- **Min Duration:** 155ms
- **Max Duration:** 158ms
- **P95 Duration:** 158ms
- **Runs:** 3

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 GROUP BY row_28`
- **Count/Rows:** 5
- **Average Duration:** 1201ms
- **Min Duration:** 1153ms
- **Max Duration:** 1227ms
- **P95 Duration:** 1227ms
- **Runs:** 3

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 GROUP BY row_48`
- **Count/Rows:** 7
- **Average Duration:** 1193ms
- **Min Duration:** 1171ms
- **Max Duration:** 1208ms
- **P95 Duration:** 1208ms
- **Runs:** 3

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 GROUP BY row_54`
- **Count/Rows:** 7
- **Average Duration:** 1215ms
- **Min Duration:** 1161ms
- **Max Duration:** 1277ms
- **P95 Duration:** 1270ms
- **Runs:** 3

### row_28 = 'value1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1'`
- **Count/Rows:** 0
- **Average Duration:** 774ms
- **Min Duration:** 769ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' LIMIT 100`
- **Count/Rows:** 0
- **Average Duration:** 620ms
- **Min Duration:** 620ms
- **Max Duration:** 620ms
- **P95 Duration:** 620ms
- **Runs:** 3

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Average Duration:** 621ms
- **Min Duration:** 619ms
- **Max Duration:** 621ms
- **P95 Duration:** 621ms
- **Runs:** 3

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 157ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 158ms
- **Max Duration:** 158ms
- **P95 Duration:** 158ms
- **Runs:** 3

### row_28 = 'value1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' GROUP BY row_28`
- **Count/Rows:** 0
- **Average Duration:** 621ms
- **Min Duration:** 618ms
- **Max Duration:** 622ms
- **P95 Duration:** 622ms
- **Runs:** 3

### row_28 = 'value1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' GROUP BY row_48`
- **Count/Rows:** 0
- **Average Duration:** 619ms
- **Min Duration:** 617ms
- **Max Duration:** 621ms
- **P95 Duration:** 621ms
- **Runs:** 3

### row_28 = 'value1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' GROUP BY row_54`
- **Count/Rows:** 0
- **Average Duration:** 618ms
- **Min Duration:** 615ms
- **Max Duration:** 620ms
- **P95 Duration:** 620ms
- **Runs:** 3

### row_48 = 'enum1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1'`
- **Count/Rows:** 0
- **Average Duration:** 692ms
- **Min Duration:** 649ms
- **Max Duration:** 772ms
- **P95 Duration:** 761ms
- **Runs:** 3

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' LIMIT 100`
- **Count/Rows:** 0
- **Average Duration:** 619ms
- **Min Duration:** 617ms
- **Max Duration:** 621ms
- **P95 Duration:** 621ms
- **Runs:** 3

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Average Duration:** 618ms
- **Min Duration:** 616ms
- **Max Duration:** 621ms
- **P95 Duration:** 621ms
- **Runs:** 3

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 157ms
- **Min Duration:** 157ms
- **Max Duration:** 157ms
- **P95 Duration:** 157ms
- **Runs:** 3

### row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' GROUP BY row_28`
- **Count/Rows:** 0
- **Average Duration:** 621ms
- **Min Duration:** 615ms
- **Max Duration:** 632ms
- **P95 Duration:** 631ms
- **Runs:** 3

### row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' GROUP BY row_48`
- **Count/Rows:** 0
- **Average Duration:** 624ms
- **Min Duration:** 615ms
- **Max Duration:** 637ms
- **P95 Duration:** 636ms
- **Runs:** 3

### row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' GROUP BY row_54`
- **Count/Rows:** 0
- **Average Duration:** 617ms
- **Min Duration:** 615ms
- **Max Duration:** 619ms
- **P95 Duration:** 619ms
- **Runs:** 3

### row_10 > 2000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000`
- **Count/Rows:** 32,315,005
- **Average Duration:** 862ms
- **Min Duration:** 851ms
- **Max Duration:** 877ms
- **P95 Duration:** 876ms
- **Runs:** 3

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 723ms
- **Min Duration:** 620ms
- **Max Duration:** 774ms
- **P95 Duration:** 774ms
- **Runs:** 3

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 1687ms
- **Min Duration:** 1637ms
- **Max Duration:** 1771ms
- **P95 Duration:** 1759ms
- **Runs:** 3

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 156ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 156ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### row_10 > 2000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 GROUP BY row_28`
- **Count/Rows:** 5
- **Average Duration:** 1156ms
- **Min Duration:** 1151ms
- **Max Duration:** 1159ms
- **P95 Duration:** 1159ms
- **Runs:** 3

### row_10 > 2000 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 GROUP BY row_48`
- **Count/Rows:** 7
- **Average Duration:** 1123ms
- **Min Duration:** 1106ms
- **Max Duration:** 1144ms
- **P95 Duration:** 1142ms
- **Runs:** 3

### row_10 > 2000 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 GROUP BY row_54`
- **Count/Rows:** 7
- **Average Duration:** 1161ms
- **Min Duration:** 1141ms
- **Max Duration:** 1172ms
- **P95 Duration:** 1172ms
- **Runs:** 3

### row_1 >= 2024-06-01 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00'`
- **Count/Rows:** 58,465,692
- **Average Duration:** 967ms
- **Min Duration:** 927ms
- **Max Duration:** 987ms
- **P95 Duration:** 987ms
- **Runs:** 3

### row_1 >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 723ms
- **Min Duration:** 623ms
- **Max Duration:** 774ms
- **P95 Duration:** 774ms
- **Runs:** 3

### row_1 >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 2238ms
- **Min Duration:** 1776ms
- **Max Duration:** 2617ms
- **P95 Duration:** 2588ms
- **Runs:** 3

### row_1 >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 155ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### row_1 >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 157ms
- **Max Duration:** 158ms
- **P95 Duration:** 158ms
- **Runs:** 3

### row_1 >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' GROUP BY row_28`
- **Count/Rows:** 5
- **Average Duration:** 1287ms
- **Min Duration:** 1268ms
- **Max Duration:** 1298ms
- **P95 Duration:** 1298ms
- **Runs:** 3

### row_1 >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' GROUP BY row_48`
- **Count/Rows:** 7
- **Average Duration:** 1431ms
- **Min Duration:** 1423ms
- **Max Duration:** 1439ms
- **P95 Duration:** 1438ms
- **Runs:** 3

### row_1 >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' GROUP BY row_54`
- **Count/Rows:** 7
- **Average Duration:** 1465ms
- **Min Duration:** 1441ms
- **Max Duration:** 1511ms
- **P95 Duration:** 1504ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1'`
- **Count/Rows:** 0
- **Average Duration:** 670ms
- **Min Duration:** 616ms
- **Max Duration:** 775ms
- **P95 Duration:** 760ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' LIMIT 100`
- **Count/Rows:** 0
- **Average Duration:** 619ms
- **Min Duration:** 619ms
- **Max Duration:** 619ms
- **P95 Duration:** 619ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Average Duration:** 620ms
- **Min Duration:** 618ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 158ms
- **Max Duration:** 158ms
- **P95 Duration:** 158ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 158ms
- **Max Duration:** 158ms
- **P95 Duration:** 158ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' GROUP BY row_28`
- **Count/Rows:** 0
- **Average Duration:** 620ms
- **Min Duration:** 619ms
- **Max Duration:** 621ms
- **P95 Duration:** 621ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' GROUP BY row_48`
- **Count/Rows:** 0
- **Average Duration:** 621ms
- **Min Duration:** 620ms
- **Max Duration:** 621ms
- **P95 Duration:** 621ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' GROUP BY row_54`
- **Count/Rows:** 0
- **Average Duration:** 618ms
- **Min Duration:** 617ms
- **Max Duration:** 619ms
- **P95 Duration:** 619ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000`
- **Count/Rows:** 63,341,035
- **Average Duration:** 914ms
- **Min Duration:** 883ms
- **Max Duration:** 937ms
- **P95 Duration:** 936ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 775ms
- **Min Duration:** 772ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 1658ms
- **Min Duration:** 1593ms
- **Max Duration:** 1775ms
- **P95 Duration:** 1758ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 155ms
- **Min Duration:** 154ms
- **Max Duration:** 156ms
- **P95 Duration:** 156ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 156ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 GROUP BY row_28`
- **Count/Rows:** 5
- **Average Duration:** 1247ms
- **Min Duration:** 1210ms
- **Max Duration:** 1302ms
- **P95 Duration:** 1295ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 GROUP BY row_48`
- **Count/Rows:** 7
- **Average Duration:** 1245ms
- **Min Duration:** 1159ms
- **Max Duration:** 1390ms
- **P95 Duration:** 1370ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 GROUP BY row_54`
- **Count/Rows:** 7
- **Average Duration:** 1115ms
- **Min Duration:** 1103ms
- **Max Duration:** 1137ms
- **P95 Duration:** 1134ms
- **Runs:** 3

### row_54 = 'tag1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1'`
- **Count/Rows:** 0
- **Average Duration:** 773ms
- **Min Duration:** 771ms
- **Max Duration:** 774ms
- **P95 Duration:** 774ms
- **Runs:** 3

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1' LIMIT 100`
- **Count/Rows:** 0
- **Average Duration:** 617ms
- **Min Duration:** 614ms
- **Max Duration:** 619ms
- **P95 Duration:** 619ms
- **Runs:** 3

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Average Duration:** 621ms
- **Min Duration:** 621ms
- **Max Duration:** 621ms
- **P95 Duration:** 621ms
- **Runs:** 3

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 157ms
- **Max Duration:** 158ms
- **P95 Duration:** 158ms
- **Runs:** 3

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 157ms
- **Min Duration:** 155ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### row_54 = 'tag1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1' GROUP BY row_28`
- **Count/Rows:** 0
- **Average Duration:** 623ms
- **Min Duration:** 622ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_54 = 'tag1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1' GROUP BY row_48`
- **Count/Rows:** 0
- **Average Duration:** 621ms
- **Min Duration:** 620ms
- **Max Duration:** 621ms
- **P95 Duration:** 621ms
- **Runs:** 3

### row_54 = 'tag1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1' GROUP BY row_54`
- **Count/Rows:** 0
- **Average Duration:** 621ms
- **Min Duration:** 619ms
- **Max Duration:** 621ms
- **P95 Duration:** 621ms
- **Runs:** 3

### row_29 IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL`
- **Count/Rows:** 100,000,000
- **Average Duration:** 1066ms
- **Min Duration:** 989ms
- **Max Duration:** 1163ms
- **P95 Duration:** 1152ms
- **Runs:** 3

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 722ms
- **Min Duration:** 620ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms
- **Runs:** 3

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 1772ms
- **Min Duration:** 1763ms
- **Max Duration:** 1777ms
- **P95 Duration:** 1777ms
- **Runs:** 3

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 157ms
- **Max Duration:** 158ms
- **P95 Duration:** 158ms
- **Runs:** 3

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 158ms
- **Max Duration:** 158ms
- **P95 Duration:** 158ms
- **Runs:** 3

### row_29 IS NOT NULL - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL GROUP BY row_28`
- **Count/Rows:** 5
- **Average Duration:** 1212ms
- **Min Duration:** 1196ms
- **Max Duration:** 1226ms
- **P95 Duration:** 1225ms
- **Runs:** 3

### row_29 IS NOT NULL - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL GROUP BY row_48`
- **Count/Rows:** 7
- **Average Duration:** 1300ms
- **Min Duration:** 1264ms
- **Max Duration:** 1345ms
- **P95 Duration:** 1340ms
- **Runs:** 3

### row_29 IS NOT NULL - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL GROUP BY row_54`
- **Count/Rows:** 7
- **Average Duration:** 1551ms
- **Min Duration:** 1541ms
- **Max Duration:** 1566ms
- **P95 Duration:** 1564ms
- **Runs:** 3

