import mongoose from 'mongoose'

const choiceSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

export default choiceSchema
