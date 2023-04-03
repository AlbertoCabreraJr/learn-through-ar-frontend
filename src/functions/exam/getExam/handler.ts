import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway'
import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { connectToDatabase } from 'src/config/connectToDatabase'
import getExamService from 'src/services/exam/getExamService'
import { getResponseHeaders } from 'src/util'

const getExam: ValidatedEventAPIGatewayProxyEvent<{}> = async (event) => {
  try {
    const db = await connectToDatabase()
    const exam = await getExamService({ db, examId: event.pathParameters.id })

    return formatJSONResponse({
      statusCode: 200,
      headers: getResponseHeaders(),
      body: exam
    })
  } catch (error) {
    return formatJSONResponse({
      statusCode: error.statusCode ? error.statusCode : 500,
      headers: getResponseHeaders(),
      body: { error: error.name ? error.name : 'Exception', message: error.message ? error.message : 'Unknown error' }
    })
  }
}

export const main = middyfy(getExam)
