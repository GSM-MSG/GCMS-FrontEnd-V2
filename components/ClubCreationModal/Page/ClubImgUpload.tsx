import { useUpload } from '@/hooks'
import { RootState } from '@/store'
import { addActivityImg, setBannerImg } from '@/store/clubCreation'
import { nextPage } from '@/store/clubCreationPage'
import { addActivityFiles, setBannerFile } from '@/store/imgs'
import { ImgUploadFormType } from '@/type/components/ClubCreationModal'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import BannerImg from '@/components/Common/BannerImg'
import ClubImgs from '@/components/Common/ClubImgs'
import Layout from '../Common/Layout'

const ClubImgUpload = () => {
  const dispatch = useDispatch()
  const { imgs } = useSelector((state: RootState) => ({ imgs: state.imgs }))
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ImgUploadFormType>()
  const { upload, isLoading } = useUpload()

  const onSubmit = async () => {
    if (!imgs.bannerImg || isLoading) return

    const files = await upload([...imgs.activityImgs, imgs.bannerImg])

    if (!files) return

    dispatch(addActivityImg(files.slice(0, files.length - 1)))
    dispatch(setBannerImg(files[files.length - 1]))
    dispatch(nextPage())
  }

  return (
    <Layout onSubmit={handleSubmit(onSubmit)} back>
      <BannerImg
        register={register('bannerImg', {
          required: true,
          onChange: (e) =>
            dispatch(setBannerFile({ file: e.currentTarget.files })),
        })}
        error={!!errors.bannerImg}
        bannerImg={imgs.bannerImg && URL.createObjectURL(imgs.bannerImg)}
      />
      <ClubImgs
        register={register('activityImgs', {
          onChange: (e) =>
            dispatch(addActivityFiles({ file: e.currentTarget.files })),
        })}
      />
    </Layout>
  )
}

export default ClubImgUpload
