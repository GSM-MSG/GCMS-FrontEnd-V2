import ConfirmModal from '@/components/Common/ConfirmModal'
import { useFetch } from '@/hooks'
import { useRouter } from 'next/router'
import { useState } from 'react'
import * as S from './style'

interface Props {
  clubId?: number
  clubName?: string
}

const ClubDeleteBtn = ({ clubId, clubName }: Props) => {
  const [isShow, setIsShow] = useState<boolean>(false)
  const router = useRouter()
  const { fetch, isLoading } = useFetch({
    method: 'delete',
    url: `/club/${clubId}`,
    onSuccess: () => {
      router.push('/')
    },
  })

  const onClick = () => {
    if (isLoading) return
    fetch()
  }

  return (
    <>
      <S.Title>동아리 삭제</S.Title>
      <S.DeleteBtn onClick={() => setIsShow(true)}>삭제</S.DeleteBtn>

      {isShow && (
        <ConfirmModal
          title='동아리 삭제하기'
          description={`${clubName}동아리를 정말로 삭제하시겠습니까?`}
          onClose={() => setIsShow(false)}
          onConfirm={onClick}
        />
      )}
    </>
  )
}

export default ClubDeleteBtn
