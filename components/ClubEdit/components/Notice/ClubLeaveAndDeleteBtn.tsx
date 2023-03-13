import ConfirmModal from '@/components/Common/ConfirmModal'
import { useFetch } from '@/hooks'
import { useRouter } from 'next/router'
import { useState } from 'react'
import * as S from './style'

interface Props {
  clubId?: number
  clubName?: string
  type: '탈퇴' | '삭제'
}

const ClubLeaveAndDeleteBtn = ({ clubId, clubName, type }: Props) => {
  const router = useRouter()
  const [isShow, setIsShow] = useState<boolean>(false)
  const { fetch, isLoading } = useFetch({
    method: 'delete',
    url: `/club/${clubId}${type === '탈퇴' ? '/exit' : ''}`,
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
      <S.Title>동아리 {type}</S.Title>
      <S.DeleteBtn onClick={() => setIsShow(true)}>{type}하기</S.DeleteBtn>

      {isShow && (
        <ConfirmModal
          title={`동아리 ${type}하기`}
          description={`${clubName}동아리를 정말로 ${type}하시겠습니까?`}
          onConfirm={onClick}
          onClose={() => setIsShow(false)}
        />
      )}
    </>
  )
}

export default ClubLeaveAndDeleteBtn
