import mongoose from 'mongoose'

const choiceSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true
    }
    // question: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Question'
    // }
  },
  { timestamps: true }
)

const questionSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true
    },
    choices: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Choice'
      }
    ],
    correctChoice: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Choice'
    },
    exam: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exam'
    }
  },
  { timestamps: true }
)

const examSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    module: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Module'
    },
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
      }
    ],
    score: {
      type: Number,
      default: 0
    },
    finished: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
)

const topicSchema = new mongoose.Schema(
  {
    topicNumber: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    finished: {
      type: Boolean,
      default: false
    },
    module: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Module'
    }
  },
  { timestamps: true }
)

const moduleSchema = new mongoose.Schema(
  {
    moduleNo: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    totalTopicsAndExam: {
      type: Number,
      required: true
    },
    topics: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Topic'
      }
    ],
    progress: {
      type: Number,
      default: 0
    },
    exam: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exam'
    },
    finished: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
)

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    modules: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Module'
      }
    ],
    currentModule: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Module'
    },
    currentTopic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Topic'
    },
    finishedModules: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Module'
      }
    ],
    finishedTopics: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Topic'
      }
    ]
  },
  { timestamps: true }
)

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course'
    }
  },
  { timestamps: true }
)

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
  conn.model('Topc', topicSchema)
  conn.model('Module', moduleSchema)
  conn.model('Course', courseSchema)
  conn.model('User', userSchema)

  return conn
}
