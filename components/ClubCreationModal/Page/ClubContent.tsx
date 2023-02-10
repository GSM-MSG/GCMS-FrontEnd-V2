import { ContentFormType } from '@/type/components/ClubCreationModal'
import { useForm } from 'react-hook-form'
import Layout from '../Common/Layout'
import TextareaInput from '../Common/Textarea'

const ClubContent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContentFormType>()

  const onSubmit = async () => {
    return
  }

  return (
    <Layout onSubmit={handleSubmit(onSubmit)} back>
      <TextareaInput
        register={register('content', { required: true, maxLength: 200 })}
        watch={watch}
        error={!!errors.content}
      />
    </Layout>
  )
}

export default ClubContent
