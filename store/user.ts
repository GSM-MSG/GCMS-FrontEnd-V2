import { UserProfileType } from '@/type/common'
import ProfileType from '@/type/common/ProfileType'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ProfileType = {
  uuid: '',
  email: '',
  name: '',
  grade: 0,
  classNum: 0,
  number: 0,
  role: 'ROLE_STUDENT',
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
    setUserProfile: (state, action: PayloadAction<UserProfileType>) => {
      state = { ...state, ...action.payload }
      return state
    },
    removeUser: () => {
      return initialState
    },
  },
})

export const { setUser, setUserProfile, removeUser } = userSlice.actions

export default userSlice
