export interface FilterCondition {
  whereClause: string;
  description?: string; // Made optional
}

export interface AggregationColumn {
  column: string;
}

export interface PaginationColumn {
  column: string;
}

export interface TableQueryConfig {
  tableBase: string;
  filters: FilterCondition[];
  aggregationColumns: AggregationColumn[];
  paginationColumns: PaginationColumn[];
}

export interface QuerySet {
  name: string;
  enabled: boolean;
  iterations: number;
  tableConfigs: TableQueryConfig[];
}

export function createQuerySets(): QuerySet[] {
  return [
    {
      name: "basic",
      enabled: true,
      iterations: 3,
      tableConfigs: [
        {
          tableBase: "narrow",
          filters: [
            { whereClause: "", description: "no filters" },
            // { whereClause: "status = 'paid'" },
            // { whereClause: "country = 'US'" },
            // { whereClause: "age > 30" },
            // { whereClause: "amount > 1000" },
            // { whereClause: "created_at >= DATE '2024-06-01'" },
            // { whereClause: "status = 'paid' AND country = 'US'" },
            // { whereClause: "age BETWEEN 25 AND 45" },
            // { whereClause: "contains(tags, 'alpha')" },
            // { whereClause: "note IS NOT NULL" },
          ],
          aggregationColumns: [
            { column: "status" },
            // { column: "country" },
            // { column: "age" },
          ],
          paginationColumns: [
            { column: "id" },
            { column: "status" },
            { column: "country" },
            { column: "age" },
          ],
        },
        {
          tableBase: "wide",
          filters: [
            { whereClause: "", description: "no filters" },
            { whereClause: "row_9 > 5000" },
            { whereClause: "row_28 = 'value1'" },
            { whereClause: "row_48 = 'enum1'" },
            { whereClause: "row_10 > 2000" },
            { whereClause: "row_1 >= TIMESTAMP '2024-06-01 00:00:00'" },
            { whereClause: "row_28 = 'value1' AND row_48 = 'enum1'" },
            { whereClause: "row_9 BETWEEN 2000 AND 8000" },
            { whereClause: "row_54 = 'tag1'" },
            { whereClause: "row_29 IS NOT NULL" },
          ],
          aggregationColumns: [
            { column: "row_28" },
            { column: "row_48" },
            { column: "row_54" },
          ],
          paginationColumns: [
            { column: "id" },
            { column: "row_28" },
            { column: "row_48" },
            { column: "row_9" },
          ],
        },
      ],
    },
    {
      name: "extended",
      enabled: false,
      iterations: 5,
      tableConfigs: [
        {
          tableBase: "narrow",
          filters: [
            { whereClause: "", description: "no filters" },
            { whereClause: "status = 'paid'" },
            { whereClause: "country = 'US'" },
            { whereClause: "age > 30" },
            { whereClause: "amount > 1000" },
            { whereClause: "created_at >= DATE '2024-06-01'" },
            { whereClause: "status = 'paid' AND country = 'US'" },
            { whereClause: "age BETWEEN 25 AND 45" },
            { whereClause: "contains(tags, 'alpha')" },
            { whereClause: "note IS NOT NULL" },
            { whereClause: "status = 'delivered'" },
            { whereClause: "country = 'DE'" },
            { whereClause: "age < 25" },
            { whereClause: "amount < 100" },
            { whereClause: "created_at < DATE '2024-03-01'" },
          ],
          aggregationColumns: [
            { column: "status" },
            { column: "country" },
            { column: "age" },
            { column: "amount" },
          ],
          paginationColumns: [
            { column: "id" },
            { column: "status" },
            { column: "country" },
            { column: "age" },
            { column: "amount" },
            { column: "created_at" },
          ],
        },
      ],
    },
  ];
}
