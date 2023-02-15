import ClubList from '../ClubList'
import * as S from './style'

export default function NewClubPage() {
  return (
    <S.Section>
      <S.Wrapper>
        <S.Title>
          <h1>새로 생긴 동아리들</h1>
          <p>전체 14개</p>
        </S.Title>
        <ClubList />
      </S.Wrapper>
    </S.Section>
  )
}
