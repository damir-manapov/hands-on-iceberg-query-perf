/**
 * Main query command - Run performance tests
 */

import { TrinoClient } from "../../TrinoClient";
import { TABLE_CONFIGS } from "../../config/tableConfigs";
import { createTrinoConfig } from "../../config/trinoConfig";
import { createQuerySets } from "../../config/tableQueries";
import { humanNumber } from "../../utils";
import { processTable, processMultiTable } from "./processors";

async function main() {
  // Trino connection
  const trino = createTrinoConfig("query");
  const client = new TrinoClient(trino);

  // Get query sets
  const querySets = createQuerySets();

  console.log(
    `🚀 Running query performance tests on ${querySets.length} query sets`
  );

  // Process each query set
  for (const querySet of querySets) {
    if (!querySet.enabled) {
      console.log(`⏭️  Skipping disabled query set: ${querySet.name}`);
      continue;
    }

    console.log(`\n📋 Processing query set: ${querySet.name}`);

    // Process each table configuration in this query set
    for (const queryConfig of querySet.tableConfigs) {
      if (queryConfig.type === "singleTable") {
        // Handle single table configuration
        const tableConfig = TABLE_CONFIGS.find(
          config => config.tableBase === queryConfig.tableBase
        );

        if (!tableConfig) {
          console.log(
            `⏭️  No table config found for table: ${queryConfig.tableBase} in set: ${querySet.name}`
          );
          continue;
        }

        if (tableConfig.enabled === false) {
          console.log(`⏭️  Skipping disabled table: ${tableConfig.tableBase}`);
          continue;
        }

        // Process each row count for this table
        for (const totalRows of tableConfig.totalRows) {
          const rowCountSuffix = humanNumber(totalRows).replace(/,/g, "");

          const tableName = `${tableConfig.tableBase}_${rowCountSuffix}`;
          const fullTableName = `${tableConfig.catalog}.${tableConfig.schema}.${tableName}`;

          await processTable(
            client,
            tableConfig,
            queryConfig,
            tableName,
            fullTableName,
            querySet.name,
            querySet.iterations,
            querySet.concurrencySimulationStreams
          );
        }
      } else if (queryConfig.type === "severalTables") {
        // Handle multi-table configuration
        await processMultiTable(
          client,
          queryConfig,
          querySet.name,
          querySet.iterations,
          querySet.concurrencySimulationStreams
        );
      }
    }
  }

  console.log(`\n✅ Completed performance tests for all query sets!`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
