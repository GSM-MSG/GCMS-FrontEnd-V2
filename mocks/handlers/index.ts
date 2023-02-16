import postAddClub from './api/club/post'
import getMain from './api/get'
import getUser from './api/user/get'
import getSearchUser from './api/user/search/get'
import getApplicantList from './api/applicant/[clubID]/get'
import postAcceptApplicant from './api/applicant/[clubID]/accept/post'
import postRejectApplicant from './api/applicant/[clubID]/reject/post'

export const handlers = [
  getUser,
  getMain,
  getSearchUser,
  postAddClub,
  getApplicantList,
  postAcceptApplicant,
  postRejectApplicant,
]
