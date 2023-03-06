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
import Sidebar from '@/components/Sidebar'
import { toggle } from '@/store/sidebar'

export default function Header() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { loginModal, user, isShow } = useSelector((state: RootState) => ({
    loginModal: state.loginModal,
    user: state.user,
    isShow: state.sidebar,
  }))
  useLoggedIn({ onFetch: router.route !== '/my' })

  const path = router.pathname
  const isAdmin = user.role === 'ROLE_ADMIN'

  return (
    <>
      <S.Header>
        <S.Wrapper>
          <Link href='/'>
            <SVG.Logo />
          </Link>

          <S.Navs isAdmin={isAdmin}>
            <S.Nav active={`${path === '/'}`} href='/'>
              홈
            </S.Nav>
            {user.role === 'ROLE_ADMIN' && (
              <>
                <S.Nav active={`${path === '/stulist'}`} href='/stulist'>
                  학생관리
                </S.Nav>
                <S.Nav active={`${path === '/permission'}`} href='/permission'>
                  동아리 관리
                </S.Nav>
                <S.Nav active={`${path === '/statistics'}`} href='/statistics'>
                  통계
                </S.Nav>
              </>
            )}
          </S.Navs>

          <S.UserInfo>
            {user.name ? (
              <Link href='/my'>
                <Profile />
              </Link>
            ) : (
              <a onClick={() => dispatch(setModal())}>로그인</a>
            )}

            <S.SidebarIcon onClick={() => dispatch(toggle())}>
              <SVG.HamburgerBar />
            </S.SidebarIcon>
          </S.UserInfo>
        </S.Wrapper>
      </S.Header>
      {loginModal && <Login />}
      {isShow && isAdmin && <Sidebar />}
    </>
  )
}
