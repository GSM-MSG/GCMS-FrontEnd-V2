import * as S from './Confirm.style'
import * as SVG from '@/assets/svg'
import SubmitButton from '../Common/SubmitButton'

const Confirm = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <SVG.Envelope />
        <S.Title>동아리 개설이 신청되었습니다</S.Title>
        <S.Description>
          어드민이 동아리 개설 신청을 수락한 후에 동아리가 개설돼요
        </S.Description>
      </S.Content>

      <SubmitButton />
    </S.Wrapper>
  )
}

export default Confirm
