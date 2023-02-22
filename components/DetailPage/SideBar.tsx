import Link from 'next/link'
import * as S from './style'
import * as SVG from '@/assets/svg'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import SideBtn from './SideBtn'

export default function SideBar() {
  const { clubDetail } = useSelector((state: RootState) => ({
    clubDetail: state.clubDetail,
  }))

  return (
    <S.SideBar>
      <h3>{clubDetail.name}</h3>
      <S.SideControl>
        <SideBtn />
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
