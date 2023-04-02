export default {
  type: 'object',
  properties: {
    currentModule: { type: 'string' },
    currentTopic: { type: 'string' },
    finishedModules: { type: 'array' },
    finishedTopics: { type: 'array' }
  }
} as const
