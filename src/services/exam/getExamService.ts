import mongoose from 'mongoose'
import Exam from 'src/types/exam'

type Args = {
  db: typeof mongoose
  examId: string
}

const getExamService = async (args: Args): Promise<Exam> => {
  const { db, examId } = args

  const exam = await db
    .model('Exam')
    .findOne({ _id: new mongoose.Types.ObjectId(examId) })
    .populate({
      path: 'questions',
      populate: { path: 'choices correctChoice' }
    })
    .exec()

  if (!exam) {
    throw new Error('Exam does not exist')
  }

  const shuffledQuestions = exam.questions.slice().sort(() => Math.random() - 0.5)
  exam.questions = shuffledQuestions

  return exam
}

export default getExamService
