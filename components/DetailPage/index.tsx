import { useFetch } from '@/hooks'
import { RootState } from '@/store'
import { setClubDetail } from '@/store/clubDetail'
import { ClubDetailType } from '@/type/common'
import { AxiosError } from 'axios'
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
    onFailure: (e) => {
      if (!(e instanceof AxiosError)) return console.log('unkonwn error')
      if (e.response?.status === 404) console.log('동아리가 존재하지 않은 경우')
    },
  })

  useEffect(() => {
    fetch()
  }, [clubID])

  return (
    data && (
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
  )
}
