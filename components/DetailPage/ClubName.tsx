import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import RequestClubType from '@/lib/requestClubType'
import * as S from './style'

export default function ClubName() {
  const { clubDetail } = useSelector((state: RootState) => ({
    clubDetail: state.clubDetail,
  }))

  return (
    <S.ClubNaem>
      <p>#{RequestClubType(clubDetail.type)}</p>
      <h3>{clubDetail.name}</h3>
    </S.ClubNaem>
  )
}
