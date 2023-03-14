import styled from '@emotion/styled'

export const Positioner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
`

export const Layer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 43.75rem;
  gap: 12px;

  small {
    color: rgba(255, 255, 255, 0.31);
  }

  h3 {
    margin: 0;
  }
`

export const AllSelectBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`

export const AllSelectBtn = styled.button`
  color: #4164e1;
  background: 0;
  border: none;
`

export const InputBox = styled.div`
  position: relative;
  > svg {
    position: absolute;
    left: 20px;
    bottom: 16px;
  }
  input {
    padding: 0.9rem 3rem;
  }
`
