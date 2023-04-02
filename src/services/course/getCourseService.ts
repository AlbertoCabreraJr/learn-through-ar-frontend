import mongoose from 'mongoose'
import Course from 'src/types/course'

type Args = {
  db: typeof mongoose
  courseId: string
}

const getCourseService = async (args: Args): Promise<Course> => {
  const { db, courseId } = args

  const course = await db
    .model('Course')
    .findOne({ _id: new mongoose.Types.ObjectId(courseId) })
    .populate('modules')
    .exec()

  return course
}

export default getCourseService
