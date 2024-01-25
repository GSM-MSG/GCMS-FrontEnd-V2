import Layout from '../Common/Layout'
import Input from '@/components/Common/Input'
import BannerImg from '@/components/Common/BannerImg'
import ClubImgs from '@/components/Common/ClubImgs'
import * as S from './ClubInfoInput.style'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { setClubInfo } from '@/store/clubCreation'
import { nextPage } from '@/store/clubCreationPage'
import { SetClubInfoPayload } from '@/type/store/clubCreation'
import { RootState } from '@/store'
import { useUpload } from '@/hooks'
import { addActivityImg, setBannerImg } from '@/store/clubCreation'
import {
  ClubImgUploadType,
  ImgUploadFormType,
} from '@/type/components/ClubCreationPage'
import { ChangeEvent } from 'react'

const ClubInfoInput = () => {
  const dispatch = useDispatch()
  const { upload, isLoading } = useUpload()

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

  const onChangeImg = async (
    e: ChangeEvent<HTMLInputElement>,
    type: ClubImgUploadType
  ) => {
    const image = e.currentTarget.files?.item(0)
    if (
      !image ||
      !image.type.startsWith('image') ||
      isLoading ||
      (type === 'activity' && clubCreation.activityImgs.length >= 4)
    )
      return

    const files = await upload([image])
    if (!files) return

    if (type === 'banner') dispatch(setBannerImg(files[0]))
    else dispatch(addActivityImg([...clubCreation.activityImgs, files[0]]))
  }

  return (
    <Layout onSubmit={handleSubmit(onSubmit)}>
      <S.Wrapper>
        <S.Title>동아리 개설</S.Title>
        <Input
          label='동아리 이름'
          placeholder='동아리 이름을 입력해 주세요.'
          errorPlaceholder='동아리 이름을 입력하지 않았어요.'
          register={register('name', { required: true, maxLength: 25 })}
          error={!!errors.name}
        />

        <Input
          label='동아리 연락처'
          placeholder='연락처를 입력해주세요.(디스코드, 이메일등)'
          register={register('contact', { required: true, maxLength: 50 })}
          error={!!errors.contact}
        />

        <Input
          label='노션 링크'
          placeholder='url을 입력해주세요.'
          register={register('notionLink', {
            required: true,
            pattern: /https?:\/\/.*/,
          })}
          error={!!errors.notionLink}
        />

        <Input
          label='담당 선생님'
          placeholder='담당 선생님 성함을 입력해주세요.'
          optional
          register={register('teacher')}
        />
        <BannerImg
          register={register('bannerImg', {
            onChange: (e) => onChangeImg(e, 'banner'),
          })}
          error={!!errors.bannerImg}
          bannerImg={clubCreation.bannerImg}
        />
        <ClubImgs
          register={register('activityImgs', {
            onChange: (e) => onChangeImg(e, 'activity'),
          })}
          imgs={clubCreation.activityImgs}
        />
      </S.Wrapper>
    </Layout>
  )
}

export default ClubInfoInput
