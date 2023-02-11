import clubTypeInfo from '@/lib/clubTypeInfo'
import { setClubType } from '@/store/clubCreation'
import { nextPage } from '@/store/clubCreationPage'
import { ClubType } from '@/type/common'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './ClubKindSelection.style'
import Layout from '../Common/Layout'

const ClubKindSelection = () => {
  const [type, setType] = useState<ClubType>('MAJOR')
  const dispatch = useDispatch()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(setClubType(type))
    dispatch(nextPage())
  }

  return (
    <Layout onSubmit={onSubmit}>
      {clubTypeInfo.map((i, idx) => (
        <S.Option
          select={type === i.type}
          position={i.position}
          url={i.img}
          key={idx}
          onClick={() => setType(i.type)}
        >
          <div>
            <S.OptionType>{i.title}</S.OptionType>
            <S.OptionDescription select={type === i.type}>
              {i.description}
            </S.OptionDescription>
          </div>
        </S.Option>
      ))}
    </Layout>
  )
}

export default ClubKindSelection
