import { RootState } from '@/store'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import ClubCreationModal from '../ClubCreationModal'
import * as S from './style'

export default function CreateClubBtn() {
  const [modal, setModal] = useState(false)
  const { user } = useSelector((state: RootState) => ({
    user: state.user,
  }))

  if (!user) return <></>

  return (
    <>
      <S.Wrapper>
        <S.Btn onClick={() => setModal(true)} />
      </S.Wrapper>
      {modal && <ClubCreationModal onClose={() => setModal(false)} />}
    </>
  )
}
