import * as S from './Input.style'

interface Props {
  label: string
  placeholder: string
  description?: string
  errorPlaceholder?: string
  error?: boolean
  optional?: boolean
}

const Input = ({
  label,
  placeholder,
  description,
  errorPlaceholder,
  error,
  optional,
}: Props) => {
  return (
    <S.Wrapper>
      <S.Label error={error}>
        {error && '*'} {label} {optional && <S.Optional>(선택)</S.Optional>}
      </S.Label>

      {description && <S.Description>{description}</S.Description>}

      <S.InputTag
        error={error}
        placeholder={error && errorPlaceholder ? errorPlaceholder : placeholder}
      />
    </S.Wrapper>
  )
}

export default Input
