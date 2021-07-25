import {Entity, model, property} from '@loopback/repository'

@model({
  name: 'item',
})
export class Item extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: number

  @property({
    type: 'string',
  })
  name: string

  @property({
    type: 'string',
  })
  colour: string

  constructor(data?: Partial<Item>) {
    super(data)
  }
}

export interface ItemRelations {}

export type ItemWithRelations = Item & ItemRelations
