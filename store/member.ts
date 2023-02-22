import { MemberState } from '@/type/store/member'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: MemberState[] = []

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    addMember: (state, action: PayloadAction<MemberState>) => {
      state.push(action.payload)
      return state
    },
    removeMember: (state, action: PayloadAction<string>) => {
      state = state.filter((item) => item.uuid !== action.payload)
      return state
    },
  },
})

export const { addMember, removeMember } = memberSlice.actions

export default memberSlice
