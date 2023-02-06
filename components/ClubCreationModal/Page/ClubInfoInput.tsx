import Input from '../Layout/Input'
import SubmitButton from '../Layout/SubmitButton'
import * as S from './ClubInfoInput.style'

const ClubInfoInput = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <Input label='동아리 이름' placeholder='동아리 이름을 입력해 주세요.' />

        <Input
          label='동아리 연락처'
          placeholder='연락처를 입력해주세요.(디스코드, 이메일등)'
        />

        <Input label='노션 링크' placeholder='url을 입력해주세요.' />

        <Input
          label='담당 선생님'
          placeholder='담당 선생님 성함을 입력해주세요.'
          optional
          description='담당 선생님은 전공 동아리 외에는 입력하지 않아도 되요.'
        />
      </S.Content>

      <SubmitButton back />
    </S.Wrapper>
  )
}

export default ClubInfoInput
