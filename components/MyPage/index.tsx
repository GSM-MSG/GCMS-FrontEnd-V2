import KebabMenuIcon from '@/public/svg/KebabMenuIcon'
import ProfileIcon from '@/public/svg/profileIcon'
import * as S from './style'

export default function MyPage() {
  const ClubWrapper = (name: string) => {
    return (
      <S.ClubWrapper>
        <S.ClubImg></S.ClubImg>
        <h4>{name}</h4>
        <KebabMenuIcon />
      </S.ClubWrapper>
    )
  }

  return (
    <S.Positionier>
      <S.Layer>
        <S.ProfileBox>
          <ProfileIcon />
          <S.ProfileContent>
            <S.ProfileImg></S.ProfileImg>
            <p>안진형님</p>
            <small>2학년 3반 99번</small>
          </S.ProfileContent>
          <KebabMenuIcon />
        </S.ProfileBox>
        <S.ClubBox>
          <h2>내 동아리</h2>
          <S.ClubContainer>
            <h4>전공동아리</h4>
            {ClubWrapper('미소')}
          </S.ClubContainer>
          <S.ClubContainer>
            <h4>자율동아리</h4>
            {ClubWrapper('더모먼트')}
          </S.ClubContainer>
          <S.ClubContainer>
            <h4>사설동아리</h4>
            {ClubWrapper('MSG')}
            {ClubWrapper('MSG')}
            {ClubWrapper('MSG')}
          </S.ClubContainer>
        </S.ClubBox>
      </S.Layer>
    </S.Positionier>
  )
}
