import ClubNav from '../ClubNav'
import Director from './Page/director'
import * as S from './style'

export default function ApplicantPage() {
  return (
    <S.Positionier>
      <S.Layer>
        <ClubNav />
        <Director />
      </S.Layer>
    </S.Positionier>
  )
}
