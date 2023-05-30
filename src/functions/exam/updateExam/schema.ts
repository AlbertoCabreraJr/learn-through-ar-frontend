export default {
  type: 'object',
  properties: {
    score: { type: 'number' },
    finished: { type: 'boolean' },
    startTime: {
      type: 'string'
    },
    endTime: {
      type: 'string'
    }
  }
} as const
