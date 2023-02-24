import axios from 'axios'
import TokenManager from './TokenManager'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
  cancelToken: source.token,
})

API.interceptors.request.use(async (config) => {
  const tokenManager = new TokenManager()

  if (
    !tokenManager.validateToken(
      tokenManager.accessExp,
      tokenManager.accessToken
    )
  )
    await tokenManager.tokenReissue()

  config.headers['Authorization'] = tokenManager.accessToken
    ? `Bearer ${tokenManager.accessToken}`
    : undefined

  return config
})

export default API
