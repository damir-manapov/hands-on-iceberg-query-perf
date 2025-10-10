# Query Performance Report

**Table:** iceberg.lab.narrow_1_000_000_000  
**Generated:** 2025-10-10T09:01:16.612Z  
**Total Rows:** 991,000,000  
**Table Size:** 28.4 GB

## Summary

- **Total Queries:** 240
- **Average Duration:** 5029ms
- **Fastest Query:** 155ms
- **Slowest Query:** 28718ms
- **95th Percentile:** 21643ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
| no filters | COUNT | - | - | - | 991,000,000 | 775 | 774 | 777 | 777 | 3 |
| no filters | PAGINATION | first page | No | - | 100 | 777 | 775 | 778 | 778 | 3 |
| no filters | PAGINATION | first page | Yes | - | 100 | 8365 | 6972 | 9248 | 9211 | 3 |
| no filters | PAGINATION | 100th page | No | - | 0 | 159 | 158 | 159 | 159 | 3 |
| no filters | PAGINATION | 100th page | Yes | - | 0 | 158 | 155 | 159 | 159 | 3 |
| no filters | AGGREGATION | - | - | status GROUP BY | 4 | 1341 | 1306 | 1365 | 1364 | 3 |
| no filters | AGGREGATION | - | - | country GROUP BY | 6 | 2071 | 1933 | 2165 | 2160 | 3 |
| no filters | AGGREGATION | - | - | age GROUP BY | 62 | 5398 | 5389 | 5403 | 5403 | 3 |
| status = 'paid' | COUNT | - | - | - | 247,752,249 | 1052 | 1038 | 1078 | 1075 | 3 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 726 | 625 | 777 | 777 | 3 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 7234 | 6579 | 7748 | 7711 | 3 |
| status = 'paid' | PAGINATION | 100th page | No | - | 0 | 159 | 158 | 160 | 160 | 3 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 0 | 158 | 156 | 160 | 160 | 3 |
| status = 'paid' | AGGREGATION | - | - | status GROUP BY | 1 | 1198 | 1154 | 1238 | 1235 | 3 |
| status = 'paid' | AGGREGATION | - | - | country GROUP BY | 6 | 2271 | 2221 | 2353 | 2342 | 3 |
| status = 'paid' | AGGREGATION | - | - | age GROUP BY | 62 | 3616 | 3589 | 3629 | 3629 | 3 |
| country = 'US' | COUNT | - | - | - | 194,233,488 | 1554 | 1532 | 1575 | 1573 | 3 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 774 | 771 | 776 | 776 | 3 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 6962 | 6242 | 7489 | 7456 | 3 |
| country = 'US' | PAGINATION | 100th page | No | - | 0 | 160 | 159 | 160 | 160 | 3 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 0 | 158 | 158 | 158 | 158 | 3 |
| country = 'US' | AGGREGATION | - | - | status GROUP BY | 4 | 1994 | 1722 | 2197 | 2184 | 3 |
| country = 'US' | AGGREGATION | - | - | country GROUP BY | 1 | 1882 | 1783 | 1931 | 1931 | 3 |
| country = 'US' | AGGREGATION | - | - | age GROUP BY | 62 | 3814 | 3778 | 3857 | 3852 | 3 |
| age > 30 | COUNT | - | - | - | 756,406,627 | 2117 | 2092 | 2135 | 2134 | 3 |
| age > 30 | PAGINATION | first page | No | - | 100 | 779 | 775 | 781 | 781 | 3 |
| age > 30 | PAGINATION | first page | Yes | - | 100 | 9574 | 8887 | 10106 | 10069 | 3 |
| age > 30 | PAGINATION | 100th page | No | - | 0 | 159 | 158 | 160 | 160 | 3 |
| age > 30 | PAGINATION | 100th page | Yes | - | 0 | 158 | 157 | 159 | 159 | 3 |
| age > 30 | AGGREGATION | - | - | status GROUP BY | 4 | 3226 | 2776 | 3453 | 3453 | 3 |
| age > 30 | AGGREGATION | - | - | country GROUP BY | 6 | 3889 | 3846 | 3925 | 3923 | 3 |
| age > 30 | AGGREGATION | - | - | age GROUP BY | 48 | 5046 | 5003 | 5100 | 5094 | 3 |
| amount > 1000 | COUNT | - | - | - | 847,288,776 | 7334 | 7252 | 7459 | 7443 | 3 |
| amount > 1000 | PAGINATION | first page | No | - | 100 | 729 | 634 | 779 | 779 | 3 |
| amount > 1000 | PAGINATION | first page | Yes | - | 100 | 16896 | 16330 | 17192 | 17190 | 3 |
| amount > 1000 | PAGINATION | 100th page | No | - | 0 | 158 | 155 | 159 | 159 | 3 |
| amount > 1000 | PAGINATION | 100th page | Yes | - | 0 | 159 | 158 | 159 | 159 | 3 |
| amount > 1000 | AGGREGATION | - | - | status GROUP BY | 4 | 8575 | 8243 | 8760 | 8756 | 3 |
| amount > 1000 | AGGREGATION | - | - | country GROUP BY | 6 | 9282 | 9245 | 9346 | 9337 | 3 |
| amount > 1000 | AGGREGATION | - | - | age GROUP BY | 62 | 12408 | 12167 | 12701 | 12667 | 3 |
| date >= 2024-06-01 | COUNT | - | - | - | 579,393,927 | 6087 | 6024 | 6179 | 6167 | 3 |
| date >= 2024-06-01 | PAGINATION | first page | No | - | 100 | 784 | 773 | 793 | 793 | 3 |
| date >= 2024-06-01 | PAGINATION | first page | Yes | - | 100 | 14503 | 14121 | 14694 | 14694 | 3 |
| date >= 2024-06-01 | PAGINATION | 100th page | No | - | 0 | 159 | 158 | 160 | 160 | 3 |
| date >= 2024-06-01 | PAGINATION | 100th page | Yes | - | 0 | 159 | 158 | 159 | 159 | 3 |
| date >= 2024-06-01 | AGGREGATION | - | - | status GROUP BY | 4 | 7162 | 6563 | 7558 | 7539 | 3 |
| date >= 2024-06-01 | AGGREGATION | - | - | country GROUP BY | 6 | 7875 | 7843 | 7914 | 7910 | 3 |
| date >= 2024-06-01 | AGGREGATION | - | - | age GROUP BY | 62 | 10171 | 10051 | 10252 | 10248 | 3 |
| status='paid' AND country='US' | COUNT | - | - | - | 48,556,404 | 2036 | 1943 | 2172 | 2154 | 3 |
| status='paid' AND country='US' | PAGINATION | first page | No | - | 100 | 679 | 623 | 790 | 774 | 3 |
| status='paid' AND country='US' | PAGINATION | first page | Yes | - | 100 | 6351 | 5851 | 6603 | 6603 | 3 |
| status='paid' AND country='US' | PAGINATION | 100th page | No | - | 0 | 158 | 157 | 159 | 159 | 3 |
| status='paid' AND country='US' | PAGINATION | 100th page | Yes | - | 0 | 159 | 157 | 160 | 160 | 3 |
| status='paid' AND country='US' | AGGREGATION | - | - | status GROUP BY | 1 | 1876 | 1541 | 2112 | 2099 | 3 |
| status='paid' AND country='US' | AGGREGATION | - | - | country GROUP BY | 1 | 2174 | 2092 | 2320 | 2299 | 3 |
| status='paid' AND country='US' | AGGREGATION | - | - | age GROUP BY | 62 | 3664 | 3599 | 3737 | 3729 | 3 |
| age BETWEEN 25 AND 45 | COUNT | - | - | - | 330,919,230 | 2330 | 2306 | 2346 | 2346 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | No | - | 100 | 725 | 626 | 778 | 778 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | first page | Yes | - | 100 | 7840 | 7489 | 8067 | 8057 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | No | - | 0 | 159 | 158 | 159 | 159 | 3 |
| age BETWEEN 25 AND 45 | PAGINATION | 100th page | Yes | - | 0 | 158 | 157 | 159 | 159 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | status GROUP BY | 4 | 2983 | 2581 | 3277 | 3259 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | country GROUP BY | 6 | 3629 | 3593 | 3667 | 3663 | 3 |
| age BETWEEN 25 AND 45 | AGGREGATION | - | - | age GROUP BY | 21 | 3649 | 3615 | 3704 | 3697 | 3 |
| tags contains 'alpha' | COUNT | - | - | - | 376,241,913 | 21805 | 21233 | 22603 | 22501 | 3 |
| tags contains 'alpha' | PAGINATION | first page | No | - | 100 | 778 | 769 | 782 | 782 | 3 |
| tags contains 'alpha' | PAGINATION | first page | Yes | - | 100 | 28302 | 27620 | 28718 | 28703 | 3 |
| tags contains 'alpha' | PAGINATION | 100th page | No | - | 0 | 159 | 158 | 159 | 159 | 3 |
| tags contains 'alpha' | PAGINATION | 100th page | Yes | - | 0 | 159 | 158 | 160 | 160 | 3 |
| tags contains 'alpha' | AGGREGATION | - | - | status GROUP BY | 4 | 22207 | 21602 | 22607 | 22588 | 3 |
| tags contains 'alpha' | AGGREGATION | - | - | country GROUP BY | 6 | 22810 | 22676 | 23048 | 23014 | 3 |
| tags contains 'alpha' | AGGREGATION | - | - | age GROUP BY | 62 | 24381 | 24215 | 24584 | 24560 | 3 |
| note IS NOT NULL | COUNT | - | - | - | 891,886,739 | 8682 | 8551 | 8898 | 8868 | 3 |
| note IS NOT NULL | PAGINATION | first page | No | - | 100 | 777 | 773 | 779 | 779 | 3 |
| note IS NOT NULL | PAGINATION | first page | Yes | - | 100 | 18421 | 17874 | 18875 | 18839 | 3 |
| note IS NOT NULL | PAGINATION | 100th page | No | - | 0 | 158 | 157 | 158 | 158 | 3 |
| note IS NOT NULL | PAGINATION | 100th page | Yes | - | 0 | 158 | 158 | 158 | 158 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | status GROUP BY | 4 | 9887 | 9578 | 10042 | 10042 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | country GROUP BY | 6 | 10817 | 10642 | 11131 | 11086 | 3 |
| note IS NOT NULL | AGGREGATION | - | - | age GROUP BY | 62 | 14097 | 14011 | 14210 | 14196 | 3 |

