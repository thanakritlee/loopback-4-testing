import {inject} from '@loopback/core'
import {DefaultCrudRepository, juggler} from '@loopback/repository'
import {Item, ItemRelations} from '../models'

export class ItemRepository extends DefaultCrudRepository<
  Item,
  typeof Item.prototype.id,
  ItemRelations
> {
  constructor(
    @inject('datasources.PostgreSQL')
    dataSource: juggler.DataSource,
  ) {
    super(Item, dataSource)
  }
}
