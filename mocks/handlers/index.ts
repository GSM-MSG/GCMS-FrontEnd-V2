import postAddClub from './api/club/post'
import getMain from './api/get'
import getUser from './api/user/get'
import getSearchUser from './api/user/search/get'
import getApplicantList from './api/applicant/get'

export const handlers = [
  getUser,
  getMain,
  getSearchUser,
  postAddClub,
  getApplicantList,
]
