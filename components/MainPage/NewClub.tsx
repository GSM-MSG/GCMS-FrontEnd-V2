import Link from 'next/link'
import NewClubItem from './NewClubItem'
import * as S from './style'
import * as SVG from '@/assets/svg'
import useNewClub from '@/hooks/useNewClub'

export default function NewClub() {
  const { newClubs } = useNewClub()

  return (
    <S.NewClubWrapper>
      <S.NewClubHead>
        <p>새로 생긴 동아리들</p>
        <Link href='/new'>
          전체 {newClubs?.length}개 <SVG.RightArrowIcon />
        </Link>
      </S.NewClubHead>
      <S.NewClubList>
        {newClubs &&
          newClubs.map((i) => {
            return (
              <Link key={i.id} href={`/detail/${i.id}`}>
                <NewClubItem club={i} />
              </Link>
            )
          })}
      </S.NewClubList>
    </S.NewClubWrapper>
  )
}
