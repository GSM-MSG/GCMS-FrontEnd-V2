import { useFetch } from '@/hooks'
import { ClubListType } from '@/type/common'
import { useEffect } from 'react'
import ClubPermissionList from '../Common/ClubPermissionList'
import * as S from './style'

export default function ClubPermissionPage() {
  const { fetch, data } = useFetch<ClubListType[]>({
    url: '/admin',
    method: 'GET',
  })

  useEffect(() => {
    fetch()
  }, [])

  return (
    <S.Positioner>
      <S.Layer>
        <h3>동아리 허가 요청</h3>
        <ClubPermissionList
          data={data}
          inputLabel={`총 ${data?.length ?? 0}명`}
          onFetch={() => fetch()}
        />
      </S.Layer>
    </S.Positioner>
  )
}
