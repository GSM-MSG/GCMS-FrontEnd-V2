import { useFetch } from '@/hooks'
import { RootState } from '@/store'
import { setClubDetail } from '@/store/clubDetail'
import { ClubDetailType } from '@/type/common'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SEO from '../SEO'
import ClubActivity from './ClubActivity'
import ClubMember from './ClubMember'
import ClubName from './ClubName'
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
    errors: {
      400: '동아리 아이디를 찾을수 없습니다.',
    },
  })

  useEffect(() => {
    if (clubID) fetch()
  }, [clubID])

  return (
    <>
      <SEO
        title={`GCMS | ${data?.name}`}
        description={data?.content}
        image={data?.bannerImg}
      />
      {data && (
        <S.Layout>
          <S.Wrapper>
            <S.Section>
              <S.ClubBanner>
                <S.NextImg
                  alt='banner igm'
                  src={clubDetail.bannerImg}
                  width={100}
                  height={100}
                />
              </S.ClubBanner>
              <S.ClubInfo>
                <ClubName />
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
      )}
    </>
  )
}
