import Statistics from './Statistics'
import * as S from './style'
import * as SVG from '@/assets/svg'
import Icon from './Icon'

const StatisticsPage = () => {
  return (
    <S.Wrapper>
      <S.Top>
        <Statistics />
        <Icon icon={<SVG.PrinterIcon />} text='엑셀 출력' />
      </S.Top>
    </S.Wrapper>
  )
}

export default StatisticsPage
