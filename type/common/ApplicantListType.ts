import MemberType from './MemberType'
import ScopeType from './ScopeType'

interface ApplicantListType {
  scope: Omit<ScopeType, 'USER' | 'OTHER'>
  applicantList: MemberType[]
}

export default ApplicantListType
