import {Collection} from '../../../models/collection.model'
import {CollectionService} from '../../../services'

// A class which mocks the Collection class by implementing the
// CollectionService interface.
// The implemented functions are simply mocked to do nothing.
export class MockCollectionService implements CollectionService {
  public async getAllCollection(): Promise<Collection[]> {
    return []
  }
  public async createCollection(body: Collection): Promise<Collection> {
    return body
  }
  public async getCollection(id: number): Promise<Collection> {
    return {
      name: 'string',
      item_id: 1,
    }
  }
  public async updateCollection(id: number, body: Collection): Promise<void> {}
  public async deleteCollection(id: number): Promise<void> {}
}
