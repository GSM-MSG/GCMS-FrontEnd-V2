import Layout from '../Common/Layout'
import * as S from './ClubInfoInput.style'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { setClubInfo } from '@/store/clubCreation'
import { nextPage } from '@/store/clubCreationPage'
import { SetClubInfoPayload } from '@/type/store/clubCreation'
import { RootState } from '@/store'
import {
  ImgUploadFormType,
  InfoInputsFormDataType,
} from '@/type/components/ClubCreationPage'
import InfoInput from '../Common/InfoInputs'
import ImgInputs from '../Common/ImgInputs'
import AddMemberInputs from '../Common/AddMemberInputs'
import SelectUserList from '../Common/SelectUserList'
import SubmitButton from '../Common/SubmitButton'
import { useFetch } from '@/hooks'
import { clearClubData } from '@/store/clubCreation'
const ClubInfoInput = () => {
  const dispatch = useDispatch()
  const { clubCreation } = useSelector((state: RootState) => ({
    clubCreation: state.clubCreation,
  }))
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SetClubInfoPayload & ImgUploadFormType>({
    defaultValues: {
      name: clubCreation.name,
      contact: clubCreation.contact,
      notionLink: clubCreation.notionLink,
      content: clubCreation.content,
      teacher: clubCreation.teacher,
    },
  })

  const { fetch: addClub, isLoading } = useFetch({
    url: '/club',
    method: 'post',
    autoPushToggle: false,
    onSuccess: () => {
      dispatch(clearClubData())
      dispatch(nextPage())
    },
    successMessage: '동아리 생성에 성공했습니다',
    errors: '동아리 생성에 실패했습니다',
  })

  const onSubmit = (form: InfoInputsFormDataType) => {
    if (isLoading) return
    if (!clubCreation.bannerImg) return setError('bannerImg', {})
    dispatch(
      setClubInfo({
        ...form,
        activityImgs: clubCreation.activityImgs,
        bannerImg: clubCreation.bannerImg,
      })
    )
    addClub(clubCreation)
  }

  return (
    <>
      <Layout formId='infoInput' onSubmit={handleSubmit(onSubmit)}>
        <S.Wrapper>
          <S.Title>동아리 개설</S.Title>
          <InfoInput register={register} watch={watch} errors={errors} />
          <ImgInputs register={register} errors={errors} />
          <AddMemberInputs clubCreation={clubCreation} />
        </S.Wrapper>
      </Layout>
      <S.SubmitList>
        <SelectUserList />
        <SubmitButton formId='infoInput' />
      </S.SubmitList>
    </>
  )
}

export default ClubInfoInput
