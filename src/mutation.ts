/* istanbul ignore file */
import got from 'got'
import debug from 'debug'
import { run } from './modules/runner'
import { GotQL } from './types/generics'
import { QueryType } from './types/QueryType'
import { UserOptions } from './types/UserOptions'
const info = debug('gotql:info')

/**
 * Performs a mutation on the specified GraphQL endpoint
 *
 * @param {string} endPoint GraphQL Endpoint
 * @param {queryType} query The JSON gotQL query object
 * @param {userOpts} [options] User options
 * @public
 * @return {Promise<any>} A response object containing all the data
 */
export function mutation (endPoint: string, query: QueryType, options?: UserOptions): Promise<any> {
  const client = options && options.gotInstance ? options.gotInstance : got
  info('Starting a new mutation')
  return run(endPoint, query, GotQL.ExecutionType.MUTATION, client, options)
}
