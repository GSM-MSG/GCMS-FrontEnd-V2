import Image from 'next/image'
import * as S from './style'

export default function NotFoundPage() {
  return (
    <S.Positioner>
      <S.Layer>
        <S.TextBox>
          <Image src='/png/404.png' alt='404' width='237' height='94' />
          <p>
            요청하신 페이지 주소가 잘못되었거나 변경 혹은 삭제되었을수도 있어요
          </p>
        </S.TextBox>
        <S.HomeBtn href='/'>
          <span />
          홈으로
        </S.HomeBtn>
      </S.Layer>
    </S.Positioner>
  )
}
