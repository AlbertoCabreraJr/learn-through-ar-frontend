import mongoose, { ObjectId } from 'mongoose'
import Exam from 'src/types/exam'

type Args = {
  db: typeof mongoose
  exam: {
    title: string
    questions: ObjectId[]
    score: number
    finished: boolean
  }
}

const createExamService = async (args: Args): Promise<Exam> => {
  const { exam, db } = args

  const newExam = await db.model('Exam').create(exam)

  return newExam
}

export default createExamService
