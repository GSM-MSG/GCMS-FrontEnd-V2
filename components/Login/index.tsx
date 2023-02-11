import Link from 'next/link'
import Portal from '../Portal'
import { useRouter } from 'next/router'
import * as S from './style'
import { useEffect } from 'react'
import { API } from '@/lib/API'
import { accessToken, accessExp, refreshToken, refreshExp } from '@/lib/token'
import { AxiosError } from 'axios'
import { gauthLoginUri } from '@/lib/GauthLoginUrI'
import * as SVG from '@/assets/svg'

export default function Login() {
  const router = useRouter()
  const gauthCode = router.query.code

  useEffect(() => {
    if (!gauthCode) return
    ;async () => {
      try {
        const { data } = await API.post('/auth', {
          code: gauthCode,
        })

        localStorage.setItem(accessToken, data.accessToken)
        localStorage.setItem(refreshToken, data.refreshToken)
        localStorage.setItem(accessExp, data.accessExp)
        localStorage.setItem(refreshExp, data.refreshExp)
      } catch (e) {
        if (!(e instanceof AxiosError))
          return console.log('예기치 못한 오류가 발생하였습니다.')
        if (e.response?.status === 500)
          console.log('서버에 문제가 발생하였습니다.')
      }
    }
  }, [gauthCode])

  return (
    <Portal>
      <S.Wrapper>
        <S.CancelBtn>
          <SVG.CloseIcon />
        </S.CancelBtn>
        <S.LogoWarppaer>logo</S.LogoWarppaer>
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
