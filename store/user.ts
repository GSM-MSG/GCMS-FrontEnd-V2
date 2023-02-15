import { UserInitialState } from '@/type/store/user'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: UserInitialState = {
  name: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInitialState>) => {
      state = action.payload
      return state
    },
    removeUser: (state) => {
      state = {
        name: '',
      }
      return state
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice
