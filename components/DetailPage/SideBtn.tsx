import { useFetch } from '@/hooks'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import * as S from './style'

const SideBtn = () => {
  const { clubDetail } = useSelector((state: RootState) => ({
    clubDetail: state.clubDetail,
  }))
  const isOpened = clubDetail.isOpened
  const isApplied = clubDetail.isApplied

  const { fetch: apply } = useFetch({
    url: `applicant/${clubDetail.id}`,
    method: 'post',
  })
  const { fetch: cancel } = useFetch({
    url: `applicant/${clubDetail.id}`,
    method: 'delete',
  })
  const { fetch: open } = useFetch({
    url: `club/${clubDetail.id}/open`,
    method: 'patch',
  })
  const { fetch: close } = useFetch({
    url: `club/${clubDetail.id}/close`,
    method: 'patch',
  })

  const handleAplly = () => {
    if (clubDetail.scope === 'HEAD') {
      if (isOpened) return close()
      else return open()
    }
    if (!isOpened) return
    if (isApplied) return cancel()
    apply()
  }

  const btnMessage = () => {
    if (clubDetail.scope === 'HEAD') {
      if (isOpened) return '동아리 닫기'
      else return '동아리 열기'
    }
    if (!isOpened) return '준비중'
    if (isApplied) return '신청 취소'
    else return '지원하기'
  }

  return (
    <S.SideBtn isOpened={isOpened} isApplied={isApplied} onClick={handleAplly}>
      {btnMessage()}
    </S.SideBtn>
  )
}

export default SideBtn
