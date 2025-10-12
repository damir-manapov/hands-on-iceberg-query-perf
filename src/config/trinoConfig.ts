import { TrinoConfig } from "../types";
import { BASE_CONFIG } from "./tableConfigs";
import { getConnectionById } from "./tableQueries";

export function createTrinoConfig(
  source: string = "bench",
  connectionId: string
): TrinoConfig {
  const connection = getConnectionById(connectionId);

  const host = connection.host ?? process.env.TRINO_HOST ?? "http://localhost";
  const port = connection.port ?? Number(process.env.TRINO_PORT ?? "8080");

  return {
    host,
    port,
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
