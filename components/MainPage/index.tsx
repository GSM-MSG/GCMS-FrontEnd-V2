import { useLogin } from '@/hooks'
import ClubList from '../ClubList'
import CreateClubBtn from '../CreateClubBtn'
import * as S from './style'

export default function MainPage() {
  useLogin()

  return (
    <S.Section>
      <S.Wrapper>
        <S.ClubWrapper>
          <p>기존 동아리들</p>
          <ClubList />
        </S.ClubWrapper>
        <CreateClubBtn />
      </S.Wrapper>
    </S.Section>
  )
}
