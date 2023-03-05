import RoleType from './RoleType'

interface UserProfileType extends RoleType {
  name: string
  profileImg?: string
}

export default UserProfileType
