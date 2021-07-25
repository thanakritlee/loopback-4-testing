import {
  Client,
  createRestAppClient,
  givenHttpServerConfig,
} from '@loopback/testlab'
import {Loopback4TestingApplication} from '../..'
import {MemoryDataSource, MockCollectionService} from './model'

export async function setupApplication(): Promise<AppWithClient> {
  const restConfig = givenHttpServerConfig({
    // Customize the server configuration here.
    // Empty values (undefined, '') will be ignored by the helper.
    //
    // host: process.env.HOST,
    // port: +process.env.PORT,
  })

  const app = new Loopback4TestingApplication({
    rest: restConfig,
  })

  // Create a memory based DB and bind it to the PostgreSQL datasource.
  // Use memory db instead of postgreSQL db for easier and efficient testing.
  const datasourceSQL = new MemoryDataSource({
    name: 'testdb',
    connector: 'memory',
    localStorage: '',
    file: null,
  })
  app.bind('datasources.PostgreSQL').to(datasourceSQL)

  await app.boot()
  await app.migrateSchema()
  await app.start()

  const client = createRestAppClient(app)

  return {app, client}
}

export async function mockServices(
  app: Loopback4TestingApplication,
): Promise<void> {
  // Bind the service that makes external REST call to a mock service.
  app.bind('services.Collection').toClass(MockCollectionService)
}

export interface AppWithClient {
  app: Loopback4TestingApplication
  client: Client
}
