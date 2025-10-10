# Query Performance Report

**Table:** iceberg.lab.wide_10_000_000  
**Generated:** 2025-10-10T19:45:33.175Z  
**Total Rows:** 10,000,000  
**Table Size:** 2.9 GB

## Summary

- **Total Queries:** 240
- **Average Duration:** 719ms
- **Fastest Query:** 617ms
- **Slowest Query:** 953ms
- **95th Percentile:** 847ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
| no filters | COUNT | - | - | - | 10,000,000 | 777 | 774 | 779 | 779 | 3 |
| no filters | PAGINATION | first page | No | - | 100 | 726 | 623 | 777 | 777 | 3 |
| no filters | PAGINATION | first page | Yes | - | 100 | 754 | 678 | 792 | 792 | 3 |
| no filters | PAGINATION | 100th page | No | - | 100 | 776 | 774 | 778 | 778 | 3 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 831 | 798 | 849 | 849 | 3 |
| no filters | AGGREGATION | - | - | row_28 | 5 | 803 | 781 | 845 | 839 | 3 |
| no filters | AGGREGATION | - | - | row_48 | 7 | 782 | 775 | 793 | 792 | 3 |
| no filters | AGGREGATION | - | - | row_54 | 7 | 778 | 776 | 781 | 781 | 3 |
| row_9 > 5000 | COUNT | - | - | - | 5,276,147 | 688 | 629 | 785 | 772 | 3 |
| row_9 > 5000 | PAGINATION | first page | No | - | 100 | 785 | 783 | 788 | 788 | 3 |
| row_9 > 5000 | PAGINATION | first page | Yes | - | 100 | 716 | 664 | 814 | 800 | 3 |
| row_9 > 5000 | PAGINATION | 100th page | No | - | 100 | 731 | 634 | 781 | 781 | 3 |
| row_9 > 5000 | PAGINATION | 100th page | Yes | - | 100 | 850 | 831 | 863 | 863 | 3 |
| row_9 > 5000 | AGGREGATION | - | - | row_28 | 5 | 786 | 781 | 794 | 793 | 3 |
| row_9 > 5000 | AGGREGATION | - | - | row_48 | 7 | 786 | 783 | 787 | 787 | 3 |
| row_9 > 5000 | AGGREGATION | - | - | row_54 | 7 | 690 | 631 | 796 | 781 | 3 |
| row_28 = 'value1' | COUNT | - | - | - | 0 | 778 | 778 | 778 | 778 | 3 |
| row_28 = 'value1' | PAGINATION | first page | No | - | 0 | 624 | 623 | 625 | 625 | 3 |
| row_28 = 'value1' | PAGINATION | first page | Yes | - | 0 | 621 | 619 | 623 | 623 | 3 |
| row_28 = 'value1' | PAGINATION | 100th page | No | - | 0 | 621 | 620 | 621 | 621 | 3 |
| row_28 = 'value1' | PAGINATION | 100th page | Yes | - | 0 | 622 | 621 | 624 | 624 | 3 |
| row_28 = 'value1' | AGGREGATION | - | - | row_28 | 0 | 622 | 620 | 623 | 623 | 3 |
| row_28 = 'value1' | AGGREGATION | - | - | row_48 | 0 | 621 | 617 | 623 | 623 | 3 |
| row_28 = 'value1' | AGGREGATION | - | - | row_54 | 0 | 623 | 622 | 623 | 623 | 3 |
| row_48 = 'enum1' | COUNT | - | - | - | 0 | 777 | 775 | 778 | 778 | 3 |
| row_48 = 'enum1' | PAGINATION | first page | No | - | 0 | 623 | 621 | 624 | 624 | 3 |
| row_48 = 'enum1' | PAGINATION | first page | Yes | - | 0 | 623 | 620 | 624 | 624 | 3 |
| row_48 = 'enum1' | PAGINATION | 100th page | No | - | 0 | 626 | 622 | 632 | 632 | 3 |
| row_48 = 'enum1' | PAGINATION | 100th page | Yes | - | 0 | 623 | 621 | 626 | 626 | 3 |
| row_48 = 'enum1' | AGGREGATION | - | - | row_28 | 0 | 622 | 622 | 622 | 622 | 3 |
| row_48 = 'enum1' | AGGREGATION | - | - | row_48 | 0 | 622 | 619 | 624 | 624 | 3 |
| row_48 = 'enum1' | AGGREGATION | - | - | row_54 | 0 | 623 | 621 | 624 | 624 | 3 |
| row_10 > 2000 | COUNT | - | - | - | 3,230,742 | 782 | 781 | 782 | 782 | 3 |
| row_10 > 2000 | PAGINATION | first page | No | - | 100 | 738 | 628 | 795 | 795 | 3 |
| row_10 > 2000 | PAGINATION | first page | Yes | - | 100 | 691 | 671 | 710 | 709 | 3 |
| row_10 > 2000 | PAGINATION | 100th page | No | - | 100 | 788 | 785 | 791 | 791 | 3 |
| row_10 > 2000 | PAGINATION | 100th page | Yes | - | 100 | 863 | 845 | 872 | 872 | 3 |
| row_10 > 2000 | AGGREGATION | - | - | row_28 | 5 | 785 | 784 | 786 | 786 | 3 |
| row_10 > 2000 | AGGREGATION | - | - | row_48 | 7 | 788 | 784 | 793 | 793 | 3 |
| row_10 > 2000 | AGGREGATION | - | - | row_54 | 7 | 734 | 640 | 786 | 785 | 3 |
| row_1 >= 2024-06-01 | COUNT | - | - | - | 5,844,513 | 793 | 788 | 800 | 799 | 3 |
| row_1 >= 2024-06-01 | PAGINATION | first page | No | - | 100 | 737 | 639 | 795 | 794 | 3 |
| row_1 >= 2024-06-01 | PAGINATION | first page | Yes | - | 100 | 796 | 785 | 803 | 803 | 3 |
| row_1 >= 2024-06-01 | PAGINATION | 100th page | No | - | 100 | 790 | 786 | 796 | 796 | 3 |
| row_1 >= 2024-06-01 | PAGINATION | 100th page | Yes | - | 100 | 879 | 863 | 895 | 894 | 3 |
| row_1 >= 2024-06-01 | AGGREGATION | - | - | row_28 | 5 | 797 | 788 | 809 | 808 | 3 |
| row_1 >= 2024-06-01 | AGGREGATION | - | - | row_48 | 7 | 739 | 635 | 794 | 794 | 3 |
| row_1 >= 2024-06-01 | AGGREGATION | - | - | row_54 | 7 | 788 | 783 | 793 | 793 | 3 |
| row_28='value1' AND row_48='enum1' | COUNT | - | - | - | 0 | 778 | 776 | 781 | 781 | 3 |
| row_28='value1' AND row_48='enum1' | PAGINATION | first page | No | - | 0 | 622 | 620 | 623 | 623 | 3 |
| row_28='value1' AND row_48='enum1' | PAGINATION | first page | Yes | - | 0 | 622 | 621 | 623 | 623 | 3 |
| row_28='value1' AND row_48='enum1' | PAGINATION | 100th page | No | - | 0 | 622 | 620 | 623 | 623 | 3 |
| row_28='value1' AND row_48='enum1' | PAGINATION | 100th page | Yes | - | 0 | 621 | 619 | 623 | 623 | 3 |
| row_28='value1' AND row_48='enum1' | AGGREGATION | - | - | row_28 | 0 | 623 | 619 | 625 | 625 | 3 |
| row_28='value1' AND row_48='enum1' | AGGREGATION | - | - | row_48 | 0 | 621 | 620 | 621 | 621 | 3 |
| row_28='value1' AND row_48='enum1' | AGGREGATION | - | - | row_54 | 0 | 622 | 621 | 623 | 623 | 3 |
| row_9 BETWEEN 2000 AND 8000 | COUNT | - | - | - | 6,333,281 | 731 | 625 | 784 | 784 | 3 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | first page | No | - | 100 | 782 | 778 | 786 | 786 | 3 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | first page | Yes | - | 100 | 724 | 687 | 793 | 783 | 3 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | 100th page | No | - | 100 | 742 | 623 | 816 | 813 | 3 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | 100th page | Yes | - | 100 | 858 | 836 | 893 | 888 | 3 |
| row_9 BETWEEN 2000 AND 8000 | AGGREGATION | - | - | row_28 | 5 | 778 | 775 | 780 | 780 | 3 |
| row_9 BETWEEN 2000 AND 8000 | AGGREGATION | - | - | row_48 | 7 | 799 | 783 | 822 | 819 | 3 |
| row_9 BETWEEN 2000 AND 8000 | AGGREGATION | - | - | row_54 | 7 | 734 | 634 | 783 | 783 | 3 |
| row_54 = 'tag1' | COUNT | - | - | - | 0 | 776 | 775 | 777 | 777 | 3 |
| row_54 = 'tag1' | PAGINATION | first page | No | - | 0 | 624 | 621 | 625 | 625 | 3 |
| row_54 = 'tag1' | PAGINATION | first page | Yes | - | 0 | 621 | 619 | 621 | 621 | 3 |
| row_54 = 'tag1' | PAGINATION | 100th page | No | - | 0 | 622 | 621 | 622 | 622 | 3 |
| row_54 = 'tag1' | PAGINATION | 100th page | Yes | - | 0 | 621 | 619 | 622 | 622 | 3 |
| row_54 = 'tag1' | AGGREGATION | - | - | row_28 | 0 | 623 | 621 | 624 | 624 | 3 |
| row_54 = 'tag1' | AGGREGATION | - | - | row_48 | 0 | 621 | 618 | 623 | 623 | 3 |
| row_54 = 'tag1' | AGGREGATION | - | - | row_54 | 0 | 621 | 620 | 623 | 623 | 3 |
| row_29 IS NOT NULL | COUNT | - | - | - | 10,000,000 | 740 | 656 | 782 | 782 | 3 |
| row_29 IS NOT NULL | PAGINATION | first page | No | - | 100 | 733 | 627 | 790 | 790 | 3 |
| row_29 IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 754 | 727 | 797 | 791 | 3 |
| row_29 IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 731 | 629 | 787 | 786 | 3 |
| row_29 IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 925 | 908 | 953 | 949 | 3 |
| row_29 IS NOT NULL | AGGREGATION | - | - | row_28 | 5 | 782 | 778 | 786 | 786 | 3 |
| row_29 IS NOT NULL | AGGREGATION | - | - | row_48 | 7 | 739 | 639 | 793 | 792 | 3 |
| row_29 IS NOT NULL | AGGREGATION | - | - | row_54 | 7 | 687 | 625 | 797 | 782 | 3 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_10_000_000 `
- **Count/Rows:** 10,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 774ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 726ms
- **Min Duration:** 623ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 754ms
- **Min Duration:** 678ms
- **Max Duration:** 792ms
- **P95 Duration:** 792ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 774ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 831ms
- **Min Duration:** 798ms
- **Max Duration:** 849ms
- **P95 Duration:** 849ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_10_000_000  GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 803ms
- **Min Duration:** 781ms
- **Max Duration:** 845ms
- **P95 Duration:** 839ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_10_000_000  GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 782ms
- **Min Duration:** 775ms
- **Max Duration:** 793ms
- **P95 Duration:** 792ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_10_000_000  GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 778ms
- **Min Duration:** 776ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### row_9 > 5000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_9 > 5000`
- **Count/Rows:** 5,276,147
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 688ms
- **Min Duration:** 629ms
- **Max Duration:** 785ms
- **P95 Duration:** 772ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_9 > 5000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 785ms
- **Min Duration:** 783ms
- **Max Duration:** 788ms
- **P95 Duration:** 788ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_9 > 5000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 716ms
- **Min Duration:** 664ms
- **Max Duration:** 814ms
- **P95 Duration:** 800ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_9 > 5000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 731ms
- **Min Duration:** 634ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_9 > 5000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 850ms
- **Min Duration:** 831ms
- **Max Duration:** 863ms
- **P95 Duration:** 863ms
- **Runs:** 3

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_9 > 5000 GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 786ms
- **Min Duration:** 781ms
- **Max Duration:** 794ms
- **P95 Duration:** 793ms
- **Runs:** 3

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_9 > 5000 GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 786ms
- **Min Duration:** 783ms
- **Max Duration:** 787ms
- **P95 Duration:** 787ms
- **Runs:** 3

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_9 > 5000 GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 690ms
- **Min Duration:** 631ms
- **Max Duration:** 796ms
- **P95 Duration:** 781ms
- **Runs:** 3

