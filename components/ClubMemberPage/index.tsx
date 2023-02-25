import { SearchIcon } from '@/assets/svg'
import { useFetch } from '@/hooks'
import { MemberListType } from '@/type/common'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import ClubNav from '../Common/ClubNav'
import Input from '../Common/Input'
import * as S from './style'
import UserList from './UserList'

export default function ApplicantPage() {
  const router = useRouter()
  const { fetch, data } = useFetch<MemberListType>({
    url: `/club-member/${router.query.clubID}`,
    method: 'get',
  })
  const { register, watch } = useForm({ defaultValues: { value: '' } })

  useEffect(() => {
    fetch()
  }, [])

  return (
    <S.Positioner>
      <S.Layer>
        <ClubNav />
        <h3>동아리 멤버</h3>
        <S.InputBox>
          <SearchIcon />
          <Input
            placeholder='검색'
            label={`총 ${data?.clubMember?.length ?? 0}명`}
            register={register('value')}
          />
        </S.InputBox>
        {!!data && <UserList data={data} value={watch('value').trim()} />}
      </S.Layer>
    </S.Positioner>
  )
}
