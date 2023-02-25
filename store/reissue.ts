import { InitialState } from '@/type/store/reissue'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import TokenManager from '@/api/TokenManager'
import axios from 'axios'
import { TokensType } from '@/type/api/TokenManager'

export const reissueToken = createAsyncThunk(
  'api/refreshToken',
  async (reissueStore: InitialState) => {
    const tokenManager = new TokenManager()

    if (
      reissueStore.isLoading ||
      tokenManager.calculatMinutes(reissueStore.refreshDate, 1) >= new Date()
    )
      return

    const { data } = await axios.patch<TokensType>(
      '/auth',
      {},
      {
        baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
        withCredentials: true,
        headers: {
          'Refresh-Token':
            tokenManager.refreshToken && `Bearer ${tokenManager.refreshToken}`,
        },
      }
    )

    tokenManager.setTokens(data)
    return data
  }
)

const initialState: InitialState = {
  isLoading: false,
  refreshDate: '',
}

const reissueSlice = createSlice({
  name: 'reissue',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(reissueToken.pending, (state) => {
      state.refreshDate = new Date().toString()
      state.isLoading = true
    })
    builder.addCase(reissueToken.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(reissueToken.rejected, (state) => {
      const tokenManager = new TokenManager()
      tokenManager.removeTokens()

      state.isLoading = false
      if (window.location.pathname !== '/') window.location.href = '/'
    })
  },
})

export default reissueSlice
