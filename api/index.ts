import { reissueToken } from '@/store/reissue'
import { store } from '@/store'
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
    ) &&
    tokenManager.validateToken(
      tokenManager.refreshExp,
      tokenManager.refreshToken
    )
  ) {
    await store.dispatch(reissueToken(store.getState().reissue))
  }

  config.headers['Authorization'] = tokenManager.accessToken
    ? `Bearer ${tokenManager.accessToken}`
    : undefined

  return config
})

export default API
