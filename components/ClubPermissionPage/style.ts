import styled from '@emotion/styled'

export const Positioner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

export const Layer = styled.div`
  width: 700px;
  height: 100%;

  @media (max-width: 740px) {
    width: 100%;
    padding: 0 20px;
  }
`
