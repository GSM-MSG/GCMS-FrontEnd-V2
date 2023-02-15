import Link from 'next/link'
import Portal from '../Portal'
import { useRouter } from 'next/router'
import * as S from './style'
import { gauthLoginUri } from '@/lib/GauthLoginUrI'
import * as SVG from '@/assets/svg'

interface Props {
  onClose: () => void
}

const Login = ({ onClose }: Props) => {
  const router = useRouter()

  return (
    <Portal onClose={onClose}>
      <S.Wrapper>
        <S.CancelBtn onClick={onClose}>
          <SVG.XMark />
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
export default Login