## Query Details

### no filters - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 `
- **Count/Rows:** 991,000,000
- **Average Duration:** 775ms
- **Min Duration:** 774ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 8365ms
- **Min Duration:** 6972ms
- **Max Duration:** 9248ms
- **P95 Duration:** 9211ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### no filters - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000  ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 155ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000  GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 1341ms
- **Min Duration:** 1306ms
- **Max Duration:** 1365ms
- **P95 Duration:** 1364ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000  GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 2071ms
- **Min Duration:** 1933ms
- **Max Duration:** 2165ms
- **P95 Duration:** 2160ms
- **Runs:** 3

### no filters - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000  GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 5398ms
- **Min Duration:** 5389ms
- **Max Duration:** 5403ms
- **P95 Duration:** 5403ms
- **Runs:** 3

### status = 'paid' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid'`
- **Count/Rows:** 247,752,249
- **Average Duration:** 1052ms
- **Min Duration:** 1038ms
- **Max Duration:** 1078ms
- **P95 Duration:** 1075ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 726ms
- **Min Duration:** 625ms
- **Max Duration:** 777ms
- **P95 Duration:** 777ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 7234ms
- **Min Duration:** 6579ms
- **Max Duration:** 7748ms
- **P95 Duration:** 7711ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### status = 'paid' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 156ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' GROUP BY status`
- **Count/Rows:** 1
- **Average Duration:** 1198ms
- **Min Duration:** 1154ms
- **Max Duration:** 1238ms
- **P95 Duration:** 1235ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 2271ms
- **Min Duration:** 2221ms
- **Max Duration:** 2353ms
- **P95 Duration:** 2342ms
- **Runs:** 3

