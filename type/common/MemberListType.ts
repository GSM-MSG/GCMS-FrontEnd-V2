import MemberType from './MemberType'

export interface ClubMemberType extends MemberType {
  scope: 'MEMBER' | 'HEAD'
}

export default interface MemberListType {
  scope: 'MEMBER' | 'HEAD'
  clubMember: ClubMemberType[]
}
