import { SearchIcon } from '@/assets/svg'
import * as S from './style'

export default function SearchInput() {
  return (
    <S.Layer>
      <S.InputBox>
        <SearchIcon />
        <S.Input type='search' placeholder='검색' />
      </S.InputBox>
    </S.Layer>
  )
}
