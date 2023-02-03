import Link from 'next/link'
import Profile from './Profile'
import * as S from './style'

export default function Header() {
  return (
    <>
      <S.Header>
        <S.Wrapper>
          <S.Logo>logo</S.Logo>
          <S.NavWrapper>
            <Link href='#'>홈</Link>
            <Link href='#'>로그인</Link>
            <Profile />
          </S.NavWrapper>
        </S.Wrapper>
      </S.Header>
    </>
  )
}
