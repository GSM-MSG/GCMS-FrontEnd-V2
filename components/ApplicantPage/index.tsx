import ClubNav from '../ClubNav'
import SearchInput from '../SearchInput'
import { TopBox } from '../SearchInput/style'
import Director from './director'
import * as S from './style'
import { useFetch } from '@/hooks'
import { ApplicantListType } from '@/type/common'
import { useEffect } from 'react'

export default function ApplicantPage() {
  const { fetch, data, isLoading } = useFetch<ApplicantListType>({
    url: '/applicant',
    method: 'get',
    onSuccess: (data) => console.log(data),
    onFailure: (e) => console.log(e),
  })
  useEffect(() => {
    setTimeout(async () => {
      console.log(fetch(), data, isLoading)
    }, 5000)
  }, [])

  return (
    <S.Positioner>
      <S.Layer>
        <ClubNav />
        <TopBox>
          <h3>신청자 목록</h3>
          <h5>총 {16}명</h5>
        </TopBox>
        <SearchInput />
        <Director />
      </S.Layer>
    </S.Positioner>
  )
}
