import BannerImg from '@/components/Common/BannerImg'
import ClubImgs from '@/components/Common/ClubImgs'
import { UseFormRegister } from 'react-hook-form'
import { SetClubInfoPayload } from '@/type/store/clubCreation'
import {
  ImgUploadFormType,
  ClubImgUploadType,
} from '@/type/components/ClubCreationPage'
import { addActivityImg, setBannerImg } from '@/store/clubCreation'
import { ChangeEvent } from 'react'
import { useUpload } from '@/hooks'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'

interface Props {
  register: UseFormRegister<SetClubInfoPayload & ImgUploadFormType>
  errors: Record<string, any>
}

const ImgInputs = ({ register, errors }: Props) => {
  const dispatch = useDispatch()
  const { upload, isLoading } = useUpload()
  const { clubCreation } = useSelector((state: RootState) => ({
    clubCreation: state.clubCreation,
  }))
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
    <>
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
    </>
  )
}
export default ImgInputs
