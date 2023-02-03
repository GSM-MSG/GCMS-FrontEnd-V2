import Link from 'next/link'
import Portal from '../Portal'
import { useRouter } from 'next/router'
import * as S from './style'
import { useEffect } from 'react'
import { API } from '@/lib/API'
import { accessToken, accessExp, refreshToken, refreshExp } from '@/lib/Token'
import { AxiosError } from 'axios'
import { gauthLoginUri } from '@/lib/GauthLoginUrI'

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
          <svg
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M11.6825 0.386062C12.0898 -0.0212625 12.7502 -0.0212622 13.1575 0.386063V0.386063C13.5649 0.793387 13.5649 1.45379 13.1575 1.86112L8.24654 6.77212L13.1575 11.6831C13.5649 12.0905 13.5649 12.7509 13.1575 13.1582V13.1582C12.7502 13.5655 12.0898 13.5655 11.6825 13.1582L6.77148 8.24718L1.86048 13.1582C1.45315 13.5655 0.792748 13.5655 0.385423 13.1582V13.1582C-0.0219019 12.7509 -0.021902 12.0905 0.385423 11.6831L5.29643 6.77213L0.385422 1.86111C-0.0219021 1.45379 -0.021902 0.793386 0.385423 0.386062V0.386062C0.792747 -0.0212629 1.45315 -0.0212627 1.86048 0.386062L6.77148 5.29707L11.6825 0.386062Z'
              fill='white'
              fillOpacity='0.9'
            />
          </svg>
        </S.CancelBtn>
        <S.LogoWarppaer>logo</S.LogoWarppaer>
        <S.Auth onClick={() => router.replace(gauthLoginUri)}>
          <svg
            width='17'
            height='18'
            viewBox='0 0 17 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0.697998 4.33382L8.401 0V5.31397L5.42057 6.9908L0.697998 4.33382ZM5.22255 7.31768L0.5 4.66071V13.3393L5.22255 10.6823V7.31768ZM5.80681 10.3536V7.64639L8.21274 9L5.80681 10.3536ZM5.4205 11.0092L0.697998 13.6662L8.401 18V12.6861L5.4205 11.0092ZM8.401 12.0287L6.00476 10.6805L8.401 9.33236V12.0287ZM8.79051 12.6861V18L16.5 13.6625L11.7775 11.0056L8.79051 12.6861ZM11.1933 10.6769L8.79051 12.0287V9.32506L11.1933 10.6769ZM11.7775 6.99444L16.5 4.33747L8.79051 0V5.31394L11.7775 6.99444ZM8.401 5.97139V8.66763L6.00483 7.31951L8.401 5.97139Z'
              fill='#2E80CC'
            />
          </svg>
          Sign in with GAuth
        </S.Auth>
        <S.ContentInfo>
          <Link href='#'>서비스 이용약관</Link> |{' '}
          <Link href='#'>개인정보 처리 방침</Link>
        </S.ContentInfo>
      </S.Wrapper>
    </Portal>
  )
}
