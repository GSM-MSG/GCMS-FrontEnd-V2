import { useUpload } from '@/hooks'
import { RootState } from '@/store'
import { addActivityImg, setBannerImg } from '@/store/clubCreation'
import { nextPage } from '@/store/clubCreationPage'
import {
  ClubImgUploadType,
  ImgUploadFormType,
} from '@/type/components/ClubCreationModal'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import BannerImg from '@/components/Common/BannerImg'
import ClubImgs from '@/components/Common/ClubImgs'
import Layout from '../Common/Layout'
import { ChangeEvent } from 'react'

const ClubImgUpload = () => {
  const dispatch = useDispatch()
  const { clubCreation } = useSelector((state: RootState) => ({
    clubCreation: state.clubCreation,
  }))
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ImgUploadFormType>()
  const { upload, isLoading } = useUpload()

  const onSubmit = async () => {
    // if (!clubCreation.bannerImg) return setError('bannerImg', {})

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
    <Layout onSubmit={handleSubmit(onSubmit)} back>
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
    </Layout>
  )
}

export default ClubImgUpload
