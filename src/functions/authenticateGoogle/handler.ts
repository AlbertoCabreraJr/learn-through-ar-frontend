import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway'
import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { getIdToken, getResponseHeaders } from 'src/util'
import { CognitoIdentity } from 'aws-sdk'
import jwtDecode from 'jwt-decode'
import createUser from 'src/services/user/createUser'
import { connectToDatabase } from 'src/config/connectToDatabase'

const cognitoIdentity = new CognitoIdentity()
const identityPoolId = process.env.COGNITO_IDENTITY_POOL_ID

const authenticateGoogle: ValidatedEventAPIGatewayProxyEvent<{}> = async (event, context) => {
  try {
    const idToken = getIdToken(event.headers)
    let params: any

    params = {
      IdentityPoolId: identityPoolId,
      Logins: {
        'accounts.google.com': idToken
      }
    }

    let data = await cognitoIdentity.getId(params).promise()
    params = {
      IdentityId: data.IdentityId,
      Logins: {
        'accounts.google.com': idToken
      }
    }

    data = await cognitoIdentity.getCredentialsForIdentity(params).promise()
    let decoded = jwtDecode(idToken)
    // @ts-ignore
    data.email = decoded.email
    // @ts-ignore
    data.name = decoded.name

    // Should be separate on its own route
    const db = await connectToDatabase()

    // @ts-ignore
    const user = await db.model('User').findOne({ email: data.email })
    if (!user) {
      // @ts-ignore
      await createUser({ db, user: { email: data.email, name: data.name } })
    }

    return formatJSONResponse({
      statusCode: 200,
      headers: getResponseHeaders(),
      body: data
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

export const main = middyfy(authenticateGoogle)
