import mongoose from 'mongoose'
import Course from 'src/types/course'

type Args = {
  db: typeof mongoose
  moduleId: string
}

const getModuleService = async (args: Args): Promise<Course> => {
  const { db, moduleId } = args

  const module = await db
    .model('Module')
    .findOne({ _id: new mongoose.Types.ObjectId(moduleId) })
    .populate('topics')
    .populate('exam')
    .exec()

  if (!module) {
    throw new Error('Module does not exist')
  }

  return module
}

export default getModuleService
