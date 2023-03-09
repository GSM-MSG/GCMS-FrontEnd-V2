import styled from '@emotion/styled'

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h2`
  font-weight: 600;
  text-align: center;
  word-break: keep-all;
`

export const Description = styled.p`
  margin: 0;
  width: 100%;
  max-width: 18rem;
  word-break: keep-all;
  color: rgba(255, 255, 255, 0.35);
  text-align: center;
`