### status = 'paid' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 3616ms
- **Min Duration:** 3589ms
- **Max Duration:** 3629ms
- **P95 Duration:** 3629ms
- **Runs:** 3

### country = 'US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US'`
- **Count/Rows:** 194,233,488
- **Average Duration:** 1554ms
- **Min Duration:** 1532ms
- **Max Duration:** 1575ms
- **P95 Duration:** 1573ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 774ms
- **Min Duration:** 771ms
- **Max Duration:** 776ms
- **P95 Duration:** 776ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 6962ms
- **Min Duration:** 6242ms
- **Max Duration:** 7489ms
- **P95 Duration:** 7456ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 160ms
- **Min Duration:** 159ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### country = 'US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 158ms
- **Max Duration:** 158ms
- **P95 Duration:** 158ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 1994ms
- **Min Duration:** 1722ms
- **Max Duration:** 2197ms
- **P95 Duration:** 2184ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Average Duration:** 1882ms
- **Min Duration:** 1783ms
- **Max Duration:** 1931ms
- **P95 Duration:** 1931ms
- **Runs:** 3

### country = 'US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 3814ms
- **Min Duration:** 3778ms
- **Max Duration:** 3857ms
- **P95 Duration:** 3852ms
- **Runs:** 3

### age > 30 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30`
- **Count/Rows:** 756,406,627
- **Average Duration:** 2117ms
- **Min Duration:** 2092ms
- **Max Duration:** 2135ms
- **P95 Duration:** 2134ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 779ms
- **Min Duration:** 775ms
- **Max Duration:** 781ms
- **P95 Duration:** 781ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 9574ms
- **Min Duration:** 8887ms
- **Max Duration:** 10106ms
- **P95 Duration:** 10069ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### age > 30 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 157ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 3226ms
- **Min Duration:** 2776ms
- **Max Duration:** 3453ms
- **P95 Duration:** 3453ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 3889ms
- **Min Duration:** 3846ms
- **Max Duration:** 3925ms
- **P95 Duration:** 3923ms
- **Runs:** 3

