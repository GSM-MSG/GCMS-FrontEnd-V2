import Link from 'next/link'
import NewClubItem from './NewClubItem'
import * as S from './style'
import * as SVG from '@/assets/svg'

export default function NewClub() {
  return (
    <S.NewClubWrapper>
      <S.NewClubHead>
        <p>새로 생긴 동아리들</p>
        <Link href='#'>
          전체 14개 <SVG.RightArrowIcon />
        </Link>
      </S.NewClubHead>
      <S.NewClubList>
        <NewClubItem />
        <NewClubItem />
        <NewClubItem />
        <NewClubItem />
        <NewClubItem />
        <NewClubItem />
        <NewClubItem />
      </S.NewClubList>
    </S.NewClubWrapper>
  )
}
