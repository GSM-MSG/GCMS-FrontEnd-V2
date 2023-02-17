import getClubList from './api/club/get'
import postLogin from './api/auth/post'
import postAddClub from './api/club/post'
import getMain from './api/get'
import getUser from './api/user/get'
import getSearchUser from './api/user/search/get'
import patchProfileImg from './api/user/patch'
import deleteUser from './api/user/delete'
import deleteLogout from './api/auth/delete'
import getApplicantList from './api/applicant/[clubID]/get'
import postAcceptApplicant from './api/applicant/[clubID]/accept/post'
import postRejectApplicant from './api/applicant/[clubID]/reject/post'
import getClubDetail from './api/club/{club_id}/get'
import postClubApply from './api/applicant/post'
import deleteClubCancel from './api/applicant/delete'

export const handlers = [
  getUser,
  getMain,
  getSearchUser,
  postAddClub,
  getApplicantList,
  postAcceptApplicant,
  postRejectApplicant,
  getClubList,
  postLogin,
  patchProfileImg,
  deleteUser,
  deleteLogout,
  getClubDetail,
  postClubApply,
  deleteClubCancel,
]
