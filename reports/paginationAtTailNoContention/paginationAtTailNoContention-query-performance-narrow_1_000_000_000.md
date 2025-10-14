# Query Performance Report

**Table:** iceberg.lab.narrow_1_000_000_000  
**Generated:** 2025-10-13T09:02:01.653Z  
**Total Rows:** 1,000,000,000  
**Table Size:** 22.7 GB  
**Trino Configuration:** Single-node Trino

## Summary

- **Total Queries:** 60
- **Iterations:** 3
- **Concurrency Simulation Streams:** 0
- **Average Duration:** 1_549ms
- **Fastest Query:** 679ms
- **Slowest Query:** 5_885ms
- **95th Percentile:** 4_166ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 1,000,000,000 | 762 | 761 | 762 | 762 |
| no filters | PAGINATION | first page | No | - | 100 | 762 | 761 | 762 | 762 |
| no filters | PAGINATION | first page | Yes | - | 100 | 5_048 | 4_965 | 5_121 | 5_115 |
| no filters | PAGINATION | 100th page | No | - | 100 | 761 | 760 | 762 | 762 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 5_885 | 5_571 | 6_381 | 6_314 |
| status = 'paid' AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 63,585,242 | 713 | 613 | 763 | 763 |
| status = 'paid' AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 760 | 759 | 761 | 761 |
| status = 'paid' AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 1_302 | 1_294 | 1_307 | 1_307 |
| status = 'paid' AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 714 | 612 | 765 | 765 |
| status = 'paid' AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 1_464 | 1_446 | 1_476 | 1_476 |
| country = 'US' AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 49,856,753 | 764 | 761 | 765 | 765 |
| country = 'US' AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 760 | 758 | 761 | 761 |
| country = 'US' AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 1_257 | 1_250 | 1_261 | 1_261 |
| country = 'US' AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 714 | 611 | 767 | 767 |
| country = 'US' AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 1_420 | 1_410 | 1_427 | 1_427 |
| age > 30 AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 194,153,301 | 764 | 762 | 766 | 766 |
| age > 30 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 762 | 761 | 762 | 762 |
| age > 30 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 1_729 | 1_645 | 1_775 | 1_775 |
| age > 30 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 762 | 759 | 764 | 764 |
| age > 30 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 1_863 | 1_829 | 1_931 | 1_921 |
| created_at >= DATE '2024-10-01' | COUNT | - | - | - | 254,366,120 | 762 | 761 | 762 | 762 |
| created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 711 | 609 | 762 | 762 |
| created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 1_524 | 1_515 | 1_539 | 1_537 |
| created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 761 | 761 | 761 | 761 |
| created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 1_729 | 1_707 | 1_771 | 1_765 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 217,478,546 | 1_133 | 1_126 | 1_141 | 1_140 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 762 | 761 | 762 | 762 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 2_411 | 2_398 | 2_425 | 2_424 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 713 | 613 | 765 | 765 |
| amount > 1000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 2_705 | 2_589 | 2_864 | 2_844 |
| id > 50000000 AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 254,366,120 | 777 | 768 | 782 | 782 |
| id > 50000000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 711 | 610 | 762 | 762 |
| id > 50000000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 1_631 | 1_612 | 1_656 | 1_653 |
| id > 50000000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 764 | 760 | 770 | 770 |
| id > 50000000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 1_843 | 1_797 | 1_925 | 1_914 |
| id > 500000000 AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 254,366,120 | 768 | 764 | 770 | 770 |
| id > 500000000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 762 | 761 | 762 | 762 |
| id > 500000000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 1_766 | 1_765 | 1_766 | 1_766 |
| id > 500000000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 712 | 612 | 762 | 762 |
| id > 500000000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 1_928 | 1_921 | 1_931 | 1_931 |
| amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 217,478,546 | 1_551 | 1_533 | 1_580 | 1_576 |
| amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 762 | 761 | 762 | 762 |
| amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 2_606 | 2_434 | 2_748 | 2_737 |
| amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 768 | 761 | 774 | 774 |
| amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 2_768 | 2_625 | 2_903 | 2_891 |
| amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 217,478,546 | 1_671 | 1_604 | 1_764 | 1_752 |
| amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 713 | 611 | 764 | 764 |
| amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 2_569 | 2_440 | 2_695 | 2_683 |
| amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 712 | 612 | 763 | 763 |
| amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 2_798 | 2_620 | 2_925 | 2_918 |
| contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 96,581,820 | 3_232 | 3_198 | 3_279 | 3_273 |
| contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 711 | 610 | 762 | 762 |
| contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 4_154 | 3_833 | 4_327 | 4_325 |
| contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 762 | 761 | 763 | 763 |
| contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 4_394 | 4_101 | 4_568 | 4_563 |
| note IS NOT NULL AND created_at >= DATE '2024-10-01' | COUNT | - | - | - | 228,933,216 | 1_476 | 1_456 | 1_507 | 1_503 |
| note IS NOT NULL AND created_at >= DATE '2024-10-01' | PAGINATION | first page | No | - | 100 | 710 | 609 | 760 | 760 |
| note IS NOT NULL AND created_at >= DATE '2024-10-01' | PAGINATION | first page | Yes | - | 100 | 2_873 | 2_689 | 3_021 | 3_010 |
| note IS NOT NULL AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | No | - | 100 | 679 | 616 | 760 | 750 |
| note IS NOT NULL AND created_at >= DATE '2024-10-01' | PAGINATION | 100th page | Yes | - | 100 | 3_172 | 3_113 | 3_224 | 3_220 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 `
- **Count/Rows:** 1,000,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_048ms
- **Min Duration:** 4_965ms
- **Max Duration:** 5_121ms
- **P95 Duration:** 5_115ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 760ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 5_885ms
- **Min Duration:** 5_571ms
- **Max Duration:** 6_381ms
- **P95 Duration:** 6_314ms

### status = 'paid' AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 63,585,242
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 713ms
- **Min Duration:** 613ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### status = 'paid' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 760ms
- **Min Duration:** 759ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### status = 'paid' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_302ms
- **Min Duration:** 1_294ms
- **Max Duration:** 1_307ms
- **P95 Duration:** 1_307ms

### status = 'paid' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 714ms
- **Min Duration:** 612ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### status = 'paid' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_464ms
- **Min Duration:** 1_446ms
- **Max Duration:** 1_476ms
- **P95 Duration:** 1_476ms

### country = 'US' AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 49,856,753
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 761ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### country = 'US' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 760ms
- **Min Duration:** 758ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### country = 'US' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_257ms
- **Min Duration:** 1_250ms
- **Max Duration:** 1_261ms
- **P95 Duration:** 1_261ms

### country = 'US' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 714ms
- **Min Duration:** 611ms
- **Max Duration:** 767ms
- **P95 Duration:** 767ms

### country = 'US' AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_420ms
- **Min Duration:** 1_410ms
- **Max Duration:** 1_427ms
- **P95 Duration:** 1_427ms

### age > 30 AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 194,153,301
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 762ms
- **Max Duration:** 766ms
- **P95 Duration:** 766ms

### age > 30 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### age > 30 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_729ms
- **Min Duration:** 1_645ms
- **Max Duration:** 1_775ms
- **P95 Duration:** 1_775ms

### age > 30 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 759ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### age > 30 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_863ms
- **Min Duration:** 1_829ms
- **Max Duration:** 1_931ms
- **P95 Duration:** 1_921ms

### created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-10-01'`
- **Count/Rows:** 254,366,120
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 609ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_524ms
- **Min Duration:** 1_515ms
- **Max Duration:** 1_539ms
- **P95 Duration:** 1_537ms

