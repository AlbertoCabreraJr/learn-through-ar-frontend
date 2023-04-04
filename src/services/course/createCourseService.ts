import mongoose from 'mongoose'
import { LEARN_THROUGH_AR_DATA } from 'src/constants'
import Course from 'src/types/course'
import Question from 'src/types/question'
import createChoiceService from '../choice/createChoiceService'
import createExamService from '../exam/createExamService'
import createModuleService from '../module/createModuleService'
import createQuestionService from '../question/createQuestionService'
import createTopicService from '../topic/createTopicService'

type Args = {
  db: typeof mongoose
  userEmail: string
}

const createCourseService = async (args: Args): Promise<Course> => {
  const { db, userEmail } = args

  const moduleOne = await createModuleWithExamAndTopics({ db, module: LEARN_THROUGH_AR_DATA.moduleOne })
  const moduleTwo = await createModuleWithExamAndTopics({ db, module: LEARN_THROUGH_AR_DATA.moduleTwo })
  const moduleThree = await createModuleWithExamAndTopics({ db, module: LEARN_THROUGH_AR_DATA.moduleThree })

  const course = {
    userEmail,
    name: 'Programming Fundamentals',
    modules: [moduleOne._id, moduleTwo._id, moduleThree._id],
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

  for (let i = 0; i < module.topics.length; ++i) {
    const topic = module.topics[i]

    const newTopic = await createTopicService({ db, topic })
    topicIds.push(newTopic._id)
  }

  const newModule = await createModuleService({
    db,
    module: {
      moduleNumber: module.moduleNumber,
      title: module.title,
      subtitle: module.subtitle,
      totalTopicsAndExam: module.totalTopicsAndExam,
      topics: topicIds,
      progress: module.progress,
      exam: newExam._id,
      finished: module.finished
    }
  })

  return newModule
}

const createExamWithQuestions = async (args: {
  db: typeof mongoose
  exam: typeof LEARN_THROUGH_AR_DATA.moduleOne.exam
}) => {
  const { exam, db } = args

  const questions = []

  for (let i = 0; i < exam.questions.length; ++i) {
    const item = exam.questions[i]

    const question = await createQuestionWithChoices({
      db,
      choices: item.choices,
      correctChoice: item.correctChoice,
      question: item.text
    })

    questions.push(question._id)
  }

  const newExam = await createExamService({
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
  let correctChoiceId

  for (let i = 0; i < choices.length; ++i) {
    const choice = choices[i]

    const newChoice = await createChoiceService({
      db,
      choice: { text: choice }
    })

    if (choice === correctChoice) {
      correctChoiceId = newChoice._id
    }

    choiceIds.push(newChoice._id)
  }

  const newQuestion = await createQuestionService({
    db,
    question: {
      text: question,
      choices: choiceIds,
      correctChoice: correctChoiceId
    }
  })

  return newQuestion
}

export default createCourseService
