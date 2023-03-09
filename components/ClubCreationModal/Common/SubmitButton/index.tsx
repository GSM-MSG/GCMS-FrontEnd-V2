import { backPage } from '@/store/clubCreationPage'
import { useDispatch } from 'react-redux'
import * as S from './style'

export interface Props {
  back?: boolean
  complete?: boolean
  onClick?: () => Promise<void>
  message?: string
}

const SubmitButton = ({ back, complete, onClick, message }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Wrapper>
      {back && (
        <S.BackButton type='button' onClick={() => dispatch(backPage())}>
          이전
        </S.BackButton>
      )}
      <S.Button onClick={onClick} type='submit'>
        {message}
        {!message && (complete ? '만들기' : '다음')}
      </S.Button>
    </S.Wrapper>
  )
}

export default SubmitButton
