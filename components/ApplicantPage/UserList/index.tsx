import * as S from './style'
import { UserListProps } from '@/type/components/ApplicantPage'
import UserItem from './UserItem'

export default function UserList({ data, value }: UserListProps) {
  return (
    <S.Layer>
      <S.UserContainer>
        {data?.applicantList.map(
          (item) =>
            item.name.includes(value) && (
              <UserItem item={item} key={item.uuid} userScope={data.scope} />
            )
        )}
      </S.UserContainer>
    </S.Layer>
  )
}
