import ClubType from './ClubType'
import MemberType from './MemberType'

interface ProfileType extends MemberType {
  clubs: ClubInfoType[]
}

interface ClubInfoType {
  id: number
  type: ClubType
  bannerImg: string
  title: string
}

export default ProfileType
