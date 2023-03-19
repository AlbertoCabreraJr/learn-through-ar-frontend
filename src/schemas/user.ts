import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course'
    }
  },
  { timestamps: true }
)

export default userSchema
