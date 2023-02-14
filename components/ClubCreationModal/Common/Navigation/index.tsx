import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import * as S from './style'

const Navigation = () => {
  const { page } = useSelector((state: RootState) => ({
    page: state.clubCreationPage,
  }))

  return (
    <S.Wrapper>
      {[...Array(5)].map((_, i) => (
        <S.Tab select={page === i + 1} key={i}>
          {i + 1}
        </S.Tab>
      ))}
    </S.Wrapper>
  )
}

export default Navigation
