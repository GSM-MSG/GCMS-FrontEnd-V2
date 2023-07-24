import { useFetch } from '@/hooks'
import { RootState } from '@/store'
import { MemberType } from '@/type/common'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { clearClubData } from '@/store/clubCreation'
import Input from '@/components/Common/Input'
import Member from '../Common/Member'
import SelectUserList from '../Common/SelectUserList'
import SubmitButton from '../Common/SubmitButton'
import * as S from './AddClubMember.style'
import { nextPage } from '@/store/clubCreationPage'
import Navigation from '../Common/Navigation'

const AddClubMember = () => {
  const dispatch = useDispatch()
  const { clubCreation } = useSelector((state: RootState) => ({
    clubCreation: state.clubCreation,
  }))
  
  const { register, watch } = useForm<{ name: string }>()
  const { fetch, data } = useFetch<MemberType[]>({
    url: `/user/search?name=${watch('name')}&type=${clubCreation.type}`,
    method: 'get',
  })
  const { fetch: addClub, isLoading } = useFetch({
    url: '/club',
    method: 'post',
    onSuccess: () => {
      dispatch(clearClubData())
      dispatch(nextPage())
    },
    successMessage: '동아리 생성에 성공했습니다',
    errors: '동아리 생성에 실패했습니다',
  })
  
  useEffect(() => {
    if (!watch('name').trim()) return

    const delayFetch = setTimeout(() => {
      fetch()
    }, 300)

    return () => clearTimeout(delayFetch)
  }, [fetch, watch])

  const onClick = async () => {
    if (isLoading) return

    await addClub({
      ...clubCreation,
      member: clubCreation.member.map((i) => i.uuid),
    })
  }

  return (
    <S.Wrapper>
      <Navigation />

      <Input
        label='동아리원'
        placeholder='너, 내 동료가 돼라'
        optional
        description='동아리원은 나중에 다시 선택 혹은 수정이 가능해요.'
        register={register('name')}
      />
      <S.Content>
        {watch('name')?.trim() &&
          data?.map((i) => <Member key={i.uuid} member={i} />)}
      </S.Content>
      <div>
        <SelectUserList />
        <SubmitButton back complete onClick={onClick} />
      </div>
    </S.Wrapper>
  )
}

export default AddClubMember
