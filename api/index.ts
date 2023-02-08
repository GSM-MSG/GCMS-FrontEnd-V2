import axios from 'axios'
import TokenManager from './TokenManager'

const API = axios.create({
  baseURL: process.env.SERVER_URL,
  withCredentials: true,
  headers: {
    'Access-Control-Request-Method':
      'GET, PUT, POST, PATCH, DELETE, HEAD, OPTIONS',
    'Access-Control-Request-Headers': 'Content-Type, Authorization',
  },
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

  return config
})

export default API
