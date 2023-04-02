import mongoose from 'mongoose'
import Question from 'src/types/question'

type Args = {
  db: typeof mongoose
  question: {
    text: string
    choices: mongoose.Types.ObjectId[]
    correctChoice: mongoose.Types.ObjectId
  }
}

const createQuestionService = async (args: Args): Promise<Question> => {
  const { question, db } = args

  const newQuestion = await db.model('Question').create(question)

  return newQuestion
}

export default createQuestionService
