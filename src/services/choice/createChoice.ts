import mongoose from 'mongoose'
import Choice from 'src/types/choice'

type Args = {
  db: typeof mongoose
  choice: {
    text: string
  }
}

const createChoice = async (args: Args): Promise<Choice> => {
  const { choice, db } = args

  const newChoice = await db.model('Choice').create(choice)

  return newChoice
}

export default createChoice
