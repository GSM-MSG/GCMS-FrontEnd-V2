import Portal from '../Portal'
import ClubKindSelection from './Page/ClubKindSelection'
import * as S from './style'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import * as SVG from '@/assets/svg'
import ClubInfoInput from './Page/ClubInfoInput'
import ClubImgUpload from './Page/ClubImgUpload'
import ClubContent from './Page/ClubContent'
import AddClubMember from './Page/AddClubMember'
import Confirm from './Page/Confirm'
import { resetPage } from '@/store/clubCreationPage'

interface Props {
  onClose: () => void
}

const ClubCreationModal = ({ onClose }: Props) => {
  const dispatch = useDispatch()
  const { page } = useSelector((state: RootState) => ({
    page: state.clubCreationPage,
  }))

  const close = () => {
    if (page === 6) dispatch(resetPage())
    onClose()
  }

  return (
    <Portal onClose={close}>
      <S.Wrapper>
        <S.TopContent>
          <S.CloseButton onClick={close}>
            <SVG.XMark />
          </S.CloseButton>
          <S.Title>동아리 개설</S.Title>
        </S.TopContent>

        {page === 1 && <ClubKindSelection />}
        {page === 2 && <ClubInfoInput />}
        {page === 3 && <ClubImgUpload />}
        {page === 4 && <ClubContent />}
        {page === 5 && <AddClubMember />}
        {page === 6 && <Confirm onClose={close} />}
      </S.Wrapper>
    </Portal>
  )
}

export default ClubCreationModal
