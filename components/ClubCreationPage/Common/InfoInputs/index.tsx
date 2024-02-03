import { UseFormRegister, UseFormWatch } from 'react-hook-form'
import { SetClubInfoPayload } from '@/type/store/clubCreation'
import { ImgUploadFormType } from '@/type/components/ClubCreationPage'
import Input from '@/components/Common/Input'
import Textarea from '@/components/Common/Textarea'
interface Props {
  register: UseFormRegister<SetClubInfoPayload & ImgUploadFormType>
  watch: UseFormWatch<SetClubInfoPayload & ImgUploadFormType>
  errors: Record<string, any>
}

const InfoInput = ({ register, watch, errors }: Props) => {
  return (
    <>
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

      <Textarea
        register={register('content', { required: true, maxLength: 200 })}
        content={watch('content')}
        error={!!errors.contact}
      />
    </>
  )
}

export default InfoInput
