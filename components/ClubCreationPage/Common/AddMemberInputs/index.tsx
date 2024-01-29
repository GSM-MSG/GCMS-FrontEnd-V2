import { useFetch } from '@/hooks'
import { MemberType } from '@/type/common'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Input from '@/components/Common/Input'
import Member from '../Member'
import * as S from './style'

const AddMemberInputs = ({ clubCreation }) => {
  const { register, watch } = useForm<{ name: string }>()
  const { fetch, data } = useFetch<MemberType[]>({
    url: `/user/search?name=${watch('name')}&type=${clubCreation.type}`,
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
    <>
      <Input
        label='동아리원'
        placeholder='이름을 입력해주세요'
        optional
        register={register('name')}
      />
      <S.Content>
        {watch('name')?.trim() &&
          data?.map((i) => <Member key={i.uuid} member={i} />)}
      </S.Content>
    </>
  )
}

export default AddMemberInputs
