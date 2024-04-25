import * as S from './style'
import { UserListProps } from '@/type/components/AttendPage'
import UserItem from './UserItem'

export default function UserList({ data, value }: UserListProps) {
  return (
    <S.Layer>
      <S.UserContainer>
        {data?.users.map(
          (item) =>
            item.name.includes(value) && (
              <UserItem item={item} key={item.uuid} />
            )
        )}
      </S.UserContainer>
    </S.Layer>
  )
}
