import mongoose, { ObjectId } from 'mongoose'
import Question from 'src/types/question'

type Args = {
  db: typeof mongoose
  question: {
    text: string
    choices: ObjectId[]
    correctChoice: ObjectId
  }
}

const createQuestionService = async (args: Args): Promise<Question> => {
  const { question, db } = args

  const newQuestion = await db.model('Question').create(question)

  return newQuestion
}

export default createQuestionService
