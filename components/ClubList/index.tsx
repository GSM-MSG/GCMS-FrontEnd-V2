import ClubItem from './ClubItem'
import * as S from './style'

export default function ClubList() {
  return (
    <S.ClubWrapper>
      <S.ClubOptionLayer>
        <input type='radio' name='club' id='major' value='major' />
        <label htmlFor='major'>전공</label>
        <input type='radio' name='club' id='freedom' value='freedom' />
        <label htmlFor='freedom'>자율</label>
        <input type='radio' name='club' id='editorial' value='editorial' />
        <label htmlFor='editorial'>사설</label>
      </S.ClubOptionLayer>
      <S.ClubList>
        <ClubItem />
        <ClubItem />
        <ClubItem />
        <ClubItem />
        <ClubItem />
        <ClubItem />
        <ClubItem />
      </S.ClubList>
    </S.ClubWrapper>
  )
}
