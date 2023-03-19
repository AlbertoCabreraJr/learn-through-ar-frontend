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
    module: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Module'
    }
  },
  { timestamps: true }
)

export default topicSchema