### created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 761ms
- **Min Duration:** 761ms
- **Max Duration:** 761ms
- **P95 Duration:** 761ms

### created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_729ms
- **Min Duration:** 1_707ms
- **Max Duration:** 1_771ms
- **P95 Duration:** 1_765ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 217,478,546
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_133ms
- **Min Duration:** 1_126ms
- **Max Duration:** 1_141ms
- **P95 Duration:** 1_140ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_411ms
- **Min Duration:** 2_398ms
- **Max Duration:** 2_425ms
- **P95 Duration:** 2_424ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 713ms
- **Min Duration:** 613ms
- **Max Duration:** 765ms
- **P95 Duration:** 765ms

### amount > 1000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_705ms
- **Min Duration:** 2_589ms
- **Max Duration:** 2_864ms
- **P95 Duration:** 2_844ms

### id > 50000000 AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000 AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 254,366,120
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 777ms
- **Min Duration:** 768ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms

### id > 50000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000 AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 610ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### id > 50000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000 AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_631ms
- **Min Duration:** 1_612ms
- **Max Duration:** 1_656ms
- **P95 Duration:** 1_653ms

### id > 50000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000 AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 764ms
- **Min Duration:** 760ms
- **Max Duration:** 770ms
- **P95 Duration:** 770ms

### id > 50000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 50000000 AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_843ms
- **Min Duration:** 1_797ms
- **Max Duration:** 1_925ms
- **P95 Duration:** 1_914ms

