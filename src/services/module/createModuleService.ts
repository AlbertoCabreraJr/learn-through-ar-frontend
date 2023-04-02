import mongoose from 'mongoose'
import Module from 'src/types/module'

type Args = {
  db: typeof mongoose
  module: {
    moduleNumber: number
    title: string
    subtitle: string
    totalTopicsAndExam: number
    topics: mongoose.Types.ObjectId[]
    progress: number
    exam: mongoose.Types.ObjectId
    finished: boolean
  }
}

const createModuleService = async (args: Args): Promise<Module> => {
  const { module, db } = args

  const newModule = await db.model('Module').create(module)

  return newModule
}

export default createModuleService
