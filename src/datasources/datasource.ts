import {juggler} from '@loopback/repository'
import {Loopback4TestingApplication} from '../application'

export async function initDatasource(
  app: Loopback4TestingApplication,
): Promise<void> {
  if (process.env.NODE_ENV === 'production') {
    await postgreSQLDataSource(app)
  }
}

async function postgreSQLDataSource(
  app: Loopback4TestingApplication,
): Promise<void> {
  const dsName = 'PostgreSQL'
  const datasource = new juggler.DataSource({
    name: 'PostgreSQL',
    connector: 'postgresql',
    url: '',
    host: process.env.DATABASE_SERVER,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB_NAME,
  })
  app.dataSource(datasource, dsName)
}
