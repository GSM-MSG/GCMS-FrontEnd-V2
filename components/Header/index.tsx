import Link from 'next/link'
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
            <S.ProfileWrapper>
              <S.ProfileIMG src='#' />
              <S.ClientName>안징형님</S.ClientName>
            </S.ProfileWrapper>
          </S.NavWrapper>
        </S.Wrapper>
      </S.Header>
    </>
  )
}
