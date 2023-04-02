import mongoose from 'mongoose'
import Course from 'src/types/course'

type Args = {
  db: typeof mongoose
  topicId: string
}

const getTopicService = async (args: Args): Promise<Course> => {
  const { db, topicId } = args

  const course = await db.model('Topic').findOne({ _id: new mongoose.Types.ObjectId(topicId) })

  return course
}

export default getTopicService
