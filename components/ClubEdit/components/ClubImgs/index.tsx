import * as S from './style'
import * as SVG from '@/assets/svg'
import { UseFormRegisterReturn } from 'react-hook-form'

interface Props {
  register: UseFormRegisterReturn
  activityImgs: string[]
  onRemove: (idx: number) => void
}

const ClubImgs = ({ register, activityImgs, onRemove }: Props) => {
  return (
    <S.Wrapper>
      <S.Label>
        동아리 사진 <S.Optional>(선택)</S.Optional>
      </S.Label>

      <S.Description>
        사진을 등록하시면 더 명확하게 어떤 동아리인지 보여줄 수 있어요.
      </S.Description>

      <S.ImgList>
        <S.ImgInput htmlFor='imgs'>
          <SVG.Pictures />
          <S.ImgCount>
            <S.ImgCountHightlight>{activityImgs?.length}</S.ImgCountHightlight>{' '}
            / 4
          </S.ImgCount>
        </S.ImgInput>

        {activityImgs?.map((i, idx) => (
          <S.Img key={idx} src={i}>
            <S.RemoveImg onClick={() => onRemove(idx)}>
              <SVG.XMark width='10' height='10' />
            </S.RemoveImg>
          </S.Img>
        ))}
      </S.ImgList>

      <input
        type='file'
        accept='image/*'
        id='imgs'
        style={{ display: 'none' }}
        disabled={activityImgs.length >= 4}
        {...register}
      />
    </S.Wrapper>
  )
}

export default ClubImgs
