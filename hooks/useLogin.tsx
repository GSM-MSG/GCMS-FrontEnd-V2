import { useRouter } from 'next/router'
import { useEffect } from 'react'

import useFetch from './useFetch'

const useLogin = () => {
  const router = useRouter()
  const gauthCode = router.query.code?.toString()
  const { fetch } = useFetch({
    url: 'auth',
    method: 'post',
    onSuccess: () => {
      router.push('')
    },
  })

  useEffect(() => {
    if (!gauthCode) return
    fetch({ code: gauthCode })
  }, [gauthCode])
}

export default useLogin
