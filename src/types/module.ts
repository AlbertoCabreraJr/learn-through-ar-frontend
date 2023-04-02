import mongoose, { Date } from 'mongoose'

type Module = {
  _id: mongoose.Types.ObjectId
  moduleNumber: number
  title: string
  subtitle: string
  totalTopicsAndExam: number
  topics: mongoose.Types.ObjectId[]
  progress: number
  exam: mongoose.Types.ObjectId
  finished: boolean
  createdAt: Date
  updatedAt: Date
}

export default Module
