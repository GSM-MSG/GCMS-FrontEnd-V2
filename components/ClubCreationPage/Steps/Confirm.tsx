import * as S from './Confirm.style'
import * as SVG from '@/assets/svg'

interface Props {
  onClose: () => void
}

const Confirm = ({ onClose }: Props) => {
  return (
    <S.Wrapper>
      <S.ContentLayout>
        <S.Contents>
          <SVG.Envelope />
          <S.Title>동아리 개설 신청 됨</S.Title>
          <p>
            어드민이 동아리 개설 신청을 수락한 후에
            <br />
            동아리가 개설되요
          </p>
        </S.Contents>
      </S.ContentLayout>
      <S.CompleteButton onClick={onClose}>완료</S.CompleteButton>
    </S.Wrapper>
  )
}

export default Confirm
