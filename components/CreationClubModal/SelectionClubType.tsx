import clubTypeInfo from '@/lib/clubTypeInfo'
import { ClubType } from '@/type/common'
import { useState } from 'react'
import * as S from './SelectionClubType.style'

const SelectionClubType = () => {
  const [type, setType] = useState<ClubType>('MAJOR')
  return (
    <S.Wrapper>
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
    </S.Wrapper>
  )
}

export default SelectionClubType
