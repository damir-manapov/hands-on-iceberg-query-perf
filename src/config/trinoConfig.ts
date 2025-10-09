import { TrinoConfig } from "../types";
import { TABLE_CONFIG } from "./tableConfig";

export function createTrinoConfig(source: string = "bench"): TrinoConfig {
  return {
    host: process.env.TRINO_HOST ?? "http://localhost",
    port: Number(process.env.TRINO_PORT ?? "8080"),
    catalog: TABLE_CONFIG.catalog,
    schema: TABLE_CONFIG.schema,
    user: process.env.TRINO_USER ?? "bench",
    source,
    ...(process.env.TRINO_USERNAME && process.env.TRINO_PASSWORD
      ? {
          basicAuth: {
            username: process.env.TRINO_USERNAME,
            password: process.env.TRINO_PASSWORD,
          },
        }
      : {}),
  };
}
