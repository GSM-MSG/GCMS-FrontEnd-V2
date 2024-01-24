import { FormEventHandler, ReactNode } from 'react'
import * as S from './style'
import SubmitButton, { Props as SubmitButtonProps } from '../SubmitButton'

interface Props extends SubmitButtonProps {
  children: ReactNode
  onSubmit: FormEventHandler<HTMLFormElement>
}

const Layout = ({ children, onSubmit, backOnClick, nextOnClick }: Props) => {
  return (
    <S.Wrapper onSubmit={onSubmit}>
      <S.Content>{children}</S.Content>
      <SubmitButton backOnClick={backOnClick} nextOnClick={nextOnClick} />
    </S.Wrapper>
  )
}

export default Layout
