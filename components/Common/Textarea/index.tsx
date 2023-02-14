import { ContentFormType } from '@/type/components/ClubCreationModal'
import { UseFormRegisterReturn, UseFormWatch } from 'react-hook-form'
import * as S from './style'

interface Props {
  register: UseFormRegisterReturn
  watch: UseFormWatch<ContentFormType>
  error: boolean
}

const Textarea = ({ register, watch, error }: Props) => {
  return (
    <S.Wrapper>
      <S.Label error={error}>{error && '*'} 동아리 설명</S.Label>
      <div>
        <S.TextareaInput
          placeholder='동아리 설명을 입력해주세요.'
          error={error}
          {...register}
        />
        <S.MaxLength error={error}>{watch('content').length}/200</S.MaxLength>
      </div>
    </S.Wrapper>
  )
}

export default Textarea
