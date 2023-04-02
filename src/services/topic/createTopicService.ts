import mongoose from 'mongoose'
import Topic from 'src/types/topic'

type Args = {
  db: typeof mongoose
  topic: {
    topicNumber: number
    title: string
    finished: boolean
  }
}

const createTopicService = async (args: Args): Promise<Topic> => {
  const { topic, db } = args

  const newTopic = await db.model('Topic').create(topic)

  return newTopic
}

export default createTopicService
