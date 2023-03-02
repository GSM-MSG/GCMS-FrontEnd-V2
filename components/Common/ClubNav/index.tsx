import * as SVG from '@/assets/svg'
import { useFetch } from '@/hooks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as S from './style'
import { ClubDetailType } from '@/type/common'

export default function ClubNav() {
  const router = useRouter()
  const clubId = router.query.clubID

  const { fetch, data } = useFetch<ClubDetailType>({
    url: `/club/${clubId}`,
    method: 'get',
  })

  useEffect(() => {
    if (clubId) fetch()
  }, [clubId])

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
      </S.NavContainer>
    </S.Layer>
  )
}
