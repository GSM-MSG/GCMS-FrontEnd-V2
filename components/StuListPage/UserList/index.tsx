import * as S from './style'
import { MemberListProps } from '@/type/components/MemberPage'
import UserItem from '@/components/ClubMemberPage/UserList/UserItem'

interface Props extends MemberListProps {
  onClick: () => void
}

export default function UserList({ data, value, onClick }: Props) {
  return (
    <S.UserListLayer>
      <S.UserListContainer>
        {data?.clubMember?.map(
          (item) =>
            item.name.includes(value) && (
              <S.ItemWrapper key={item.uuid} onClick={() => onClick()}>
                <UserItem item={item} scope={data.scope} />
              </S.ItemWrapper>
            )
        )}
      </S.UserListContainer>
    </S.UserListLayer>
  )
}
