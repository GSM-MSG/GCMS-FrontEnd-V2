import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import * as S from './style'
import * as SVG from '@/assets/svg'
import Link from 'next/link'

export default function ClubName() {
  const { clubDetail } = useSelector((state: RootState) => ({
    clubDetail: state.clubDetail,
  }))
  const clubType = {
    MAJOR: '전공',
    EDITORIAL: '사설',
    FREEDOM: '자율',
  }
  const scope = ['HEAD', 'MEMBER']

  return (
    <S.ClubNaem>
      <p>#{clubType[clubDetail.type]} 동아리</p>
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
