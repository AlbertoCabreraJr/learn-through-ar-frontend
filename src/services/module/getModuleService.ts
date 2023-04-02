import mongoose from 'mongoose'
import Course from 'src/types/course'

type Args = {
  db: typeof mongoose
  moduleId: string
}

const getModuleService = async (args: Args): Promise<Course> => {
  const { db, moduleId } = args

  const course = await db
    .model('Module')
    .findOne({ _id: new mongoose.Types.ObjectId(moduleId) })
    .populate('topics')
    .populate('exam')
    .exec()

  return course
}

export default getModuleService