### row_28 = 'value1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 778ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 624ms
- **Min Duration:** 623ms
- **Max Duration:** 625ms
- **P95 Duration:** 625ms
- **Runs:** 3

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 621ms
- **Min Duration:** 619ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 621ms
- **Min Duration:** 620ms
- **Max Duration:** 621ms
- **P95 Duration:** 621ms
- **Runs:** 3

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 622ms
- **Min Duration:** 621ms
- **Max Duration:** 624ms
- **P95 Duration:** 624ms
- **Runs:** 3

### row_28 = 'value1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' GROUP BY row_28`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 622ms
- **Min Duration:** 620ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_28 = 'value1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' GROUP BY row_48`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 621ms
- **Min Duration:** 617ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_28 = 'value1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' GROUP BY row_54`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 623ms
- **Min Duration:** 622ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_48 = 'enum1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_48 = 'enum1'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_48 = 'enum1' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 623ms
- **Min Duration:** 621ms
- **Max Duration:** 624ms
- **P95 Duration:** 624ms
- **Runs:** 3

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_48 = 'enum1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 623ms
- **Min Duration:** 620ms
- **Max Duration:** 624ms
- **P95 Duration:** 624ms
- **Runs:** 3

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_48 = 'enum1' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 626ms
- **Min Duration:** 622ms
- **Max Duration:** 632ms
- **P95 Duration:** 632ms
- **Runs:** 3

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_48 = 'enum1' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 623ms
- **Min Duration:** 621ms
- **Max Duration:** 626ms
- **P95 Duration:** 626ms
- **Runs:** 3

