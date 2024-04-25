import * as SVG from '@/assets/svg'
import { useRouter } from 'next/router'
import * as S from './style'
import { useGetClubDetailQuery } from '@/store/ClubDetailApi'

export default function ClubNav() {
  const router = useRouter()
  const clubId = router.query.clubID?.toString() || ''
  const { data } = useGetClubDetailQuery(clubId, { skip: !clubId })

  return (
    <S.Layer>
      <div>
        <S.ClubName href={`/detail/${clubId}`}>{data?.name ?? ''}</S.ClubName>
      </div>
      <S.NavContainer>
        <S.NavWrapper href={`/applicant/${clubId}`}>
          <S.IconBox>
            <SVG.MemoPadIcon />
          </S.IconBox>
          <S.NavTitle>
            <small>신청자 목록</small>
          </S.NavTitle>
        </S.NavWrapper>
        <S.NavWrapper href={`/member/${clubId}`}>
          <S.IconBox>
            <SVG.PersonIcon />
          </S.IconBox>
          <S.NavTitle>
            <small>동아리 멤버</small>
          </S.NavTitle>
        </S.NavWrapper>
        <S.NavWrapper href={`/edit/${clubId}`}>
          <S.IconBox>
            <SVG.School />
          </S.IconBox>
          <S.NavTitle>
            <small>동아리</small>
          </S.NavTitle>
        </S.NavWrapper>
        <S.NavWrapper href={`/attend/${clubId}`}>
          <S.IconBox>
            <SVG.Hand />
          </S.IconBox>
          <S.NavTitle>
            <small>출석</small>
          </S.NavTitle>
        </S.NavWrapper>
      </S.NavContainer>
    </S.Layer>
  )
}
