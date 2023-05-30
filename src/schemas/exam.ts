import mongoose from 'mongoose'

const examSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
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
    },
    startTime: {
      type: String
    },
    endTime: {
      type: String
    }
  },
  { timestamps: true }
)

export default examSchema
