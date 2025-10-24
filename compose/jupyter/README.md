# Jupyter Service for Splink with Spark Backend

This directory contains the configuration and sample notebook for running Splink with Spark backend against Iceberg tables stored in MinIO via Nessie catalog.

## Files

- `spark-defaults.conf` - Spark configuration for Iceberg and MinIO integration
- `splink_iceberg_demo.ipynb` - Sample Jupyter notebook demonstrating Splink usage

## Usage

1. Start the services:
   ```bash
   cd /home/damir/prjs/hands-on-iceberg-query-perf/compose
   docker-compose up -d
   ```

2. Wait for all services to be healthy, then access Jupyter:
   - Open http://localhost:8888 in your browser
   - No password required (configured for development)

3. Open the `splink_iceberg_demo.ipynb` notebook to get started

## Configuration

The Jupyter service is configured with:

- **Dependencies**: Depends on Nessie and MinIO services
- **AWS Variables**: Pre-configured for MinIO access
- **Spark Configuration**: Iceberg and S3 integration
- **Port**: 8888 (Jupyter notebook interface)
- **Volume**: Persistent storage for notebooks in `jupyter-data` volume

## Environment Variables

The service automatically sets these AWS environment variables for MinIO access:
- `AWS_ACCESS_KEY_ID`: minio
- `AWS_SECRET_ACCESS_KEY`: minio12345
- `AWS_DEFAULT_REGION`: us-east-1
- `AWS_ENDPOINT_URL`: http://minio:9000
- `AWS_ENDPOINT_URL_S3`: http://minio:9000

## Spark Configuration

The Spark session is pre-configured with:
- Iceberg extensions
- Nessie catalog integration
- MinIO S3 endpoint configuration
- Optimized memory settings for data processing

## Testing Splink

The sample notebook demonstrates:
1. Installing required packages (splink[spark], pyiceberg)
2. Setting up Spark session with Iceberg support
3. Listing available catalogs and tables
4. Creating sample data for testing
5. Configuring Splink for deduplication
6. Training the model
7. Getting predictions and clusters
8. Saving results back to Iceberg tables

## Customization

To use with your actual Iceberg tables:
1. Replace sample data with: `df = spark.sql("SELECT * FROM nessie.your_database.your_table")`
2. Adjust blocking rules and comparisons based on your data schema
3. Save results using: `results.writeTo("nessie.your_database.results_table").createOrReplace()`
