import {Client, expect} from '@loopback/testlab'
import {Loopback4TestingApplication} from '../../application'
import {CalculationResult} from '../../services'
import {setupApplication} from './test-helper'

describe('Acceptance: Calculator Controller', () => {
  let app: Loopback4TestingApplication
  let client: Client

  before('setupApplication', async () => {
    ;({app, client} = await setupApplication())
  })

  after(async () => {
    // Drop all tables in the db to start a new.
    await app.stop()
  })

  it('invokes POST /calculator/addition: given no calculation arguments in the request body, expect to receive an error', async () => {
    const res = await client.post(`/calculator/addition`).expect(422)

    const expectedRes = {
      error: {
        code: 'VALIDATION_FAILED',
        details: [
          {
            code: 'type',
            info: {
              type: 'array',
            },
            message: 'should be array',
            path: '',
          },
        ],
        message:
          'The request body is invalid. See error object `details` property for more info.',
        name: 'UnprocessableEntityError',
        statusCode: 422,
      },
    }

    expect(res.body).to.deepEqual(expectedRes)
  })

  it('invokes POST /calculator/subtraction: given no calculation arguments in the request body, expect to receive an error', async () => {
    const res = await client.post(`/calculator/subtraction`).expect(422)

    const expectedRes = {
      error: {
        code: 'VALIDATION_FAILED',
        details: [
          {
            code: 'type',
            info: {
              type: 'array',
            },
            message: 'should be array',
            path: '',
          },
        ],
        message:
          'The request body is invalid. See error object `details` property for more info.',
        name: 'UnprocessableEntityError',
        statusCode: 422,
      },
    }

    expect(res.body).to.deepEqual(expectedRes)
  })

  it('invokes POST /calculator/multiplication: given no calculation arguments in the request body, expect to receive an error', async () => {
    const res = await client.post(`/calculator/multiplication`).expect(422)

    const expectedRes = {
      error: {
        code: 'VALIDATION_FAILED',
        details: [
          {
            code: 'type',
            info: {
              type: 'array',
            },
            message: 'should be array',
            path: '',
          },
        ],
        message:
          'The request body is invalid. See error object `details` property for more info.',
        name: 'UnprocessableEntityError',
        statusCode: 422,
      },
    }

    expect(res.body).to.deepEqual(expectedRes)
  })

  it('invokes POST /calculator/division: given no calculation arguments in the request body, expect to receive an error', async () => {
    const res = await client.post(`/calculator/division`).expect(422)

    const expectedRes = {
      error: {
        code: 'VALIDATION_FAILED',
        details: [
          {
            code: 'type',
            info: {
              type: 'array',
            },
            message: 'should be array',
            path: '',
          },
        ],
        message:
          'The request body is invalid. See error object `details` property for more info.',
        name: 'UnprocessableEntityError',
        statusCode: 422,
      },
    }

    expect(res.body).to.deepEqual(expectedRes)
  })

  it('invokes POST /calculator/addition: given an empty array, 0 calculation argument, expect to get a result of 0', async () => {
    const res = await client.post(`/calculator/addition`).send([]).expect(200)

    const expectedRes: CalculationResult = {
      result: 0,
    }

    expect(res.body).to.deepEqual(expectedRes)
  })

  it('invokes POST /calculator/subtraction: given an empty array, 0 calculation argument, expect to get a result of 0', async () => {
    const res = await client
      .post(`/calculator/subtraction`)
      .send([])
      .expect(200)

    const expectedRes: CalculationResult = {
      result: 0,
    }

    expect(res.body).to.deepEqual(expectedRes)
  })

  it('invokes POST /calculator/multiplication: given an empty array, 0 calculation argument, expect to get a result of 0', async () => {
    const res = await client
      .post(`/calculator/multiplication`)
      .send([])
      .expect(200)

    const expectedRes: CalculationResult = {
      result: 0,
    }

    expect(res.body).to.deepEqual(expectedRes)
  })

  it('invokes POST /calculator/division: given an empty array, 0 calculation argument, expect to get a result of 0', async () => {
    const res = await client.post(`/calculator/division`).send([]).expect(200)

    const expectedRes: CalculationResult = {
      result: 0,
    }

    expect(res.body).to.deepEqual(expectedRes)
  })

  it('invokes POST /calculator/addition: given an array of 2 calculation arguments, expect to get a result', async () => {
    const res = await client
      .post(`/calculator/addition`)
      .send([1, 2])
      .expect(200)

    const expectedRes: CalculationResult = {
      result: 3,
    }

    expect(res.body).to.deepEqual(expectedRes)
  })

  it('invokes POST /calculator/subtraction: given an array of 2 calculation arguments, expect to get a result', async () => {
    const res = await client
      .post(`/calculator/subtraction`)
      .send([1, 2])
      .expect(200)

    const expectedRes: CalculationResult = {
      result: -1,
    }

    expect(res.body).to.deepEqual(expectedRes)
  })

  it('invokes POST /calculator/multiplication: given an array of 2 calculation arguments, expect to get a result', async () => {
    const res = await client
      .post(`/calculator/multiplication`)
      .send([1, 2])
      .expect(200)

    const expectedRes: CalculationResult = {
      result: 2,
    }

    expect(res.body).to.deepEqual(expectedRes)
  })

  it('invokes POST /calculator/division: given an array of 2 calculation arguments, expect to get a result', async () => {
    const res = await client
      .post(`/calculator/division`)
      .send([1, 2])
      .expect(200)

    const expectedRes: CalculationResult = {
      result: 0.5,
    }

    expect(res.body).to.deepEqual(expectedRes)
  })

  it('invokes POST /calculator/addition: given an array of 3 calculation arguments, expect to get a result', async () => {
    const res = await client
      .post(`/calculator/addition`)
      .send([1, 2, 3])
      .expect(200)

    const expectedRes: CalculationResult = {
      result: 6,
    }

    expect(res.body).to.deepEqual(expectedRes)
  })

  it('invokes POST /calculator/subtraction: given an array of 3 calculation arguments, expect to get a result', async () => {
    const res = await client
      .post(`/calculator/subtraction`)
      .send([1, 2, 3])
      .expect(200)

    const expectedRes: CalculationResult = {
      result: -4,
    }

    expect(res.body).to.deepEqual(expectedRes)
  })

  it('invokes POST /calculator/multiplication: given an array of 3 calculation arguments, expect to get a result', async () => {
    const res = await client
      .post(`/calculator/multiplication`)
      .send([1, 2, 3])
      .expect(200)

    const expectedRes: CalculationResult = {
      result: 6,
    }

    expect(res.body).to.deepEqual(expectedRes)
  })

  it('invokes POST /calculator/division: given an array of 3 calculation arguments, expect to get a result', async () => {
    const res = await client
      .post(`/calculator/division`)
      .send([1, 2, 3])
      .expect(200)

    const expectedRes: CalculationResult = {
      result: 1 / 2 / 3,
    }

    expect(res.body).to.deepEqual(expectedRes)
  })

  it('invokes POST /calculator/division: given an array of 4 calculation arguments where a one of the argument which is a denominator is a zero, expect to receive an error', async () => {
    const res = await client
      .post(`/calculator/division`)
      .send([1, 2, 3, 0])
      .expect(422)

    const expectedRes = {
      error: {
        message: 'Invalid calculation arguments. Division by 0.',
        name: 'UnprocessableEntityError',
        statusCode: 422,
      },
    }

    expect(res.body).to.deepEqual(expectedRes)
  })

  it('invokes POST /calculator/division: given an array of 4 calculation arguments where a numerator is 0, expect to get a result', async () => {
    const res = await client
      .post(`/calculator/division`)
      .send([0, 1, 2, 3])
      .expect(200)

    const expectedRes: CalculationResult = {
      result: 0,
    }

    expect(res.body).to.deepEqual(expectedRes)
  })
})
