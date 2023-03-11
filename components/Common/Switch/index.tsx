import * as S from './style'

interface Props {
  toggle: boolean
  disabled?: boolean
  onClick: () => void
}

const Switch = ({ toggle, disabled, onClick }: Props) => {
  return (
    <>
      <S.Wrapper
        id='switch'
        checked={toggle}
        readOnly
        type='checkbox'
        disabled={disabled}
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
