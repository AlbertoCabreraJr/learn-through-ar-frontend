import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway'
import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { getCode, getResponseHeaders } from 'src/util'
import { CognitoIdentity } from 'aws-sdk'
import jwtDecode from 'jwt-decode'
import axios from 'axios'

type OAuthResult = {
  access_token: string
  expires_in: number
  id_token: string
  scope: string
  token_type: string
  refresh_token?: string
}

const cognitoIdentity = new CognitoIdentity()
const identityPoolId = process.env.COGNITO_IDENTITY_POOL_ID
const authenticateGoogle: ValidatedEventAPIGatewayProxyEvent<{}> = async (event, context) => {
  try {
    const code = getCode(event.headers)
    const client_id = '235149885459-thsbs05hs7s5ojteluhqspj9gtn3t0in.apps.googleusercontent.com'
    const client_secret = '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'
    const redirect_uri =
      process.env.STAGE === 'dev' ? 'http://localhost:3000' : 'https://thesis-frontend-lake.vercel.app'

    const { data: oauthResult } = await axios.post<OAuthResult>(
      `https://oauth2.googleapis.com/token?code=${code}&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${redirect_uri}&grant_type=authorization_code`
    )

    let params: any

    params = {
      IdentityPoolId: identityPoolId,
      Logins: {
        'accounts.google.com': oauthResult.id_token
      }
    }

    let awsCredentials = await cognitoIdentity.getId(params).promise()
    params = {
      IdentityId: awsCredentials.IdentityId,
      Logins: {
        'accounts.google.com': oauthResult.id_token
      }
    }

    awsCredentials = await cognitoIdentity.getCredentialsForIdentity(params).promise()

    let decoded = jwtDecode(oauthResult.id_token)
    // @ts-ignore
    awsCredentials.email = decoded.email
    // @ts-ignore
    awsCredentials.name = decoded.name

    return formatJSONResponse({
      statusCode: 200,
      headers: getResponseHeaders(),
      body: {
        awsCredentials,
        auth: {
          access_token: oauthResult.access_token,
          expires_in: oauthResult.expires_in
        }
      }
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
