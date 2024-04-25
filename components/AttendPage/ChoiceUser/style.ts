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

export const AttendanceBtn = styled.button`
  width: 118px;
  height: 48px;
  background: var(--Primary, #4164E1);
  border: none;
  border-radius: 10px;
  color: #fff;
  transition: 0.2s;

  display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    color: #FFF;

text-align: center;
font-family: Pretendard;
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: 16px; /* 106.667% */
text-transform: uppercase;
`
export const SickBtn = styled(AttendanceBtn)`
background: #373737;

`
export const TradinessBtn = styled(AttendanceBtn)`
background: #FFD466;


`

export const AbsentBtn = styled(AttendanceBtn)`
background: var(--error, #F66);
color:"rgba(193, 193, 193, 1)";

`



//모달

export const Wrapper = styled.div`
  background: rgb(30, 30, 30);
  padding-top: 1rem;
  border-radius: 1rem;
  text-align: center;
  min-width: 20rem;
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
