import type { AWS } from '@serverless/typescript'

import functions from '@functions/index'

const serverlessConfiguration: AWS = {
  service: '${env:SERVICE_NAME}',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    memorySize: 128,
    region: 'ap-southeast-1',
    stage: '${env:STAGE}',
    timeout: 30,
    endpointType: 'REGIONAL',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true
    },
    environment: {
      REDIRECT_URI: '${env:REDIRECT_URI}',
      GOOGLE_CLIENT_ID: '${env:GOOGLE_CLIENT_ID}',
      GOOGLE_CLIENT_SECRET: '${env:GOOGLE_CLIENT_SECRET}',
      COGNITO_IDENTITY_POOL_ID: '${env:COGNITO_IDENTITY_POOL_ID}',
      SERVICE_NAME: '${env:SERVICE_NAME}',
      DB_CONNECTION_STRING: '${env:DB_CONNECTION_STRING}',
      STAGE: '${env:STAGE}',
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000'
    }
  },
  // import the function via paths
  functions: { ...functions },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10
    },
    'serverless-offline': {
      httpPort: 4000,
      websocketPort: 4001,
      lambdaPort: 4002
    }
  },
  resources: {
    Resources: {
      GatewayResponseDefault4XX: {
        Type: 'AWS::ApiGateway::GatewayResponse',
        Properties: {
          ResponseParameters: {
            'gatewayresponse.header.Access-Control-Allow-Origin': "'*'",
            'gatewayresponse.header.Access-Control-Allow-Headers': "'*'"
          },
          ResponseType: 'DEFAULT_4XX',
          RestApiId: {
            Ref: 'ApiGatewayRestApi'
          }
        }
      }
    }
  }
}

module.exports = serverlessConfiguration
