import { ClubOptionType } from '@/type/components/ClubOptionNavigation'
import * as S from './style'

interface Props {
  type: ClubOptionType
}

const ClubList = ({ type }: Props) => {
  return (
    <S.Wrapper>
      <S.TitleSection>
        <S.Title>배너</S.Title>
        <S.Title>유형</S.Title>
        <S.Title>이름</S.Title>
        <S.Title>설명</S.Title>
      </S.TitleSection>
      <S.ClubSection>
        <S.ClubBanner />
        <S.ClubKind>사설동아리</S.ClubKind>
        <S.ClubTitle>더모먼트</S.ClubTitle>
        <S.ClubContent>더모먼트는 진짜진짜 지리는 동아리입니다</S.ClubContent>
      </S.ClubSection>
    </S.Wrapper>
  )
}

export default ClubList
