import { accessToken, refreshToken, accessExp, refreshExp } from '@/lib/token'
import { TokensType } from '@/type/api/TokenManager'
import axios from 'axios'

class TokenManager {
  private _accessToken: string | null
  private _refreshToken: string | null
  private _accessExp: string | null
  private _refreshExp: string | null

  constructor() {
    this._accessToken = localStorage.getItem(accessToken)
    this._refreshToken = localStorage.getItem(refreshToken)
    this._accessExp = localStorage.getItem(accessExp)
    this._refreshExp = localStorage.getItem(refreshExp)
  }

  validateToken(expiredString: string | null, token: string | null): boolean {
    if (!expiredString || !token) return false
    const expiredAt = new Date(
      new Date().setMinutes(new Date(expiredString).getMinutes() - 1)
    )

    if (expiredAt >= new Date()) return false

    return true
  }

  async tokenReissue(): Promise<boolean> {
    if (!this.validateToken(this._refreshExp, this._refreshToken)) return false

    try {
      const { data } = await axios.patch<TokensType>(
        '/auth',
        {},
        {
          baseURL: process.env.SERVER_URL,
          withCredentials: true,
          headers: {
            Authorization: this._refreshToken,
          },
        }
      )

      this.setTokens(data)

      return true
    } catch (e) {
      return false
    }
  }

  setTokens(tokens: TokensType) {
    this._accessToken = tokens.accessToken
    this._refreshToken = tokens.refreshToken
    this._accessExp = tokens.accessExpiresAt
    this._refreshExp = tokens.refreshExpiresAt

    localStorage.setItem(accessToken, tokens.accessToken)
    localStorage.setItem(refreshToken, tokens.refreshToken)
    localStorage.setItem(accessExp, tokens.accessExpiresAt)
    localStorage.setItem(refreshExp, tokens.refreshExpiresAt)
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
