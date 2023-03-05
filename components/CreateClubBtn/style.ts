import styled from '@emotion/styled'

export const Wrapper = styled.div`
  position: fixed;
  width: 700px;
  height: 0;
  bottom: 130px;
  @media (max-width: 715px) {
    right: 15px;
    width: auto;
    bottom: 80px;
    height: auto;
  }
`

export const Btn = styled.div`
  position: relative;
  top: 0;
  left: 650px;
  bottom: 80px;
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

  @media (max-width: 715px) {
    top: 0;
    left: 0;
  }
`
