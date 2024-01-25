import Layout from '../Common/Layout'
import * as S from './ClubInfoInput.style'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { setClubInfo } from '@/store/clubCreation'
import { nextPage } from '@/store/clubCreationPage'
import { SetClubInfoPayload } from '@/type/store/clubCreation'
import { RootState } from '@/store'
import { ImgUploadFormType } from '@/type/components/ClubCreationPage'
import InfoInput from '../Common/InfoInputs'
import ImgInputs from '../Common/ImgInputs'

const ClubInfoInput = () => {
  const dispatch = useDispatch()

  const { clubCreation } = useSelector((state: RootState) => ({
    clubCreation: state.clubCreation,
  }))
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<SetClubInfoPayload & ImgUploadFormType>({
    defaultValues: {
      name: clubCreation.name,
      contact: clubCreation.contact,
      notionLink: clubCreation.notionLink,
      teacher: clubCreation.teacher,
    },
  })

  const onSubmit = (form: SetClubInfoPayload) => {
    if (!clubCreation.bannerImg) return setError('bannerImg', {})
    setValue('teacher', form.teacher?.trim())
    dispatch(setClubInfo(form))
    dispatch(nextPage())
  }

  return (
    <Layout onSubmit={handleSubmit(onSubmit)}>
      <S.Wrapper>
        <S.Title>동아리 개설</S.Title>
        <InfoInput register={register} errors={errors} />
        <ImgInputs register={register} errors={errors} />
      </S.Wrapper>
    </Layout>
  )
}

export default ClubInfoInput
