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

export function createFilterConditions(): FilterCondition[] {
  return [
    { whereClause: "", description: "no filters" },
    { whereClause: "WHERE status = 'paid'", description: "status = 'paid'" },
    { whereClause: "WHERE country = 'US'", description: "country = 'US'" },
    { whereClause: "WHERE age > 30", description: "age > 30" },
    { whereClause: "WHERE amount > 1000", description: "amount > 1000" },
    {
      whereClause: "WHERE created_at >= DATE '2024-06-01'",
      description: "date >= 2024-06-01",
    },
    {
      whereClause: "WHERE status = 'paid' AND country = 'US'",
      description: "status='paid' AND country='US'",
    },
    {
      whereClause: "WHERE age BETWEEN 25 AND 45",
      description: "age BETWEEN 25 AND 45",
    },
    {
      whereClause: "WHERE contains(tags, 'alpha')",
      description: "tags contains 'alpha'",
    },
    { whereClause: "WHERE note IS NOT NULL", description: "note IS NOT NULL" },
  ];
}

export function createAggregationColumns(): AggregationColumn[] {
  return [
    { column: "status", description: "status GROUP BY" },
    { column: "country", description: "country GROUP BY" },
    { column: "age", description: "age GROUP BY" },
  ];
}

export function createPaginationColumns(): PaginationColumn[] {
  return [
    { column: "id", description: "id" },
    { column: "status", description: "status" },
    { column: "country", description: "country" },
    { column: "age", description: "age" },
  ];
}
