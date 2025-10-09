# Query Performance Report

**Table:** iceberg.lab.events  
**Total Rows:** 100,000,000  
**Table Size:** 2.9 GB (3,072,680,383 bytes)  
**Generated:** 2025-10-09T19:50:14.974Z  
**Total Queries Run:** 72

## Summary

- **Average Duration:** 641ms
- **Fastest Query:** 156ms
- **Slowest Query:** 1473ms
- **95th Percentile:** 954ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
| no filters | COUNT | - | - | - | 100,000,000 | 780 | 778 | 781 | 781 | 3 |
| no filters | PAGINATION | first page | No | - | 100 | 730 | 629 | 782 | 782 | 3 |
| no filters | PAGINATION | first page | Yes | - | 100 | 1146 | 976 | 1473 | 1425 | 3 |
| no filters | PAGINATION | 100th page | No | - | 0 | 164 | 159 | 172 | 171 | 3 |
| no filters | PAGINATION | 100th page | Yes | - | 0 | 159 | 157 | 162 | 162 | 3 |
| no filters | AGGREGATION | - | - | status | 4 | 778 | 772 | 783 | 783 | 3 |
| no filters | AGGREGATION | - | - | country | 6 | 680 | 630 | 778 | 764 | 3 |
| no filters | AGGREGATION | - | - | age | 62 | 976 | 920 | 1085 | 1069 | 3 |
| status = 'paid' | COUNT | - | - | - | 25,006,161 | 735 | 626 | 795 | 794 | 3 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 734 | 641 | 781 | 781 | 3 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 893 | 851 | 935 | 931 | 3 |
| status = 'paid' | PAGINATION | 100th page | No | - | 0 | 162 | 161 | 162 | 162 | 3 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 0 | 161 | 160 | 161 | 161 | 3 |
| status = 'paid' | AGGREGATION | - | - | status | 1 | 734 | 626 | 797 | 796 | 3 |
| status = 'paid' | AGGREGATION | - | - | country | 6 | 732 | 630 | 785 | 785 | 3 |
| status = 'paid' | AGGREGATION | - | - | age | 62 | 795 | 777 | 827 | 823 | 3 |
| country = 'US' | COUNT | - | - | - | 19,591,116 | 777 | 775 | 779 | 779 | 3 |
| country = 'US' | PAGINATION | first page | No | - | 100 | 792 | 781 | 809 | 807 | 3 |
| country = 'US' | PAGINATION | first page | Yes | - | 100 | 863 | 855 | 874 | 873 | 3 |
| country = 'US' | PAGINATION | 100th page | No | - | 0 | 159 | 156 | 161 | 161 | 3 |
| country = 'US' | PAGINATION | 100th page | Yes | - | 0 | 159 | 158 | 160 | 160 | 3 |
| country = 'US' | AGGREGATION | - | - | status | 4 | 678 | 623 | 786 | 770 | 3 |
| country = 'US' | AGGREGATION | - | - | country | 1 | 785 | 782 | 790 | 790 | 3 |
| country = 'US' | AGGREGATION | - | - | age | 62 | 803 | 780 | 820 | 819 | 3 |

## Query Details

### no filters

```sql
SELECT COUNT(*) as count FROM iceberg.lab.events 
```

- **Count/Rows:** 100,000,000
- **Average Duration:** 780ms
- **Min Duration:** 778ms
- **Max Duration:** 781ms
- **95th Percentile:** 781ms
- **Runs:** 3

---

### no filters

```sql
SELECT id, status, country, age FROM iceberg.lab.events  LIMIT 100
```

- **Count/Rows:** 100
- **Average Duration:** 730ms
- **Min Duration:** 629ms
- **Max Duration:** 782ms
- **95th Percentile:** 782ms
- **Runs:** 3

---

### no filters

```sql
SELECT id, status, country, age FROM iceberg.lab.events  ORDER BY id LIMIT 100
```

- **Count/Rows:** 100
- **Average Duration:** 1146ms
- **Min Duration:** 976ms
- **Max Duration:** 1473ms
- **95th Percentile:** 1425ms
- **Runs:** 3

---

### no filters

```sql
SELECT id, status, country, age FROM iceberg.lab.events  LIMIT 100 OFFSET 9900
```

- **Count/Rows:** 0
- **Average Duration:** 164ms
- **Min Duration:** 159ms
- **Max Duration:** 172ms
- **95th Percentile:** 171ms
- **Runs:** 3

---

### no filters

```sql
SELECT id, status, country, age FROM iceberg.lab.events  ORDER BY id LIMIT 100 OFFSET 9900
```

- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 157ms
- **Max Duration:** 162ms
- **95th Percentile:** 162ms
- **Runs:** 3

---

### no filters

```sql
SELECT status, COUNT(*) as count FROM iceberg.lab.events  GROUP BY status
```

- **Count/Rows:** 4
- **Average Duration:** 778ms
- **Min Duration:** 772ms
- **Max Duration:** 783ms
- **95th Percentile:** 783ms
- **Runs:** 3

---

### no filters

```sql
SELECT country, COUNT(*) as count FROM iceberg.lab.events  GROUP BY country
```

- **Count/Rows:** 6
- **Average Duration:** 680ms
- **Min Duration:** 630ms
- **Max Duration:** 778ms
- **95th Percentile:** 764ms
- **Runs:** 3

---

### no filters

```sql
SELECT age, COUNT(*) as count FROM iceberg.lab.events  GROUP BY age
```

- **Count/Rows:** 62
- **Average Duration:** 976ms
- **Min Duration:** 920ms
- **Max Duration:** 1085ms
- **95th Percentile:** 1069ms
- **Runs:** 3

---

### status = 'paid'

