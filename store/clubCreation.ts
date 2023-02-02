import ClubType from '@/type/common/ClubType'
import {
  ClubCreationInitialState,
  SetClubImagesPayload,
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

    setClubImages: (state, action: PayloadAction<SetClubImagesPayload>) => {
      state.bannerImg = action.payload.bannerImg
      state.activityImgs = action.payload.activityImgs
    },

    setClubContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload
    },

    setClubMember: (state, action: PayloadAction<string>) => {
      state.member.push(action.payload)
    },

    removeClubMember: (state, action: PayloadAction<string>) => {
      state.member = state.member.filter((i) => i !== action.payload)
    },
  },
})

export const {
  setClubType,
  setClubInfo,
  setClubImages,
  setClubMember,
  setClubContent,
  removeClubMember,
} = clubCreationSlice.actions

export default clubCreationSlice
