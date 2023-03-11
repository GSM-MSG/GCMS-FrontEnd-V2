import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import RequestClubType from '@/lib/requestClubType'
import * as S from './style'
import * as SVG from '@/assets/svg'
import Link from 'next/link'

export default function ClubName() {
  const { clubDetail } = useSelector((state: RootState) => ({
    clubDetail: state.clubDetail,
  }))

  const scope = ['HEAD', 'MEMBER']

  return (
    <S.ClubNaem>
      <p>#{RequestClubType(clubDetail.type)}</p>
      <h3>
        {scope.includes(clubDetail.scope) && (
          <Link href={`/applicant/${clubDetail.id}`}>
            <SVG.GearIcon />
          </Link>
        )}
        {clubDetail.name}
      </h3>
    </S.ClubNaem>
  )
}
