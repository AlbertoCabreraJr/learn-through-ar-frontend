import { Date, ObjectId } from 'mongoose'

type Choice = {
  _id: ObjectId
  text: string
  createdAt: Date
  updatedAt: Date
}

export default Choice
