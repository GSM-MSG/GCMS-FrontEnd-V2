import { accessToken, refreshToken, accessExp, refreshExp } from '@/lib/token'
import { TokensType } from '@/type/api/TokenManager'
import axios, { isAxiosError } from 'axios'

class TokenManager {
  private _accessToken: string | null = null
  private _refreshToken: string | null = null
  private _accessExp: string | null = null
  private _refreshExp: string | null = null

  constructor() {
    if (typeof window === 'undefined') return
    this._accessToken = localStorage.getItem(accessToken)
    this._refreshToken = localStorage.getItem(refreshToken)
    this._accessExp = localStorage.getItem(accessExp)
    this._refreshExp = localStorage.getItem(refreshExp)
  }

  validateToken(expiredString: string | null, token: string | null): boolean {
    if (!expiredString || !token) return false
    const expiredAt = new Date(expiredString)
    expiredAt.setMinutes(expiredAt.getMinutes() - 1)

    return expiredAt >= new Date()
  }

  async tokenReissue() {
    if (!this.validateToken(this._refreshExp, this._refreshToken)) return false

    let res = await this.refreshQuery()
    if (res === 401) res = await this.refreshQuery()

    if (!res || res === 401) {
      this.removeTokens()
      window.location.href = '/'
    }
  }

  private async refreshQuery() {
    try {
      const { data } = await axios.patch<TokensType>(
        '/auth',
        {},
        {
          baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
          withCredentials: true,
          headers: {
            'Refresh-Token': `Bearer ${this._refreshToken}`,
          },
        }
      )

      this.setTokens(data)
      return true
    } catch (e) {
      if (isAxiosError(e) && e.response?.status === 401) return 401
      return false
    }
  }

  setTokens(tokens: TokensType) {
    this._accessToken = tokens.accessToken
    this._refreshToken = tokens.refreshToken
    this._accessExp = tokens.accessExp
    this._refreshExp = tokens.refreshExp

    localStorage.setItem(accessToken, tokens.accessToken)
    localStorage.setItem(refreshToken, tokens.refreshToken)
    localStorage.setItem(accessExp, tokens.accessExp)
    localStorage.setItem(refreshExp, tokens.refreshExp)
  }

  removeTokens() {
    this._accessToken = null
    this._refreshToken = null
    this._accessExp = null
    this._refreshExp = null

    localStorage.removeItem(accessToken)
    localStorage.removeItem(refreshToken)
    localStorage.removeItem(accessExp)
    localStorage.removeItem(refreshExp)
  }

  get accessToken() {
    return this._accessToken
  }

  get refreshToken() {
    return this._refreshToken
  }

  get accessExp() {
    return this._accessExp
  }

  get refreshExp() {
    return this._refreshExp
  }
}

export default TokenManager
