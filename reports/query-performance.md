# Query Performance Report

**Table:** iceberg.lab.events  
**Total Rows:** 100,000,000  
**Table Size:** 2.9 GB (3,072,680,383 bytes)  
**Generated:** 2025-10-09T19:56:08.184Z  
**Total Queries Run:** 48

## Summary

- **Average Duration:** 631ms
- **Fastest Query:** 161ms
- **Slowest Query:** 1035ms
- **95th Percentile:** 989ms

## Query Results

| Filter | Type | Pagination Type | Sorted | Aggregation | Count/Rows | Avg Duration (ms) | Min Duration (ms) | Max Duration (ms) | P95 Duration (ms) | Runs |
|--------|------|-----------------|--------|-------------|------------|-------------------|-------------------|-------------------|-------------------|------|
| no filters | COUNT | - | - | - | 100,000,000 | 780 | 772 | 784 | 784 | 3 |
| no filters | PAGINATION | first page | No | - | 100 | 732 | 627 | 784 | 784 | 3 |
| no filters | PAGINATION | first page | Yes | - | 100 | 997 | 953 | 1035 | 1032 | 3 |
| no filters | PAGINATION | 100th page | No | - | 0 | 164 | 162 | 164 | 164 | 3 |
| no filters | PAGINATION | 100th page | Yes | - | 0 | 163 | 161 | 163 | 163 | 3 |
| no filters | AGGREGATION | - | - | status | 4 | 787 | 781 | 791 | 791 | 3 |
| no filters | AGGREGATION | - | - | country | 6 | 785 | 782 | 787 | 787 | 3 |
| no filters | AGGREGATION | - | - | age | 62 | 875 | 800 | 951 | 944 | 3 |
| status = 'paid' | COUNT | - | - | - | 25,006,161 | 732 | 621 | 794 | 793 | 3 |
| status = 'paid' | PAGINATION | first page | No | - | 100 | 736 | 631 | 793 | 793 | 3 |
| status = 'paid' | PAGINATION | first page | Yes | - | 100 | 976 | 941 | 1022 | 1017 | 3 |
| status = 'paid' | PAGINATION | 100th page | No | - | 0 | 163 | 162 | 164 | 164 | 3 |
| status = 'paid' | PAGINATION | 100th page | Yes | - | 0 | 163 | 161 | 164 | 164 | 3 |
| status = 'paid' | AGGREGATION | - | - | status | 1 | 681 | 630 | 781 | 766 | 3 |
| status = 'paid' | AGGREGATION | - | - | country | 6 | 732 | 633 | 783 | 783 | 3 |
| status = 'paid' | AGGREGATION | - | - | age | 62 | 629 | 628 | 629 | 629 | 3 |

## Query Details

### no filters

```sql
SELECT COUNT(*) as count FROM iceberg.lab.events 
```

- **Count/Rows:** 100,000,000
- **Average Duration:** 780ms
- **Min Duration:** 772ms
- **Max Duration:** 784ms
- **95th Percentile:** 784ms
- **Runs:** 3

---

### no filters

```sql
SELECT id, status, country, age FROM iceberg.lab.events  LIMIT 100
```

- **Count/Rows:** 100
- **Average Duration:** 732ms
- **Min Duration:** 627ms
- **Max Duration:** 784ms
- **95th Percentile:** 784ms
- **Runs:** 3

---

### no filters

```sql
SELECT id, status, country, age FROM iceberg.lab.events  ORDER BY id LIMIT 100
```

- **Count/Rows:** 100
- **Average Duration:** 997ms
- **Min Duration:** 953ms
- **Max Duration:** 1035ms
- **95th Percentile:** 1032ms
- **Runs:** 3

---

### no filters

```sql
SELECT id, status, country, age FROM iceberg.lab.events  LIMIT 100 OFFSET 9900
```

- **Count/Rows:** 0
- **Average Duration:** 164ms
- **Min Duration:** 162ms
- **Max Duration:** 164ms
- **95th Percentile:** 164ms
- **Runs:** 3

---

### no filters

```sql
SELECT id, status, country, age FROM iceberg.lab.events  ORDER BY id LIMIT 100 OFFSET 9900
```

