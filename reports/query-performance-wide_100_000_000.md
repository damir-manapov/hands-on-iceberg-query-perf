# Query Performance Report

**Table:** iceberg.lab.wide_100_000_000  
**Generated:** 2025-10-10T19:51:06.311Z  
**Total Rows:** 100,000,000  
**Table Size:** 29.0 GB

## Summary

- **Total Queries:** 240
- **Average Duration:** 1_315ms
- **Fastest Query:** 616ms
- **Slowest Query:** 4_866ms
- **95th Percentile:** 3_727ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
| no filters | COUNT | - | - | - | 100,000,000 | 776 | 772 | 779 | 779 | 3 |
| no filters | PAGINATION | first page | No | - | 100 | 776 | 773 | 778 | 778 | 3 |
| no filters | PAGINATION | first page | Yes | - | 100 | 2_306 | 2_194 | 2_515 | 2_485 | 3 |
| no filters | PAGINATION | 100th page | No | - | 100 | 775 | 772 | 776 | 776 | 3 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 3_574 | 3_531 | 3_623 | 3_618 | 3 |
| no filters | AGGREGATION | - | - | row_28 | 5 | 1_109 | 1_082 | 1_135 | 1_133 | 3 |
| no filters | AGGREGATION | - | - | row_48 | 7 | 1_111 | 1_097 | 1_122 | 1_122 | 3 |
| no filters | AGGREGATION | - | - | row_54 | 7 | 1_141 | 1_102 | 1_164 | 1_164 | 3 |
| row_9 > 5000 | COUNT | - | - | - | 52,774,709 | 1_234 | 1_196 | 1_253 | 1_253 | 3 |
| row_9 > 5000 | PAGINATION | first page | No | - | 100 | 769 | 739 | 784 | 784 | 3 |
| row_9 > 5000 | PAGINATION | first page | Yes | - | 100 | 2_226 | 2_140 | 2_352 | 2_336 | 3 |
| row_9 > 5000 | PAGINATION | 100th page | No | - | 100 | 725 | 670 | 784 | 778 | 3 |
| row_9 > 5000 | PAGINATION | 100th page | Yes | - | 100 | 3_726 | 3_631 | 3_788 | 3_786 | 3 |
| row_9 > 5000 | AGGREGATION | - | - | row_28 | 5 | 1_566 | 1_545 | 1_603 | 1_598 | 3 |
| row_9 > 5000 | AGGREGATION | - | - | row_48 | 7 | 1_580 | 1_569 | 1_600 | 1_597 | 3 |
| row_9 > 5000 | AGGREGATION | - | - | row_54 | 7 | 1_594 | 1_572 | 1_624 | 1_621 | 3 |
| row_28 = 'value1' | COUNT | - | - | - | 0 | 776 | 772 | 778 | 778 | 3 |
| row_28 = 'value1' | PAGINATION | first page | No | - | 0 | 623 | 620 | 624 | 624 | 3 |
| row_28 = 'value1' | PAGINATION | first page | Yes | - | 0 | 621 | 619 | 621 | 621 | 3 |
| row_28 = 'value1' | PAGINATION | 100th page | No | - | 0 | 621 | 620 | 622 | 622 | 3 |
| row_28 = 'value1' | PAGINATION | 100th page | Yes | - | 0 | 621 | 621 | 621 | 621 | 3 |
| row_28 = 'value1' | AGGREGATION | - | - | row_28 | 0 | 622 | 619 | 625 | 625 | 3 |
| row_28 = 'value1' | AGGREGATION | - | - | row_48 | 0 | 622 | 621 | 623 | 623 | 3 |
| row_28 = 'value1' | AGGREGATION | - | - | row_54 | 0 | 619 | 616 | 621 | 621 | 3 |
| row_48 = 'enum1' | COUNT | - | - | - | 0 | 843 | 838 | 850 | 849 | 3 |
| row_48 = 'enum1' | PAGINATION | first page | No | - | 0 | 840 | 816 | 863 | 861 | 3 |
| row_48 = 'enum1' | PAGINATION | first page | Yes | - | 0 | 841 | 826 | 867 | 864 | 3 |
| row_48 = 'enum1' | PAGINATION | 100th page | No | - | 0 | 844 | 832 | 851 | 851 | 3 |
| row_48 = 'enum1' | PAGINATION | 100th page | Yes | - | 0 | 841 | 826 | 861 | 859 | 3 |
| row_48 = 'enum1' | AGGREGATION | - | - | row_28 | 0 | 840 | 811 | 872 | 869 | 3 |
| row_48 = 'enum1' | AGGREGATION | - | - | row_48 | 0 | 831 | 800 | 868 | 864 | 3 |
| row_48 = 'enum1' | AGGREGATION | - | - | row_54 | 0 | 879 | 855 | 917 | 912 | 3 |
| row_10 > 2000 | COUNT | - | - | - | 32,315,005 | 1_194 | 1_186 | 1_205 | 1_204 | 3 |
| row_10 > 2000 | PAGINATION | first page | No | - | 100 | 793 | 787 | 800 | 800 | 3 |
| row_10 > 2000 | PAGINATION | first page | Yes | - | 100 | 2_234 | 2_226 | 2_239 | 2_239 | 3 |
| row_10 > 2000 | PAGINATION | 100th page | No | - | 100 | 809 | 783 | 849 | 844 | 3 |
| row_10 > 2000 | PAGINATION | 100th page | Yes | - | 100 | 4_218 | 3_795 | 4_500 | 4_486 | 3 |
| row_10 > 2000 | AGGREGATION | - | - | row_28 | 5 | 1_571 | 1_526 | 1_627 | 1_621 | 3 |
| row_10 > 2000 | AGGREGATION | - | - | row_48 | 7 | 1_603 | 1_600 | 1_605 | 1_605 | 3 |
| row_10 > 2000 | AGGREGATION | - | - | row_54 | 7 | 1_572 | 1_537 | 1_605 | 1_602 | 3 |
| row_1 >= 2024-06-01 | COUNT | - | - | - | 58,465,692 | 1_372 | 1_315 | 1_459 | 1_448 | 3 |
| row_1 >= 2024-06-01 | PAGINATION | first page | No | - | 100 | 746 | 644 | 803 | 802 | 3 |
| row_1 >= 2024-06-01 | PAGINATION | first page | Yes | - | 100 | 2_653 | 2_444 | 2_958 | 2_918 | 3 |
| row_1 >= 2024-06-01 | PAGINATION | 100th page | No | - | 100 | 776 | 725 | 803 | 803 | 3 |
| row_1 >= 2024-06-01 | PAGINATION | 100th page | Yes | - | 100 | 4_224 | 4_013 | 4_556 | 4_511 | 3 |
| row_1 >= 2024-06-01 | AGGREGATION | - | - | row_28 | 5 | 1_702 | 1_646 | 1_782 | 1_772 | 3 |
| row_1 >= 2024-06-01 | AGGREGATION | - | - | row_48 | 7 | 1_631 | 1_612 | 1_648 | 1_647 | 3 |
| row_1 >= 2024-06-01 | AGGREGATION | - | - | row_54 | 7 | 1_648 | 1_637 | 1_658 | 1_657 | 3 |
| row_28='value1' AND row_48='enum1' | COUNT | - | - | - | 0 | 775 | 773 | 777 | 777 | 3 |
| row_28='value1' AND row_48='enum1' | PAGINATION | first page | No | - | 0 | 623 | 620 | 625 | 625 | 3 |
| row_28='value1' AND row_48='enum1' | PAGINATION | first page | Yes | - | 0 | 622 | 621 | 622 | 622 | 3 |
| row_28='value1' AND row_48='enum1' | PAGINATION | 100th page | No | - | 0 | 623 | 621 | 624 | 624 | 3 |
| row_28='value1' AND row_48='enum1' | PAGINATION | 100th page | Yes | - | 0 | 623 | 622 | 624 | 624 | 3 |
| row_28='value1' AND row_48='enum1' | AGGREGATION | - | - | row_28 | 0 | 623 | 619 | 628 | 628 | 3 |
| row_28='value1' AND row_48='enum1' | AGGREGATION | - | - | row_48 | 0 | 621 | 619 | 622 | 622 | 3 |
| row_28='value1' AND row_48='enum1' | AGGREGATION | - | - | row_54 | 0 | 618 | 617 | 619 | 619 | 3 |
| row_9 BETWEEN 2000 AND 8000 | COUNT | - | - | - | 63,341,035 | 1_351 | 1_230 | 1_522 | 1_500 | 3 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | first page | No | - | 100 | 631 | 624 | 634 | 634 | 3 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | first page | Yes | - | 100 | 2_357 | 2_283 | 2_453 | 2_442 | 3 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | 100th page | No | - | 100 | 711 | 640 | 841 | 822 | 3 |
| row_9 BETWEEN 2000 AND 8000 | PAGINATION | 100th page | Yes | - | 100 | 3_714 | 3_678 | 3_737 | 3_736 | 3 |
| row_9 BETWEEN 2000 AND 8000 | AGGREGATION | - | - | row_28 | 5 | 1_719 | 1_629 | 1_789 | 1_784 | 3 |
| row_9 BETWEEN 2000 AND 8000 | AGGREGATION | - | - | row_48 | 7 | 1_550 | 1_546 | 1_555 | 1_555 | 3 |
| row_9 BETWEEN 2000 AND 8000 | AGGREGATION | - | - | row_54 | 7 | 1_624 | 1_542 | 1_744 | 1_729 | 3 |
| row_54 = 'tag1' | COUNT | - | - | - | 0 | 776 | 774 | 777 | 777 | 3 |
| row_54 = 'tag1' | PAGINATION | first page | No | - | 0 | 622 | 619 | 624 | 624 | 3 |
| row_54 = 'tag1' | PAGINATION | first page | Yes | - | 0 | 623 | 622 | 624 | 624 | 3 |
| row_54 = 'tag1' | PAGINATION | 100th page | No | - | 0 | 623 | 621 | 623 | 623 | 3 |
| row_54 = 'tag1' | PAGINATION | 100th page | Yes | - | 0 | 620 | 617 | 621 | 621 | 3 |
| row_54 = 'tag1' | AGGREGATION | - | - | row_28 | 0 | 622 | 621 | 623 | 623 | 3 |
| row_54 = 'tag1' | AGGREGATION | - | - | row_48 | 0 | 622 | 620 | 622 | 622 | 3 |
| row_54 = 'tag1' | AGGREGATION | - | - | row_54 | 0 | 621 | 620 | 623 | 623 | 3 |
| row_29 IS NOT NULL | COUNT | - | - | - | 100,000,000 | 1_563 | 1_469 | 1_698 | 1_681 | 3 |
| row_29 IS NOT NULL | PAGINATION | first page | No | - | 100 | 690 | 634 | 783 | 770 | 3 |
| row_29 IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 2_770 | 2_737 | 2_811 | 2_806 | 3 |
| row_29 IS NOT NULL | PAGINATION | 100th page | No | - | 100 | 742 | 643 | 793 | 793 | 3 |
| row_29 IS NOT NULL | PAGINATION | 100th page | Yes | - | 100 | 4_507 | 4_324 | 4_866 | 4_813 | 3 |
| row_29 IS NOT NULL | AGGREGATION | - | - | row_28 | 5 | 1_737 | 1_730 | 1_747 | 1_746 | 3 |
| row_29 IS NOT NULL | AGGREGATION | - | - | row_48 | 7 | 1_804 | 1_794 | 1_814 | 1_813 | 3 |
| row_29 IS NOT NULL | AGGREGATION | - | - | row_54 | 7 | 1_815 | 1_788 | 1_838 | 1_837 | 3 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 `
- **Count/Rows:** 100,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 772ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 773ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_306ms
- **Min Duration:** 2_194ms
- **Max Duration:** 2_515ms
- **P95 Duration:** 2_485ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 775ms
- **Min Duration:** 772ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 3_574ms
- **Min Duration:** 3_531ms
- **Max Duration:** 3_623ms
- **P95 Duration:** 3_618ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000  GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 1_109ms
- **Min Duration:** 1_082ms
- **Max Duration:** 1_135ms
- **P95 Duration:** 1_133ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000  GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 1_111ms
- **Min Duration:** 1_097ms
- **Max Duration:** 1_122ms
- **P95 Duration:** 1_122ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000  GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 1_141ms
- **Min Duration:** 1_102ms
- **Max Duration:** 1_164ms
- **P95 Duration:** 1_164ms
- **Runs:** 3

### row_9 > 5000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000`
- **Count/Rows:** 52,774,709
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_234ms
- **Min Duration:** 1_196ms
- **Max Duration:** 1_253ms
- **P95 Duration:** 1_253ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 769ms
- **Min Duration:** 739ms
- **Max Duration:** 784ms
- **P95 Duration:** 784ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_226ms
- **Min Duration:** 2_140ms
- **Max Duration:** 2_352ms
- **P95 Duration:** 2_336ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 725ms
- **Min Duration:** 670ms
- **Max Duration:** 784ms
- **P95 Duration:** 778ms
- **Runs:** 3

