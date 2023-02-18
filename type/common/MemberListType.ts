import MemberType from './MemberType'

interface ClubMemberType extends MemberType {
  scope: 'MEMBER' | 'HEAD'
}

interface MemberListType {
  scope: 'MEMBER' | 'HEAD'
  clubMember: ClubMemberType[]
}

export default MemberListType
