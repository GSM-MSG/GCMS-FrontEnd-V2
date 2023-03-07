import Statistics from './Statistics'
import * as S from './style'
import * as SVG from '@/assets/svg'
import Icon from './Icon'

const StatisticsPage = () => {
  return (
    <S.Wrapper>
      <S.Top>
        <Statistics />
        <Icon icon={<SVG.Human />} text='동아별 출력' />
        <Icon icon={<SVG.ClassBadge />} text='엑셀 출력' />
      </S.Top>
    </S.Wrapper>
  )
}

export default StatisticsPage
