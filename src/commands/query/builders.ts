/**
 * Query builders for different query types
 */

import { TableConfig } from "../../types";
import {
  PaginationColumn,
  SingleTableConfig,
  SeveralTablesConfig,
  TableInfo,
} from "../../config/tableQueries";
import { QueryArgs } from "./types";

export function buildQueryArgs(
  tableConfig: TableConfig,
  queryConfig: SingleTableConfig,
  fullTableName: string
): QueryArgs[] {
  const filters = queryConfig.filters;
  const aggregationColumns = queryConfig.aggregationColumns;
  const paginationColumns = queryConfig.paginationColumns;

  const queryArgs: QueryArgs[] = [];

  // Build column list for pagination queries
  const paginationColumnList = paginationColumns
    .map((col: PaginationColumn) => col.column)
    .join(", ");

  for (const filter of filters) {
    console.log(
      `📋 Adding query configs for filter: ${filter.description || filter.whereClause}`
    );

    const where = filter.whereClause ? `WHERE ${filter.whereClause}` : "";
    const filterName = filter.description || filter.whereClause;

    // COUNT queries
    const countSQL = `SELECT COUNT(*) as count FROM ${fullTableName} ${where}`;
    queryArgs.push({
      sql: countSQL,
      description: `Count query (${filterName})`,
      queryType: "COUNT",
      metadata: {
        filter: filterName,
      },
    });

    // First page (no sort)
    const firstPageSQL = `SELECT ${paginationColumnList} FROM ${fullTableName} ${where} LIMIT 100`;
    queryArgs.push({
      sql: firstPageSQL,
      description: `First page (${filterName})`,
      queryType: "PAGINATION",
      metadata: {
        filter: filterName,
        paginationType: "first page",
        sorted: false,
      },
    });

    // First page (sorted by idColumn)
    const firstPageSortedSQL = `SELECT ${paginationColumnList} FROM ${fullTableName} ${where} ORDER BY ${tableConfig.idColumn} LIMIT 100`;
    queryArgs.push({
      sql: firstPageSortedSQL,
      description: `First page sorted (${filterName})`,
      queryType: "PAGINATION",
      metadata: {
        filter: filterName,
        paginationType: "first page",
        sorted: true,
      },
    });

    // 100th page (no sort)
    const hundredthPageSQL = `SELECT ${paginationColumnList} FROM ${fullTableName} ${where} OFFSET 9900 LIMIT 100`;
    queryArgs.push({
      sql: hundredthPageSQL,
      description: `100th page (${filterName})`,
      queryType: "PAGINATION",
      metadata: {
        filter: filterName,
        paginationType: "100th page",
        sorted: false,
      },
    });

    // 100th page (sorted by idColumn)
    const hundredthPageSortedSQL = `SELECT ${paginationColumnList} FROM ${fullTableName} ${where} ORDER BY ${tableConfig.idColumn} OFFSET 9900 LIMIT 100`;
    queryArgs.push({
      sql: hundredthPageSortedSQL,
      description: `100th page sorted (${filterName})`,
      queryType: "PAGINATION",
      metadata: {
        filter: filterName,
        paginationType: "100th page",
        sorted: true,
      },
    });

    // AGGREGATION queries
    for (const aggCol of aggregationColumns) {
      const aggregationSQL = `SELECT ${aggCol.column}, COUNT(*) as count FROM ${fullTableName} ${where} GROUP BY ${aggCol.column}`;
      queryArgs.push({
        sql: aggregationSQL,
        description: `Aggregation (${filterName}, ${aggCol.column})`,
        queryType: "AGGREGATION",
        metadata: {
          filter: filterName,
          aggregationInfo: aggCol.column,
        },
      });
    }
  }

  return queryArgs;
}

export function buildMultiTableQueryArgs(
  queryConfig: SeveralTablesConfig,
  humanNumber: (n: number) => string
): QueryArgs[] {
  const queryArgs: QueryArgs[] = [];

  for (const query of queryConfig.queries) {
    // Replace placeholders in SQL with actual table names
    let sql = query.sql;
    queryConfig.tables.forEach((tableInfo: TableInfo, i: number) => {
      const tableName = `${tableInfo.tableBase}_${humanNumber(tableInfo.rowsCount).replace(/,/g, "")}`;
      const fullTableName = `iceberg.performance.${tableName}`;

      // Replace placeholder {table1}, {table2}, etc. with actual table names
      sql = sql.replace(new RegExp(`\\{table${i + 1}\\}`, "g"), fullTableName);
    });

    queryArgs.push({
      sql,
      description: query.description,
      queryType: query.queryType,
      metadata: {
        filter: "multi-table query",
        paginationType:
          query.queryType === "PAGINATION" ? "multi-table" : undefined,
        sorted: false,
        aggregationInfo:
          query.queryType === "AGGREGATION"
            ? "multi-table aggregation"
            : undefined,
      },
    });
  }

  return queryArgs;
}
