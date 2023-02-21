import { ClubType } from '../common'

export interface EditClubForm {
  type: ClubType
  name: string
  content: string
  bannerImg: FileList
  contact: string
  notionLink: string
  teacher?: string
  activityImgs: FileList
  member: string[]
}
