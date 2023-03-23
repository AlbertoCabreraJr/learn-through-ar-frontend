import { Date, ObjectId } from 'mongoose'

type Question = {
  _id: ObjectId
  text: string
  choices: ObjectId[]
  correctChoice: ObjectId
  createdAt: Date
  updatedAt: Date
}

export default Question