### row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_48 = 'enum1' GROUP BY row_28`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 622ms
- **Min Duration:** 622ms
- **Max Duration:** 622ms
- **P95 Duration:** 622ms
- **Runs:** 3

### row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_48 = 'enum1' GROUP BY row_48`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 622ms
- **Min Duration:** 619ms
- **Max Duration:** 624ms
- **P95 Duration:** 624ms
- **Runs:** 3

### row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_48 = 'enum1' GROUP BY row_54`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 623ms
- **Min Duration:** 621ms
- **Max Duration:** 624ms
- **P95 Duration:** 624ms
- **Runs:** 3

### row_10 > 2000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_10 > 2000`
- **Count/Rows:** 3,230,742
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 782ms
- **Min Duration:** 781ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_10 > 2000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 738ms
- **Min Duration:** 628ms
- **Max Duration:** 795ms
- **P95 Duration:** 795ms
- **Runs:** 3

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_10 > 2000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 691ms
- **Min Duration:** 671ms
- **Max Duration:** 710ms
- **P95 Duration:** 709ms
- **Runs:** 3

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_10 > 2000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 788ms
- **Min Duration:** 785ms
- **Max Duration:** 791ms
- **P95 Duration:** 791ms
- **Runs:** 3

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_10 > 2000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 863ms
- **Min Duration:** 845ms
- **Max Duration:** 872ms
- **P95 Duration:** 872ms
- **Runs:** 3

