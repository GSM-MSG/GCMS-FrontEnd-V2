import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: inline-flex;
  gap: 24px;
  font-weight: 400;
  font-size: 15px;
  padding: 8px 15px;
  border-radius: 17px;
  background: #313134;
  color: rgba(255, 255, 255, 0.4);
`

export const Tab = styled.label`
  transition: 0.5s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  :nth-of-type(2) {
    position: relative;
    ::before,
    ::after {
      content: '';
      width: 2px;
      height: 10px;
      position: absolute;
      right: -12px;
      background: #5a5a5a;
      border-radius: 1px;
    }

    ::after {
      left: -12px;
    }
  }
`

export const Input = styled.input`
  display: none;

  &:checked + label {
    font-weight: 700;
    color: #ffffff;
  }
`
