import mongoose from 'mongoose'
import Course from 'src/types/course'

type Args = {
  db: typeof mongoose
  topicId: string
}

const getTopicService = async (args: Args): Promise<Course> => {
  const { db, topicId } = args

  const topic = await db.model('Topic').findOne({ _id: new mongoose.Types.ObjectId(topicId) })

  if (!topic) {
    throw new Error('Topic does not exist')
  }

  return topic
}

export default getTopicService
