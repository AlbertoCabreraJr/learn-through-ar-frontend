import mongoose, { Date } from 'mongoose'

type Question = {
  _id: mongoose.Types.ObjectId
  text: string
  choices: mongoose.Types.ObjectId[]
  correctChoice: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

export default Question
