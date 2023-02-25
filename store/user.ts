import UserInitialState from '@/type/store/user'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: UserInitialState = {
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
    setUser: (state, action: PayloadAction<UserInitialState>) => {
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
