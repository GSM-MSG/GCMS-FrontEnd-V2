import Portal from '../Portal'
import Navigation from './Navigation'
import ClubKindSelection from './ClubKindSelection'
import * as S from './style'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

const ClubCreationModal = () => {
  const { page } = useSelector((state: RootState) => ({
    page: state.clubCreationPage,
  }))

  return (
    <Portal>
      <S.Wrapper>
        <S.Title>동아리 개설</S.Title>

        <Navigation />

        {page === 1 && <ClubKindSelection />}
      </S.Wrapper>
    </Portal>
  )
}

export default ClubCreationModal
