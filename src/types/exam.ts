import { Date, ObjectId } from 'mongoose'

type Exam = {
  _id: ObjectId
  title: string
  questions: ObjectId[]
  score: number
  finished: boolean
  createdAt: Date
  updatedAt: Date
}

export default Exam
