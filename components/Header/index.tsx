import Link from 'next/link'
import Profile from './Profile'
import * as S from './style'
import * as SVG from '@/assets/svg'
import Login from '../Login'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { setModal } from '@/store/loginModal'
import useUser from '@/hooks/useUser'

export default function Header() {
  const dispatch = useDispatch()
  useUser()

  const { loginModal, user } = useSelector((state: RootState) => ({
    loginModal: state.loginModal,
    user: state.user,
  }))

  return (
    <>
      <S.Header>
        <S.Wrapper>
          <Link href='/'>
            <SVG.Logo />
          </Link>
          <S.NavWrapper>
            <Link href='/'>홈</Link>
            {user.name ? (
              <Link href='/my'>
                <Profile user={user} />
              </Link>
            ) : (
              <a onClick={() => dispatch(setModal())}>로그인</a>
            )}
          </S.NavWrapper>
        </S.Wrapper>
      </S.Header>
      {loginModal && <Login />}
    </>
  )
}
