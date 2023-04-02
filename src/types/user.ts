import mongoose, { Date } from 'mongoose'

type User = {
  _id: mongoose.Types.ObjectId
  name: string
  email: string
  course: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

export default User
