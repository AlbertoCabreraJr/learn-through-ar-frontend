export default {
  type: 'object',
  properties: {
    request: { type: 'object' },
    credentials: { type: 'object' }
  },
  required: ['request', 'credentials']
} as const
