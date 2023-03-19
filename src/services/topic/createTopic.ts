import mongoose, { ObjectId } from 'mongoose'

type Args = {
  db: typeof mongoose
  topic: {
    topicNumber: number
    title: string
    finished: boolean
    module: ObjectId
  }
}

const createTopic = async (args: Args) => {
  const { topic, db } = args

  const newTopic = await db.model('Topic').create(topic)

  return newTopic
}

export default createTopic
