import styled from '@emotion/styled'

export const Wrapper = styled.div`
  background: rgb(30, 30, 30);
  padding-top: 1rem;
  border-radius: 1rem;
  text-align: center;
`

export const Title = styled.h2`
  font-weight: 400;
  margin: 0;
`

export const Description = styled.p`
  padding: 0 1rem;
  white-space: pre-wrap;
  color: rgba(255, 255, 255, 0.6);
`

export const Buttons = styled.div`
  width: 100%;
  height: 3.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const LeftButton = styled.button`
  border: none;
  background: transparent;
  color: #5a5a5a;
  border-top: 1px solid #5a5a5a;
  border-right: 1px solid #5a5a5a;
`

export const RightButton = styled.button`
  border: none;
  background: transparent;
  color: #0a84ff;
  border-top: 1px solid #5a5a5a;
`
