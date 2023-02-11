import { useFetch } from '@/hooks'
import { RootState } from '@/store'
import { MemberType } from '@/type/common'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import Input from '../Common/Input'
import Member from '../Common/Member'
import SubmitButton from '../Common/SubmitButton'
import * as S from './AddClubMember.style'

const AddClubMember = () => {
  const { type } = useSelector((state: RootState) => ({
    type: state.clubCreation.type,
  }))
  const { register, watch } = useForm<{ name: string }>()
  const { fetch, data } = useFetch<MemberType[]>({
    url: `/user/search?name=${watch('name')}&type=${type}`,
    method: 'get',
  })

  useEffect(() => {
    if (!watch('name').trim()) return

    const delayFetch = setTimeout(() => {
      fetch()
    }, 300)

    return () => clearTimeout(delayFetch)
  }, [fetch, watch])

  return (
    <S.Wrapper>
      <div>
        <Input
          label='동아리원'
          placeholder='너, 내 동료가 돼라'
          optional
          description='동아리원은 나중에 다시 선택 혹은 수정이 가능해요.'
          register={register('name')}
        />

        {watch('name')?.trim() &&
          data?.map((i) => <Member key={i.uuid} member={i} />)}
      </div>
      <SubmitButton />
    </S.Wrapper>
  )
}

export default AddClubMember
