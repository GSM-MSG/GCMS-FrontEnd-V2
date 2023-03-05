import ClubType from './ClubType'
import MemberType from './MemberType'

interface ProfileType extends MemberType {
  clubs: ClubInfoType[]
}

interface ClubInfoType {
  id: number
  type: ClubType
  bannerImg: string
  name: string
}

export default ProfileType
