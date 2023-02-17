import { useLogin } from '@/hooks'
import ClubList from '../ClubList'
import CreateClubBtn from '../CreateClubBtn'
import Banner from './Banner'
import NewClub from './NewClub'
import * as S from './style'

export default function MainPage() {
  useLogin()

  return (
    <S.Section>
      <S.Wrapper>
        <Banner />
        <NewClub />
        <S.ClubWrapper>
          <p>기존 동아리들</p>
          <ClubList />
        </S.ClubWrapper>
        <CreateClubBtn />
      </S.Wrapper>
    </S.Section>
  )
}
