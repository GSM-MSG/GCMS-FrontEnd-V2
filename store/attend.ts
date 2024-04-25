import { ApplicantInitialState } from '@/type/store/applicant'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ApplicantInitialState[] = []

const attendSlice = createSlice({
  name: 'attend',
  initialState,
  reducers: {
    addAllUser: (state, action: PayloadAction<ApplicantInitialState[]>) => {
      state = action.payload
      return state
    },
    addUser: (state, action: PayloadAction<ApplicantInitialState>) => {
      state.push(action.payload)
      return state
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state = state.filter((item) => item.uuid !== action.payload)
      return state
    },
    removeAllUser: (state) => {
      state = []
      return state
    },
  },
})

export const { addAllUser, addUser, removeUser, removeAllUser } =
attendSlice.actions

export default attendSlice
