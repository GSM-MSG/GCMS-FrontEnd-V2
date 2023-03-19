interface AdminUserListType extends AdminUserType {
  uuid: string
}

export interface AdminUserType {
  nickname: string
  grade: number
  classNum: number
  number: number
  profileImg: string
}

export default AdminUserListType
