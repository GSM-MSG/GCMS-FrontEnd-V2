import Portal from '@/components/Portal'
import * as S from './style'

interface Props {
  title: string
  description?: string
}

const ConfirmModal = ({ title, description }: Props) => {
  return (
    <Portal>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Buttons>
          <S.LeftButton>취소</S.LeftButton>
          <S.RightButton>확인</S.RightButton>
        </S.Buttons>
      </S.Wrapper>
    </Portal>
  )
}

export default ConfirmModal
