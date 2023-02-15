import { accessExp, accessToken, refreshExp, refreshToken } from '@/lib/token'
import { TokensType } from '@/type/api/TokenType'
import { useRouter } from 'next/router'

import useFetch from './useFetch'

const useLogin = () => {
  const router = useRouter()
  const gauthCode = router.query.code?.toString()

  const { fetch } = useFetch<TokensType>({
    url: 'auth',
    method: 'post',
    onSuccess: (data) => {
      if (!data) return
      localStorage.setItem(accessToken, data.accessToken)
      localStorage.setItem(refreshToken, data.refreshToken)
      localStorage.setItem(accessExp, data.accessExp)
      localStorage.setItem(refreshExp, data.refreshExp)
      router.replace(`${process.env.NEXT_PUBLIC_GAUTH_REDIRECT_URI}`)
    },
  })

  const handleLogin = () => {
    if (!gauthCode) return
    fetch({ code: gauthCode })
  }
  return { handleLogin }
}

export default useLogin
