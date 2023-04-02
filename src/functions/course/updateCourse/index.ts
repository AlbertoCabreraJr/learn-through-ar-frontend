import { handlerPath } from '@libs/handler-resolver'
import { ALLOWED_HEADERS } from 'src/constants'
import schema from './schema'

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'put',
        path: 'courses/{id}',
        cors: {
          origin: '*',
          headers: ALLOWED_HEADERS
        },
        request: {
          schemas: {
            'application/json': schema
          }
        }
      }
    }
  ]
}
