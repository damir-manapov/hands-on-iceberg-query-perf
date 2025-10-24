import os
os.environ['AWS_ACCESS_KEY_ID'] = 'minio'
os.environ['AWS_SECRET_ACCESS_KEY'] = 'minio12345'
os.environ['AWS_DEFAULT_REGION'] = 'us-east-1'
os.environ['AWS_ENDPOINT_URL'] = 'http://minio:9000'
os.environ['AWS_ENDPOINT_URL_S3'] = 'http://minio:9000'

from pyspark.sql import SparkSession
print('Creating Spark session...')

spark = SparkSession.builder.appName('Test').getOrCreate()
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
