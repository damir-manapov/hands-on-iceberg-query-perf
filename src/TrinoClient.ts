import { TrinoConfig } from "./types";

export class TrinoClient {
  constructor(private cfg: TrinoConfig) {}

  get config(): TrinoConfig {
    return this.cfg;
  }
  private baseUrl() {
    return `${this.cfg.host}:${this.cfg.port}`;
  }
  private headers(): Record<string, string> {
    const h: Record<string, string> = {
      "X-Trino-User": this.cfg.user,
      "X-Trino-Catalog": this.cfg.catalog,
      "X-Trino-Schema": this.cfg.schema,
    };
    if (this.cfg.source) h["X-Trino-Source"] = this.cfg.source;
    if (this.cfg.basicAuth) {
      const { username, password } = this.cfg.basicAuth;
      h["Authorization"] =
        `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`;
    }
    if (this.cfg.sessionProperties) {
      const sessionProps = Object.entries(this.cfg.sessionProperties)
        .map(([key, value]) => `${key}=${value}`)
        .join(",");
      h["X-Trino-Session"] = sessionProps;
    }
    return h;
  }
  async execute(sql: string): Promise<void> {
    await this._run(sql, false);
  }
  async query<T = Record<string, unknown>>(sql: string): Promise<T[]> {
    const all = await this._run(sql, true);
    return all as T[];
  }
  private async _run<T = Record<string, unknown>>(
    sql: string,
    collect: boolean
  ): Promise<T[]> {
    type TrinoColumn = { name: string };
    type TrinoError = { message: string };
    type TrinoPage = {
      columns?: TrinoColumn[];
      data?: unknown[][];
      nextUri?: string;
      error?: TrinoError;
    };
    const res = await fetch(`${this.baseUrl()}/v1/statement`, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        ...this.headers(),
      },
      body: sql,
    });
    if (!res.ok) {
      const errorText = await res.text();
      console.error(`\n🚨 TRINO CONNECTION ERROR:`);
      console.error(`   Status: ${res.status} ${res.statusText}`);
      console.error(`   URL: ${this.baseUrl()}/v1/statement`);
      console.error(`   Response: ${errorText}`);
      console.error(`   SQL: ${sql}`);
      console.error(`\n`);
      throw new Error(`Trino POST ${res.status}: ${errorText}`);
    }
    let payload: TrinoPage = (await res.json()) as TrinoPage;
    let colNames: string[] | null = payload.columns?.map(c => c.name) ?? null;
    const rowsArr: unknown[][] = [];

    const take = (p: TrinoPage) => {
      if (collect) {
        // (1) learn columns as soon as they show up
        if (!colNames && p.columns) {
          colNames = p.columns.map(c => c.name);
        }
        // (2) collect any data page we get
        if (p.data && Array.isArray(p.data)) {
          for (const r of p.data) rowsArr.push(r);
        }
      }
    };
    take(payload);

    while (payload.nextUri) {
      if (payload.error) {
        console.error(`\n🚨 TRINO QUERY ERROR:`);
        console.error(`   Message: ${payload.error.message}`);
        console.error(`   SQL: ${sql}`);
        console.error(`\n`);
        throw new Error(`Trino error: ${payload.error.message}`);
      }
      const poll = await fetch(payload.nextUri, { headers: this.headers() });
      if (!poll.ok) {
        const errorText = await poll.text();
        console.error(`\n🚨 TRINO POLL ERROR:`);
        console.error(`   Status: ${poll.status} ${poll.statusText}`);
        console.error(`   URL: ${payload.nextUri}`);
        console.error(`   Response: ${errorText}`);
        console.error(`   SQL: ${sql}`);
        console.error(`\n`);
        throw new Error(`Trino poll ${poll.status}: ${errorText}`);
      }
      payload = (await poll.json()) as TrinoPage;
      if (!colNames && payload.columns) {
        // late columns; extremely rare
      }
      take(payload);
      await new Promise(r => setTimeout(r, 150));
    }

    // Map arrays → objects if we have column names; else return arrays
    if (colNames) {
      return rowsArr.map(r => {
        const obj: Record<string, unknown> = {};
        if (colNames) {
          for (let i = 0; i < colNames.length; i++) obj[colNames[i]] = r[i];
        }
        return obj as T;
      });
    } else {
      // No columns (e.g., for some non-SELECT statements) — return empty
      return [] as T[];
    }
  }
}
