import useUser from '@/hooks/useUser'
import Link from 'next/link'
import Profile from './Profile'
import * as S from './style'
import * as SVG from '@/assets/svg'
import Login from '../Login'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { setModal } from '@/store/loginModal'

export default function Header() {
  const dispatch = useDispatch()

  const { loginModal } = useSelector((state: RootState) => ({
    loginModal: state.loginModal,
  }))

  const { user, isLoggned } = useUser()

  return (
    <>
      <S.Header>
        <S.Wrapper>
          <Link href='/'>
            <SVG.Logo />
          </Link>
          <S.NavWrapper>
            <Link href='/'>홈</Link>
            {isLoggned ? (
              <Link href='/my'>
                <Profile user={user} />
              </Link>
            ) : (
              <a onClick={() => dispatch(setModal())}>로그인</a>
            )}
          </S.NavWrapper>
        </S.Wrapper>
      </S.Header>
      {loginModal && <Login onClose={() => dispatch(setModal())} />}
    </>
  )
}
