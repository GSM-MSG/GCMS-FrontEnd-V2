import * as S from './style'
import * as SVG from '@/assets/svg'
import { UseFormRegisterReturn } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { removeActivityFile } from '@/store/imgs'

interface Props {
  register: UseFormRegisterReturn
}

const ClubImgs = ({ register }: Props) => {
  const dispatch = useDispatch()
  const { imgs } = useSelector((store: RootState) => ({ imgs: store.imgs }))

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
            <S.ImgCountHightlight>
              {imgs.activityImgs.length}
            </S.ImgCountHightlight>{' '}
            / 4
          </S.ImgCount>
        </S.ImgInput>

        {imgs.activityImgs.map((i, idx) => (
          <S.Img key={idx} src={URL.createObjectURL(i)}>
            <S.RemoveImg onClick={() => dispatch(removeActivityFile(idx))}>
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
        {...register}
      />
    </S.Wrapper>
  )
}

export default ClubImgs