### row_10 > 2000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_10 > 2000 GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 785ms
- **Min Duration:** 784ms
- **Max Duration:** 786ms
- **P95 Duration:** 786ms
- **Runs:** 3

### row_10 > 2000 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_10 > 2000 GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 788ms
- **Min Duration:** 784ms
- **Max Duration:** 793ms
- **P95 Duration:** 793ms
- **Runs:** 3

### row_10 > 2000 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_10 > 2000 GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 734ms
- **Min Duration:** 640ms
- **Max Duration:** 786ms
- **P95 Duration:** 785ms
- **Runs:** 3

### row_1 >= 2024-06-01 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00'`
- **Count/Rows:** 5,844,513
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 793ms
- **Min Duration:** 788ms
- **Max Duration:** 800ms
- **P95 Duration:** 799ms
- **Runs:** 3

### row_1 >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 737ms
- **Min Duration:** 639ms
- **Max Duration:** 795ms
- **P95 Duration:** 794ms
- **Runs:** 3

### row_1 >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 796ms
- **Min Duration:** 785ms
- **Max Duration:** 803ms
- **P95 Duration:** 803ms
- **Runs:** 3

### row_1 >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 790ms
- **Min Duration:** 786ms
- **Max Duration:** 796ms
- **P95 Duration:** 796ms
- **Runs:** 3

### row_1 >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 879ms
- **Min Duration:** 863ms
- **Max Duration:** 895ms
- **P95 Duration:** 894ms
- **Runs:** 3

### row_1 >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 797ms
- **Min Duration:** 788ms
- **Max Duration:** 809ms
- **P95 Duration:** 808ms
- **Runs:** 3

### row_1 >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 739ms
- **Min Duration:** 635ms
- **Max Duration:** 794ms
- **P95 Duration:** 794ms
- **Runs:** 3

