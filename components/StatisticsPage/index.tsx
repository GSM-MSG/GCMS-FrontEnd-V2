import { ClubOptionType } from '@/type/components/ClubOptionNavigation'
import { ChangeEvent, useState } from 'react'
import ClubList from './ClubList'
import FileDownload from './FileDownload'
import Statistics from './Statistics'
import * as S from './style'
import * as SVG from '@/assets/svg'
import { useRouter } from 'next/router'

const StatisticsPage = () => {
  const router = useRouter()
  const type = router.query.type?.toString() as ClubOptionType
  const [search, setSearch] = useState<string>('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value)

  return (
    <S.Wrapper>
      <S.Top>
        <Statistics type={type} />
      </S.Top>
      <S.InputWrapper>
        <SVG.SearchIcon />
        <input onChange={onChange} value={search} placeholder='검색' />
      </S.InputWrapper>

      <FileDownload type={type} />

      <ClubList type={type} search={search} />
    </S.Wrapper>
  )
}

export default StatisticsPage
