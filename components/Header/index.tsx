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
  const path = router.pathname
  useLoggedIn({ onFetch: router.route !== '/my' })

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

          <S.Navs>
            <S.Nav active={`${path === '/'}`} href='/'>
              홈
            </S.Nav>
            <S.Nav active={`${path === '/stulist'}`} href='/stulist'>
              학생관리
            </S.Nav>
            <S.Nav active={`${path === '/permission'}`} href='/permission'>
              동아리 관리
            </S.Nav>
            <S.Nav active={`${path === '/statistics'}`} href='/statistics'>
              통계
            </S.Nav>
          </S.Navs>

          <S.UserInfo>
            {user.name ? (
              <Link href='/my'>
                <Profile />
              </Link>
            ) : (
              <a onClick={() => dispatch(setModal())}>로그인</a>
            )}

            <S.SidebarIcon>
              <SVG.HamburgerBar />
            </S.SidebarIcon>
          </S.UserInfo>
        </S.Wrapper>
      </S.Header>
      {loginModal && <Login />}
    </>
  )
}
