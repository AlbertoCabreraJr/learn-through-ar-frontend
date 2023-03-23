import mongoose, { ObjectId } from 'mongoose'
import { LEARN_THROUGH_AR_DATA } from 'src/constants'
import Course from 'src/types/course'
import Question from 'src/types/question'
import createChoice from '../choice/createChoice'
import createExam from '../exam/createExam'
import createModule from '../module/createModule'
import createQuestion from '../question/createQuestion'
import createTopic from '../topic/createTopic'

type Args = {
  db: typeof mongoose
  userEmail: string
}

const createCourse = async (args: Args): Promise<Course> => {
  const { db, userEmail } = args

  const moduleOne = await createModuleWithExamAndTopics({ db, module: LEARN_THROUGH_AR_DATA.moduleOne })
  const moduleTwo = await createModuleWithExamAndTopics({ db, module: LEARN_THROUGH_AR_DATA.moduleTwo })
  const moduleThree = await createModuleWithExamAndTopics({ db, module: LEARN_THROUGH_AR_DATA.moduleThree })
  const moduleFour = await createModuleWithExamAndTopics({ db, module: LEARN_THROUGH_AR_DATA.moduleFour })

  const course = {
    userEmail,
    name: 'Programming Fundamentals',
    modules: [moduleOne._id, moduleTwo._id, moduleThree._id, moduleFour._id],
    currentModule: moduleOne._id,
    currentTopic: moduleOne.topics[0],
    finishedModules: [],
    finishedTopics: []
  }

  const newCourse = await db.model('Course').create(course)

  return newCourse
}

const createModuleWithExamAndTopics = async (args: {
  db: typeof mongoose
  module: typeof LEARN_THROUGH_AR_DATA.moduleOne
}) => {
  const { db, module } = args

  const newExam = await createExamWithQuestions({ db, exam: module.exam })
  const topicIds = []

  module.topics.map(async (topic) => {
    const newTopic = await createTopic({ db, topic })
    topicIds.push(newTopic._id)
  })

  const temporaryModule = {
    moduleNumber: module.moduleNumber,
    title: module.title,
    subtitle: module.subtitle,
    totalTopicsAndExam: module.totalTopicsAndExam,
    topics: topicIds,
    progress: module.progress,
    exam: newExam._id,
    finished: module.finished
  }

  const newModule = await createModule({ db, module: temporaryModule })

  return newModule
}

const createExamWithQuestions = async (args: {
  db: typeof mongoose
  exam: typeof LEARN_THROUGH_AR_DATA.moduleOne.exam
}) => {
  const { exam, db } = args

  const questions = []

  exam.questions.map(async (item) => {
    const question = await createQuestionWithChoices({
      db,
      choices: item.choices,
      correctChoice: item.correctChoice,
      question: item.text
    })

    questions.push(question._id)
  })

  const newExam = await createExam({
    db,
    exam: {
      title: exam.title,
      questions,
      finished: exam.finished,
      score: exam.score
    }
  })

  return newExam
}

const createQuestionWithChoices = async (args: {
  db: typeof mongoose
  question: string
  choices: string[]
  correctChoice: string
}): Promise<Question> => {
  const { db, question, choices, correctChoice } = args

  const choiceIds = []
  let correctChoiceId: ObjectId

  choices.map(async (choice) => {
    const newChoice = await createChoice({
      db,
      choice: { text: choice }
    })

    if (choice === correctChoice) {
      correctChoiceId = newChoice._id
    }

    choiceIds.push(newChoice._id)
  })

  const newQuestion = await createQuestion({
    db,
    question: {
      text: question,
      choices: choiceIds,
      correctChoice: correctChoiceId
    }
  })

  return newQuestion
}

export default createCourse
