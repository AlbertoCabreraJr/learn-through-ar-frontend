import mongoose, { Date } from 'mongoose'

type Choice = {
  _id: mongoose.Types.ObjectId
  text: string
  createdAt: Date
  updatedAt: Date
}

export default Choice
