import mongoose, { Date } from 'mongoose'

type Course = {
  _id: mongoose.Types.ObjectId
  userEmail: string
  name: string
  user: mongoose.Types.ObjectId
  modules: mongoose.Types.ObjectId[]
  currentModule: mongoose.Types.ObjectId
  currentTopic: mongoose.Types.ObjectId
  finishedModules: mongoose.Types.ObjectId[]
  finishedTopics: mongoose.Types.ObjectId[]
  createdAt: Date
  updatedAt: Date
}

export default Course
