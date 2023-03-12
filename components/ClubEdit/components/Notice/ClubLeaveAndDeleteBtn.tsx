import ConfirmModal from '@/components/Common/ConfirmModal'
import { useFetch } from '@/hooks'
import { showModal } from '@/store/confirmModal'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import * as S from './style'

interface Props {
  clubId?: number
  clubName?: string
  type: '탈퇴' | '삭제'
}

const ClubLeaveAndDeleteBtn = ({ clubId, clubName, type }: Props) => {
  const dispatch = useDispatch()
  const router = useRouter()
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
      <S.DeleteBtn onClick={() => dispatch(showModal())}>
        {type}하기
      </S.DeleteBtn>

      <ConfirmModal
        title={`동아리 ${type}하기`}
        description={`${clubName}동아리를 정말로 ${type}하시겠습니까?`}
        onConfirm={onClick}
      />
    </>
  )
}

export default ClubLeaveAndDeleteBtn
