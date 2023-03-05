import { useForm } from 'react-hook-form'
import Input from '@/components/Common/Input'
import Layout from '../Common/Layout'
import { SetClubInfoPayload } from '@/type/store/clubCreation'
import { useDispatch, useSelector } from 'react-redux'
import { setClubInfo } from '@/store/clubCreation'
import { nextPage } from '@/store/clubCreationPage'
import { RootState } from '@/store'

const ClubInfoInput = () => {
  const { clubCreation } = useSelector((state: RootState) => ({
    clubCreation: state.clubCreation,
  }))
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SetClubInfoPayload>({
    defaultValues: {
      name: clubCreation.name,
      contact: clubCreation.contact,
      notionLink: clubCreation.notionLink,
      teacher: clubCreation.teacher,
    },
  })
  const dispatch = useDispatch()

  const onSubmit = (form: SetClubInfoPayload) => {
    dispatch(setClubInfo(form))
    dispatch(nextPage())
  }

  return (
    <Layout back onSubmit={handleSubmit(onSubmit)}>
      <Input
        label='동아리 이름'
        placeholder='동아리 이름을 입력해 주세요.'
        errorPlaceholder='동아리 이름을 입력하지 않았어요.'
        register={register('name', { required: true })}
        error={!!errors.name}
      />

      <Input
        label='동아리 연락처'
        placeholder='연락처를 입력해주세요.(디스코드, 이메일등)'
        register={register('contact', { required: true })}
        error={!!errors.contact}
      />

      <Input
        label='노션 링크'
        placeholder='url을 입력해주세요.'
        register={register('notionLink', {
          required: true,
          pattern: /https?:\/\//,
        })}
        error={!!errors.notionLink}
      />

      <Input
        label='담당 선생님'
        placeholder='담당 선생님 성함을 입력해주세요.'
        optional
        description='담당 선생님은 전공 동아리 외에는 입력하지 않아도 돼요.'
        register={register('teacher')}
      />
    </Layout>
  )
}

export default ClubInfoInput
