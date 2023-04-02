import mongoose from 'mongoose'
import Course from 'src/types/course'

type Args = {
  db: typeof mongoose
  courseId: string
  body: {
    currentModule?: string
    currentTopic?: string
    finishedModules?: any[]
    finishedTopics?: any[]
  }
}

const updateCourseService = async (args: Args) => {
  try {
    const { courseId, db, body } = args

    const course = await db.model<Course>('Course').findOne({ _id: new mongoose.Types.ObjectId(courseId) })

    if (!course) {
      throw new Error('Course does not exist')
    }

    course.currentModule = body.currentModule ? new mongoose.Types.ObjectId(body.currentModule) : course.currentModule
    course.currentTopic = body.currentTopic ? new mongoose.Types.ObjectId(body.currentTopic) : course.currentTopic
    course.finishedModules = body.finishedModules
      ? body.finishedModules.map((moduleId) => new mongoose.Types.ObjectId(moduleId))
      : course.finishedModules
    course.finishedTopics = body.finishedTopics
      ? body.finishedTopics.map((topicId) => new mongoose.Types.ObjectId(topicId))
      : course.finishedTopics
    course.save()
  } catch (error) {
    throw error
  }
}

export default updateCourseService
