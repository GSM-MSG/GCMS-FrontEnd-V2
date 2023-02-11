import * as SVG from '@/assets/svg'
import * as S from './style'

export default function ClubNav() {
  return (
    <S.Layer>
      <h3>MSG</h3>
      <S.NavContainer>
        <S.NavWrapper href=''>
          <S.IconBox>
            <SVG.MemoPadIcon />
          </S.IconBox>
          <S.NavTitle>
            <small>신청자 목록</small>
          </S.NavTitle>
        </S.NavWrapper>
        <S.NavWrapper href=''>
          <S.IconBox>
            <SVG.PersonIcon />
          </S.IconBox>
          <S.NavTitle>
            <small>동아리 멤버</small>
          </S.NavTitle>
        </S.NavWrapper>
        <S.NavWrapper href=''>
          <S.IconBox>
            <SVG.School />
          </S.IconBox>
          <S.NavTitle>
            <small>동아리</small>
          </S.NavTitle>
        </S.NavWrapper>
      </S.NavContainer>
    </S.Layer>
  )
}
