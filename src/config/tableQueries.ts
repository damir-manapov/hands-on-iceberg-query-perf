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

export interface TableInfo {
  tableBase: string;
  rowsCount: number;
}

export interface MultiTableQuery {
  sql: string;
  description: string;
  queryType: "COUNT" | "PAGINATION" | "AGGREGATION";
}

export interface ConnectionConfig {
  id: string;
  name: string;
  host: string;
  port: number;
  description?: string;
}

export interface ConnectionReference {
  connectionId: string;
}

export interface SingleTableConfig {
  type: "singleTable";
  tableBase: string;
  filters: FilterCondition[];
  aggregationColumns: AggregationColumn[];
  paginationColumns: PaginationColumn[];
}

export interface SeveralTablesConfig {
  type: "severalTables";
  tables: TableInfo[];
  queries: MultiTableQuery[];
}

export type TableQueryConfig = SingleTableConfig | SeveralTablesConfig;

export interface QuerySet {
  name: string;
  enabled: boolean;
  iterations: number;
  concurrencySimulationStreams: number;
  connectionId: string;
  tableConfigs: TableQueryConfig[];
}

// Centralized connection configurations
export const CONNECTIONS: Record<string, ConnectionConfig> = {
  "single-node": {
    id: "single-node",
    name: "single-node",
    host: "http://localhost",
    port: 8080,
    description: "Single-node Trino",
  },
  "three-node-cluster": {
    id: "three-node-cluster",
    name: "three-node-cluster",
    host: "http://localhost",
    port: 8081,
    description: "Three-node Trino cluster",
  },
};

// Helper function to get connection by ID
export function getConnectionById(connectionId: string): ConnectionConfig {
  const connection = CONNECTIONS[connectionId];
  if (!connection) {
    throw new Error(`Connection with ID '${connectionId}' not found`);
  }
  return connection;
}

const paginationTableConfig: TableQueryConfig[] = [
  {
    type: "singleTable",
    tableBase: "narrow",
    filters: [
      { whereClause: "", description: "no filters" },
      { whereClause: "status = 'paid'" },
      { whereClause: "country = 'US'" },
      { whereClause: "age > 30" },
      { whereClause: "created_at >= DATE '2024-06-01'" },
      { whereClause: "amount > 1000" },
      { whereClause: "id > 50000000" },
      { whereClause: "id > 500000000" },
      { whereClause: "amount > 1000 AND id > 50000000" },
      { whereClause: "amount > 1000 AND id > 500000000" },
      { whereClause: "contains(tags, 'alpha')" },
      { whereClause: "note IS NOT NULL" },
    ],
    aggregationColumns: [],
    paginationColumns: [
      { column: "id" },
      { column: "status" },
      { column: "country" },
      { column: "age" },
    ],
  },
  {
    type: "singleTable",
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
    aggregationColumns: [],
    paginationColumns: [
      { column: "id" },
      { column: "row_28" },
      { column: "row_48" },
      { column: "row_9" },
    ],
  },
];

export function createQuerySets(): QuerySet[] {
  return [
    {
      name: "basic",
      enabled: false,
      iterations: 3,
      concurrencySimulationStreams: 0,
      connectionId: "single-node",
      tableConfigs: [
        {
          type: "singleTable",
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
          type: "singleTable",
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
      name: "paginationNoContention",
      enabled: true,
      iterations: 3,
      concurrencySimulationStreams: 0,
      connectionId: "single-node",
      tableConfigs: paginationTableConfig,
    },
    {
      name: "paginationContention30",
      enabled: true,
      iterations: 3,
      concurrencySimulationStreams: 5,
      connectionId: "single-node",
      tableConfigs: paginationTableConfig,
    },
    {
      name: "basicWithParallel30",
      enabled: false,
      iterations: 3,
      concurrencySimulationStreams: 30,
      connectionId: "single-node",
      tableConfigs: [
        {
          type: "singleTable",
          tableBase: "narrow",
          filters: [
            { whereClause: "", description: "no filters" },
            { whereClause: "status = 'paid'" },
            { whereClause: "country = 'US'" },
            { whereClause: "age > 30" },
            { whereClause: "amount > 1000" },
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
          type: "singleTable",
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
      concurrencySimulationStreams: 0,
      connectionId: "single-node",
      tableConfigs: [
        {
          type: "singleTable",
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
    {
      name: "multiTableWithParallel3",
      enabled: false,
      iterations: 3,
      concurrencySimulationStreams: 3,
      connectionId: "single-node",
      tableConfigs: [
        {
          type: "severalTables",
          tables: [
            { tableBase: "narrow", rowsCount: 1000000 },
            { tableBase: "wide", rowsCount: 100000 },
          ],
          queries: [
            {
              sql: "SELECT COUNT(*) FROM {table1} JOIN {table2} ON {table1}.id = {table2}.id",
              description: "Join count query",
              queryType: "COUNT",
            },
            {
              sql: "SELECT {table1}.status, COUNT(*) FROM {table1} JOIN {table2} ON {table1}.id = {table2}.id GROUP BY {table1}.status",
              description: "Join aggregation by status",
              queryType: "AGGREGATION",
            },
            {
              sql: "SELECT {table1}.country, COUNT(*) FROM {table1} JOIN {table2} ON {table1}.id = {table2}.id GROUP BY {table1}.country",
              description: "Join aggregation by country",
              queryType: "AGGREGATION",
            },
            {
              sql: "SELECT {table1}.* FROM {table1} JOIN {table2} ON {table1}.id = {table2}.id LIMIT 100",
              description: "Join pagination query",
              queryType: "PAGINATION",
            },
            {
              sql: "SELECT {table1}.status, {table2}.row_28, COUNT(*) FROM {table1} JOIN {table2} ON {table1}.id = {table2}.id GROUP BY {table1}.status, {table2}.row_28",
              description: "Complex multi-column aggregation",
              queryType: "AGGREGATION",
            },
          ],
        },
      ],
    },
    {
      name: "paginationNoContentionCluster",
      enabled: true,
      iterations: 3,
      concurrencySimulationStreams: 0,
      connectionId: "three-node-cluster",
      tableConfigs: paginationTableConfig,
    },
    {
      name: "paginationContention30Cluster",
      enabled: true,
      iterations: 3,
      concurrencySimulationStreams: 30,
      connectionId: "three-node-cluster",
      tableConfigs: paginationTableConfig,
    },
  ];
}
