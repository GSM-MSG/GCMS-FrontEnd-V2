import * as S from './ClubKindSelection.style'
import clubTypeInfo from '@/lib/clubTypeInfo'
import { setClubType } from '@/store/clubCreation'
import { nextPage } from '@/store/clubCreationPage'
import { ClubType } from '@/type/common'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import SubmitButton from '../Common/SubmitButton'
import { useRouter } from 'next/router'

const ClubKindSelection = () => {
  const router = useRouter()
  const { clubType } = useSelector((state: RootState) => ({
    clubType: state.clubCreation.type,
  }))
  const [type, setType] = useState<ClubType>(clubType)
  const dispatch = useDispatch()

  const goToBackPage = () => {
    router.push(`/`)
  }

  const goToNextPage = () => {
    dispatch(setClubType(type))
    dispatch(nextPage())
  }
  return (
    <S.Wrapper>
      <S.Title>동아리 개설</S.Title>
      <S.Options>
        {clubTypeInfo.map((i, idx) => (
          <S.Option
            select={type === i.type}
            key={idx}
            onClick={() => setType(i.type)}
          >
            <div>
              <S.OptionType>{i.title}</S.OptionType>
              <S.OptionDescription select={type === i.type}>
                {i.description}
              </S.OptionDescription>
            </div>
            <img src={i.img} width='109%' />
          </S.Option>
        ))}
      </S.Options>
      <SubmitButton backOnClick={goToBackPage} nextOnClick={goToNextPage} />
    </S.Wrapper>
  )
}

export default ClubKindSelection
