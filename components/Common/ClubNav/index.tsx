import * as SVG from '@/assets/svg'
import { useFetch } from '@/hooks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as S from './style'
import { ClubDetailType } from '@/type/common'

export default function ClubNav() {
  const router = useRouter()
  const clubID = router.query.clubID

  const { fetch, data } = useFetch<ClubDetailType>({
    url: `/club/${clubID}`,
    method: 'get',
  })

  useEffect(() => {
    fetch()
  }, [fetch])

  return (
    <S.Layer>
      <h3>{data?.name ?? ''}</h3>
      <S.NavContainer>
        <S.NavWrapper href={`/applicant/${clubID}`}>
          <S.IconBox>
            <SVG.MemoPadIcon />
          </S.IconBox>
          <S.NavTitle>
            <small>신청자 목록</small>
          </S.NavTitle>
        </S.NavWrapper>
        <S.NavWrapper href={`/member/${clubID}`}>
          <S.IconBox>
            <SVG.PersonIcon />
          </S.IconBox>
          <S.NavTitle>
            <small>동아리 멤버</small>
          </S.NavTitle>
        </S.NavWrapper>
        <S.NavWrapper href={`/edit/${clubID}`}>
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
