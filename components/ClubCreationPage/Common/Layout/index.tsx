import { FormEventHandler, ReactNode } from 'react'
import * as S from './style'
import SubmitButton, { Props as SubmitButtonProps } from '../SubmitButton'

interface Props extends SubmitButtonProps {
  children: ReactNode
  onSubmit?: FormEventHandler<HTMLFormElement>
  submitButton?: boolean
  formId?: string
}

const Layout = ({
  children,
  onSubmit,
  backOnClick,
  nextOnClick,
  submitButton,
  formId,
}: Props) => {
  return (
    <S.Wrapper id={formId} onSubmit={onSubmit}>
      <S.Content>{children}</S.Content>
      {submitButton ? (
        <SubmitButton backOnClick={backOnClick} nextOnClick={nextOnClick} />
      ) : null}
    </S.Wrapper>
  )
}

export default Layout
