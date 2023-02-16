import Link from 'next/link'
import NewClubItem from './NewClubItem'
import * as S from './style'
import * as SVG from '@/assets/svg'
import { useFetch } from '@/hooks'
import { useEffect } from 'react'
import { ClubListType } from '@/type/common'

export default function NewClub() {
  const { fetch, data } = useFetch<ClubListType[]>({
    url: `/club`,
    method: 'get',
  })

  useEffect(() => {
    fetch()
  }, [])

  return (
    <S.NewClubWrapper>
      <S.NewClubHead>
        <p>새로 생긴 동아리들</p>
        <Link href='/new'>
          전체 {data?.length}개 <SVG.RightArrowIcon />
        </Link>
      </S.NewClubHead>
      <S.NewClubList>
        {data &&
          data.map((i) => {
            return <NewClubItem key={i.id} club={i} />
          })}
      </S.NewClubList>
    </S.NewClubWrapper>
  )
}
