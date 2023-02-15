import useUser from '@/hooks/useUser'
import Link from 'next/link'
import Profile from './Profile'
import * as S from './style'
import * as SVG from '@/assets/svg'
import { useState } from 'react'
import Login from '../Login'

export default function Header() {
  const { user, isLoggned } = useUser()
  const [modal, setModal] = useState(false)

  return (
    <>
      <S.Header>
        <S.Wrapper>
          <SVG.Logo />
          <S.NavWrapper>
            <Link href='/'>홈</Link>
            {isLoggned ? (
              <Profile user={user} />
            ) : (
              <a onClick={() => setModal(true)}>로그인</a>
            )}
          </S.NavWrapper>
        </S.Wrapper>
      </S.Header>
      {modal && <Login onClose={() => setModal(false)} />}
    </>
  )
}