### row_9 > 5000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 3_726ms
- **Min Duration:** 3_631ms
- **Max Duration:** 3_788ms
- **P95 Duration:** 3_786ms
- **Runs:** 3

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 1_566ms
- **Min Duration:** 1_545ms
- **Max Duration:** 1_603ms
- **P95 Duration:** 1_598ms
- **Runs:** 3

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 1_580ms
- **Min Duration:** 1_569ms
- **Max Duration:** 1_600ms
- **P95 Duration:** 1_597ms
- **Runs:** 3

### row_9 > 5000 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 > 5000 GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 1_594ms
- **Min Duration:** 1_572ms
- **Max Duration:** 1_624ms
- **P95 Duration:** 1_621ms
- **Runs:** 3

### row_28 = 'value1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 772ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 623ms
- **Min Duration:** 620ms
- **Max Duration:** 624ms
- **P95 Duration:** 624ms
- **Runs:** 3

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 621ms
- **Min Duration:** 619ms
- **Max Duration:** 621ms
- **P95 Duration:** 621ms
- **Runs:** 3

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 621ms
- **Min Duration:** 620ms
- **Max Duration:** 622ms
- **P95 Duration:** 622ms
- **Runs:** 3

### row_28 = 'value1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 621ms
- **Min Duration:** 621ms
- **Max Duration:** 621ms
- **P95 Duration:** 621ms
- **Runs:** 3

