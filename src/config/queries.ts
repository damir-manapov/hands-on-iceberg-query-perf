export interface QueryDefinition {
  sql: string;
  description: string;
}

export function createQueryDefinitions(tableName: string): QueryDefinition[] {
  return [
    {
      sql: `SELECT COUNT(*) as count FROM ${tableName}`,
      description: "Total count (no filters)"
    },
    {
      sql: `SELECT COUNT(*) as count FROM ${tableName} WHERE status = 'paid'`,
      description: "Count by status = 'paid'"
    },
    {
      sql: `SELECT COUNT(*) as count FROM ${tableName} WHERE country = 'US'`,
      description: "Count by country = 'US'"
    },
    {
      sql: `SELECT COUNT(*) as count FROM ${tableName} WHERE age > 30`,
      description: "Count by age > 30"
    },
    {
      sql: `SELECT COUNT(*) as count FROM ${tableName} WHERE amount > 1000`,
      description: "Count by amount > 1000"
    },
    {
      sql: `SELECT COUNT(*) as count FROM ${tableName} WHERE created_at >= DATE '2024-06-01'`,
      description: "Count by date >= 2024-06-01"
    },
    {
      sql: `SELECT COUNT(*) as count FROM ${tableName} WHERE status = 'paid' AND country = 'US'`,
      description: "Count by status='paid' AND country='US'"
    },
    {
      sql: `SELECT COUNT(*) as count FROM ${tableName} WHERE age BETWEEN 25 AND 45`,
      description: "Count by age BETWEEN 25 AND 45"
    },
    {
      sql: `SELECT COUNT(*) as count FROM ${tableName} WHERE contains(tags, 'alpha')`,
      description: "Count by tags contains 'alpha'"
    },
    {
      sql: `SELECT COUNT(*) as count FROM ${tableName} WHERE note IS NOT NULL`,
      description: "Count by note IS NOT NULL"
    }
  ];
}
