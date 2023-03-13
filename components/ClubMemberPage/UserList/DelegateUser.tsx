import ConfirmModal from '@/components/Common/ConfirmModal'
import { useFetch } from '@/hooks'
import { showModal } from '@/store/confirmModal'
import { useDispatch } from 'react-redux'
import * as S from './style'

interface Props {
  clubId: string
  uuid: string
}

const DelegateUser = ({ clubId, uuid }: Props) => {
  const dispatch = useDispatch()
  const { fetch, isLoading } = useFetch({
    url: `/club-member/${clubId}`,
    method: 'patch',
    successMessage: '부장 위임에 성공하셨습니다',
  })

  const onClick = () => dispatch(showModal())

  const onConfirm = () => {
    if (isLoading) return
    fetch({ uuid })
  }

  return (
    <>
      <S.OptionBtn onClick={onClick}>위임</S.OptionBtn>

      <ConfirmModal
        title='부장 위임'
        description={'정말로 부장 위임을 하시겠습니까?'}
        onConfirm={onConfirm}
      />
    </>
  )
}

export default DelegateUser
