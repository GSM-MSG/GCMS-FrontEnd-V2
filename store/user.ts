import ProfileType from '@/type/common/ProfileType'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ProfileType = {
  uuid: '',
  email: '',
  name: '',
  grade: 0,
  classNum: 0,
  number: 0,
  clubs: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<ProfileType>) => {
      state = action.payload
      return state
    },
    removeUser: () => {
      return initialState
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice
