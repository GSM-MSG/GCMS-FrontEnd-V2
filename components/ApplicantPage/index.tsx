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
import UserList from './UserList'
import * as S from './style'
import ChoiceUser from './ChoiceUser'
import { useRouter } from 'next/router'

export default function ApplicantPage() {
  const router = useRouter()
  const clubId = router.query.clubID
  const { fetch, data } = useFetch<ApplicantListType>({
    url: `/applicant/${clubId}`,
    method: 'get',
  })
  const { applicant } = useSelector((state: RootState) => ({
    applicant: state.applicant,
  }))
  const dispatch = useDispatch()
  const { register, watch } = useForm({ defaultValues: { value: '' } })

  useEffect(() => {
    if (clubId) fetch()
  }, [clubId])

  return (
    <S.Positioner>
      <S.Layer>
        <ClubNav />
        <h3>신청자 목록</h3>
        <S.InputBox>
          <SearchIcon />
          <Input
            placeholder='검색'
            label={`총 ${data?.applicantList.length ?? 0}명`}
            register={register('value')}
          />
        </S.InputBox>
        {data?.scope === 'HEAD' && (
          <>
            <SelectedUserImg selected={applicant} />
            <S.AllSelectBox>
              <S.AllSelectBtn
                onClick={() => dispatch(addAllUser(data.applicantList))}
              >
                전부 선택
              </S.AllSelectBtn>
            </S.AllSelectBox>
          </>
        )}
        <UserList data={data} value={watch('value').trim()} />
        {data?.scope === 'HEAD' && <ChoiceUser onSubmit={() => fetch()} />}
      </S.Layer>
    </S.Positioner>
  )
}
