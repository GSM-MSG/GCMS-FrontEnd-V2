import * as S from './style'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import ClubKindSelection from './Steps/ClubKindSelection'
import { resetPage } from '@/store/clubCreationPage'
import ClubInfoInput from './Steps/ClubInfoInput'
import Confirm from './Steps/Confirm'
import { useRouter } from 'next/router'

const ClubCreationPage = () => {
  const router = useRouter()
  const { page } = useSelector((state: RootState) => ({
    page: state.clubCreationPage,
  }))
  const close = () => {
    if (page === 3) {
      router.push('/')
    }
  }
  return (
    <S.Positioner>
      <S.Layer>
        {page === 1 && <ClubKindSelection />}
        {page === 2 && <ClubInfoInput />}
        {page === 3 && <Confirm onClose={close} />}
      </S.Layer>
    </S.Positioner>
  )
}

export default ClubCreationPage
