import { ClubListType } from '@/type/common'
import { useEffect, useState } from 'react'
import useFetch from './useFetch'

const useNewClub = () => {
  const [newClubs, setNewClubs] = useState<ClubListType[]>([])
  const { fetch } = useFetch<ClubListType[]>({
    url: `/club`,
    method: 'get',
    onSuccess: (data) => {
      setNewClubs(data)
    },
    errors: {
      400: '새로 생긴 동아리 정보를 찾을수 없습니다.',
    },
  })

  useEffect(() => {
    fetch()
  }, [])

  return { newClubs }
}

export default useNewClub
