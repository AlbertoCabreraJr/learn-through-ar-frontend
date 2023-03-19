import mongoose from 'mongoose'

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

export default questionSchema
