import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway'
import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { connectToDatabase } from 'src/config/connectToDatabase'
import updateExamService from 'src/services/exam/updateExamService'
import { getResponseHeaders } from 'src/util'
import schema from './schema'

const updateExam: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  try {
    const db = await connectToDatabase()
    await updateExamService({ db, body: event.body, examId: event.pathParameters.id })

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

export const main = middyfy(updateExam)
