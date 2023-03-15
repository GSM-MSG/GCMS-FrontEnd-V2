import ConfirmModal from '@/components/Common/ConfirmModal'
import { useFetch } from '@/hooks'
import { useState } from 'react'
import * as S from './style'

interface Props {
  clubId: string
  uuid: string
}

const KickUser = ({ clubId, uuid }: Props) => {
  const [isShow, setIsShow] = useState<boolean>(false)
  const { fetch, isLoading } = useFetch({
    url: `/club-member/${clubId}`,
    method: 'post',
    successMessage: '회원 추방에 성공하셨습니다',
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
