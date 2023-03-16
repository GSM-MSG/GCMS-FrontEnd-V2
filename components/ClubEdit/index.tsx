import { useRouter } from 'next/router'
import ClubNav from '../Common/ClubNav'
import Edit from './components/Edit'
import Notice from './components/Notice'
import * as S from './style'
import SEO from '@/components/SEO'
import { useGetClubDetailQuery } from '@/store/ClubDetailApi'
import dataInitializer from '@/lib/DataInitializer'

const ClubEdit = () => {
  const router = useRouter()
  const clubId = router.query.clubID?.toString() || ''
  const { data } = useGetClubDetailQuery(clubId, { skip: !clubId })

  return (
    <>
      <SEO title={`GCMS | ${data?.name}동아리 수정`} />
      <S.Wrapper>
        <ClubNav />

        <Notice data={data} />

        {data?.scope === 'HEAD' && (
          <Edit
            initialData={dataInitializer.ClubDetailToEditClubForm(data)}
            banner={data.bannerImg}
            activity={data.activityImgs}
          />
        )}
      </S.Wrapper>
    </>
  )
}

export default ClubEdit
