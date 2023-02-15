import Link from 'next/link'
import * as S from './style'
import * as SVG from '@/assets/svg'

export default function SideBar() {
  return (
    <S.SideBar>
      <h3>MSG(맛소금)</h3>
      <S.SideControl>
        <button>지원하기</button>
        <S.NotionInfo>
          <p>MSG(맛소금)이/가 더 궁금하다면?</p>
          <Link href='#'>
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
