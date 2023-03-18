import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MemberListType } from '@/type/common'

const initialState: MemberListType = {
  scope: 'MEMBER',
  clubMember: [],
}

const clubMemberSlice = createSlice({
  name: 'clubMember',
  initialState,
  reducers: {
    setMemberList: (state, { payload }: PayloadAction<MemberListType>) => {
      state = payload
      return state
    },
    delegateHead: (state, { payload }: PayloadAction<string>) => {
      state.clubMember = state.clubMember.map((member) => {
        if (member.scope === 'HEAD') member.scope = 'MEMBER'
        else if (member.uuid === payload) member.scope = 'HEAD'
        return member
      })
      return state
    },
    kickMember: (state, { payload }: PayloadAction<string>) => {
      state.clubMember = state.clubMember.filter(
        (member) => member.uuid !== payload
      )
      return state
    },
  },
})

export const { setMemberList, delegateHead, kickMember } =
  clubMemberSlice.actions

export default clubMemberSlice
