import { UserInitialState } from '@/type/store/user'
import * as S from './style'

export default function Profile({ user }: { user: UserInitialState }) {
  return (
    <S.ProfileWrapper>
      {user.profileImg ? (
        <S.ProfileIMG src={user.profileImg} />
      ) : (
        <S.SampleIMG />
      )}
      <S.ClientName>{user.name}</S.ClientName>
    </S.ProfileWrapper>
  )
}
