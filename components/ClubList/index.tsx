import ClubItem from './ClubItem'
import * as S from './style'
import { ClubListType } from '@/type/common'
import { useFetch } from '@/hooks'
import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function ClubList() {
  const router = useRouter()
  const clubType = router.query.type?.toString()

  const { fetch, data } = useFetch<ClubListType[]>({
    url: `/club?type=${clubType || 'MAJOR'}`,
    method: 'get',
    errors: {
      400: '해당 동아리 정보를 찾을수 없습니다.',
    },
  })

  const pushQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clubValue = e.target.value
    router.push({
      pathname: '/',
      query: clubValue && { type: encodeURI(clubValue) },
    })
  }

  useEffect(() => {
    fetch()
  }, [clubType])

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
        {data &&
          data.map((i) => {
            return (
              <Link key={i.id} href={`detail/${i.id}`}>
                <ClubItem club={i} />
              </Link>
            )
          })}
      </S.ClubList>
    </S.ClubWrapper>
  )
}
