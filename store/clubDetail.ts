import { ClubDetailType } from '@/type/common'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ClubDetailType = {
  id: 0,
  type: 'MAJOR',
  bannerImg: '',
  name: '',
  content: '',
  contact: '',
  isOpened: false,
  notionLink: '',
  activityImgs: [],
  head: {
    uuid: '',
    email: '',
    name: '',
    grade: 0,
    classNum: 0,
    number: 0,
  },
  member: [],
  scope: 'OTHER',
  isApplied: false,
}

const clubDetailSlice = createSlice({
  name: 'clubDetail',
  initialState,
  reducers: {
    setClubDetail: (state, action: PayloadAction<ClubDetailType>) => {
      state = action.payload
      return state
    },
  },
})
export const { setClubDetail } = clubDetailSlice.actions

export default clubDetailSlice