import { useFetch } from '@/hooks'
import DataInitializer from '@/lib/DataInitializer'
import ClubDetailType from '@/type/common/ClubDetailType'
import { EditClubForm } from '@/type/components/ClubEdit'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Edit from './components/Edit'
import Notice from './components/Notice'
import * as S from './style'

const ClubEdit = () => {
  const router = useRouter()
  const [clubData, setClubData] = useState<Partial<EditClubForm>>({})
  const { fetch } = useFetch<ClubDetailType>({
    method: 'get',
    url: `/club/${router.query.clubID}`,
    onSuccess: (data) => {
      const di = new DataInitializer()
      setClubData(di.ClubDetailToEditClubForm(data))
    },
  })

  useEffect(() => {
    if (router.query.clubID) fetch()
  }, [router.query.clubID])

  return (
    <S.Wrapper>
      <Notice />
      <Edit clubDetailReFetch={fetch} initialData={clubData} />
    </S.Wrapper>
  )
}

export default ClubEdit
