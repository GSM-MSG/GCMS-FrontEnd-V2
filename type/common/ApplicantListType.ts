import MemberType from './MemberType'

interface ApplicantListType {
  userScope: 'MEMBER' | 'HEAD'
  applicantList: MemberType[]
}

export default ApplicantListType
