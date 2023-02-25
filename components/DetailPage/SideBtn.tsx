import { useFetch } from '@/hooks'
import { RootState } from '@/store'
import { setIsApplied, setIsOpened } from '@/store/clubDetail'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './style'

const SideBtn = () => {
  const { clubDetail } = useSelector((state: RootState) => ({
    clubDetail: state.clubDetail,
  }))
  const router = useRouter()
  const dispatch = useDispatch()
  const isOpened = clubDetail.isOpened
  const isApplied = clubDetail.isApplied
  const isHead = clubDetail.scope === 'HEAD'
  const isMember = clubDetail.scope === 'MEMBER'
  const isOther = clubDetail.scope === 'OTHER'

  const { fetch: apply } = useFetch({
    url: `applicant/${clubDetail.id}`,
    method: 'post',
    successMessage: '지원에 성공했습니다',
    errors: '지원에 실패했습니다',
    onSuccess: () => {
      dispatch(setIsApplied())
    },
  })
  const { fetch: cancel } = useFetch({
    url: `applicant/${clubDetail.id}`,
    method: 'delete',
    successMessage: '지원 취소에 성공했습니다',
    errors: '지원 취소에 실패했습니다',
    onSuccess: () => {
      dispatch(setIsApplied())
    },
  })
  const { fetch: open } = useFetch({
    url: `club/${clubDetail.id}/open`,
    method: 'patch',
    successMessage: '동아리 열기에 성공했습니다',
    errors: '동아리 열기에 실패했습니다',
    onSuccess: () => {
      dispatch(setIsOpened())
    },
  })
  const { fetch: close } = useFetch({
    url: `club/${clubDetail.id}/close`,
    method: 'patch',
    successMessage: '동아리 닫기에 성공했습니다',
    errors: '동아리 닫기에 실패했습니다',
    onSuccess: () => {
      dispatch(setIsOpened())
    },
  })
  const { fetch: exit } = useFetch({
    url: `club/${clubDetail.id}/exit`,
    method: 'delete',
    successMessage: '동아리 탈퇴에 성공했습니다',
    errors: '동아리 탈퇴에 실패했습니다',
    onSuccess: () => {
      router.push('/')
    },
  })

  const handleAplly = () => {
    if (isHead) {
      if (isOpened) return close()
      else return open()
    } else if (isMember) return exit()

    if (!isOpened || isOther) return
    if (isApplied) return cancel()
    apply()
  }

  const btnMessage = () => {
    if (isHead) {
      if (isOpened) return '동아리 닫기'
      else return '동아리 열기'
    } else if (isMember) return '탈퇴하기'

    if (isOther) return '지원 불가'
    if (!isOpened) return '준비중'
    if (isApplied) return '신청 취소'
    else return '지원하기'
  }

  return (
    <S.SideBtn btnMessage={btnMessage()} onClick={handleAplly}>
      {btnMessage()}
    </S.SideBtn>
  )
}

export default SideBtn
