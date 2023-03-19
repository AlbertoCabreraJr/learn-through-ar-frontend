import mongoose, { ObjectId } from 'mongoose'

type Args = {
  db: typeof mongoose
  course: {
    name: string
    user: ObjectId
    modules: [ObjectId]
    currentModule: ObjectId
    currentTopic: ObjectId
    finishedModules: [ObjectId]
    finishedTopics: [ObjectId]
  }
}

const createCourse = async (args: Args) => {
  const { course, db } = args

  const newCourse = await db.model('Course').create(course)

  return newCourse
}

export default createCourse
