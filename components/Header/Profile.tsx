import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import * as S from './style'

export default function Profile() {
  const { user } = useSelector((state: RootState) => ({
    loginModal: state.loginModal,
    user: state.user,
  }))

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
