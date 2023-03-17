import { useFetch } from '@/hooks'
import DataInitializer from '@/lib/DataInitializer'
import ClubDetailType from '@/type/common/ClubDetailType'
import { EditClubForm } from '@/type/components/ClubEdit'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ClubNav from '../Common/ClubNav'
import Edit from './components/Edit'
import Notice from './components/Notice'
import * as S from './style'
import SEO from '@/components/SEO'

const ClubEdit = () => {
  const router = useRouter()
  const clubId = router.query.clubID
  const [clubData, setClubData] = useState<Partial<EditClubForm>>({})
  const { fetch, data } = useFetch<ClubDetailType>({
    method: 'get',
    url: `/club/${clubId}`,
    onSuccess: (data) => {
      if (!['MEMBER', 'HEAD', 'ADMIN'].includes(data?.scope)) router.push('/')
      const di = new DataInitializer()
      setClubData(di.ClubDetailToEditClubForm(data))
    },
  })

  useEffect(() => {
    if (clubId) fetch()
  }, [clubId])

  return (
    <>
      <SEO title={`GCMS | ${data?.name}동아리 수정`} />
      <S.Wrapper>
        <ClubNav />

        <Notice data={data} />

        {data && ['ADMIN', 'HEAD'].includes(data?.scope) && (
          <Edit
            banner={data.bannerImg}
            activity={data.activityImgs}
            initialData={clubData}
            updateData={fetch}
          />
        )}
      </S.Wrapper>
    </>
  )
}

export default ClubEdit
