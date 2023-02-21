import axios from 'axios'
import TokenManager from './TokenManager'

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
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

  config.headers['Authorization'] = `Bearer ${tokenManager.accessToken ?? ''}`

  return config
})

export default API
