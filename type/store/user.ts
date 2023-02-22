import ClubType from '../common/ClubType'

type UserInitialState = {
  uuid: string
  email: string
  name: string
  grade: number
  classNum: number
  number: number
  profileImg?: string
  clubs: ClubInfoType[]
}

interface ClubInfoType {
  id: number
  type: ClubType
  bannerImg: string
  title: string
}

export default UserInitialState
