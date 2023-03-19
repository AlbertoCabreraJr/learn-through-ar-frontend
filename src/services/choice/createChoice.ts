import mongoose from 'mongoose'

type Args = {
  db: typeof mongoose
  choice: {
    text: string
  }
}

const createChoice = async (args: Args) => {
  const { choice, db } = args

  const newChoice = await db.model('Choice').create(choice)

  return newChoice
}

export default createChoice
