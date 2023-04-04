import mongoose from 'mongoose'
import User from 'src/types/user'
import createCourseService from '../course/createCourseService'

type Args = {
  db: typeof mongoose
  user: {
    name: string
    email: string
  }
}

const createUserService = async (args: Args): Promise<User> => {
  const { user, db } = args

  const course = await createCourseService({ db, userEmail: user.email })

  const newUser = await db.model('User').create({ ...user, course: course._id })

  return newUser
}

export default createUserService
