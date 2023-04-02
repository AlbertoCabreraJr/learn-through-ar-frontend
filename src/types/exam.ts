import mongoose, { Date } from 'mongoose'

type Exam = {
  _id: mongoose.Types.ObjectId
  title: string
  questions: mongoose.Types.ObjectId[]
  score: number
  finished: boolean
  createdAt: Date
  updatedAt: Date
}

export default Exam
