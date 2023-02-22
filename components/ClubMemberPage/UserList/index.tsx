import * as S from './style'
import UserItem from './UserItem'
import { MemberListProps } from '@/type/components/MemberPage'

export default function UserList({ data, value }: MemberListProps) {
  console.log(data)
  return (
    <S.Layer>
      <S.UserContainer>
        {data?.clubMember?.map(
          (item) =>
            item.name.includes(value) && (
              <UserItem item={item} key={item.uuid} scope={data.scope} />
            )
        )}
      </S.UserContainer>
    </S.Layer>
  )
}
