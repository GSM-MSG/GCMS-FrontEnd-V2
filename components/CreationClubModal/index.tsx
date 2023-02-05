import { useState } from 'react'
import Portal from '../Portal'
import Navigation from './Navigation'
import ClubKindSelection from './ClubKindSelection'
import * as S from './style'

const CreationClubModal = () => {
  const [page, setPage] = useState<number>(1)

  return (
    <Portal>
      <S.Wrapper>
        <S.Title>동아리 개설</S.Title>

        <Navigation page={page} />

        <ClubKindSelection />
      </S.Wrapper>
    </Portal>
  )
}

export default CreationClubModal
