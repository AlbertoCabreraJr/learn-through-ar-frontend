import mongoose from 'mongoose'
import Topic from 'src/types/topic'

type Args = {
  db: typeof mongoose
  topicId: string
  body: {
    finished?: boolean
    startTime?: any
    endTime?: any
  }
}

const updateTopicService = async (args: Args) => {
  try {
    const { topicId, db, body } = args

    const topic = await db.model<Topic>('Topic').findOne({ _id: new mongoose.Types.ObjectId(topicId) })

    if (!topic) {
      throw new Error('Topic does not exist')
    }

    topic.finished = body.finished ?? topic.finished
    topic.startTime = body.startTime ?? topic.startTime
    topic.endTime = body.endTime ?? topic.endTime
    await topic.save()
  } catch (error) {
    throw error
  }
}

export default updateTopicService