### row_28 = 'value1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' GROUP BY row_28`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 622ms
- **Min Duration:** 619ms
- **Max Duration:** 625ms
- **P95 Duration:** 625ms
- **Runs:** 3

### row_28 = 'value1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' GROUP BY row_48`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 622ms
- **Min Duration:** 621ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_28 = 'value1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' GROUP BY row_54`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 619ms
- **Min Duration:** 616ms
- **Max Duration:** 621ms
- **P95 Duration:** 621ms
- **Runs:** 3

### row_48 = 'enum1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 843ms
- **Min Duration:** 838ms
- **Max Duration:** 850ms
- **P95 Duration:** 849ms
- **Runs:** 3

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 840ms
- **Min Duration:** 816ms
- **Max Duration:** 863ms
- **P95 Duration:** 861ms
- **Runs:** 3

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 841ms
- **Min Duration:** 826ms
- **Max Duration:** 867ms
- **P95 Duration:** 864ms
- **Runs:** 3

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 844ms
- **Min Duration:** 832ms
- **Max Duration:** 851ms
- **P95 Duration:** 851ms
- **Runs:** 3

### row_48 = 'enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 841ms
- **Min Duration:** 826ms
- **Max Duration:** 861ms
- **P95 Duration:** 859ms
- **Runs:** 3

### row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' GROUP BY row_28`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 840ms
- **Min Duration:** 811ms
- **Max Duration:** 872ms
- **P95 Duration:** 869ms
- **Runs:** 3

