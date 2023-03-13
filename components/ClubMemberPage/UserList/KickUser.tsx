import ConfirmModal from '@/components/Common/ConfirmModal'
import { useFetch } from '@/hooks'
import { showModal } from '@/store/confirmModal'
import { useDispatch } from 'react-redux'
import * as S from './style'

interface Props {
  clubId: string
  uuid: string
}

const KickUser = ({ clubId, uuid }: Props) => {
  const dispatch = useDispatch()
  const { fetch, isLoading } = useFetch({
    url: `/club-member/${clubId}`,
    method: 'post',
    successMessage: '회원 추방에 성공하셨습니다',
  })

  const onClick = () => dispatch(showModal())

  const onConfirm = () => {
    if (isLoading) return
    fetch({ uuid })
  }

  return (
    <>
      <S.OptionBtn onClick={onClick}>추방</S.OptionBtn>

      <ConfirmModal
        title='회원 추방'
        description={'정말로 회원 추방을 하시겠습니까?'}
        onConfirm={onConfirm}
      />
    </>
  )
}

export default KickUser
