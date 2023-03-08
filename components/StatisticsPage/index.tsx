import { ClubOptionType } from '@/type/components/ClubOptionNavigation'
import { ChangeEvent, useState } from 'react'
import ClubList from './ClubList'
import FileDownload from './FileDownload'
import Statistics from './Statistics'
import * as S from './style'
import * as SVG from '@/assets/svg'

const StatisticsPage = () => {
  const [type, setType] = useState<ClubOptionType>('')
  const [search, setSearch] = useState<string>('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value)

  return (
    <S.Wrapper>
      <S.Top>
        <Statistics />
      </S.Top>
      <S.InputWrapper>
        <SVG.SearchIcon />
        <input onChange={onChange} value={search} placeholder='검색' />
      </S.InputWrapper>

      <FileDownload type={type} onChange={setType} />

      <ClubList type={type} search={search} />
    </S.Wrapper>
  )
}

export default StatisticsPage
