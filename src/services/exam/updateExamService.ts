import mongoose from 'mongoose'
import Exam from 'src/types/exam'

type Args = {
  db: typeof mongoose
  examId: string
  body: {
    score?: number
    finished?: boolean
    startTime?: any
    endTime?: any
  }
}

const updateExamService = async (args: Args) => {
  try {
    const { examId, db, body } = args

    const exam = await db.model<Exam>('Exam').findOne({ _id: new mongoose.Types.ObjectId(examId) })

    if (!exam) {
      throw new Error('Exam does not exist')
    }

    exam.score = body.score ?? exam.score
    exam.finished = body.finished ?? exam.finished
    exam.startTime = body.startTime ?? exam.startTime
    exam.endTime = body.endTime ?? exam.endTime
    await exam.save()
  } catch (error) {
    throw error
  }
}

export default updateExamService