### id > 500000000 AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000 AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 254,366,120
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 768ms
- **Min Duration:** 764ms
- **Max Duration:** 770ms
- **P95 Duration:** 770ms

### id > 500000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000 AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### id > 500000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000 AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_766ms
- **Min Duration:** 1_765ms
- **Max Duration:** 1_766ms
- **P95 Duration:** 1_766ms

### id > 500000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000 AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 612ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### id > 500000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE id > 500000000 AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 1_928ms
- **Min Duration:** 1_921ms
- **Max Duration:** 1_931ms
- **P95 Duration:** 1_931ms

### amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 217,478,546
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_551ms
- **Min Duration:** 1_533ms
- **Max Duration:** 1_580ms
- **P95 Duration:** 1_576ms

### amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_606ms
- **Min Duration:** 2_434ms
- **Max Duration:** 2_748ms
- **P95 Duration:** 2_737ms

### amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 768ms
- **Min Duration:** 761ms
- **Max Duration:** 774ms
- **P95 Duration:** 774ms

### amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 50000000 AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_768ms
- **Min Duration:** 2_625ms
- **Max Duration:** 2_903ms
- **P95 Duration:** 2_891ms

### amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 217,478,546
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_671ms
- **Min Duration:** 1_604ms
- **Max Duration:** 1_764ms
- **P95 Duration:** 1_752ms

### amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 713ms
- **Min Duration:** 611ms
- **Max Duration:** 764ms
- **P95 Duration:** 764ms

### amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_569ms
- **Min Duration:** 2_440ms
- **Max Duration:** 2_695ms
- **P95 Duration:** 2_683ms

### amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 712ms
- **Min Duration:** 612ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 AND id > 500000000 AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_798ms
- **Min Duration:** 2_620ms
- **Max Duration:** 2_925ms
- **P95 Duration:** 2_918ms

### contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 96,581,820
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 3_232ms
- **Min Duration:** 3_198ms
- **Max Duration:** 3_279ms
- **P95 Duration:** 3_273ms

### contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 711ms
- **Min Duration:** 610ms
- **Max Duration:** 762ms
- **P95 Duration:** 762ms

### contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 4_154ms
- **Min Duration:** 3_833ms
- **Max Duration:** 4_327ms
- **P95 Duration:** 4_325ms

### contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 762ms
- **Min Duration:** 761ms
- **Max Duration:** 763ms
- **P95 Duration:** 763ms

### contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 4_394ms
- **Min Duration:** 4_101ms
- **Max Duration:** 4_568ms
- **P95 Duration:** 4_563ms

### note IS NOT NULL AND created_at >= DATE '2024-10-01' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL AND created_at >= DATE '2024-10-01'`
- **Count/Rows:** 228,933,216
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 1_476ms
- **Min Duration:** 1_456ms
- **Max Duration:** 1_507ms
- **P95 Duration:** 1_503ms

### note IS NOT NULL AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL AND created_at >= DATE '2024-10-01' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 710ms
- **Min Duration:** 609ms
- **Max Duration:** 760ms
- **P95 Duration:** 760ms

### note IS NOT NULL AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL AND created_at >= DATE '2024-10-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 2_873ms
- **Min Duration:** 2_689ms
- **Max Duration:** 3_021ms
- **P95 Duration:** 3_010ms

### note IS NOT NULL AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL AND created_at >= DATE '2024-10-01' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 679ms
- **Min Duration:** 616ms
- **Max Duration:** 760ms
- **P95 Duration:** 750ms

### note IS NOT NULL AND created_at >= DATE '2024-10-01' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL AND created_at >= DATE '2024-10-01' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 3_172ms
- **Min Duration:** 3_113ms
- **Max Duration:** 3_224ms
- **P95 Duration:** 3_220ms

