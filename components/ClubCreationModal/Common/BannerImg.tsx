import * as S from './BannerImg.style'
import * as SVG from '@/assets/svg'
import { UseFormRegisterReturn } from 'react-hook-form'

interface Props {
  register?: UseFormRegisterReturn
}

const BannerImg = ({ register }: Props) => {
  return (
    <S.Wrapper>
      <S.Label>배너 사진</S.Label>
      <S.BannerInput htmlFor='bannerImg'>
        <SVG.Pictures />
        <S.BannerDescription>배너 사진 업로드</S.BannerDescription>
      </S.BannerInput>

      <input
        id='bannerImg'
        type='file'
        accept='image/*'
        style={{ display: 'none' }}
        {...register}
      />
    </S.Wrapper>
  )
}

export default BannerImg
