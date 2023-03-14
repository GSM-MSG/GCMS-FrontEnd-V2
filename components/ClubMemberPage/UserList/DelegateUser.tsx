import ConfirmModal from '@/components/Common/ConfirmModal'
import { useFetch } from '@/hooks'
import { useState } from 'react'
import * as S from './style'

interface Props {
  clubId: string
  uuid: string
}

const DelegateUser = ({ clubId, uuid }: Props) => {
  const [isShow, setIsShow] = useState<boolean>(false)
  const { fetch, isLoading } = useFetch({
    url: `/club-member/${clubId}`,
    method: 'patch',
    successMessage: '부장 위임에 성공하셨습니다',
  })

  const onClick = () => setIsShow(true)

  const onConfirm = () => {
    if (isLoading) return
    fetch({ uuid })
    setIsShow(false)
  }

  return (
    <>
      <S.OptionBtn onClick={onClick}>위임</S.OptionBtn>

      {isShow && (
        <ConfirmModal
          title='부장 위임'
          description={'정말로 부장 위임을 하시겠습니까?'}
          onConfirm={onConfirm}
          onClose={() => setIsShow(false)}
        />
      )}
    </>
  )
}

export default DelegateUser
