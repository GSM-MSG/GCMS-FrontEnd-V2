import * as SVG from '@/assets/svg'
import { UseFormRegisterReturn } from 'react-hook-form'
import NoCopyBox from '../NoCopyBox'
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
          <NoCopyBox>
            <S.Img src={bannerImg} alt='Banner image' />
          </NoCopyBox>
        </label>
      ) : (
        <S.BannerInput error={error} htmlFor='bannerImg'>
          <SVG.Pictures error={error} />
          <S.BannerDescription error={error}>
            <span>배너 사진 업로드</span>
            <span>권장 최소 사이즈: 1440*1080</span>
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
