import getClubList from './api/club/get'
import postLogin from './api/auth/post'
import postAddClub from './api/club/post'
import getMain from './api/get'
import getUser from './api/user/get'
import getSearchUser from './api/user/search/get'
import patchProfileImg from './api/user/patch'
import deleteUser from './api/user/delete'
import deleteLogout from './api/auth/delete'

export const handlers = [
  getUser,
  getMain,
  getSearchUser,
  postAddClub,
  getClubList,
  postLogin,
  patchProfileImg,
  deleteUser,
  deleteLogout,
]
