import Portal from '@/components/Portal'
import { RootState } from '@/store'
import { hideModal } from '@/store/confirmModal'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './style'

interface Props {
  title: string
  description?: string
  onConfirm: () => void
}

const ConfirmModal = ({ title, description, onConfirm }: Props) => {
  const dispatch = useDispatch()
  const { confirmModal } = useSelector((state: RootState) => ({
    ...state,
  }))

  const onClick = () => {
    onConfirm()
    dispatch(hideModal())
  }

  if (!confirmModal) return null

  return (
    <Portal>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Buttons>
          <S.LeftButton onClick={() => dispatch(hideModal())}>
            취소
          </S.LeftButton>
          <S.RightButton onClick={onClick}>확인</S.RightButton>
        </S.Buttons>
      </S.Wrapper>
    </Portal>
  )
}

export default ConfirmModal
