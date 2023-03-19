import { Db, MongoClient } from 'mongodb'

let cachedDb = null
export const connectToDatabase = async (): Promise<Db> => {
  if (cachedDb) {
    return cachedDb
  }

  // Connect to our MongoDB database hosted on MongoDB Atlas
  const client = await MongoClient.connect(process.env.DB_CONNECTION_STRING)

  // Specify which database we want to use
  const db = client.db(process.env.SERVICE_NAME + '-' + process.env.STAGE)

  cachedDb = db
  return db
}
