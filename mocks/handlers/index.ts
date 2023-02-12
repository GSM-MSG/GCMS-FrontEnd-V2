import postLogin from './api/auth/post'
import getMain from './api/get'
import getUser from './api/user/get'

export const handlers = [getUser, getMain, postLogin]
