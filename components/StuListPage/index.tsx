import { RootState } from '@/store'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import StuInfo from './StuInfo'
import StuSearch from './StuSearch'
import * as S from './style'

export default function StuListPage() {
  const router = useRouter()
  const { user } = useSelector((state: RootState) => ({
    user: state.user,
  }))

  useEffect(() => {
    if (user.role === 'ROLE_ADMIN') return
    router.push('/')
  }, [user])

  return (
    <S.Layout>
      <S.Wrapper>
        <S.Title>학생 리스트</S.Title>
        <S.MemberWrapper>
          <StuSearch />
          <StuInfo />
        </S.MemberWrapper>
      </S.Wrapper>
    </S.Layout>
  )
}