### row_1 >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 788ms
- **Min Duration:** 783ms
- **Max Duration:** 793ms
- **P95 Duration:** 793ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 778ms
- **Min Duration:** 776ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 622ms
- **Min Duration:** 620ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 622ms
- **Min Duration:** 621ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 622ms
- **Min Duration:** 620ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 621ms
- **Min Duration:** 619ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' GROUP BY row_28`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 623ms
- **Min Duration:** 619ms
- **Max Duration:** 625ms
- **P95 Duration:** 625ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' GROUP BY row_48`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 621ms
- **Min Duration:** 620ms
- **Max Duration:** 621ms
- **P95 Duration:** 621ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' GROUP BY row_54`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 622ms
- **Min Duration:** 621ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_9 BETWEEN 2000 AND 8000`
- **Count/Rows:** 6,333,281
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 731ms
- **Min Duration:** 625ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_9 BETWEEN 2000 AND 8000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 782ms
- **Min Duration:** 778ms
- **Max Duration:** 786ms
- **P95 Duration:** 786ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_9 BETWEEN 2000 AND 8000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 724ms
- **Min Duration:** 687ms
- **Max Duration:** 793ms
- **P95 Duration:** 783ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_9 BETWEEN 2000 AND 8000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 742ms
- **Min Duration:** 623ms
- **Max Duration:** 816ms
- **P95 Duration:** 813ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_9 BETWEEN 2000 AND 8000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 858ms
- **Min Duration:** 836ms
- **Max Duration:** 893ms
- **P95 Duration:** 888ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_9 BETWEEN 2000 AND 8000 GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 778ms
- **Min Duration:** 775ms
- **Max Duration:** 780ms
- **P95 Duration:** 780ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_9 BETWEEN 2000 AND 8000 GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 799ms
- **Min Duration:** 783ms
- **Max Duration:** 822ms
- **P95 Duration:** 819ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_9 BETWEEN 2000 AND 8000 GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 734ms
- **Min Duration:** 634ms
- **Max Duration:** 783ms
- **P95 Duration:** 783ms
- **Runs:** 3

### row_54 = 'tag1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_54 = 'tag1'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 775ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_54 = 'tag1' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 624ms
- **Min Duration:** 621ms
- **Max Duration:** 625ms
- **P95 Duration:** 625ms
- **Runs:** 3

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_54 = 'tag1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 621ms
- **Min Duration:** 619ms
- **Max Duration:** 621ms
- **P95 Duration:** 621ms
- **Runs:** 3

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_54 = 'tag1' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 622ms
- **Min Duration:** 621ms
- **Max Duration:** 622ms
- **P95 Duration:** 622ms
- **Runs:** 3

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_54 = 'tag1' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 621ms
- **Min Duration:** 619ms
- **Max Duration:** 622ms
- **P95 Duration:** 622ms
- **Runs:** 3

### row_54 = 'tag1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_54 = 'tag1' GROUP BY row_28`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 623ms
- **Min Duration:** 621ms
- **Max Duration:** 624ms
- **P95 Duration:** 624ms
- **Runs:** 3

### row_54 = 'tag1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_54 = 'tag1' GROUP BY row_48`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 621ms
- **Min Duration:** 618ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_54 = 'tag1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_54 = 'tag1' GROUP BY row_54`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 621ms
- **Min Duration:** 620ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_29 IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_29 IS NOT NULL`
- **Count/Rows:** 10,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 740ms
- **Min Duration:** 656ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_29 IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 733ms
- **Min Duration:** 627ms
- **Max Duration:** 790ms
- **P95 Duration:** 790ms
- **Runs:** 3

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_29 IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 754ms
- **Min Duration:** 727ms
- **Max Duration:** 797ms
- **P95 Duration:** 791ms
- **Runs:** 3

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_29 IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 731ms
- **Min Duration:** 629ms
- **Max Duration:** 787ms
- **P95 Duration:** 786ms
- **Runs:** 3

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_10_000_000 WHERE row_29 IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 925ms
- **Min Duration:** 908ms
- **Max Duration:** 953ms
- **P95 Duration:** 949ms
- **Runs:** 3

### row_29 IS NOT NULL - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_29 IS NOT NULL GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 782ms
- **Min Duration:** 778ms
- **Max Duration:** 786ms
- **P95 Duration:** 786ms
- **Runs:** 3

### row_29 IS NOT NULL - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_29 IS NOT NULL GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 739ms
- **Min Duration:** 639ms
- **Max Duration:** 793ms
- **P95 Duration:** 792ms
- **Runs:** 3

### row_29 IS NOT NULL - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_10_000_000 WHERE row_29 IS NOT NULL GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 687ms
- **Min Duration:** 625ms
- **Max Duration:** 797ms
- **P95 Duration:** 782ms
- **Runs:** 3

