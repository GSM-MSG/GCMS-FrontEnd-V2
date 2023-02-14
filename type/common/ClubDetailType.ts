import ClubType from './ClubType'
import MemberType from './MemberType'
import ScopeType from './ScopeType'

interface ClubDetailType {
  id: number
  type: ClubType
  bannerImg: string
  name: string
  content: string
  contact: string
  teacher?: string // optional
  isOpened: boolean
  notionLink: string
  activityImgs: string[]
  head: MemberType
  member: MemberType[]
  scope: ScopeType
  isApplied: boolean
}

export default ClubDetailType
