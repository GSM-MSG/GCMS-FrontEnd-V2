import { UseFormRegisterReturn } from 'react-hook-form'
import * as S from './style'
import * as SVG from "@/assets/svg"

interface Props {
  label: string
  placeholder: string
  description?: string
  errorPlaceholder?: string
  error?: boolean
  optional?: boolean
  register?: UseFormRegisterReturn
}

const Input = ({
  label,
  placeholder,
  description,
  errorPlaceholder,
  error,
  optional,
  register,
}: Props) => {
  return (
    <S.Wrapper>
      <S.Label error={error}>
        {error && '*'} {label} {optional && <S.Optional>(선택)</S.Optional>}
      </S.Label>
      <S.DownLoadBtnBox>
        <SVG.DownloadBtn />
        <span>개설신청서 다운로드</span>
      </S.DownLoadBtnBox>

      {description && <S.Description>{description}</S.Description>}

      <S.InputTag
        error={error}
        placeholder={error && errorPlaceholder ? errorPlaceholder : placeholder}
        {...register}
      />
    </S.Wrapper>
  )
}

export default Input
