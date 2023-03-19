import mongoose, { ObjectId } from 'mongoose'

type Args = {
  db: typeof mongoose
  question: {
    text: string
    choices: [ObjectId]
    correctChoice: ObjectId
    exam: ObjectId
  }
}

const createQuestion = async (args: Args) => {
  const { question, db } = args

  const newQuestion = await db.model('Question').create(question)

  return newQuestion
}

export default createQuestion
