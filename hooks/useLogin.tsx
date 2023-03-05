import TokenManager from '@/api/TokenManager'
import { TokensType } from '@/type/api/TokenManager'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useFetch from './useFetch'
import useLoggedIn from './useLoggedIn'

const useLogin = () => {
  const router = useRouter()
  const gauthCode = router.query.code?.toString()
  const { fetchUser } = useLoggedIn({ onFetch: false })
  const { fetch } = useFetch<TokensType>({
    url: 'auth',
    method: 'post',
    onSuccess: (data) => {
      if (typeof window !== 'undefined') {
        const tokenManager = new TokenManager()
        tokenManager.setTokens(data)
      }
      fetchUser()
      router.replace('')
    },
    onFailure: () => {
      router.replace('')
    },
  })

  useEffect(() => {
    if (!gauthCode) return
    fetch({ code: gauthCode })
  }, [gauthCode])
}

export default useLogin
