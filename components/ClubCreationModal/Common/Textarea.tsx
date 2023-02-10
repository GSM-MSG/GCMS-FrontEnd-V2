import * as S from './Textarea.style'

const Textarea = () => {
  return (
    <S.Wrapper>
      <S.Label>동아리 설명</S.Label>
      <div>
        <S.TextareaInput placeholder='동아리 설명을 입력해주세요.' />
        <S.MaxLength>10/200</S.MaxLength>
      </div>
    </S.Wrapper>
  )
}

export default Textarea
