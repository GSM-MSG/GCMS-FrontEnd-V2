import Link from 'next/link'
import Profile from './Profile'
import * as S from './style'
import * as SVG from '@/assets/svg'
import Login from '../Login'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { setModal } from '@/store/loginModal'
import { useLoggedIn } from '@/hooks'
import { useRouter } from 'next/router'

export default function Header() {
  const dispatch = useDispatch()
  const router = useRouter()
  // useLoggedIn({ onFetch: router.route !== '/my' })

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
                <Profile />
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
