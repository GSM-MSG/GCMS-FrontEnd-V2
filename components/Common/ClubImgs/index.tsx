import * as S from './style'
import * as SVG from '@/assets/svg'
import { UseFormRegisterReturn } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { removeActivityImg } from '@/store/clubCreation'
import NoCopyBox from '../NoCopyBox'

interface Props {
  register: UseFormRegisterReturn
  imgs: string[]
}

const ClubImgs = ({ register, imgs }: Props) => {
  const dispatch = useDispatch()

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
            <S.ImgCountHightlight>{imgs?.length}</S.ImgCountHightlight> / 4
          </S.ImgCount>
        </S.ImgInput>

        {imgs?.map((i, idx) => (
          <NoCopyBox key={idx}>
            <S.Img src={i}>
              <S.RemoveImg onClick={() => dispatch(removeActivityImg(idx))}>
                <SVG.XMark width='10' height='10' />
              </S.RemoveImg>
            </S.Img>
          </NoCopyBox>
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
