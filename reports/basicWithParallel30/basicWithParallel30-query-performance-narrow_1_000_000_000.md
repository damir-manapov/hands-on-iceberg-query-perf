# Query Performance Report

**Table:** iceberg.lab.narrow_1_000_000_000  
**Generated:** 2025-10-14T01:29:16.849Z  
**Total Rows:** 1,000,000,000  
**Table Size:** 22.7 GB  
**Trino Configuration:** Single-node Trino

## Summary

- **Total Queries:** 30
- **Iterations:** 3
- **Concurrency Simulation Streams:** 30
- **Average Duration:** 85_487ms
- **Fastest Query:** 4_649ms
- **Slowest Query:** 192_574ms
- **95th Percentile:** 159_393ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|
| no filters | COUNT | - | - | - | 1,000,000,000 | 118_442 | 111_473 | 127_186 | 126_134 |
| no filters | PAGINATION | first page | No | - | 100 | 7_965 | 5_649 | 9_244 | 9_220 |
| no filters | PAGINATION | first page | Yes | - | 100 | 120_448 | 118_492 | 121_814 | 121_737 |
| no filters | PAGINATION | 100th page | No | - | 100 | 13_042 | 11_273 | 16_521 | 16_002 |
| no filters | PAGINATION | 100th page | Yes | - | 100 | 123_226 | 111_766 | 130_712 | 130_361 |
| no filters | AGGREGATION | - | - | status | 4 | 96_875 | 69_018 | 115_276 | 114_382 |
| status = 'paid' | COUNT | - | - | - | 249,973,584 | 95_128 | 89_077 | 106_620 | 104_927 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 4_649 | 4_198 | 4_922 | 4_913 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 122_972 | 122_361 | 123_758 | 123_662 |
| status = 'paid' | PAGINATION | 100th page | No | - | 100 | 11_988 | 9_698 | 13_990 | 13_819 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 100 | 116_005 | 112_983 | 121_702 | 120_865 |
| status = 'paid' | AGGREGATION | - | - | status | 1 | 110_438 | 102_729 | 122_947 | 121_217 |
| country = 'US' | COUNT | - | - | - | 195,984,325 | 116_513 | 107_276 | 125_520 | 124_643 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 8_381 | 7_091 | 10_591 | 10_278 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 117_894 | 112_037 | 125_829 | 124_828 |
| country = 'US' | PAGINATION | 100th page | No | - | 100 | 16_294 | 11_958 | 18_794 | 18_728 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 100 | 131_840 | 130_248 | 133_930 | 133_672 |
| country = 'US' | AGGREGATION | - | - | status | 4 | 102_133 | 90_315 | 115_274 | 113_828 |
| age > 30 | COUNT | - | - | - | 763,284,503 | 100_271 | 97_494 | 105_352 | 104_614 |
| age > 30 | PAGINATION | first page | No | - | 100 | 7_932 | 7_710 | 8_190 | 8_161 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 123_653 | 112_639 | 129_204 | 129_196 |
| age > 30 | PAGINATION | 100th page | No | - | 100 | 16_260 | 13_412 | 18_100 | 18_017 |
| age > 30 | PAGINATION | 100th page | Yes | - | 100 | 126_156 | 120_393 | 133_681 | 132_753 |
| age > 30 | AGGREGATION | - | - | status | 4 | 126_640 | 117_402 | 137_795 | 136_488 |
| amount > 1000 | COUNT | - | - | - | 854,990,089 | 116_146 | 103_366 | 124_340 | 123_979 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 6_200 | 4_845 | 6_958 | 6_942 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 181_936 | 160_592 | 196_969 | 196_097 |
| amount > 1000 | PAGINATION | 100th page | No | - | 100 | 13_451 | 11_956 | 14_787 | 14_670 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 100 | 192_574 | 182_634 | 200_674 | 200_048 |
| amount > 1000 | AGGREGATION | - | - | status | 4 | 119_144 | 115_592 | 125_240 | 124_376 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 `
- **Count/Rows:** 1,000,000,000
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 118_442ms
- **Min Duration:** 111_473ms
- **Max Duration:** 127_186ms
- **P95 Duration:** 126_134ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 7_965ms
- **Min Duration:** 5_649ms
- **Max Duration:** 9_244ms
- **P95 Duration:** 9_220ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 120_448ms
- **Min Duration:** 118_492ms
- **Max Duration:** 121_814ms
- **P95 Duration:** 121_737ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 13_042ms
- **Min Duration:** 11_273ms
- **Max Duration:** 16_521ms
- **P95 Duration:** 16_002ms

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 123_226ms
- **Min Duration:** 111_766ms
- **Max Duration:** 130_712ms
- **P95 Duration:** 130_361ms

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 96_875ms
- **Min Duration:** 69_018ms
- **Max Duration:** 115_276ms
- **P95 Duration:** 114_382ms

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid'`
- **Count/Rows:** 249,973,584
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 95_128ms
- **Min Duration:** 89_077ms
- **Max Duration:** 106_620ms
- **P95 Duration:** 104_927ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 4_649ms
- **Min Duration:** 4_198ms
- **Max Duration:** 4_922ms
- **P95 Duration:** 4_913ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 122_972ms
- **Min Duration:** 122_361ms
- **Max Duration:** 123_758ms
- **P95 Duration:** 123_662ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 11_988ms
- **Min Duration:** 9_698ms
- **Max Duration:** 13_990ms
- **P95 Duration:** 13_819ms

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 116_005ms
- **Min Duration:** 112_983ms
- **Max Duration:** 121_702ms
- **P95 Duration:** 120_865ms

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' GROUP BY status`
- **Count/Rows:** 1
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 110_438ms
- **Min Duration:** 102_729ms
- **Max Duration:** 122_947ms
- **P95 Duration:** 121_217ms

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US'`
- **Count/Rows:** 195,984,325
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 116_513ms
- **Min Duration:** 107_276ms
- **Max Duration:** 125_520ms
- **P95 Duration:** 124_643ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 8_381ms
- **Min Duration:** 7_091ms
- **Max Duration:** 10_591ms
- **P95 Duration:** 10_278ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 117_894ms
- **Min Duration:** 112_037ms
- **Max Duration:** 125_829ms
- **P95 Duration:** 124_828ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 16_294ms
- **Min Duration:** 11_958ms
- **Max Duration:** 18_794ms
- **P95 Duration:** 18_728ms

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 131_840ms
- **Min Duration:** 130_248ms
- **Max Duration:** 133_930ms
- **P95 Duration:** 133_672ms

