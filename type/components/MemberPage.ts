import { ClubMemberType } from '../common/MemberListType'

export interface MemberListProps {
  value: string
}

export interface MemberItemProps {
  item: ClubMemberType
  scope: 'HEAD' | 'MEMBER'
}
