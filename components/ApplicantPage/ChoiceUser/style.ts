import styled from '@emotion/styled'

export const Positioner = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 140px;
  background: #161616;
  display: flex;
  align-items: center;
`

export const Layer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
`

export const RejectBtn = styled.button`
  width: 165px;
  height: 48px;
  background: #373737;
  border: none;
  border-radius: 10px;
  color: #fff;
  transition: 0.2s;
`

export const AcceptBtn = styled(RejectBtn)`
  background: #4164e1;
`