### country = 'US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 102_133ms
- **Min Duration:** 90_315ms
- **Max Duration:** 115_274ms
- **P95 Duration:** 113_828ms

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30`
- **Count/Rows:** 763,284,503
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 100_271ms
- **Min Duration:** 97_494ms
- **Max Duration:** 105_352ms
- **P95 Duration:** 104_614ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 7_932ms
- **Min Duration:** 7_710ms
- **Max Duration:** 8_190ms
- **P95 Duration:** 8_161ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 123_653ms
- **Min Duration:** 112_639ms
- **Max Duration:** 129_204ms
- **P95 Duration:** 129_196ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 16_260ms
- **Min Duration:** 13_412ms
- **Max Duration:** 18_100ms
- **P95 Duration:** 18_017ms

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 126_156ms
- **Min Duration:** 120_393ms
- **Max Duration:** 133_681ms
- **P95 Duration:** 132_753ms

### age > 30 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 126_640ms
- **Min Duration:** 117_402ms
- **Max Duration:** 137_795ms
- **P95 Duration:** 136_488ms

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000`
- **Count/Rows:** 854,990,089
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** -
- **Average Duration:** 116_146ms
- **Min Duration:** 103_366ms
- **Max Duration:** 124_340ms
- **P95 Duration:** 123_979ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 6_200ms
- **Min Duration:** 4_845ms
- **Max Duration:** 6_958ms
- **P95 Duration:** 6_942ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** first page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 181_936ms
- **Min Duration:** 160_592ms
- **Max Duration:** 196_969ms
- **P95 Duration:** 196_097ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** No
- **Aggregation:** -
- **Average Duration:** 13_451ms
- **Min Duration:** 11_956ms
- **Max Duration:** 14_787ms
- **P95 Duration:** 14_670ms

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 ORDER BY id OFFSET 9900 LIMIT 100`
- **Count/Rows:** 100
- **Pagination Type:** 100th page
- **Sorted:** Yes
- **Aggregation:** -
- **Average Duration:** 192_574ms
- **Min Duration:** 182_634ms
- **Max Duration:** 200_674ms
- **P95 Duration:** 200_048ms

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 GROUP BY status`
- **Count/Rows:** 4
- **Pagination Type:** -
- **Sorted:** -
- **Aggregation:** status
- **Average Duration:** 119_144ms
- **Min Duration:** 115_592ms
- **Max Duration:** 125_240ms
- **P95 Duration:** 124_376ms

