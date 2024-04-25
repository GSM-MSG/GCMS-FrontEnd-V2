import { reissueToken } from '@/store/reissue'
import { store } from '@/store'
import axios from 'axios'
import TokenManager from './TokenManager'

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
  headers: {
    'ngrok-skip-browser-warning': '69420',
  },
})

API.interceptors.request.use(async (config) => {
  const tokenManager = new TokenManager()

  if (
    !tokenManager.validateToken(
      tokenManager.accessExp,
      tokenManager.accessToken
    ) &&
    tokenManager.validateToken(
      tokenManager.refreshExp,
      tokenManager.refreshToken
    )
  ) {
    await store.dispatch(reissueToken())
    tokenManager.initToken()
  } else if (
    !tokenManager.validateToken(
      tokenManager.accessExp,
      tokenManager.accessToken
    ) &&
    !tokenManager.validateToken(
      tokenManager.refreshExp,
      tokenManager.refreshToken
    )
  )
    tokenManager.removeTokens()

  config.headers['Authorization'] = tokenManager.accessToken
    ? `Bearer ${encodeURI(tokenManager.accessToken)}`
    : undefined

  return config
})

API.interceptors.response.use(
  (res) => {
    return res
  },
  async (error) => {
    const tokenManager = new TokenManager()
    if (window.location.pathname !== '/' && error.response.status === 401) {
      try {
        await store.dispatch(reissueToken())
        tokenManager.initToken()
        error.config.headers['Authorization'] = tokenManager.accessToken
          ? `Bearer ${encodeURI(tokenManager.accessToken)}`
          : undefined
        return API(error.config)
      } catch (err) {
        console.log(error)
      }
    }
    return Promise.reject(error)
  }
)

export default API
