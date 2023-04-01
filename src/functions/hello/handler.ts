import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway'
import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { connectToDatabase } from 'src/config/connectToDatabase'
import { getResponseHeaders } from 'src/util'

import schema from './schema'

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const db = await connectToDatabase()

  return formatJSONResponse({
    statusCode: 200,
    headers: getResponseHeaders(),
    body: {
      message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`
    }
  })
}

export const main = middyfy(hello)
