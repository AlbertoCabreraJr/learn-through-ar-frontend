import mongoose from 'mongoose'
import choiceSchema from 'src/schemas/choice'
import courseSchema from 'src/schemas/course'
import examSchema from 'src/schemas/exam'
import moduleSchema from 'src/schemas/module'
import questionSchema from 'src/schemas/question'
import topicSchema from 'src/schemas/topic'
import userSchema from 'src/schemas/user'

let conn = null

export const connectToDatabase = async (): Promise<typeof mongoose> => {
  if (conn) {
    return conn
  }

  conn = mongoose.createConnection(process.env.DB_CONNECTION_STRING, {
    serverSelectionTimeoutMS: 5000,
    dbName: process.env.SERVICE_NAME + '-' + process.env.STAGE
  })

  await conn.asPromise()

  // `await`ing connection after assigning to the `conn` variable
  // to avoid multiple function calls creating new connections
  conn.model('Choice', choiceSchema)
  conn.model('Question', questionSchema)
  conn.model('Exam', examSchema)
  conn.model('Topic', topicSchema)
  conn.model('Module', moduleSchema)
  conn.model('Course', courseSchema)
  conn.model('User', userSchema)

  return conn
}
