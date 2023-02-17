import styled from '@emotion/styled'

export const Positioner = styled.div`
  position: absolute;
  top: 0;
  left: 710px;
  min-width: 160px;

  @media (max-width: 1100px) {
    top: 37px;
    left: 540px;
  }

  @media (max-width: 740px) {
    left: calc(100vw - 24.3px * 7.4);
  }

  @media (max-width: 530px) {
    position: relative;
    width: 100%;
    top: -54px;
    left: 0;
  }
`

export const Layer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  gap: 1px;
  background: #444;
`

export const Btn = styled.input`
  min-width: 160px;
  height: 36px;
  background: #282828;
  color: #4164e1;
  border: none;
  font-size: 14px;
  cursor: pointer;

  &:nth-of-type(1) {
    display: none;

    + label {
      min-width: 100%;
      height: 36px;
      background: #282828;
      color: #4164e1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      cursor: pointer;
    }
  }
`
