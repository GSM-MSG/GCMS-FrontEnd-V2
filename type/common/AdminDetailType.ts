import { AdminUserType } from './AdminUserListType'
import { ClubInfoType } from './ProfileType'

interface AdminDetailType extends AdminUserType {
  clubs: ClubInfoType[]
}

export default AdminDetailType
