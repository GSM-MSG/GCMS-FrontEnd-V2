import { InitialState } from '@/type/store/api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import TokenManager from '@/api/TokenManager'

export const refreshToken = createAsyncThunk(
  'api/refreshToken',
  async (apiStore: InitialState) => {
    const tokenManager = new TokenManager()

    if (
      apiStore.isLoading ||
      tokenManager.addMinuteDate(apiStore.refreshDate, 1) >= new Date()
    )
      return

    return tokenManager.refreshQuery()
  }
)

const initialState: InitialState = {
  isLoading: false,
  refreshDate: '',
}

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(refreshToken.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(refreshToken.fulfilled, (state) => {
      state.isLoading = false
    })
  },
})

export default apiSlice
