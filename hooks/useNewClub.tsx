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
  })

  useEffect(() => {
    fetch()
  }, [])

  return { newClubs }
}

export default useNewClub
