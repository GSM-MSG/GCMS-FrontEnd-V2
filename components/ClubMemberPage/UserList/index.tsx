import * as S from './style'
import UserItem from './UserItem'
import { MemberListProps } from '@/type/components/MemberPage'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

export default function UserList({ value }: MemberListProps) {
  const { clubMember } = useSelector((state: RootState) => ({ ...state }))

  return (
    <S.Layer>
      <S.UserContainer>
        {clubMember.clubMember.map(
          (item) =>
            item.name.includes(value) && (
              <UserItem item={item} key={item.uuid} scope={clubMember.scope} />
            )
        )}
      </S.UserContainer>
    </S.Layer>
  )
}