### age > 30 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age > 30 GROUP BY age`
- **Count/Rows:** 48
- **Average Duration:** 5046ms
- **Min Duration:** 5003ms
- **Max Duration:** 5100ms
- **P95 Duration:** 5094ms
- **Runs:** 3

### amount > 1000 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000`
- **Count/Rows:** 847,288,776
- **Average Duration:** 7334ms
- **Min Duration:** 7252ms
- **Max Duration:** 7459ms
- **P95 Duration:** 7443ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 729ms
- **Min Duration:** 634ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 16896ms
- **Min Duration:** 16330ms
- **Max Duration:** 17192ms
- **P95 Duration:** 17190ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 155ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### amount > 1000 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 8575ms
- **Min Duration:** 8243ms
- **Max Duration:** 8760ms
- **P95 Duration:** 8756ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 9282ms
- **Min Duration:** 9245ms
- **Max Duration:** 9346ms
- **P95 Duration:** 9337ms
- **Runs:** 3

### amount > 1000 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE amount > 1000 GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 12408ms
- **Min Duration:** 12167ms
- **Max Duration:** 12701ms
- **P95 Duration:** 12667ms
- **Runs:** 3

### date >= 2024-06-01 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01'`
- **Count/Rows:** 579,393,927
- **Average Duration:** 6087ms
- **Min Duration:** 6024ms
- **Max Duration:** 6179ms
- **P95 Duration:** 6167ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 784ms
- **Min Duration:** 773ms
- **Max Duration:** 793ms
- **P95 Duration:** 793ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 14503ms
- **Min Duration:** 14121ms
- **Max Duration:** 14694ms
- **P95 Duration:** 14694ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### date >= 2024-06-01 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### date >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 7162ms
- **Min Duration:** 6563ms
- **Max Duration:** 7558ms
- **P95 Duration:** 7539ms
- **Runs:** 3

### date >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 7875ms
- **Min Duration:** 7843ms
- **Max Duration:** 7914ms
- **P95 Duration:** 7910ms
- **Runs:** 3

### date >= 2024-06-01 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE created_at >= DATE '2024-06-01' GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 10171ms
- **Min Duration:** 10051ms
- **Max Duration:** 10252ms
- **P95 Duration:** 10248ms
- **Runs:** 3

### status='paid' AND country='US' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND country = 'US'`
- **Count/Rows:** 48,556,404
- **Average Duration:** 2036ms
- **Min Duration:** 1943ms
- **Max Duration:** 2172ms
- **P95 Duration:** 2154ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND country = 'US' LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 679ms
- **Min Duration:** 623ms
- **Max Duration:** 790ms
- **P95 Duration:** 774ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 6351ms
- **Min Duration:** 5851ms
- **Max Duration:** 6603ms
- **P95 Duration:** 6603ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND country = 'US' LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 157ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### status='paid' AND country='US' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND country = 'US' ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 157ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### status='paid' AND country='US' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY status`
- **Count/Rows:** 1
- **Average Duration:** 1876ms
- **Min Duration:** 1541ms
- **Max Duration:** 2112ms
- **P95 Duration:** 2099ms
- **Runs:** 3

### status='paid' AND country='US' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY country`
- **Count/Rows:** 1
- **Average Duration:** 2174ms
- **Min Duration:** 2092ms
- **Max Duration:** 2320ms
- **P95 Duration:** 2299ms
- **Runs:** 3

