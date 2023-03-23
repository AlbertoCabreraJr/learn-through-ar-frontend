import mongoose from 'mongoose'
import User from 'src/types/user'
import createCourse from '../course/createCourse'

type Args = {
  db: typeof mongoose
  user: {
    name: string
    email: string
  }
}

const createUser = async (args: Args): Promise<User> => {
  const { user, db } = args

  const course = await createCourse({ db, userEmail: user.email })

  const newUser = await db.model('User').create({ ...user, course })

  return newUser
}

export default createUser
