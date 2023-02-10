import { ContentFormType } from '@/type/components/ClubCreationModal'
import { UseFormRegisterReturn, UseFormWatch } from 'react-hook-form'
import * as S from './Textarea.style'

interface Props {
  register: UseFormRegisterReturn
  watch: UseFormWatch<ContentFormType>
  error: boolean
}

const Textarea = ({ register, watch }: Props) => {
  return (
    <S.Wrapper>
      <S.Label>동아리 설명</S.Label>
      <div>
        <S.TextareaInput
          placeholder='동아리 설명을 입력해주세요.'
          {...register}
        />
        <S.MaxLength>{watch('content').length}/200</S.MaxLength>
      </div>
    </S.Wrapper>
  )
}

export default Textarea
