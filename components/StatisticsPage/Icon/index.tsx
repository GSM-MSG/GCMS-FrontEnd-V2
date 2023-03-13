import { ReactNode } from 'react'
import * as S from './style'

interface Props {
  icon: ReactNode
  text: string
  onClick: () => void
}

const Icon = ({ icon, text, onClick }: Props) => {
  return (
    <S.Wrapper onClick={onClick}>
      <S.IconWrapper>{icon}</S.IconWrapper>
      {text}
    </S.Wrapper>
  )
}

export default Icon
