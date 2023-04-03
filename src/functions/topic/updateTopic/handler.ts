import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway'
import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { connectToDatabase } from 'src/config/connectToDatabase'
import updateTopicService from 'src/services/topic/updateTopicService'
import { getResponseHeaders } from 'src/util'
import schema from './schema'

const updateModule: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  try {
    console.log(event.body)
    const db = await connectToDatabase()
    await updateTopicService({ db, body: event.body, topicId: event.pathParameters.id })

    return formatJSONResponse({
      statusCode: 200,
      headers: getResponseHeaders(),
      body: {}
    })
  } catch (error) {
    return formatJSONResponse({
      statusCode: error.statusCode ? error.statusCode : 500,
      headers: getResponseHeaders(),
      body: { error: error.name ? error.name : 'Exception', message: error.message ? error.message : 'Unknown error' }
    })
  }
}

export const main = middyfy(updateModule)
