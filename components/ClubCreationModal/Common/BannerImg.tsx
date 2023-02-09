import * as S from './BannerImg.style'
import * as SVG from '@/assets/svg'
import { UseFormRegisterReturn } from 'react-hook-form'

interface Props {
  register?: UseFormRegisterReturn
  error?: boolean
}

const BannerImg = ({ register, error }: Props) => {
  return (
    <S.Wrapper>
      <S.Label error={error}>{error && '*'} 배너 사진</S.Label>
      <S.BannerInput error={error} htmlFor='bannerImg'>
        <SVG.Pictures error={error} />
        <S.BannerDescription error={error}>
          배너 사진 업로드
        </S.BannerDescription>
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
