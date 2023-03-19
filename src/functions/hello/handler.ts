import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway'
import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { getResponseHeaders } from 'src/util'

import schema from './schema'

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  return formatJSONResponse({
    statusCode: 200,
    headers: getResponseHeaders(),
    body: {
      message: `Hello ${event.body.name}, welcome to the exciting Serverless world! fuck yeah`
    }
  })
}

export const main = middyfy(hello)
