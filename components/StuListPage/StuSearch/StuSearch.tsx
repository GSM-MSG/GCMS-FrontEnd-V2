import * as S from './style'
import * as SVG from '@/assets/svg'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

import { MemberListType } from '@/type/common'
import { useFetch } from '@/hooks'
import UserList from '../UserList'
export default function StuSearch() {
  const { fetch, data } = useFetch<MemberListType>({
    url: `/club-member/${33}`,
    method: 'get',
  })

  const { register, watch } = useForm({ defaultValues: { value: '' } })

  useEffect(() => {
    fetch()
  }, [])

  return (
    <S.StuSearchWrapper>
      <S.InputBox>
        <SVG.SearchIcon />
        <S.InputTag placeholder='검색' {...register('value')} />
      </S.InputBox>
      {!!data && (
        <UserList
          data={data}
          value={watch('value').trim()}
          onClick={() => {
            console.log(1)
          }}
        />
      )}
    </S.StuSearchWrapper>
  )
}
