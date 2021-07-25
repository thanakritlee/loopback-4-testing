import {BindingScope, injectable} from '@loopback/core'
import {model, property} from '@loopback/repository'

export interface ICalculatorService {
  addition(args: number[]): CalculationResult
  subtraction(args: number[]): CalculationResult
  multiplication(args: number[]): CalculationResult
  division(args: number[]): CalculationResult
}

@model()
export class CalculationResult {
  @property()
  result: number
}

@injectable({scope: BindingScope.APPLICATION})
export class CalculatorService implements ICalculatorService {
  constructor() {}

  public addition(args: number[]): CalculationResult {
    if (args.length > 0) {
      const result = args.reduce((acc, cur) => {
        acc += cur
        return acc
      })
      return {
        result: result,
      }
    } else {
      return {
        result: 0,
      }
    }
  }
  public subtraction(args: number[]): CalculationResult {
    if (args.length > 0) {
      const result = args.reduce((acc, cur) => {
        acc -= cur
        return acc
      })
      return {
        result: result,
      }
    } else {
      return {
        result: 0,
      }
    }
  }
  public multiplication(args: number[]): CalculationResult {
    if (args.length > 0) {
      const result = args.reduce((acc, cur) => {
        acc *= cur
        return acc
      })
      return {
        result: result,
      }
    } else {
      return {
        result: 0,
      }
    }
  }
  public division(args: number[]): CalculationResult {
    if (args.length > 0) {
      const result = args.reduce((acc, cur) => {
        if (cur === 0) {
          throw new Error('Invalid calculation arguments. Division by 0.')
        }
        acc /= cur
        return acc
      })
      return {
        result: result,
      }
    } else {
      return {
        result: 0,
      }
    }
  }
}
