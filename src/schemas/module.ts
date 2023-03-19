import mongoose from 'mongoose'

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

export default moduleSchema
