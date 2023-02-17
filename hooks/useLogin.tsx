import TokenManager from '@/api/TokenManager'
import { TokensType } from '@/type/api/TokenManager'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import useFetch from './useFetch'

const useLogin = () => {
  const router = useRouter()
  const gauthCode = router.query.code?.toString()
  const { fetch } = useFetch<TokensType>({
    url: 'auth',
    method: 'post',
    onSuccess: (data) => {
      if (typeof window !== 'undefined') {
        const tokenManager = new TokenManager()
        tokenManager.setTokens(data)
      }
      router.push('')
    },
  })

  useEffect(() => {
    if (!gauthCode) return
    fetch({ code: gauthCode })
  }, [gauthCode])
}

export default useLogin
