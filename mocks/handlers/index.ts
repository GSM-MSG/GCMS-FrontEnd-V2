import getClubList from './api/club/get'
import postLogin from './api/auth/post'
import postAddClub from './api/club/post'
import getMain from './api/get'
import getUser from './api/user/get'
import getSearchUser from './api/user/search/get'
import getClubDetail from './api/club/{club_id}/get'

export const handlers = [
  getUser,
  getMain,
  getSearchUser,
  postAddClub,
  getClubList,
  postLogin,
  getClubDetail,
]
