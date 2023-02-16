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
              <a onClick={() => setModal(true)}>로그인</a>
            )}
          </S.NavWrapper>
        </S.Wrapper>
      </S.Header>
      {modal && <Login onClose={() => setModal(false)} />}
    </>
  )
}
