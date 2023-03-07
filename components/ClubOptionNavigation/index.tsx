import { ClubType } from '@/type/common'
import * as S from './style'

interface Props {
  type: ClubType
  onChange: (type: Omit<ClubType, 'MAJOR'> | '') => void
}

const ClubOptionNavigation = ({ type, onChange }: Props) => {
  return (
    <S.Wrapper>
      <input
        type='radio'
        id={'MAJOR'}
        value=''
        checked={!type}
        onChange={(e) => onChange(e.target.value)}
      />
      <label htmlFor={'MAJOR'}>전공</label>
      <input
        type='radio'
        id={'FREEDOM'}
        value='FREEDOM'
        checked={type === 'FREEDOM'}
        onChange={(e) => onChange(e.target.value)}
      />
      <label htmlFor={'FREEDOM'}>자율</label>
      <input
        type='radio'
        id={'EDITORIAL'}
        value='EDITORIAL'
        checked={type === 'EDITORIAL'}
        onChange={(e) => onChange(e.target.value)}
      />
      <label htmlFor={'EDITORIAL'}>사설</label>
    </S.Wrapper>
  )
}

export default ClubOptionNavigation
