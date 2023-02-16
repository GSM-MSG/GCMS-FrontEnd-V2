import { SearchIcon } from '@/assets/svg'
import { useFetch } from '@/hooks'
import { RootState } from '@/store'
import { addAllUser } from '@/store/applicant'
import { ApplicantListType } from '@/type/common'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import ClubNav from '../Common/ClubNav'
import Input from '../Common/Input'
import SelectedUserImg from './SelectedUserImg'
import UserList from './UserList/UserList'
import * as S from './style'

export default function ApplicantPage() {
  const { fetch, data } = useFetch<ApplicantListType>({
    url: '/applicant/1',
    method: 'get',
  })
  const { applicant } = useSelector((state: RootState) => ({
    applicant: state.applicant,
  }))
  const dispatch = useDispatch()
  const { register, watch } = useForm({ defaultValues: { value: '' } })

  useEffect(() => {
    fetch()
  }, [fetch])

  return (
    <S.Positioner>
      <S.Layer>
        <ClubNav />
        <h3>신청자 목록</h3>
        <S.InputBox>
          <SearchIcon />
          <Input
            placeholder='검색'
            label={`총 ${data?.신청자List.length ?? 0}명`}
            register={register('value')}
          />
        </S.InputBox>
        {data?.userScope === 'HEAD' && (
          <>
            <SelectedUserImg seleted={applicant} />
            <S.AllSelectBtn>
              <h5 onClick={() => dispatch(addAllUser(data.신청자List))}>
                전부 선택
              </h5>
            </S.AllSelectBtn>
          </>
        )}

        <UserList data={data} value={watch('value').trim()} />
      </S.Layer>
    </S.Positioner>
  )
}
