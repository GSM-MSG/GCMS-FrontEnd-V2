import clubTypeInfo from '@/lib/clubTypeInfo'
import { ClubType } from '@/type/common'
import { useState } from 'react'
import * as S from './ClubKindSelection.style'
import SubmitButton from './SubmitButton'

const ClubKindSelection = () => {
  const [type, setType] = useState<ClubType>('MAJOR')
  return (
    <S.Wrapper>
      <S.Content>
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
      </S.Content>

      <SubmitButton />
    </S.Wrapper>
  )
}

export default ClubKindSelection
