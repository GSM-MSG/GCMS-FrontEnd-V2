import Link from 'next/link'
import Portal from '../Portal'
import { useRouter } from 'next/router'
import * as S from './style'
import { useEffect } from 'react'
import { gauthLoginUri } from '@/lib/GauthLoginUrI'
import * as SVG from '@/assets/svg'
import { accessExp, accessToken, refreshExp, refreshToken } from '@/lib/token'
import { useFetch } from '@/hooks'

export default function Login() {
  const router = useRouter()
  const gauthCode = router.query.code?.toString()

  type TokensType = {
    accessToken: string
    refreshToken: string
    accessExp: string
    refreshExp: string
  }

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

  useEffect(() => {
    if (!gauthCode) return
    fetch({ code: gauthCode })
  }, [gauthCode, fetch])

  return (
    <Portal>
      <S.Wrapper>
        <S.CancelBtn>
          <SVG.CloseIcon />
        </S.CancelBtn>
        <S.LogoWarppaer>
          <SVG.LoginLogo />
          GSM 동아리 관리의 모든것
        </S.LogoWarppaer>
        <S.Auth onClick={() => router.replace(gauthLoginUri)}>
          <SVG.GauthLogo />
          Sign in with GAuth
        </S.Auth>
        <S.ContentInfo>
          <Link href='https://matsogeum.notion.site/0f7c494b26114da098d0c8ea50bb5588'>
            서비스 이용약관
          </Link>{' '}
          |{' '}
          <Link href='https://matsogeum.notion.site/db8c0669605e4685b036cc08293aceb7'>
            개인정보 처리 방침
          </Link>
        </S.ContentInfo>
      </S.Wrapper>
    </Portal>
  )
}
