import { MemberType } from '../common'
import ClubType from '../common/ClubType'

interface UserInitialState extends MemberType {
  clubs: ClubInfoType[]
}

interface ClubInfoType {
  id: number
  type: ClubType
  bannerImg: string
  title: string
}

export default UserInitialState
