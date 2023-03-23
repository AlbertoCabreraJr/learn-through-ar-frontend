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
    }
  },
  { timestamps: true }
)

export default topicSchema