### row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' GROUP BY row_48`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 831ms
- **Min Duration:** 800ms
- **Max Duration:** 868ms
- **P95 Duration:** 864ms
- **Runs:** 3

### row_48 = 'enum1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_48 = 'enum1' GROUP BY row_54`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 879ms
- **Min Duration:** 855ms
- **Max Duration:** 917ms
- **P95 Duration:** 912ms
- **Runs:** 3

### row_10 > 2000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000`
- **Count/Rows:** 32,315,005
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_194ms
- **Min Duration:** 1_186ms
- **Max Duration:** 1_205ms
- **P95 Duration:** 1_204ms
- **Runs:** 3

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 793ms
- **Min Duration:** 787ms
- **Max Duration:** 800ms
- **P95 Duration:** 800ms
- **Runs:** 3

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_234ms
- **Min Duration:** 2_226ms
- **Max Duration:** 2_239ms
- **P95 Duration:** 2_239ms
- **Runs:** 3

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 809ms
- **Min Duration:** 783ms
- **Max Duration:** 849ms
- **P95 Duration:** 844ms
- **Runs:** 3

### row_10 > 2000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 4_218ms
- **Min Duration:** 3_795ms
- **Max Duration:** 4_500ms
- **P95 Duration:** 4_486ms
- **Runs:** 3

