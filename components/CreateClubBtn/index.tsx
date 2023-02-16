import useUser from '@/hooks/useUser'
import { useState } from 'react'
import ClubCreationModal from '../ClubCreationModal'
import * as S from './style'

export default function CreateClubBtn() {
  const [modal, setModal] = useState(false)
  const { isLoggned } = useUser()

  if (!isLoggned) return <></>

  return (
    <>
      <S.Wrapper>
        <S.Btn onClick={() => setModal(true)} />
      </S.Wrapper>
      {modal && <ClubCreationModal onClose={() => setModal(false)} />}
    </>
  )
}
