import { Date, ObjectId } from 'mongoose'

type Course = {
  _id: ObjectId
  userEmail: string
  name: string
  user: ObjectId
  modules: ObjectId[]
  currentModule: ObjectId
  currentTopic: ObjectId
  finishedModules: ObjectId[]
  finishedTopics: ObjectId[]
  createdAt: Date
  updatedAt: Date
}

export default Course
