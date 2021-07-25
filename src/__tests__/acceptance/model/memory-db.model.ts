import {
  IsolationLevel,
  juggler,
  Options,
  Transaction,
} from '@loopback/repository'

/**
 * A mock class of the Transaction class. Use in conjunction with the
 * `MemoryDataSource` class.
 */
class MemoryDataSourceTransaction implements juggler.Transaction {
  id: string
  public async commit(): Promise<void> {}

  public async rollback(): Promise<void> {}

  public isActive(): boolean {
    return true
  }
}

/**
 * A datasource class which extends from the memory datasource class use for testing.
 * The class implements the method `beginTransaction` to mock the ability to do
 * SQL transactions like the production database PostgreSQL can.
 */
export class MemoryDataSource extends juggler.DataSource {
  constructor(settings: Options) {
    super(settings)
  }
  public async beginTransaction(
    options?: IsolationLevel | Options,
  ): Promise<Transaction> {
    return new MemoryDataSourceTransaction()
  }
}
