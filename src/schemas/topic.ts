import mongoose from 'mongoose'

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
    startTime: {
      type: Date
    },
    endTime: {
      type: Date
    }
  },
  { timestamps: true }
)

export default topicSchema
