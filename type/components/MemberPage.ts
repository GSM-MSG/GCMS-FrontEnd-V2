import { MemberListType } from '../common'
import { ClubMemberType } from '../common/MemberListType'

export interface MemberListProps {
  data: MemberListType
  value: string
}

export interface MemberItemProps {
  item: ClubMemberType
  scope: 'HEAD' | 'MEMBER'
}
