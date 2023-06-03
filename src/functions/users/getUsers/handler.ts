import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway'
import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { connectToDatabase } from 'src/config/connectToDatabase'
import { getResponseHeaders } from 'src/util'

const getCourse: ValidatedEventAPIGatewayProxyEvent<{}> = async (event) => {
  try {
    const db = await connectToDatabase()
    const users = await db.model('User').find({})

    return formatJSONResponse({
      statusCode: 200,
      headers: getResponseHeaders(),
      body: users
    })
  } catch (error) {
    return formatJSONResponse({
      statusCode: error.statusCode ? error.statusCode : 500,
      headers: getResponseHeaders(),
      body: { error: error.name ? error.name : 'Exception', message: error.message ? error.message : 'Unknown error' }
    })
  }
}

export const main = middyfy(getCourse)
