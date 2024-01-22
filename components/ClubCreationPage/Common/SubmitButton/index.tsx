import * as S from './style'

export interface Props {
  backOnClick?: () => Promise<void> | void
  nextOnClick?: () => Promise<void> | void
}

const SubmitButton = ({ backOnClick, nextOnClick }: Props) => {
  return (
    <S.Wrapper>
      <S.BackButton onClick={backOnClick}>이전</S.BackButton>
      <S.SubmitButton onClick={nextOnClick}>다음</S.SubmitButton>
    </S.Wrapper>
  )
}

export default SubmitButton
