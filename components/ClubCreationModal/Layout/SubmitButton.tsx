import { backPage } from '@/store/clubCreationPage'
import { useDispatch } from 'react-redux'
import * as S from './SubmitButton.style'

interface Props {
  back?: boolean
  complete?: boolean
}

const SubmitButton = ({ back, complete }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Wrapper>
      {back && (
        <S.BackButton onClick={() => dispatch(backPage())}>이전</S.BackButton>
      )}
      <S.Button type='submit'>{complete ? '만들기' : '다음'}</S.Button>
    </S.Wrapper>
  )
}

export default SubmitButton
