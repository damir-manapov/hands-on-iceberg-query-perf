import os
os.environ['AWS_ACCESS_KEY_ID'] = 'minio'
os.environ['AWS_SECRET_ACCESS_KEY'] = 'minio12345'
os.environ['AWS_DEFAULT_REGION'] = 'us-east-1'
os.environ['AWS_ENDPOINT_URL'] = 'http://minio:9000'
os.environ['AWS_ENDPOINT_URL_S3'] = 'http://minio:9000'

from pyspark.sql import SparkSession
print('Creating Spark session with basic Iceberg...')

spark = SparkSession.builder     .appName('IcebergBasicTest')     .config('spark.sql.extensions', 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions')     .config('spark.sql.catalog.spark_catalog', 'org.apache.iceberg.spark.SparkCatalog')     .config('spark.sql.catalog.spark_catalog.type', 'hadoop')     .config('spark.sql.catalog.spark_catalog.warehouse', 's3a://warehouse/')     .config('spark.sql.catalog.spark_catalog.io-impl', 'org.apache.iceberg.aws.s3.S3FileIO')     .config('spark.sql.catalog.spark_catalog.s3.endpoint', 'http://minio:9000')     .config('spark.sql.catalog.spark_catalog.s3.path-style-access', 'true')     .config('spark.hadoop.fs.s3a.access.key', 'minio')     .config('spark.hadoop.fs.s3a.secret.key', 'minio12345')     .config('spark.hadoop.fs.s3a.endpoint', 'http://minio:9000')     .config('spark.hadoop.fs.s3a.path.style.access', 'true')     .config('spark.hadoop.fs.s3a.impl', 'org.apache.hadoop.fs.s3a.S3AFileSystem')     .config('spark.hadoop.fs.s3a.connection.ssl.enabled', 'false')     .getOrCreate()

print('✅ Spark session created successfully!')
print(f'Spark version: {spark.version}')

print('Testing catalogs...')
catalogs = spark.sql('SHOW CATALOGS').collect()
print('Available catalogs:')
for row in catalogs:
    print(f'  - {row[0]}')

print('Testing Iceberg extensions...')
try:
    # Try to create a simple table
    spark.sql('CREATE TABLE IF NOT EXISTS test_table (id int, name string) USING iceberg')
    print('✅ Iceberg table created successfully!')
    
    # Show tables
    tables = spark.sql('SHOW TABLES').collect()
    print('Tables in spark_catalog:')
    for row in tables:
        print(f'  - {row[1]}')
        
except Exception as e:
    print(f'❌ Iceberg table creation failed: {e}')

spark.stop()
