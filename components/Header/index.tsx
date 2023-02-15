import useUser from '@/hooks/useUser'
import Link from 'next/link'
import Profile from './Profile'
import * as S from './style'

export default function Header() {
  const { user, isLoggned } = useUser()

  return (
    <>
      <S.Header>
        <S.Wrapper>
          <S.Logo>logo</S.Logo>
          <S.NavWrapper>
            <Link href='#'>홈</Link>
            {isLoggned ? <Profile user={user} /> : <Link href='#'>로그인</Link>}
          </S.NavWrapper>
        </S.Wrapper>
      </S.Header>
    </>
  )
}
