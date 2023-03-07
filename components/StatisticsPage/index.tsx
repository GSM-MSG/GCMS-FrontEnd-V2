import { ClubOptionType } from '@/type/components/ClubOptionNavigation'
import { useState } from 'react'
import Input from '../Common/Input'
import FileDownload from './FileDownload'
import Statistics from './Statistics'
import * as S from './style'

const StatisticsPage = () => {
  const [type, setType] = useState<ClubOptionType>('')

  return (
    <S.Wrapper>
      <S.Top>
        <Statistics />
      </S.Top>
      <Input placeholder='검색' />

      <FileDownload type={type} onChange={setType} />
    </S.Wrapper>
  )
}

export default StatisticsPage