```sql
SELECT COUNT(*) as count FROM iceberg.lab.events WHERE status = 'paid'
```

- **Count/Rows:** 25,006,161
- **Average Duration:** 735ms
- **Min Duration:** 626ms
- **Max Duration:** 795ms
- **95th Percentile:** 794ms
- **Runs:** 3

---

### status = 'paid'

```sql
SELECT id, status, country, age FROM iceberg.lab.events WHERE status = 'paid' LIMIT 100
```

- **Count/Rows:** 100
- **Average Duration:** 734ms
- **Min Duration:** 641ms
- **Max Duration:** 781ms
- **95th Percentile:** 781ms
- **Runs:** 3

---

### status = 'paid'

```sql
SELECT id, status, country, age FROM iceberg.lab.events WHERE status = 'paid' ORDER BY id LIMIT 100
```

- **Count/Rows:** 100
- **Average Duration:** 893ms
- **Min Duration:** 851ms
- **Max Duration:** 935ms
- **95th Percentile:** 931ms
- **Runs:** 3

---

### status = 'paid'

```sql
SELECT id, status, country, age FROM iceberg.lab.events WHERE status = 'paid' LIMIT 100 OFFSET 9900
```

- **Count/Rows:** 0
- **Average Duration:** 162ms
- **Min Duration:** 161ms
- **Max Duration:** 162ms
- **95th Percentile:** 162ms
- **Runs:** 3

---

### status = 'paid'

```sql
SELECT id, status, country, age FROM iceberg.lab.events WHERE status = 'paid' ORDER BY id LIMIT 100 OFFSET 9900
```

- **Count/Rows:** 0
- **Average Duration:** 161ms
- **Min Duration:** 160ms
- **Max Duration:** 161ms
- **95th Percentile:** 161ms
- **Runs:** 3

---

### status = 'paid'

```sql
SELECT status, COUNT(*) as count FROM iceberg.lab.events WHERE status = 'paid' GROUP BY status
```

- **Count/Rows:** 1
- **Average Duration:** 734ms
- **Min Duration:** 626ms
- **Max Duration:** 797ms
- **95th Percentile:** 796ms
- **Runs:** 3

---

### status = 'paid'

```sql
SELECT country, COUNT(*) as count FROM iceberg.lab.events WHERE status = 'paid' GROUP BY country
```

- **Count/Rows:** 6
- **Average Duration:** 732ms
- **Min Duration:** 630ms
- **Max Duration:** 785ms
- **95th Percentile:** 785ms
- **Runs:** 3

---

### status = 'paid'

```sql
SELECT age, COUNT(*) as count FROM iceberg.lab.events WHERE status = 'paid' GROUP BY age
```

- **Count/Rows:** 62
- **Average Duration:** 795ms
- **Min Duration:** 777ms
- **Max Duration:** 827ms
- **95th Percentile:** 823ms
- **Runs:** 3

---

### country = 'US'

```sql
SELECT COUNT(*) as count FROM iceberg.lab.events WHERE country = 'US'
```

- **Count/Rows:** 19,591,116
- **Average Duration:** 777ms
- **Min Duration:** 775ms
- **Max Duration:** 779ms
- **95th Percentile:** 779ms
- **Runs:** 3

---

### country = 'US'

```sql
SELECT id, status, country, age FROM iceberg.lab.events WHERE country = 'US' LIMIT 100
```

- **Count/Rows:** 100
- **Average Duration:** 792ms
- **Min Duration:** 781ms
- **Max Duration:** 809ms
- **95th Percentile:** 807ms
- **Runs:** 3

---

### country = 'US'

```sql
SELECT id, status, country, age FROM iceberg.lab.events WHERE country = 'US' ORDER BY id LIMIT 100
```

- **Count/Rows:** 100
- **Average Duration:** 863ms
- **Min Duration:** 855ms
- **Max Duration:** 874ms
- **95th Percentile:** 873ms
- **Runs:** 3

---

### country = 'US'

```sql
SELECT id, status, country, age FROM iceberg.lab.events WHERE country = 'US' LIMIT 100 OFFSET 9900
```

- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 156ms
- **Max Duration:** 161ms
- **95th Percentile:** 161ms
- **Runs:** 3

---

### country = 'US'

```sql
SELECT id, status, country, age FROM iceberg.lab.events WHERE country = 'US' ORDER BY id LIMIT 100 OFFSET 9900
```

- **Count/Rows:** 0
- **Average Duration:** 159ms
- **Min Duration:** 158ms
- **Max Duration:** 160ms
- **95th Percentile:** 160ms
- **Runs:** 3

---

### country = 'US'

```sql
SELECT status, COUNT(*) as count FROM iceberg.lab.events WHERE country = 'US' GROUP BY status
```

- **Count/Rows:** 4
- **Average Duration:** 678ms
- **Min Duration:** 623ms
- **Max Duration:** 786ms
- **95th Percentile:** 770ms
- **Runs:** 3

---

### country = 'US'

```sql
SELECT country, COUNT(*) as count FROM iceberg.lab.events WHERE country = 'US' GROUP BY country
```

- **Count/Rows:** 1
- **Average Duration:** 785ms
- **Min Duration:** 782ms
- **Max Duration:** 790ms
- **95th Percentile:** 790ms
- **Runs:** 3

---

### country = 'US'

```sql
SELECT age, COUNT(*) as count FROM iceberg.lab.events WHERE country = 'US' GROUP BY age
```

- **Count/Rows:** 62
- **Average Duration:** 803ms
- **Min Duration:** 780ms
- **Max Duration:** 820ms
- **95th Percentile:** 819ms
- **Runs:** 3

---


*Report generated by hands-on-iceberg-query-perf*
