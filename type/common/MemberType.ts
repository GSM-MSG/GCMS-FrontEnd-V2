import UserProfileType from './UserProfileType'

interface MemberType extends UserProfileType {
  uuid: string
  email: string
  grade: number
  classNum: number
  number: number
}

export default MemberType
