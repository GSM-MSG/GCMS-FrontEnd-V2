import * as S from './style'

const Statistics = () => {
  return (
    <S.Wrapper>
      <S.LeftContent>
        <S.Text>전체 210명</S.Text>
        <S.DoughnutGraph>
          <S.ApplyPersonCount>140명 신청함</S.ApplyPersonCount>
        </S.DoughnutGraph>
      </S.LeftContent>

      <S.RightContent>
        <S.Text />

        <S.Option>
          <S.Circle color='#4164E1' />
          <S.Text>신청자</S.Text>
        </S.Option>

        <S.Option>
          <S.Circle color='#3D3C3C' />
          <S.Text>비신청자</S.Text>
        </S.Option>
      </S.RightContent>
    </S.Wrapper>
  )
}

export default Statistics
