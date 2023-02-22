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
  const isHead = clubDetail.scope === 'HEAD'
  const isMember = clubDetail.scope === 'MEMBER'

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
  const { fetch: exit } = useFetch({
    url: `club/${clubDetail.id}/exit`,
    method: 'delete',
  })

  const handleAplly = () => {
    if (isHead) {
      if (isOpened) return close()
      else return open()
    } else if (isMember) return exit()

    if (!isOpened) return
    if (isApplied) return cancel()
    apply()
  }

  const btnMessage = () => {
    if (isHead) {
      if (isOpened) return '동아리 닫기'
      else return '동아리 열기'
    } else if (isMember) return '탈퇴하기'

    if (!isOpened) return '준비중'
    if (isApplied) return '신청 취소'
    else return '지원하기'
  }

  return (
    <S.SideBtn
      isOpened={isOpened}
      isApplied={isApplied}
      onClick={handleAplly}
      isHead={isHead}
      isMember={isMember}
    >
      {btnMessage()}
    </S.SideBtn>
  )
}

export default SideBtn