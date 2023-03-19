import mongoose from 'mongoose'

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

export default examSchema
