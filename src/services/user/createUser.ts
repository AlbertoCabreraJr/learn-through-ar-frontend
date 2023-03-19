import mongoose, { ObjectId } from 'mongoose'

type Args = {
  db: typeof mongoose
  user: {
    name: string
    email: string
    course: ObjectId
  }
}

const createChoice = async (args: Args) => {
  const { user, db } = args

  const newUser = await db.model('User').create(user)

  return newUser
}

export default createChoice
