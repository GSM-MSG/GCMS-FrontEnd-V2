import MemberType from './MemberType'

interface ApplicantListType {
  scope: 'MEMBER' | 'HEAD' | 'ADMIN'
  applicantList: MemberType[]
}

export default ApplicantListType
