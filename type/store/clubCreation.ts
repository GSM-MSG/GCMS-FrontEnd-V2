import ClubType from '../common/ClubType'

export interface ClubCreationInitialState {
  type?: ClubType
  name: string
  content: string
  bannerImg: string
  contact: string
  notionLink: string
  teacher?: string
  activityImgs: string[]
  member: string[]
}

export interface SetClubInfoPayload {
  name: string
  contact: string
  notionLink: string
  teacher?: string
}
