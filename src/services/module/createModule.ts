import mongoose, { ObjectId } from 'mongoose'

type Args = {
  db: typeof mongoose
  module: {
    moduleNumber: number
    title: string
    subtitle: string
    totalTopicsAndExam: number
    topics: [ObjectId]
    progress: number
    exam: ObjectId
    finished: boolean
  }
}

const createModule = async (args: Args) => {
  const { module, db } = args

  const newModule = await db.model('Module').create(module)

  return newModule
}

export default createModule
