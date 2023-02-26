import ClubItem from './ClubItem'
import * as S from './style'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

export default function ClubList() {
  const router = useRouter()
  const clubType = router.query.type?.toString()
  const { clubList } = useSelector((state: RootState) => ({
    clubList: state.clubList,
  }))

  const pushQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clubValue = e.target.value
    router.push({
      pathname: '/',
      query: clubValue && { type: encodeURI(clubValue) },
    })
  }

  return (
    <S.ClubWrapper>
      <S.ClubOptionLayer>
        <input
          type='radio'
          id={'MAJOR'}
          value=''
          checked={!clubType}
          onChange={pushQuery}
        />
        <label htmlFor={'MAJOR'}>전공</label>
        <input
          type='radio'
          id={'FREEDOM'}
          value='FREEDOM'
          checked={clubType === 'FREEDOM'}
          onChange={pushQuery}
        />
        <label htmlFor={'FREEDOM'}>자율</label>
        <input
          type='radio'
          id={'EDITORIAL'}
          value='EDITORIAL'
          checked={clubType === 'EDITORIAL'}
          onChange={pushQuery}
        />
        <label htmlFor={'EDITORIAL'}>사설</label>
      </S.ClubOptionLayer>
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
