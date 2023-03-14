import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import ProfileImg from '../Common/ProfileImg'
import * as S from './style'

export default function Profile() {
  const { user } = useSelector((state: RootState) => ({
    loginModal: state.loginModal,
    user: state.user,
  }))

  return (
    <S.ProfileWrapper>
      <S.ProfileIMG>
        <ProfileImg alt='profile img' src={user.profileImg} />
      </S.ProfileIMG>
      <S.ClientName>{user.name}</S.ClientName>
    </S.ProfileWrapper>
  )
}
