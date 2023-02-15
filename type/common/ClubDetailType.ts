import ClubType from './ClubType'
import MemberType from './MemberType'

type Scope = 'HEAD' | 'MEMBER' | 'USER' | 'OTHER'

interface ClubDetailType {
  id: number
  type: ClubType
  bannerImg: string
  name: string
  content: string
  contact: string
  teacher: string
  isOpened: boolean
  notionLink: string
  activityImgs: string[]
  head: MemberType
  member: MemberType[]
  scope: Scope
  isApplied: boolean
}

export default ClubDetailType
