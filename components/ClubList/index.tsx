import ClubItem from './ClubItem'
import * as S from './style'
import { ClubListType, ClubType } from '@/type/common'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { useFetch } from '@/hooks'

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
    if (!watch('club')) return
    fetch()
  }, [watch, fetch])
  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <S.ClubWrapper>
      <S.ClubOptionLayer>
        <input type='radio' id='major' value='MAJOR' {...register('club')} />
        <label htmlFor='major'>전공</label>
        <input
          type='radio'
          id='freedom'
          value='FREEDOM'
          {...register('club')}
        />
        <label htmlFor='freedom'>자율</label>
        <input
          type='radio'
          id='editorial'
          value='EDITORIAL'
          {...register('club')}
        />
        <label htmlFor='editorial'>사설</label>
      </S.ClubOptionLayer>
      <S.ClubList>
        {data &&
          data.map((i) => {
            return <ClubItem key={i.id} club={i} />
          })}
      </S.ClubList>
    </S.ClubWrapper>
  )
}