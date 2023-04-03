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
    .populate({
      path: 'modules',
      populate: { path: 'topics' }
    })
    .exec()

  if (!course) {
    throw new Error('Course does not exist')
  }

  return course
}

export default getCourseService
