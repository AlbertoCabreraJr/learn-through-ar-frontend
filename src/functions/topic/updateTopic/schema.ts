export default {
  type: 'object',
  properties: {
    finished: { type: 'boolean' },
    startTime: {
      type: 'string',
      format: 'date'
    },
    endTime: {
      type: 'string',
      format: 'date'
    }
  }
} as const
