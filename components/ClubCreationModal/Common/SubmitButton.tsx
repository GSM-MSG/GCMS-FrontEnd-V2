import { backPage } from '@/store/clubCreationPage'
import { useDispatch } from 'react-redux'
import * as S from './SubmitButton.style'

export interface Props {
  back?: boolean
  complete?: boolean
  onClick?: () => Promise<void>
}

const SubmitButton = ({ back, complete, onClick }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Wrapper>
      {back && (
        <S.BackButton type='button' onClick={() => dispatch(backPage())}>
          이전
        </S.BackButton>
      )}
      <S.Button onClick={onClick} type='submit'>
        {complete ? '만들기' : '다음'}
      </S.Button>
    </S.Wrapper>
  )
}

export default SubmitButton
