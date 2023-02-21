import ClubItem from './ClubItem'
import * as S from './style'
import { ClubListType, ClubType } from '@/type/common'
import { useForm } from 'react-hook-form'
import { useFetch } from '@/hooks'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { setModal } from '@/store/loginModal'
import { RootState } from '@/store'

export default function ClubList() {
  const dispatch = useDispatch()
  const router = useRouter()

  const { user } = useSelector((state: RootState) => ({
    user: state.user,
  }))

  const { register, watch } = useForm<{ club: ClubType }>({
    defaultValues: {
      club: 'MAJOR',
    },
  })

  const { fetch, data } = useFetch<ClubListType[]>({
    url: `/club?type=${watch('club')}`,
    method: 'get',
    errors: {
      400: '해당 동아리 정보를 찾을수 없습니다.',
    },
  })

  useEffect(() => {
    fetch()
  }, [watch('club')])

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
            return (
              <div
                key={i.id}
                onClick={() => {
                  user.name
                    ? router.push(`detail/${i.id}`)
                    : dispatch(setModal())
                }}
              >
                <ClubItem club={i} />
              </div>
            )
          })}
      </S.ClubList>
    </S.ClubWrapper>
  )
}
