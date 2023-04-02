import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway'
import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { getResponseHeaders } from 'src/util'
import schema from './schema'
const aws4 = require('aws4')

const signer: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event, context) => {
  try {
    const request = event.body.request
    const credentials = event.body.credentials

    const signedRequest = aws4.sign(request, credentials)
    return formatJSONResponse({
      statusCode: 200,
      headers: getResponseHeaders(),
      body: signedRequest.headers
    })
  } catch (error) {
    console.error(error)
    return formatJSONResponse({
      statusCode: error.statusCode ? error.statusCode : 500,
      headers: getResponseHeaders(),
      body: { error: error.name ? error.name : 'Exception', message: error.message ? error.message : 'Unknown error' }
    })
  }
}

export const main = middyfy(signer)
