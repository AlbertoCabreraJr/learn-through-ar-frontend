import authenticateGoogle from './authenticateGoogle'
import authenticateGoogleRefresh from './authenticateGoogleRefresh'
import signer from './signer'
import getCourse from './course/getCourse'
import updateCourse from './course/updateCourse'
import getModule from './module/getModule'
import updateModule from './module/updateModule'
import updateExam from './exam/updateExam'
import getTopic from './topic/getTopic'
import getUsers from './users/getUsers'
import getExam from './exam/getExam'
import updateTopic from './topic/updateTopic'

export default {
  authenticateGoogle,
  signer,
  getCourse,
  updateCourse,
  getModule,
  updateExam,
  updateModule,
  getTopic,
  updateTopic,
  getExam,
  authenticateGoogleRefresh,
  getUsers
}
