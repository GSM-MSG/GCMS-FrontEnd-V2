import styled from '@emotion/styled'

export const Btn = styled.div`
  position: absolute;
  top: 800px;
  right: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #4164e1;
  cursor: pointer;

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 30%;
    background: #ffffff;
    transform: translate(-50%, -50%);
  }

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30%;
    height: 2px;
    background: #ffffff;
    transform: translate(-50%, -50%);
  }
`
