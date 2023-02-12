import { XMark } from '@/assets/svg'
import * as S from './SelectedUserImg.style'

export default function SelectedUserImg() {
  return (
    <S.Layer>
      <S.ImgContainer>
        <S.ImgWrapper>
          <S.Img />
          <S.Delete>
            <XMark />
          </S.Delete>
        </S.ImgWrapper>
      </S.ImgContainer>
    </S.Layer>
  )
}
