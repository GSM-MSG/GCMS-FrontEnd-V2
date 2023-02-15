import ClubList from '../ClubList'
import Banner from './Banner'
import NewClub from './NewClub'
import * as S from './style'

export default function MainPage() {
  return (
    <S.Section>
      <S.Wrapper>
        <Banner />
        <NewClub />
        <S.ClubWrapper>
          <p>기존 동아리들</p>
          <ClubList />
        </S.ClubWrapper>
      </S.Wrapper>
    </S.Section>
  )
}
