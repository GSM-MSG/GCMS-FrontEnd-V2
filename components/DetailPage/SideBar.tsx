import Link from 'next/link'
import * as S from './style'

export default function SideBar() {
  return (
    <S.SideBar>
      <h3>MSG(맛소금)</h3>
      <S.SideControl>
        <button>지원하기</button>
        <S.NotionInfo>
          <p>MSG(맛소금)이/가 더 궁금하다면?</p>
          <Link href='#'>
            노션 보러가기
            <i>
              <svg
                width='13'
                height='13'
                viewBox='0 0 13 13'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8.20946 3.73965C8.95472 3.54756 9.62855 4.23408 9.42258 4.97562L8.84877 7.0415C8.64273 7.78331 7.71087 8.02381 7.17158 7.47435L5.66916 5.94363C5.12987 5.39418 5.38771 4.46696 6.13324 4.2748L8.20946 3.73965Z'
                  fill='#8BE246'
                />
                <path
                  d='M4.06916 8.50636C4.35085 7.4607 5.42414 6.4319 6 6L7.5 7C6.73489 7.38255 6.26248 7.96024 6.08276 8.50911C5.99683 8.77154 5.77614 9 5.5 9H4.5C4.22386 9 3.99733 8.773 4.06916 8.50636Z'
                  fill='#8BE246'
                />
                <rect
                  x='0.5'
                  y='0.5'
                  width='12'
                  height='12'
                  rx='3.5'
                  stroke='#8BE246'
                />
              </svg>
            </i>
          </Link>
        </S.NotionInfo>
      </S.SideControl>
    </S.SideBar>
  )
}
