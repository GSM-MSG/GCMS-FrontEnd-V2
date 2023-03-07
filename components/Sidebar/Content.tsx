import { hide } from '@/store/sidebar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './style'

interface Props {
  onClick: (e: MouseEvent<HTMLUListElement>) => void
}

const Content = ({ onClick }: Props) => {
  const router = useRouter()
  const path = router.pathname
  const dispatch = useDispatch()

  const onClose = () => dispatch(hide())

  return (
    <S.Content onClick={onClick}>
      <S.Nav onClick={onClose} active={`${path === '/'}`}>
        <Link onClick={onClose} href='/'>
          홈
        </Link>
      </S.Nav>
      <S.Nav onClick={onClose} active={`${path === '/stulist'}`}>
        <Link href='/stulist'>학생관리</Link>
      </S.Nav>
      <S.Nav onClick={onClose} active={`${path === '/permission'}`}>
        <Link href='/permission'>동아리 관리</Link>
      </S.Nav>
      <S.Nav onClick={onClose} active={`${path === '/statistics'}`}>
        <Link href='/statistics'>통계</Link>
      </S.Nav>
    </S.Content>
  )
}

export default Content