### row_10 > 2000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 1_571ms
- **Min Duration:** 1_526ms
- **Max Duration:** 1_627ms
- **P95 Duration:** 1_621ms
- **Runs:** 3

### row_10 > 2000 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 1_603ms
- **Min Duration:** 1_600ms
- **Max Duration:** 1_605ms
- **P95 Duration:** 1_605ms
- **Runs:** 3

### row_10 > 2000 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_10 > 2000 GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 1_572ms
- **Min Duration:** 1_537ms
- **Max Duration:** 1_605ms
- **P95 Duration:** 1_602ms
- **Runs:** 3

### row_1 >= 2024-06-01 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00'`
- **Count/Rows:** 58,465,692
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_372ms
- **Min Duration:** 1_315ms
- **Max Duration:** 1_459ms
- **P95 Duration:** 1_448ms
- **Runs:** 3

### row_1 >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 746ms
- **Min Duration:** 644ms
- **Max Duration:** 803ms
- **P95 Duration:** 802ms
- **Runs:** 3

### row_1 >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_653ms
- **Min Duration:** 2_444ms
- **Max Duration:** 2_958ms
- **P95 Duration:** 2_918ms
- **Runs:** 3

### row_1 >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 725ms
- **Max Duration:** 803ms
- **P95 Duration:** 803ms
- **Runs:** 3

### row_1 >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 4_224ms
- **Min Duration:** 4_013ms
- **Max Duration:** 4_556ms
- **P95 Duration:** 4_511ms
- **Runs:** 3

### row_1 >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 1_702ms
- **Min Duration:** 1_646ms
- **Max Duration:** 1_782ms
- **P95 Duration:** 1_772ms
- **Runs:** 3

### row_1 >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 1_631ms
- **Min Duration:** 1_612ms
- **Max Duration:** 1_648ms
- **P95 Duration:** 1_647ms
- **Runs:** 3

### row_1 >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_1 >= TIMESTAMP '2024-06-01 00:00:00' GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 1_648ms
- **Min Duration:** 1_637ms
- **Max Duration:** 1_658ms
- **P95 Duration:** 1_657ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 775ms
- **Min Duration:** 773ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 623ms
- **Min Duration:** 620ms
- **Max Duration:** 625ms
- **P95 Duration:** 625ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 622ms
- **Min Duration:** 621ms
- **Max Duration:** 622ms
- **P95 Duration:** 622ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 623ms
- **Min Duration:** 621ms
- **Max Duration:** 624ms
- **P95 Duration:** 624ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 623ms
- **Min Duration:** 622ms
- **Max Duration:** 624ms
- **P95 Duration:** 624ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' GROUP BY row_28`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 623ms
- **Min Duration:** 619ms
- **Max Duration:** 628ms
- **P95 Duration:** 628ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' GROUP BY row_48`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 621ms
- **Min Duration:** 619ms
- **Max Duration:** 622ms
- **P95 Duration:** 622ms
- **Runs:** 3

