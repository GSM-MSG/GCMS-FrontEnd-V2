import { RootState } from '@/store'
import { setContent } from '@/store/clubCreation'
import { nextPage } from '@/store/clubCreationPage'
import { ContentFormType } from '@/type/components/ClubCreationModal'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Input from '@/components/Common/Input'
import Layout from '../Common/Layout'
import TextareaInput from '@/components/Common/Textarea'

const ClubContent = () => {
  const dispatch = useDispatch()
  const { content } = useSelector((state: RootState) => ({
    content: state.clubCreation.content,
  }))
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<ContentFormType>({ defaultValues: { content } })

  const onSubmit = (form: ContentFormType) => {
    if (!form.content.replaceAll(' ', '')) return setError('content', {})

    dispatch(setContent(form.content))
    dispatch(nextPage())
  }

  return (
    <Layout onSubmit={handleSubmit(onSubmit)} back>
      <TextareaInput
        register={register('content', { required: true, maxLength: 200 })}
        content={watch('content')}
        error={!!errors.content}
      />
      <Input
        label='연구 분야 및 주제 선정 이유'
        placeholder='연구 분야 및 주제 선정 이유를 입력해주세요.'
        register={register('content', { required: true, maxLength: 50 })}
        error={!!errors.content}
      />
      <Input
        label='연구 활동 및 목표'
        placeholder='연구 활동 목표를 입력해주세요.'
        register={register('content', { required: true, maxLength: 50 })}
        error={!!errors.content}
      />
      <Input
        label='기대효과'
        placeholder='연구 활동 기대효과를 입력해주세요.'
        register={register('content', { required: true, maxLength: 50 })}
        error={!!errors.content}
      />
    </Layout>
  )
}

export default ClubContent
