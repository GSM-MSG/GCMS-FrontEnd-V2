import * as S from './style'

const Notice = () => {
  return (
    <S.Wrapper>
      <S.Label>공고</S.Label>
      <S.Content>
        <S.Left src='https://bit.ly/3EsznxZ' />

        <S.Right>
          <S.Title>더모먼트</S.Title>
          <S.Description>
            더모먼트는 정말 정말 정말 안녕하세요. 저희는
            광주소프트웨어마이스터고에서 2021년 12월 7일부터 활동하고 있는
            팀입니다. 저희...
          </S.Description>
          <S.UtilContent>
            <S.UtilSection>
              <S.Title>동아리 모집</S.Title>

              <S.SwitchInput id='switch' type='checkbox' />
              <S.Switch htmlFor='switch'>
                <span>off</span>
                <S.SwitchBtn />
                <span>on</span>
              </S.Switch>
            </S.UtilSection>

            <S.UtilSection>
              <S.Title>동아리 삭제</S.Title>
              <S.DeleteBtn>삭제</S.DeleteBtn>
            </S.UtilSection>
          </S.UtilContent>
        </S.Right>
      </S.Content>
    </S.Wrapper>
  )
}

export default Notice
