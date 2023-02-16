import useNewClub from '@/hooks/useNewClub'
import ClubList from '../ClubList'
import * as S from './style'

export default function NewClubPage() {
  const { newClubs } = useNewClub()

  return (
    newClubs && (
      <S.Section>
        <S.Wrapper>
          <S.Title>
            <h1>새로 생긴 동아리들</h1>
            <p>전체 {newClubs?.length}개</p>
          </S.Title>
          <ClubList />
        </S.Wrapper>
      </S.Section>
    )
  )
}
