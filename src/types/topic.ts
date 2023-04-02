import mongoose, { Date } from 'mongoose'

type Topic = {
  _id: mongoose.Types.ObjectId
  topicNumber: number
  title: string
  finished: boolean
  module: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

export default Topic
