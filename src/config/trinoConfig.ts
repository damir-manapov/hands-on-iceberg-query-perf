import { TrinoConfig } from "../types";
import { BASE_CONFIG } from "./tableConfigs";

export function createTrinoConfig(source: string = "bench"): TrinoConfig {
  return {
    host: process.env.TRINO_HOST ?? "http://localhost",
    port: Number(process.env.TRINO_PORT ?? "8080"),
    catalog: BASE_CONFIG.catalog,
    schema: BASE_CONFIG.schema,
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
