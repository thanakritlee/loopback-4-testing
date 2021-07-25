import {inject} from '@loopback/core'
import {getModelSchemaRef, HttpErrors, post, requestBody} from '@loopback/rest'
import {CalculationResult, ICalculatorService} from '../services'

export class CalculatorController {
  constructor(
    @inject('services.CalculatorService')
    private calculatorService: ICalculatorService,
  ) {}

  @post('/calculator/addition', {
    responses: {
      '200': {
        description: 'CalculationResult model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(CalculationResult)},
        },
      },
    },
  })
  async addition(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: getModelSchemaRef(Number),
          },
        },
      },
    })
    calculationArguments: number[],
  ): Promise<CalculationResult> {
    return this.calculatorService.addition(calculationArguments)
  }

  @post('/calculator/subtraction', {
    responses: {
      '200': {
        description: 'CalculationResult model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(CalculationResult)},
        },
      },
    },
  })
  async subtraction(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: getModelSchemaRef(Number),
          },
        },
      },
    })
    calculationArguments: number[],
  ): Promise<CalculationResult> {
    return this.calculatorService.subtraction(calculationArguments)
  }

  @post('/calculator/multiplication', {
    responses: {
      '200': {
        description: 'CalculationResult model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(CalculationResult)},
        },
      },
    },
  })
  async multiplication(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: getModelSchemaRef(Number),
          },
        },
      },
    })
    calculationArguments: number[],
  ): Promise<CalculationResult> {
    return this.calculatorService.multiplication(calculationArguments)
  }

  @post('/calculator/division', {
    responses: {
      '200': {
        description: 'CalculationResult model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(CalculationResult)},
        },
      },
    },
  })
  async division(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: getModelSchemaRef(Number),
          },
        },
      },
    })
    calculationArguments: number[],
  ): Promise<CalculationResult> {
    try {
      return this.calculatorService.division(calculationArguments)
    } catch (error) {
      throw new HttpErrors.UnprocessableEntity(error.message)
    }
  }
}
