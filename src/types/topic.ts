import { Date, ObjectId } from 'mongoose'

type Topic = {
  _id: ObjectId
  topicNumber: number
  title: string
  finished: boolean
  module: ObjectId
  createdAt: Date
  updatedAt: Date
}

export default Topic
