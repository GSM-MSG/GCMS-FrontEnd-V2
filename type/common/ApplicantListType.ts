import MemberType from './MemberType'

interface ApplicantListType {
  userScope: 'MEMBER' | 'HEAD'
  신청자List: MemberType[]
}

export default ApplicantListType
