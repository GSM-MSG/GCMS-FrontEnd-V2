import styled from '@emotion/styled'
import Link from 'next/link'

export const Positioner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const Layer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 0;
  height: 61vh;

  @media (max-width: 500px) and (max-height: 900px) {
    height: 70vh;
  }
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 19em;
  text-align: center;
  color: #a5a5a5;
`

export const HomeBtn = styled(Link)`
  color: #4164e1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  span {
    display: block;
    width: 12px;
    height: 12px;
    border-bottom: 2px solid #4164e1;
    border-left: 2px solid #4164e1;
    transform: rotate(45deg);
  }
`
