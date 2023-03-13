import Portal from '@/components/Portal'
import * as S from './style'

interface Props {
  title: string
  description?: string
  onConfirm: () => void
  onClose: () => void
}

const ConfirmModal = ({ title, description, onConfirm, onClose }: Props) => {
  const onClick = () => {
    onConfirm()
    onClose()
  }

  return (
    <Portal onClose={onClose}>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Buttons>
          <S.LeftButton onClick={onClose}>취소</S.LeftButton>
          <S.RightButton onClick={onClick}>확인</S.RightButton>
        </S.Buttons>
      </S.Wrapper>
    </Portal>
  )
}

export default ConfirmModal
