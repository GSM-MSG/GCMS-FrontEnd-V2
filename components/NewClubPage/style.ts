import styled from '@emotion/styled'

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 700px;
  @media (max-width: 715px) {
    width: 100%;
    padding: 0 15px;
  }
`
export const Title = styled.div`
  width: 100%;
  margin-top: 42px;
  h1 {
    font-weight: 600;
    font-size: 17px;
    color: #f8f8f8;
    margin-top: 0;
  }
  p {
    font-weight: 500;
    font-size: 13px;
    color: #7a7a7a;
  }
`
