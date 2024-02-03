import { MemberType } from '../common'
import ClubType from '../common/ClubType'

export interface ClubCreationInitialState {
  type: ClubType
  name: string
  content: string
  bannerImg: string
  contact: string
  notionLink: string
  teacher?: string
  activityImgs: string[]
  member: MemberType[]
}

export interface SetClubInfoPayload {
  name: string
  contact: string
  notionLink: string
  content: string
  teacher?: string
}
