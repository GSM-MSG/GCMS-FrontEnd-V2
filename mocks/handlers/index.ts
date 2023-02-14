import postAddClub from './api/club/post'
import getMain from './api/get'
import getUser from './api/user/get'
import getSearchUser from './api/user/search/get'
import patchEditClub from './api/club/[clubID]/patch'
import getClubDetail from './api/club/[clubID]/get'

export const handlers = [
  getUser,
  getMain,
  getSearchUser,
  postAddClub,
  patchEditClub,
  getClubDetail,
]
