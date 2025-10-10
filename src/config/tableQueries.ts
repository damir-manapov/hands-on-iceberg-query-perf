export interface FilterCondition {
  whereClause: string;
  description: string;
}

export interface AggregationColumn {
  column: string;
  description: string;
}

export interface PaginationColumn {
  column: string;
  description: string;
}

export interface TableQueryConfig {
  tableBase: string;
  filters: FilterCondition[];
  aggregationColumns: AggregationColumn[];
  paginationColumns: PaginationColumn[];
}

export function createTableQueryConfigs(): TableQueryConfig[] {
  return [
    {
      tableBase: "narrow",
      filters: [
        { whereClause: "", description: "no filters" },
        {
          whereClause: "status = 'paid'",
          description: "status = 'paid'",
        },
        { whereClause: "country = 'US'", description: "country = 'US'" },
        { whereClause: "age > 30", description: "age > 30" },
        { whereClause: "amount > 1000", description: "amount > 1000" },
        {
          whereClause: "created_at >= DATE '2024-06-01'",
          description: "date >= 2024-06-01",
        },
        {
          whereClause: "status = 'paid' AND country = 'US'",
          description: "status='paid' AND country='US'",
        },
        {
          whereClause: "age BETWEEN 25 AND 45",
          description: "age BETWEEN 25 AND 45",
        },
        {
          whereClause: "contains(tags, 'alpha')",
          description: "tags contains 'alpha'",
        },
        {
          whereClause: "note IS NOT NULL",
          description: "note IS NOT NULL",
        },
      ],
      aggregationColumns: [
        { column: "status", description: "status GROUP BY" },
        { column: "country", description: "country GROUP BY" },
        { column: "age", description: "age GROUP BY" },
      ],
      paginationColumns: [
        { column: "id", description: "id" },
        { column: "status", description: "status" },
        { column: "country", description: "country" },
        { column: "age", description: "age" },
      ],
    },
    {
      tableBase: "wide",
      filters: [
        { whereClause: "", description: "no filters" },
        { whereClause: "row_9 > 5000", description: "row_9 > 5000" },
        {
          whereClause: "row_28 = 'value1'",
          description: "row_28 = 'value1'",
        },
        {
          whereClause: "row_48 = 'enum1'",
          description: "row_48 = 'enum1'",
        },
        { whereClause: "row_10 > 2000", description: "row_10 > 2000" },
        {
          whereClause: "row_1 >= TIMESTAMP '2024-06-01 00:00:00'",
          description: "row_1 >= 2024-06-01",
        },
        {
          whereClause: "row_28 = 'value1' AND row_48 = 'enum1'",
          description: "row_28='value1' AND row_48='enum1'",
        },
        {
          whereClause: "row_9 BETWEEN 2000 AND 8000",
          description: "row_9 BETWEEN 2000 AND 8000",
        },
        {
          whereClause: "row_54 = 'tag1'",
          description: "row_54 = 'tag1'",
        },
        {
          whereClause: "row_29 IS NOT NULL",
          description: "row_29 IS NOT NULL",
        },
      ],
      aggregationColumns: [
        { column: "row_28", description: "row_28 GROUP BY" },
        { column: "row_48", description: "row_48 GROUP BY" },
        { column: "row_54", description: "row_54 GROUP BY" },
      ],
      paginationColumns: [
        { column: "id", description: "id" },
        { column: "row_28", description: "row_28" },
        { column: "row_48", description: "row_48" },
        { column: "row_9", description: "row_9" },
      ],
    },
  ];
}
