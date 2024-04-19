import TokenManager from '@/api/TokenManager'
import observable from '@/lib/Observable'
import toastOption from '@/lib/toastOption'
import { TokensType } from '@/type/api/TokenManager'
import { InitialState } from '@/type/store/reissue'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'
import { RootState } from '.'
import { removeUser } from './user'

export const reissueToken = createAsyncThunk(
  'reissue/reissueToken',
  async (_, { getState, dispatch }) => {
    const tokenManager = new TokenManager()
    const { reissue } = getState() as RootState

    if (
      reissue.isLoading ||
      tokenManager.calculateMinutes(reissue.refreshDate, 1) >= new Date()
    ) {
      await new Promise((resolve) => {
        observable.setObserver(resolve)
      })
      return
    }

    dispatch(
      setRefreshTiming({ isLoading: true, refreshDate: new Date().toString() })
    )
    try {
      const { data } = await axios.patch<TokensType>(
        '/auth',
        {},
        {
          baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
          withCredentials: true,
          headers: {
            'Refresh-Token':
              tokenManager.refreshToken &&
              `Bearer ${tokenManager.refreshToken}`,
          },
        }
      )
      observable.notifyAll()
      observable.removeAll()

      tokenManager.setTokens(data)
      return data
    } catch (e) {
      dispatch(removeUser())
      tokenManager.removeTokens()
      toast.error('다시 로그인 해주세요', toastOption)
      return (window.location.href = '/')
    }
  }
)

const initialState: InitialState = {
  isLoading: false,
  refreshDate: '',
}

const reissueSlice = createSlice({
  name: 'reissue',
  initialState,
  reducers: {
    setRefreshTiming: (state, { payload }: PayloadAction<InitialState>) => {
      state = payload
      return state
    },
  },
  extraReducers: (builder) => {
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

export const { setRefreshTiming } = reissueSlice.actions

export default reissueSlice
