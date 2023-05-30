import mongoose, { Date } from 'mongoose'

type Topic = {
  _id: mongoose.Types.ObjectId
  topicNumber: number
  title: string
  finished: boolean
  module: mongoose.Types.ObjectId
  startTime: any
  endTime: any
  createdAt: Date
  updatedAt: Date
}

export default Topic
