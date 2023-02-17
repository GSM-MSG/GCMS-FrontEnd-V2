import Link from 'next/link'
import * as S from './style'
import * as SVG from '@/assets/svg'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useFetch } from '@/hooks'

export default function SideBar() {
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

  const handleAplly = () => {
    if (!isOpened) return
    if (isApplied) return cancel()
    apply()
  }

  return (
    <S.SideBar>
      <h3>{clubDetail.name}</h3>
      <S.SideControl>
        <S.SideBtn
          isOpened={isOpened}
          isApplied={isApplied}
          onClick={handleAplly}
        >
          {isOpened ? (isApplied ? '신청취소' : '지원하기') : '준비중'}
        </S.SideBtn>
        <S.NotionInfo>
          <p>{clubDetail.name}이/가 더 궁금하다면?</p>
          <Link href={clubDetail.notionLink}>
            노션 보러가기
            <i>
              <SVG.ShortcutsIcon />
            </i>
          </Link>
        </S.NotionInfo>
      </S.SideControl>
    </S.SideBar>
  )
}
