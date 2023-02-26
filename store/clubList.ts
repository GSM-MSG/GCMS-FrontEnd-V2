import { ClubListType } from '@/type/common'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ClubListType[] = []

const clubListSlice = createSlice({
  name: 'clubList',
  initialState,
  reducers: {
    setClubList: (state, { payload }: PayloadAction<ClubListType[]>) => {
      state = payload
      return state
    },
  },
})

export const { setClubList } = clubListSlice.actions

export default clubListSlice
