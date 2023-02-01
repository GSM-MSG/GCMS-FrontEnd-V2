import Link from 'next/link'
import Portal from '../Portal'
import * as S from './style'

export default function Login() {
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

        <S.Auth>Sign in width Gauth</S.Auth>
        <S.ContentInfo>
          <Link href='#'>서비스 이용약관</Link> |{' '}
          <Link href='#'>개인정보 처리 방침</Link>
        </S.ContentInfo>
      </S.Wrapper>
    </Portal>
  )
}
