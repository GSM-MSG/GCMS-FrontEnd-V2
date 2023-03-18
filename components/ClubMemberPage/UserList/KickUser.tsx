import ConfirmModal from '@/components/Common/ConfirmModal'
import { useFetch } from '@/hooks'
import { kickMember } from '@/store/clubMember'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './style'

interface Props {
  clubId: string
  uuid: string
}

const KickUser = ({ clubId, uuid }: Props) => {
  const dispatch = useDispatch()
  const [isShow, setIsShow] = useState<boolean>(false)
  const { fetch, isLoading } = useFetch({
    url: `/club-member/${clubId}`,
    method: 'post',
    successMessage: '회원 추방에 성공하셨습니다',
    onSuccess: () => {
      dispatch(kickMember(uuid))
    },
  })

  const onClick = () => setIsShow(true)

  const onConfirm = async () => {
    if (isLoading) return
    await fetch({ uuid })
    setIsShow(false)
  }

  return (
    <>
      <S.OptionBtn onClick={onClick}>추방</S.OptionBtn>

      {isShow && (
        <ConfirmModal
          title='회원 추방'
          description={'정말로 회원 추방을 하시겠습니까?'}
          onConfirm={onConfirm}
          onClose={() => setIsShow(false)}
        />
      )}
    </>
  )
}

export default KickUser
