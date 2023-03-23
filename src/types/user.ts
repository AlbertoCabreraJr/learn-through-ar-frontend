import { Date, ObjectId } from 'mongoose'

type User = {
  _id: ObjectId
  name: string
  email: string
  course: ObjectId
  createdAt: Date
  updatedAt: Date
}

export default User
