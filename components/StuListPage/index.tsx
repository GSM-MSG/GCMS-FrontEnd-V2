import StuInfo from './StuInfo/StuInfo'
import StuSearch from './StuSearch/StuSearch'
import * as S from './style'

export default function StuListPage() {
  return (
    <S.Layout>
      <S.Wrapper>
        <S.Title>학생 리스트</S.Title>
        <S.MemberWrapper>
          <StuSearch />
          <StuInfo />
        </S.MemberWrapper>
      </S.Wrapper>
    </S.Layout>
  )
}
