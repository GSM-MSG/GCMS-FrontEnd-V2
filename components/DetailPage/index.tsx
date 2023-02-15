import { useFetch } from '@/hooks'
import { RootState } from '@/store'
import { setClubDetail } from '@/store/clubDetail'
import { ClubDetailType } from '@/type/common'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ClubActivity from './ClubActivity'
import ClubMember from './ClubMember'
import Contact from './Contact'
import Description from './Description'
import SideBar from './SideBar'
import * as S from './style'

export default function DetailPage() {
  const router = useRouter()
  const clubID = router.query.clubID?.toString()
  const dispatch = useDispatch()

  const { clubDetail } = useSelector((state: RootState) => ({
    clubDetail: state.clubDetail,
  }))

  const { fetch, data } = useFetch<ClubDetailType>({
    url: `/club/${clubID}`,
    method: 'get',
    onSuccess: (data) => {
      dispatch(setClubDetail(data))
    },
  })

  useEffect(() => {
    setTimeout(() => {
      fetch()
    }, 1000)
  }, [clubID])

  if (!clubID || !data) return

  return (
    <S.Layout>
      <S.Wrapper>
        <S.Section>
          <S.ClubBanner src={clubDetail.bannerImg} />
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
