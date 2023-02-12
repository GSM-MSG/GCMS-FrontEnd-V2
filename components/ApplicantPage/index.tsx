import ClubNav from '../ClubNav'
import SearchInput from '../SearchInput'
import { TopBox } from '../SearchInput/style'
import Director from './director'
import * as S from './style'

export default function ApplicantPage() {
  return (
    <S.Positioner>
      <S.Layer>
        <ClubNav />
        <TopBox>
          <h3>신청자 목록</h3>
          <h5>총 {16}명</h5>
        </TopBox>
        <SearchInput />
        <Director />
      </S.Layer>
    </S.Positioner>
  )
}
