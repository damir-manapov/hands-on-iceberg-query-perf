import os
os.environ['AWS_ACCESS_KEY_ID'] = 'minio'
os.environ['AWS_SECRET_ACCESS_KEY'] = 'minio12345'
os.environ['AWS_DEFAULT_REGION'] = 'us-east-1'
os.environ['AWS_ENDPOINT_URL'] = 'http://minio:9000'
os.environ['AWS_ENDPOINT_URL_S3'] = 'http://minio:9000'

from pyspark.sql import SparkSession
print('Creating Spark session with explicit Nessie configuration...')

spark = SparkSession.builder     .appName('NessieTest')     .config('spark.sql.extensions', 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions,org.projectnessie.spark.extensions.NessieSparkSessionExtensions')     .config('spark.sql.catalog.nessie', 'org.apache.iceberg.spark.SparkCatalog')     .config('spark.sql.catalog.nessie.catalog-impl', 'org.apache.iceberg.nessie.NessieCatalog')     .config('spark.sql.catalog.nessie.uri', 'http://nessie:19120/api/v2')     .config('spark.sql.catalog.nessie.ref', 'main')     .config('spark.sql.catalog.nessie.warehouse', 's3a://warehouse/')     .config('spark.sql.catalog.nessie.io-impl', 'org.apache.iceberg.aws.s3.S3FileIO')     .config('spark.sql.catalog.nessie.s3.endpoint', 'http://minio:9000')     .config('spark.sql.catalog.nessie.s3.path-style-access', 'true')     .config('spark.hadoop.fs.s3a.access.key', 'minio')     .config('spark.hadoop.fs.s3a.secret.key', 'minio12345')     .config('spark.hadoop.fs.s3a.endpoint', 'http://minio:9000')     .config('spark.hadoop.fs.s3a.path.style.access', 'true')     .config('spark.hadoop.fs.s3a.impl', 'org.apache.hadoop.fs.s3a.S3AFileSystem')     .config('spark.hadoop.fs.s3a.connection.ssl.enabled', 'false')     .getOrCreate()

print('✅ Spark session created successfully!')
print(f'Spark version: {spark.version}')

print('Testing catalogs...')
catalogs = spark.sql('SHOW CATALOGS').collect()
print('Available catalogs:')
for row in catalogs:
    print(f'  - {row[0]}')

# Check if nessie is available
nessie_found = any(row[0] == 'nessie' for row in catalogs)
if nessie_found:
    print('✅ Nessie catalog found!')
    try:
        databases = spark.sql('SHOW DATABASES IN nessie').collect()
        print('Databases in nessie:')
        for row in databases:
            print(f'  - {row[0]}')
    except Exception as e:
        print(f'Error accessing nessie: {e}')
else:
    print('❌ Nessie catalog not found')

spark.stop()
