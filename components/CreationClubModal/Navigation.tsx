import * as S from './Navigation.style'

interface Props {
  page: number
}

const Navigation = ({ page }: Props) => {
  return (
    <S.Wrapper>
      {[...Array(5)].map((_, i) => (
        <S.Tab select={page === i + 1} key={i}>
          {i + 1}
        </S.Tab>
      ))}
    </S.Wrapper>
  )
}

export default Navigation
