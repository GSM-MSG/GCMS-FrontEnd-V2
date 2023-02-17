import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import * as S from './style'

export default function Description() {
  const { clubDetail } = useSelector((state: RootState) => ({
    clubDetail: state.clubDetail,
  }))

  return (
    <S.Description>
      <h3>소개글</h3>
      <p>{clubDetail.content}</p>
    </S.Description>
  )
}