### status='paid' AND country='US' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE status = 'paid' AND country = 'US' GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 3664ms
- **Min Duration:** 3599ms
- **Max Duration:** 3737ms
- **P95 Duration:** 3729ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age BETWEEN 25 AND 45`
- **Count/Rows:** 330,919,230
- **Average Duration:** 2330ms
- **Min Duration:** 2306ms
- **Max Duration:** 2346ms
- **P95 Duration:** 2346ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age BETWEEN 25 AND 45 LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 725ms
- **Min Duration:** 626ms
- **Max Duration:** 778ms
- **P95 Duration:** 778ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 7840ms
- **Min Duration:** 7489ms
- **Max Duration:** 8067ms
- **P95 Duration:** 8057ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age BETWEEN 25 AND 45 LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE age BETWEEN 25 AND 45 ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 157ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 2983ms
- **Min Duration:** 2581ms
- **Max Duration:** 3277ms
- **P95 Duration:** 3259ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 3629ms
- **Min Duration:** 3593ms
- **Max Duration:** 3667ms
- **P95 Duration:** 3663ms
- **Runs:** 3

### age BETWEEN 25 AND 45 - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE age BETWEEN 25 AND 45 GROUP BY age`
- **Count/Rows:** 21
- **Average Duration:** 3649ms
- **Min Duration:** 3615ms
- **Max Duration:** 3704ms
- **P95 Duration:** 3697ms
- **Runs:** 3

### tags contains 'alpha' - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha')`
- **Count/Rows:** 376,241,913
- **Average Duration:** 21805ms
- **Min Duration:** 21233ms
- **Max Duration:** 22603ms
- **P95 Duration:** 22501ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 778ms
- **Min Duration:** 769ms
- **Max Duration:** 782ms
- **P95 Duration:** 782ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 28302ms
- **Min Duration:** 27620ms
- **Max Duration:** 28718ms
- **P95 Duration:** 28703ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 159ms
- **P95 Duration:** 159ms
- **Runs:** 3

### tags contains 'alpha' - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 160ms
- **P95 Duration:** 160ms
- **Runs:** 3

### tags contains 'alpha' - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 22207ms
- **Min Duration:** 21602ms
- **Max Duration:** 22607ms
- **P95 Duration:** 22588ms
- **Runs:** 3

### tags contains 'alpha' - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 22810ms
- **Min Duration:** 22676ms
- **Max Duration:** 23048ms
- **P95 Duration:** 23014ms
- **Runs:** 3

### tags contains 'alpha' - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE contains(tags, 'alpha') GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 24381ms
- **Min Duration:** 24215ms
- **Max Duration:** 24584ms
- **P95 Duration:** 24560ms
- **Runs:** 3

### note IS NOT NULL - COUNT
- **SQL:** `SELECT COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL`
- **Count/Rows:** 891,886,739
- **Average Duration:** 8682ms
- **Min Duration:** 8551ms
- **Max Duration:** 8898ms
- **P95 Duration:** 8868ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 777ms
- **Min Duration:** 773ms
- **Max Duration:** 779ms
- **P95 Duration:** 779ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100`
- **Count/Rows:** 100
- **Average Duration:** 18421ms
- **Min Duration:** 17874ms
- **Max Duration:** 18875ms
- **P95 Duration:** 18839ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 157ms
- **Max Duration:** 158ms
- **P95 Duration:** 158ms
- **Runs:** 3

### note IS NOT NULL - PAGINATION
- **SQL:** `SELECT id, status, country, age FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL ORDER BY id LIMIT 100 OFFSET 9900`
- **Count/Rows:** 0
- **Average Duration:** 158ms
- **Min Duration:** 158ms
- **Max Duration:** 158ms
- **P95 Duration:** 158ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT status, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL GROUP BY status`
- **Count/Rows:** 4
- **Average Duration:** 9887ms
- **Min Duration:** 9578ms
- **Max Duration:** 10042ms
- **P95 Duration:** 10042ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT country, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL GROUP BY country`
- **Count/Rows:** 6
- **Average Duration:** 10817ms
- **Min Duration:** 10642ms
- **Max Duration:** 11131ms
- **P95 Duration:** 11086ms
- **Runs:** 3

### note IS NOT NULL - AGGREGATION
- **SQL:** `SELECT age, COUNT(*) as count FROM iceberg.lab.narrow_1_000_000_000 WHERE note IS NOT NULL GROUP BY age`
- **Count/Rows:** 62
- **Average Duration:** 14097ms
- **Min Duration:** 14011ms
- **Max Duration:** 14210ms
- **P95 Duration:** 14196ms
- **Runs:** 3

