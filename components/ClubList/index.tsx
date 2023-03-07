import ClubItem from './ClubItem'
import * as S from './style'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import ClubOptionPick from '../ClubOptionPick'
import { ClubType } from '@/type/common'
import { ClubOptionType } from '@/type/components/ClubOptionNavigation'

export default function ClubList() {
  const router = useRouter()
  const clubType = router.query.type?.toString() as ClubType | undefined
  const { clubList } = useSelector((state: RootState) => ({
    clubList: state.clubList,
  }))

  const onChange = (type: ClubOptionType) => {
    router.push({
      pathname: '/',
      query: type && { type },
    })
  }

  return (
    <S.ClubWrapper>
      <ClubOptionPick type={clubType} onChange={onChange} />

      <S.ClubList>
        {clubList.map((i) => (
          <Link key={i.id} href={`detail/${i.id}`}>
            <ClubItem club={i} />
          </Link>
        ))}
      </S.ClubList>
    </S.ClubWrapper>
  )
}
