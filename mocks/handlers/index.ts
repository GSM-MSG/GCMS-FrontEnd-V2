import postAddClub from './api/club/post'
import getMain from './api/get'
import getUser from './api/user/get'
import getSearchUser from './api/user/search/get'
import patchEditClub from './api/club/[clubID]/patch'
import getClubDetail from './api/club/[clubID]/get'
import patchClubOpen from './api/club/[clubID]/open/patch'
import patchClubClose from './api/club/[clubID]/close/patch'
import deleteClub from './api/club/[clubID]/delete'

export const handlers = [
  getUser,
  getMain,
  getSearchUser,
  postAddClub,
  patchEditClub,
  getClubDetail,
  patchClubOpen,
  patchClubClose,
  deleteClub,
]
