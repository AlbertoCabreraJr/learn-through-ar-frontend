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

export default choiceSchema
