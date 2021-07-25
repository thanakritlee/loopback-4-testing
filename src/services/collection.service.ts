import {BindingScope, inject, injectable, Provider} from '@loopback/core'
import {getService} from '@loopback/service-proxy'
import {CollectionDataSource} from '../datasources'
import {Collection} from '../models/collection.model'

export interface CollectionService {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  getAllCollection(): Promise<Collection[]>
  createCollection(body: Collection): Promise<Collection>
  getCollection(id: number): Promise<Collection>
  updateCollection(id: number, body: Collection): Promise<void>
  deleteCollection(id: number): Promise<void>
}

@injectable({scope: BindingScope.APPLICATION})
export class CollectionProvider implements Provider<CollectionService> {
  constructor(
    // Collection must match the name property in the datasource json file
    @inject('datasources.Collection')
    protected dataSource: CollectionDataSource = new CollectionDataSource(),
  ) {}

  value(): Promise<CollectionService> {
    return getService(this.dataSource)
  }
}
