import { useFetch } from '@/hooks'
import { ClubDetailType } from '@/type/common'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ClubActivity from './ClubActivity'
import ClubMember from './ClubMember'
import Contact from './Contact'
import Description from './Description'
import SideBar from './SideBar'
import * as S from './style'

export default function DetailPage() {
  const router = useRouter()
  const clubID = router.query.clubID?.toString()

  const { fetch } = useFetch<ClubDetailType>({
    url: `/club/${clubID}`,
    method: 'get',
  })

  useEffect(() => {
    fetch()
  }, [clubID])

  return (
    <S.Layout>
      <S.Wrapper>
        <S.Section>
          <S.ClubBanner src='https://www.computerhope.com/jargon/h/img.png' />
          <S.ClubInfo>
            <h3>MSG(맛소금)</h3>
            <Contact />
            <Description />
          </S.ClubInfo>
          <ClubActivity />
          <ClubMember />
        </S.Section>
        <SideBar />
      </S.Wrapper>
      <S.Footer />
    </S.Layout>
  )
}
