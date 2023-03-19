import mongoose, { ObjectId } from 'mongoose'

type Args = {
  db: typeof mongoose
  exam: {
    title: string
    module: ObjectId
    questions: [ObjectId]
    score: number
    finished: boolean
  }
}

const createExam = async (args: Args) => {
  const { exam, db } = args

  const newExam = await db.model('Exam').create(exam)

  return newExam
}

export default createExam
