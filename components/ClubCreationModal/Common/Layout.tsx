import { FormEventHandler, ReactNode } from 'react'
import * as S from './Layout.style'
import SubmitButton, { Props as SubmitButtonProps } from './SubmitButton'

interface Props extends SubmitButtonProps {
  children: ReactNode
  onSubmit: FormEventHandler<HTMLFormElement>
}

const Layout = ({ children, onSubmit, back, complete }: Props) => {
  return (
    <S.Wrapper onSubmit={onSubmit}>
      <S.Content>{children}</S.Content>
      <SubmitButton back={back} complete={complete} />
    </S.Wrapper>
  )
}

export default Layout
