import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway'
import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { connectToDatabase } from 'src/config/connectToDatabase'
import getTopicService from 'src/services/topic/getTopicService'
import { getResponseHeaders } from 'src/util'

const getTopic: ValidatedEventAPIGatewayProxyEvent<{}> = async (event) => {
  try {
    const db = await connectToDatabase()
    const topic = await getTopicService({ db, topicId: event.pathParameters.id })

    return formatJSONResponse({
      statusCode: 200,
      headers: getResponseHeaders(),
      body: topic
    })
  } catch (error) {
    return formatJSONResponse({
      statusCode: error.statusCode ? error.statusCode : 500,
      headers: getResponseHeaders(),
      body: { error: error.name ? error.name : 'Exception', message: error.message ? error.message : 'Unknown error' }
    })
  }
}

export const main = middyfy(getTopic)
