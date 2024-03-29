import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
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

export default courseSchema
