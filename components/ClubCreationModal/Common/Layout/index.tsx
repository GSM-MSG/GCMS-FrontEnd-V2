import { FormEventHandler, ReactNode } from 'react'
import * as S from './style'
import SubmitButton, { Props as SubmitButtonProps } from '../SubmitButton'
import Navigation from '../Navigation'

interface Props extends SubmitButtonProps {
  children: ReactNode
  onSubmit: FormEventHandler<HTMLFormElement>
}

const Layout = ({ children, onSubmit, back, complete }: Props) => {
  return (
    <S.Wrapper onSubmit={onSubmit}>
      <Navigation />
      <S.Content>{children}</S.Content>
      <SubmitButton back={back} complete={complete} />
    </S.Wrapper>
  )
}

export default Layout
