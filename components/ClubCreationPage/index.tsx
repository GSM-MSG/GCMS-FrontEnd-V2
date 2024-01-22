import * as S from './style'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import ClubKindSelection from './Steps/ClubKindSelection'
import { resetPage } from '@/store/clubCreationPage'
import ClubInfoInput from './Steps/ClubInfoInput'

const ClubCreationPage = () => {
  const dispatch = useDispatch()
  const { page } = useSelector((state: RootState) => ({
    page: state.clubCreationPage,
  }))
  const close = () => {
    if (page === 6) dispatch(resetPage())
  }
  return (
    <S.Positioner>
      <S.Layer>{page === 1 && <ClubKindSelection />}</S.Layer>
    </S.Positioner>
  )
}

export default ClubCreationPage
