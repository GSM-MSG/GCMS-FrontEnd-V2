import KebabMenuIcon from '@/public/svg/KebabMenuIcon'
import ProfileIcon from '@/public/svg/profileIcon'
import * as S from './style'

export default function MyPage() {
  const ClubWrapper = (name: string) => {
    return (
      <S.ClubWrapper>
        <S.ClubImg></S.ClubImg>
        <S.ClubName>{name}</S.ClubName>
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
            <S.ClubType>전공동아리</S.ClubType>
            {ClubWrapper('미소')}
          </S.ClubContainer>
          <S.ClubContainer>
            <S.ClubType>자율동아리</S.ClubType>
            {ClubWrapper('더모먼트')}
          </S.ClubContainer>
          <S.ClubContainer>
            <S.ClubType>사설동아리</S.ClubType>
            {ClubWrapper('MSG')}
            {ClubWrapper('MSG')}
            {ClubWrapper('MSG')}
          </S.ClubContainer>
        </S.ClubBox>
      </S.Layer>
    </S.Positionier>
  )
}
