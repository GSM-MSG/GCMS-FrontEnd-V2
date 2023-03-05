import { UseFormRegisterReturn } from 'react-hook-form'
import * as S from './style'

interface Props {
  register: UseFormRegisterReturn
  content: string
  error: boolean
}

const Textarea = ({ register, content, error }: Props) => {
  return (
    <S.Wrapper>
      <S.Label error={error}>{error && '*'} 동아리 설명</S.Label>
      <div>
        <S.TextareaInput
          placeholder='동아리 설명을 입력해주세요.'
          error={error}
          {...register}
        />
        <S.MaxLength error={error}>{content?.length}/200</S.MaxLength>
      </div>
    </S.Wrapper>
  )
}

export default Textarea
