import * as S from './style'
import { backPage } from '@/store/clubCreationPage'
import { useDispatch } from 'react-redux'

export interface Props {
  backOnClick?: () => Promise<void> | void
  nextOnClick?: () => Promise<void> | void
  formId?: string
}

const SubmitButton = ({ backOnClick, nextOnClick, formId }: Props) => {
  const dispatch = useDispatch()
  return (
    <S.Wrapper>
      <S.BackButton
        onClick={backOnClick ? backOnClick : () => dispatch(backPage())}
      >
        이전
      </S.BackButton>
      <S.SubmitButton form={formId} onClick={nextOnClick} type='submit'>
        다음
      </S.SubmitButton>
    </S.Wrapper>
  )
}

export default SubmitButton
