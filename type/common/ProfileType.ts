import ClubType from './ClubType'
import UserProfileType from './UserProfileType'

interface ProfileType extends UserProfileType {
  uuid: string
  email: string
  grade: number
  classNum: number
  number: number
  clubs: ClubInfoType[]
}

interface ClubInfoType {
  id: number
  type: ClubType
  bannerImg: string
  name: string
}

export default ProfileType
