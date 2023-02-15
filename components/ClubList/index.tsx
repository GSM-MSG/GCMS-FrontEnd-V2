import ClubItem from './ClubItem'
import * as S from './style'
import { ClubListType, ClubType } from '@/type/common'
import { useForm } from 'react-hook-form'
import { useFetch } from '@/hooks'
import { useEffect } from 'react'
import Link from 'next/link'

export default function ClubList() {
  const { register, watch } = useForm<{ club: ClubType }>({
    defaultValues: {
      club: 'MAJOR',
    },
  })

  const { fetch, data } = useFetch<ClubListType[]>({
    url: `/club?type=${watch('club')}`,
    method: 'get',
  })

  useEffect(() => {
    fetch()
  }, [watch('club')])

  return (
    <S.ClubWrapper>
      <S.ClubOptionLayer>
        <input
          type='radio'
          id='major'
          value='MAJOR'
          {...register('club', {
            onChange: fetch,
          })}
        />
        <label htmlFor='major'>전공</label>
        <input
          type='radio'
          id='freedom'
          value='FREEDOM'
          {...register('club', {
            onChange: fetch,
          })}
        />
        <label htmlFor='freedom'>자율</label>
        <input
          type='radio'
          id='editorial'
          value='EDITORIAL'
          {...register('club', {
            onChange: fetch,
          })}
        />
        <label htmlFor='editorial'>사설</label>
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
