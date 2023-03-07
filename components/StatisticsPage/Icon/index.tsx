import { ReactNode } from 'react'
import * as S from './style'

interface Props {
  icon: ReactNode
  text: string
}

const Icon = ({ icon, text }: Props) => {
  return (
    <S.Wrapper>
      <S.IconWrapper>{icon}</S.IconWrapper>
      {text}
    </S.Wrapper>
  )
}

export default Icon
