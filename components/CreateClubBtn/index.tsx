import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import * as S from './style'
import { useRouter } from 'next/router'
export default function CreateClubBtn() {
  const router = useRouter()
  const { user } = useSelector((state: RootState) => ({
    user: state.user,
  }))

  if (!user.name || user.role === 'ROLE_ADMIN') return <></>

  return (
    <>
      <S.Wrapper>
        <S.Btn onClick={() => router.push(`/clubcreate`)} />
      </S.Wrapper>
    </>
  )
}
