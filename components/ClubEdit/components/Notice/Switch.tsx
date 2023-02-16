import ScopeType from '@/type/common/ScopeType'
import * as S from './style'

interface Props {
  isOpened?: boolean
  onClick: () => void
  scope?: ScopeType
}

const Switch = ({ isOpened, onClick, scope }: Props) => {
  return (
    <>
      <S.SwitchInput
        id='switch'
        checked={!!isOpened}
        readOnly
        type='checkbox'
        disabled={scope !== 'HEAD'}
        onClick={onClick}
      />
      <S.Switch htmlFor='switch'>
        <span>off</span>
        <S.SwitchBtn />
        <span>on</span>
      </S.Switch>
    </>
  )
}

export default Switch
