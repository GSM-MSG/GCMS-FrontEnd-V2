import * as S from './ClubImgs.style'
import * as SVG from '@/assets/svg'

const ClubImgs = () => {
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
            <S.ImgCountHightlight>4</S.ImgCountHightlight> / 4
          </S.ImgCount>
        </S.ImgInput>

        <S.Img src='https://bit.ly/3I4iZ8V'>
          <S.RemoveImg>
            <SVG.XMark width='10' height='10' />
          </S.RemoveImg>
        </S.Img>
      </S.ImgList>

      <input
        type='file'
        accept='image/*'
        id='imgs'
        style={{ display: 'none' }}
      />
    </S.Wrapper>
  )
}

export default ClubImgs
