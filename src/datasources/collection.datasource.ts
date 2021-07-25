import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core'
import {juggler} from '@loopback/repository'

const endpoint: string =
  process.env.COLLECTION_ENDPOINT ?? 'http://localhost:3001'

const config = {
  name: 'Collection',
  connector: 'rest',
  baseURL: '',
  crud: true,
  operations: [
    {
      template: {
        method: 'GET',
        url: `${endpoint}/collection`,
      },
      functions: {
        getAllCollection: [],
      },
    },
    {
      template: {
        method: 'POST',
        url: `${endpoint}/collection`,
        headers: {
          'content-type': 'application/json',
        },
        body: '{body:object}',
      },
      functions: {
        createCollection: ['body'],
      },
    },
    {
      template: {
        method: 'GET',
        url: `${endpoint}/collection/{id}`,
      },
      functions: {
        getCollection: ['id'],
      },
    },
    {
      template: {
        method: 'PUT',
        url: `${endpoint}/collection/{id}`,
        headers: {
          'content-type': 'application/json',
        },
        body: '{body:object}',
      },
      functions: {
        updateCollection: ['id', 'body'],
      },
    },
    {
      template: {
        method: 'DELETE',
        url: `${endpoint}/collection/{id}`,
      },
      functions: {
        deleteCollection: ['id'],
      },
    },
  ],
}

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class CollectionDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'Collection'
  static readonly defaultConfig = config

  constructor(
    @inject('datasources.config.Collection', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig)
  }
}
