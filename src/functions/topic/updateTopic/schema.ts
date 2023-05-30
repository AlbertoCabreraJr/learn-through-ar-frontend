export default {
  type: 'object',
  properties: {
    finished: { type: 'boolean' },
    startTime: {
      type: 'string'
    },
    endTime: {
      type: 'string'
    }
  }
} as const