- **Count/Rows:** 0
- **Average Duration:** 163ms
- **Min Duration:** 161ms
- **Max Duration:** 163ms
- **95th Percentile:** 163ms
- **Runs:** 3

---

### no filters

```sql
SELECT status, COUNT(*) as count FROM iceberg.lab.events  GROUP BY status
```

- **Count/Rows:** 4
- **Average Duration:** 787ms
- **Min Duration:** 781ms
- **Max Duration:** 791ms
- **95th Percentile:** 791ms
- **Runs:** 3

---

### no filters

```sql
SELECT country, COUNT(*) as count FROM iceberg.lab.events  GROUP BY country
```

- **Count/Rows:** 6
- **Average Duration:** 785ms
- **Min Duration:** 782ms
- **Max Duration:** 787ms
- **95th Percentile:** 787ms
- **Runs:** 3

---

### no filters

```sql
SELECT age, COUNT(*) as count FROM iceberg.lab.events  GROUP BY age
```

- **Count/Rows:** 62
- **Average Duration:** 875ms
- **Min Duration:** 800ms
- **Max Duration:** 951ms
- **95th Percentile:** 944ms
- **Runs:** 3

---

### status = 'paid'

```sql
SELECT COUNT(*) as count FROM iceberg.lab.events WHERE status = 'paid'
```

- **Count/Rows:** 25,006,161
- **Average Duration:** 732ms
- **Min Duration:** 621ms
- **Max Duration:** 794ms
- **95th Percentile:** 793ms
- **Runs:** 3

---

### status = 'paid'

```sql
SELECT id, status, country, age FROM iceberg.lab.events WHERE status = 'paid' LIMIT 100
```

- **Count/Rows:** 100
- **Average Duration:** 736ms
- **Min Duration:** 631ms
- **Max Duration:** 793ms
- **95th Percentile:** 793ms
- **Runs:** 3

---

### status = 'paid'

```sql
SELECT id, status, country, age FROM iceberg.lab.events WHERE status = 'paid' ORDER BY id LIMIT 100
```

- **Count/Rows:** 100
- **Average Duration:** 976ms
- **Min Duration:** 941ms
- **Max Duration:** 1022ms
- **95th Percentile:** 1017ms
- **Runs:** 3

---

### status = 'paid'

```sql
SELECT id, status, country, age FROM iceberg.lab.events WHERE status = 'paid' LIMIT 100 OFFSET 9900
```

- **Count/Rows:** 0
- **Average Duration:** 163ms
- **Min Duration:** 162ms
- **Max Duration:** 164ms
- **95th Percentile:** 164ms
- **Runs:** 3

---

### status = 'paid'

```sql
SELECT id, status, country, age FROM iceberg.lab.events WHERE status = 'paid' ORDER BY id LIMIT 100 OFFSET 9900
```

- **Count/Rows:** 0
- **Average Duration:** 163ms
- **Min Duration:** 161ms
- **Max Duration:** 164ms
- **95th Percentile:** 164ms
- **Runs:** 3

---

### status = 'paid'

```sql
SELECT status, COUNT(*) as count FROM iceberg.lab.events WHERE status = 'paid' GROUP BY status
```

- **Count/Rows:** 1
- **Average Duration:** 681ms
- **Min Duration:** 630ms
- **Max Duration:** 781ms
- **95th Percentile:** 766ms
- **Runs:** 3

---

### status = 'paid'

```sql
SELECT country, COUNT(*) as count FROM iceberg.lab.events WHERE status = 'paid' GROUP BY country
```

- **Count/Rows:** 6
- **Average Duration:** 732ms
- **Min Duration:** 633ms
- **Max Duration:** 783ms
- **95th Percentile:** 783ms
- **Runs:** 3

---

### status = 'paid'

```sql
SELECT age, COUNT(*) as count FROM iceberg.lab.events WHERE status = 'paid' GROUP BY age
```

- **Count/Rows:** 62
- **Average Duration:** 629ms
- **Min Duration:** 628ms
- **Max Duration:** 629ms
- **95th Percentile:** 629ms
- **Runs:** 3

---


*Report generated by hands-on-iceberg-query-perf*