### row_28='value1' AND row_48='enum1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_28 = 'value1' AND row_48 = 'enum1' GROUP BY row_54`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 618ms
- **Min Duration:** 617ms
- **Max Duration:** 619ms
- **P95 Duration:** 619ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000`
- **Count/Rows:** 63,341,035
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_351ms
- **Min Duration:** 1_230ms
- **Max Duration:** 1_522ms
- **P95 Duration:** 1_500ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 631ms
- **Min Duration:** 624ms
- **Max Duration:** 634ms
- **P95 Duration:** 634ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_357ms
- **Min Duration:** 2_283ms
- **Max Duration:** 2_453ms
- **P95 Duration:** 2_442ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 640ms
- **Max Duration:** 841ms
- **P95 Duration:** 822ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 3_714ms
- **Min Duration:** 3_678ms
- **Max Duration:** 3_737ms
- **P95 Duration:** 3_736ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 1_719ms
- **Min Duration:** 1_629ms
- **Max Duration:** 1_789ms
- **P95 Duration:** 1_784ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 1_550ms
- **Min Duration:** 1_546ms
- **Max Duration:** 1_555ms
- **P95 Duration:** 1_555ms
- **Runs:** 3

### row_9 BETWEEN 2000 AND 8000 - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_9 BETWEEN 2000 AND 8000 GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 1_624ms
- **Min Duration:** 1_542ms
- **Max Duration:** 1_744ms
- **P95 Duration:** 1_729ms
- **Runs:** 3

### row_54 = 'tag1' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1'`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 776ms
- **Min Duration:** 774ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1' LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 622ms
- **Min Duration:** 619ms
- **Max Duration:** 624ms
- **P95 Duration:** 624ms
- **Runs:** 3

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1' ORDER BY id LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 623ms
- **Min Duration:** 622ms
- **Max Duration:** 624ms
- **P95 Duration:** 624ms
- **Runs:** 3

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 623ms
- **Min Duration:** 621ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_54 = 'tag1' - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 0
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 620ms
- **Min Duration:** 617ms
- **Max Duration:** 621ms
- **P95 Duration:** 621ms
- **Runs:** 3

### row_54 = 'tag1' - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1' GROUP BY row_28`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 622ms
- **Min Duration:** 621ms
- **Max Duration:** 623ms
- **P95 Duration:** 623ms
- **Runs:** 3

### row_54 = 'tag1' - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1' GROUP BY row_48`
- **Count/Rows:** 0
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 622ms
- **Min Duration:** 620ms
- **Max Duration:** 622ms
- **P95 Duration:** 622ms
- **Runs:** 3

### row_54 = 'tag1' - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_54 = 'tag1' GROUP BY row_54`
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
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL`
- **Count/Rows:** 100,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_563ms
- **Min Duration:** 1_469ms
- **Max Duration:** 1_698ms
- **P95 Duration:** 1_681ms
- **Runs:** 3

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 690ms
- **Min Duration:** 634ms
- **Max Duration:** 783ms
- **P95 Duration:** 770ms
- **Runs:** 3

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_770ms
- **Min Duration:** 2_737ms
- **Max Duration:** 2_811ms
- **P95 Duration:** 2_806ms
- **Runs:** 3

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 742ms
- **Min Duration:** 643ms
- **Max Duration:** 793ms
- **P95 Duration:** 793ms
- **Runs:** 3

### row_29 IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, row_28, row_48, row_9 FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 4_507ms
- **Min Duration:** 4_324ms
- **Max Duration:** 4_866ms
- **P95 Duration:** 4_813ms
- **Runs:** 3

### row_29 IS NOT NULL - AGGREGATION
- **SQL:** `SELECT row_28, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL GROUP BY row_28`
- **Count/Rows:** 5
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_28
- **Average Duration:** 1_737ms
- **Min Duration:** 1_730ms
- **Max Duration:** 1_747ms
- **P95 Duration:** 1_746ms
- **Runs:** 3

### row_29 IS NOT NULL - AGGREGATION
- **SQL:** `SELECT row_48, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL GROUP BY row_48`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_48
- **Average Duration:** 1_804ms
- **Min Duration:** 1_794ms
- **Max Duration:** 1_814ms
- **P95 Duration:** 1_813ms
- **Runs:** 3

### row_29 IS NOT NULL - AGGREGATION
- **SQL:** `SELECT row_54, COUNT(*) as count FROM iceberg.lab.wide_100_000_000 WHERE row_29 IS NOT NULL GROUP BY row_54`
- **Count/Rows:** 7
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** row_54
- **Average Duration:** 1_815ms
- **Min Duration:** 1_788ms
- **Max Duration:** 1_838ms
- **P95 Duration:** 1_837ms
- **Runs:** 3

