import Statistics from './Statistics'
import * as S from './style'
import * as SVG from '@/assets/svg'

const StatisticsPage = () => {
  return (
    <S.Wrapper>
      <S.Top>
        <Statistics />
        <S.ExcelIcon>
          <SVG.PrinterIcon />
          엑셀 출력
        </S.ExcelIcon>
      </S.Top>
    </S.Wrapper>
  )
}

export default StatisticsPage
