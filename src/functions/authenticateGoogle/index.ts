import { handlerPath } from '@libs/handler-resolver'
import { ALLOWED_HEADERS } from 'src/constants'

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'auth',
        cors: {
          origin: '*',
          headers: ALLOWED_HEADERS
        }
      }
    }
  ]
}
