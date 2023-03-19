import type { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from 'aws-lambda'
import type { FromSchema } from 'json-schema-to-ts'

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, 'body'> & { body: FromSchema<S> }
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<ValidatedAPIGatewayProxyEvent<S>, APIGatewayProxyResult>

export type Response = {
  statusCode: number
  headers: { [header: string]: string | number | boolean }
  body: object
}

export const formatJSONResponse = (response: Response): APIGatewayProxyResult => {
  return {
    ...response,
    body: JSON.stringify(response.body)
  }
}
