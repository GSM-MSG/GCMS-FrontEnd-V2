import styled from '@emotion/styled'

export const Wrapper = styled.input`
  display: none;

  :checked ~ label span:nth-of-type(2) {
    right: auto;
    right: calc(100% / 2);
    background: #4164e1;
  }
`

export const Switch = styled.label`
  width: 3rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #313032;
  color: #4164e1;
  border-radius: 2rem;
  cursor: pointer;
  position: relative;
  font-size: 0.8rem;

  span:nth-of-child(1) {
    color: #939393;
  }
`

export const SwitchBtn = styled.span`
  position: absolute;
  width: calc(100% / 2);
  height: 100%;
  border-radius: 100%;
  background: #545454;
  top: 0;
  right: 0;
  transition: right 0.2s ease-in;
`
