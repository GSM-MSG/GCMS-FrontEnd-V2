import { ClubType } from '@/type/common'
import { ClubOptionType } from '@/type/components/ClubOptionNavigation'
import * as S from './style'

interface Props {
  type: ClubType | undefined
  onChange: (type: ClubOptionType) => void
}

const ClubOptionPick = ({ type, onChange }: Props) => {
  return (
    <S.Wrapper>
      <S.Input
        type='radio'
        id={'MAJOR'}
        checked={!type}
        onChange={() => onChange('')}
      />
      <S.Tab htmlFor={'MAJOR'}>전공</S.Tab>
      <S.Input
        type='radio'
        id={'FREEDOM'}
        checked={type === 'FREEDOM'}
        onChange={() => onChange('FREEDOM')}
      />
      <S.Tab htmlFor={'FREEDOM'}>자율</S.Tab>
      <S.Input
        type='radio'
        id={'EDITORIAL'}
        checked={type === 'EDITORIAL'}
        onChange={() => onChange('EDITORIAL')}
      />
      <S.Tab htmlFor={'EDITORIAL'}>사설</S.Tab>
    </S.Wrapper>
  )
}

export default ClubOptionPick
