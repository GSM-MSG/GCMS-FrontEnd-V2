import BannerImg from '@/components/Common/BannerImg'
import Input from '@/components/Common/Input'
import Textarea from '@/components/Common/Textarea'
import { useForm } from 'react-hook-form'
import * as S from './style'
import ClubImgs from '../ClubImgs'
import { useFetch, useUpload } from '@/hooks'
import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { EditClubForm } from '@/type/components/ClubEdit'

interface Props {
  initialData: Partial<EditClubForm>
  clubDetailReFetch: () => Promise<void>
}

const Edit = ({ initialData, clubDetailReFetch }: Props) => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<EditClubForm>({ defaultValues: initialData })
  const router = useRouter()
  const { upload } = useUpload()
  const [activityImgs, setActivityImgs] = useState<string[]>([])
  const [bannerImg, setBannerImg] = useState<string>('')
  const { fetch } = useFetch({
    method: 'patch',
    url: `/club/${router.query?.clubID}`,
  })

  const onUpload = async (
    e: ChangeEvent<HTMLInputElement>,
    type: 'bannerImg' | 'activityImgs'
  ) => {
    const file = e.currentTarget.files?.item(0)
    if (!file) return

    const url = await upload([file])
    if (!url) return

    if (type === 'bannerImg') return setBannerImg(url[0])
    setActivityImgs([...activityImgs, url[0]])
  }

  const onRemove = (idx: number) => {
    setActivityImgs(activityImgs.filter((_, i) => i !== idx))
  }

  const onSubmit = async (form: EditClubForm) => {
    await fetch({
      ...form,
      activityImgs,
      bannerImg,
    })
    await clubDetailReFetch()
  }

  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <S.TitleSection>
        <S.Title>수정</S.Title>
        <div>
          <S.CancelBtn type='button'>취소</S.CancelBtn>
          <S.EditBtn type='submit'>수정완료</S.EditBtn>
        </div>
      </S.TitleSection>

      <Input
        label='동아리 이름'
        placeholder='동아리 이름을 입력해주세요.'
        register={register('name', { required: true })}
        error={!!errors.name}
      />

      <Input
        label='동아리 연락처'
        placeholder='연락처를 입력해주세요. (디스코드, 이메일 등)'
        register={register('contact', { required: true })}
        error={!!errors.contact}
      />

      <S.BannerAndContent>
        <BannerImg
          register={register('bannerImg', {
            required: true,
            onChange: (e) => onUpload(e, 'bannerImg'),
          })}
          bannerImg={bannerImg}
          error={!!errors.bannerImg}
        />
        <Textarea
          register={register('content', { required: true })}
          content={watch('content')}
          error={!!errors.content}
        />
      </S.BannerAndContent>

      <ClubImgs
        register={register('activityImgs', {
          onChange: (e) => onUpload(e, 'activityImgs'),
        })}
        activityImgs={activityImgs}
        onRemove={onRemove}
      />

      <Input
        label='노션 링크'
        placeholder='url을 입력해주세요.'
        register={register('notionLink', { required: true })}
        error={!!errors.notionLink}
      />

      <Input
        label='담당 선생님'
        placeholder='담당 선생님 성함을 입력해주세요.'
        register={register('teacher')}
        optional
      />
    </S.Wrapper>
  )
}

export default Edit
