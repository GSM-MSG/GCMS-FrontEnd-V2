import MemberType from './MemberType'

interface ApplicantListType {
  scope: 'MEMBER' | 'HEAD'
  applicantList: MemberType[]
}

export default ApplicantListType
