import {Count} from '@loopback/repository'
import {Client, expect} from '@loopback/testlab'
import {Loopback4TestingApplication} from '../../application'
import {Item} from '../../models'
import {mockServices, setupApplication} from './test-helper'

describe('Acceptance: Item Controller', () => {
  let app: Loopback4TestingApplication
  let client: Client

  before('setupApplication', async () => {
    ;({app, client} = await setupApplication())

    // Mock any services that won't be use in testing this applicaton.
    await mockServices(app)
  })

  after(async () => {
    // Drop all tables in the db to start a new.
    await app.stop()
  })

  it('invokes GET /item/count: expect there to be 0 count', async () => {
    const res = await client.get(`/item/count`).expect(200)

    const expectedRes: Count = {
      count: 0,
    }

    expect(res.body).to.deepEqual(expectedRes)
  })

  it('invokes GET /item: expect there to be 0 item', async () => {
    const res = await client.get(`/item`).expect(200)

    const expectedRes: Item[] = []

    expect(res.body).to.deepEqual(expectedRes)
  })

  it('invokes POST /item: expect to get the created item', async () => {
    const res = await client
      .post(`/item`)
      .expect(200)
      .send(<Partial<Item>>{
        name: 'item_1',
        colour: 'blue',
      })

    const expectedRes: Partial<Item> = {
      id: 1,
      name: 'item_1',
      colour: 'blue',
    }

    expect(res.body).to.deepEqual(expectedRes)
  })
})
