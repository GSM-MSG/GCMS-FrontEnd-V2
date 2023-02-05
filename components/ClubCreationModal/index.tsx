import Portal from '../Portal'
import Navigation from './Navigation'
import ClubKindSelection from './ClubKindSelection'
import * as S from './style'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import * as SVG from '@/type/assets/svg'

interface Props {
  onClose: () => void
}

const ClubCreationModal = ({ onClose }: Props) => {
  const { page } = useSelector((state: RootState) => ({
    page: state.clubCreationPage,
  }))

  return (
    <Portal>
      <S.Wrapper>
        <S.TopContent>
          <S.CloseButton onClick={onClose}>
            <SVG.XMark />
          </S.CloseButton>
          <S.Title>동아리 개설</S.Title>
        </S.TopContent>

        <Navigation />

        {page === 1 && <ClubKindSelection />}
      </S.Wrapper>
    </Portal>
  )
}

export default ClubCreationModal
