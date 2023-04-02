import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway'
import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { connectToDatabase } from 'src/config/connectToDatabase'
import getCourseService from 'src/services/course/getCourseService'
import { getResponseHeaders } from 'src/util'

const getCourse: ValidatedEventAPIGatewayProxyEvent<{}> = async (event) => {
  try {
    const db = await connectToDatabase()
    const course = await getCourseService({ db, courseId: event.pathParameters.id })

    return formatJSONResponse({
      statusCode: 200,
      headers: getResponseHeaders(),
      body: course
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
