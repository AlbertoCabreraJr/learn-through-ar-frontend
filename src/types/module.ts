import { Date, ObjectId } from 'mongoose'

type Module = {
  _id: ObjectId
  moduleNumber: number
  title: string
  subtitle: string
  totalTopicsAndExam: number
  topics: ObjectId[]
  progress: number
  exam: ObjectId
  finished: boolean
  createdAt: Date
  updatedAt: Date
}

export default Module
