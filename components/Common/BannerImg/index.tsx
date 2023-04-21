import * as SVG from '@/assets/svg'
import { UseFormRegisterReturn } from 'react-hook-form'
import * as S from './style'

interface Props {
  register: UseFormRegisterReturn
  error?: boolean
  bannerImg?: string
}

const BannerImg = ({ register, error, bannerImg }: Props) => {
  return (
    <S.Wrapper>
      <S.Label error={error}>{error && '*'} 배너 사진</S.Label>
      {bannerImg ? (
        <label htmlFor='bannerImg'>
          <S.Img src={bannerImg} alt='Banner image' fill />
        </label>
      ) : (
        <S.BannerInput error={error} htmlFor='bannerImg'>
          <SVG.Pictures error={error} />
          <S.BannerDescription error={error}>
            배너 사진 업로드
          </S.BannerDescription>
        </S.BannerInput>
      )}

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
