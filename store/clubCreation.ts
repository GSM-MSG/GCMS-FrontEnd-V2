import { ClubType, MemberType } from '@/type/common'
import {
  ClubCreationInitialState,
  SetClubInfoPayload,
} from '@/type/store/clubCreation'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ClubCreationInitialState = {
  name: '',
  content: '',
  bannerImg: '',
  contact: '',
  notionLink: '',
  activityImgs: [],
  member: [],
}

const clubCreationSlice = createSlice({
  name: 'clubCreation',
  initialState,
  reducers: {
    setClubType: (state, action: PayloadAction<ClubType>) => {
      state.type = action.payload
    },

    setClubInfo: (state, action: PayloadAction<SetClubInfoPayload>) => {
      state = {
        ...state,
        ...action.payload,
      }
    },

    setBannerImg: (state, action: PayloadAction<string>) => {
      state.bannerImg = action.payload
    },

    addActivityImg: (state, action: PayloadAction<string>) => {
      if (state.activityImgs.length >= 4)
        throw new Error('Activity image maximum count is 4')
      state.activityImgs.push(action.payload)
    },

    removeActivityImg: (state, action: PayloadAction<string>) => {
      state.activityImgs = state.activityImgs.filter(
        (i) => i !== action.payload
      )
    },

    setContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload
    },

    setMember: (state, action: PayloadAction<MemberType>) => {
      state.member.push(action.payload)
    },

    removeMember: (state, action: PayloadAction<string>) => {
      state.member = state.member.filter((i) => i.uuid !== action.payload)
    },
  },
})

export const {
  setClubType,
  setClubInfo,
  setMember,
  setContent,
  removeMember,
  setBannerImg,
  addActivityImg,
  removeActivityImg,
} = clubCreationSlice.actions

export default clubCreationSlice
