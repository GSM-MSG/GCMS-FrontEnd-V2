import getClubList from './api/club/get'
import postLogin from './api/auth/post'
import postAddClub from './api/club/post'
import getMain from './api/get'
import getUser from './api/user/get'
import getSearchUser from './api/user/search/get'
import patchEditClub from './api/club/[clubID]/patch'
import getClubDetail from './api/club/[clubID]/get'
import patchClubOpen from './api/club/[clubID]/open/patch'
import patchClubClose from './api/club/[clubID]/close/patch'
import deleteClub from './api/club/[clubID]/delete'
import patchProfileImg from './api/user/patch'
import deleteUser from './api/user/delete'
import deleteLogout from './api/auth/delete'
import getApplicantList from './api/applicant/[clubID]/get'
import postAcceptApplicant from './api/applicant/[clubID]/accept/post'
import postRejectApplicant from './api/applicant/[clubID]/reject/post'
import postClubApply from './api/applicant/post'
import deleteClubCancel from './api/applicant/delete'
import getClubMemberList from './api/club-member/[clubID]/get'
import postKickMember from './api/club-member/[clubID]/post'
import patchDelegateHead from './api/club-member/[clubID]/patch'

export const handlers = [
  getUser,
  getMain,
  getSearchUser,
  postAddClub,
  patchEditClub,
  patchClubOpen,
  patchClubClose,
  deleteClub,
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
  getClubMemberList,
  postKickMember,
  patchDelegateHead,
]
