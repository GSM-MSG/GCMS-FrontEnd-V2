import { RootState } from '@/store'
import { setContent } from '@/store/clubCreation'
import { nextPage } from '@/store/clubCreationPage'
import { ContentFormType } from '@/type/components/ClubCreationModal'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
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
    </Layout>
  )
}

export default ClubContent
