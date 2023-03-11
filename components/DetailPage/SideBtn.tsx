import { useFetch } from '@/hooks'
import { RootState } from '@/store'
import { setIsApplied, setIsOpened } from '@/store/clubDetail'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import Switch from '../Common/Switch'
import * as S from './style'
import * as SVG from '@/assets/svg'

const SideBtn = () => {
  const { clubDetail, user } = useSelector((state: RootState) => ({
    clubDetail: state.clubDetail,
    user: state.user,
  }))
  const dispatch = useDispatch()
  const isOpened = clubDetail.isOpened
  const isApplied = clubDetail.isApplied
  const isHead = clubDetail.scope === 'HEAD'
  const isOther = clubDetail.scope === 'OTHER'
  const isMember = clubDetail.scope === 'MEMBER'
  const isAdmin = user.role === 'ROLE_ADMIN'

  const { fetch: apply } = useFetch({
    url: `applicant/${clubDetail.id}`,
    method: 'post',
    successMessage: '지원에 성공했습니다',
    errors: {
      401: '다시 로그인해 주세요',
      403: '이미 다른 동아리에 지원을 하고 있습니다',
      404: '동아리를 찾을 수 없습니다',
    },
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
  const { fetch, isLoading } = useFetch({
    method: 'patch',
    url: `/club/${clubDetail.id}/${clubDetail.isOpened ? 'close' : 'open'}`,
    errors: '동아리 열기/닫기에 실패했습니다',
    onSuccess: () => {
      dispatch(setIsOpened())
    },
  })

  const handleAplly = () => {
    if (isOther || isOpened) return
    if (isApplied) cancel()
    else apply()
  }

  const btnMessage = () => {
    if (isOther) return '지원 불가'
    if (!isOpened) return '마감'
    if (isApplied) return '신청 취소'
    else return '지원하기'
  }

  const openAndClose = () => !isLoading && fetch()

  return (
    <>
      {isHead || isAdmin || isMember ? (
        <S.ClubControls>
          {!isMember && (
            <S.ClubControl>
              <Switch toggle={clubDetail.isOpened} onClick={openAndClose} />
              <S.ClubControlTitle>동아리 모집</S.ClubControlTitle>
            </S.ClubControl>
          )}

          <S.ClubControl>
            <Link href={`/applicant/${clubDetail.id}`}>
              <SVG.GearIcon />
              <S.ClubControlTitle>설정</S.ClubControlTitle>
            </Link>
          </S.ClubControl>
        </S.ClubControls>
      ) : (
        <S.SideBtn btnMessage={btnMessage()} onClick={handleAplly}>
          {btnMessage()}
        </S.SideBtn>
      )}
    </>
  )
}

export default SideBtn
