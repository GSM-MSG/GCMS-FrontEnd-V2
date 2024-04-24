import MemberType from './MemberType'
import ScopeType from './ScopeType'

interface clubMemberListType {
  scope: Omit<ScopeType, 'USER' | 'OTHER'>
  clubMember: MemberType[]
}

export default clubMemberListType
