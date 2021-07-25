import {expect} from '@loopback/testlab'
import {CalculatorService} from '../../services'

describe('Class: Calculator', () => {
  let calculatorService: CalculatorService

  before('setupApplication', async () => {
    calculatorService = new CalculatorService()
  })

  it('Addition with 0 arguments: expect to get a result of 0.', async () => {
    const result = calculatorService.addition([])
    expect(result).to.deepEqual({
      result: 0,
    })
  })

  it('Subtraction with 0 arguments: expect to get a result of 0.', async () => {
    const result = calculatorService.subtraction([])
    expect(result).to.deepEqual({
      result: 0,
    })
  })

  it('Multiplication with 0 arguments: expect to get a result of 0.', async () => {
    const result = calculatorService.multiplication([])
    expect(result).to.deepEqual({
      result: 0,
    })
  })

  it('Division with 0 arguments: expect to get a result of 0.', async () => {
    const result = calculatorService.division([])
    expect(result).to.deepEqual({
      result: 0,
    })
  })

  it('Addition with 2 arguments.', async () => {
    const result = calculatorService.addition([1, 2])
    expect(result).to.deepEqual({
      result: 3,
    })
  })

  it('Subtraction with 2 arguments', async () => {
    const result = calculatorService.subtraction([1, 2])
    expect(result).to.deepEqual({
      result: -1,
    })
  })

  it('Multiplication with 2 arguments', async () => {
    const result = calculatorService.multiplication([1, 2])
    expect(result).to.deepEqual({
      result: 2,
    })
  })

  it('Division with 2 arguments.', async () => {
    const result = calculatorService.division([1, 2])
    expect(result).to.deepEqual({
      result: 0.5,
    })
  })

  it('Addition with 3 arguments.', async () => {
    const result = calculatorService.addition([1, 2, 3])
    expect(result).to.deepEqual({
      result: 6,
    })
  })

  it('Subtraction with 3 arguments', async () => {
    const result = calculatorService.subtraction([1, 2, 3])
    expect(result).to.deepEqual({
      result: -4,
    })
  })

  it('Multiplication with 3 arguments', async () => {
    const result = calculatorService.multiplication([1, 2, 3])
    expect(result).to.deepEqual({
      result: 6,
    })
  })

  it('Division with 3 arguments.', async () => {
    const result = calculatorService.division([1, 2, 3])
    expect(result).to.deepEqual({
      result: 1 / 2 / 3,
    })
  })

  it('Division by 0, expect to get an error.', async () => {
    expect(() => calculatorService.division([1, 2, 3, 0])).to.throwError(
      `Invalid calculation arguments. Division by 0.`,
    )
  })
})
