import styled from '@emotion/styled'

export const Layer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > * {
    margin: 0;
  }

  h5 {
    color: #888;
  }
`

export const InputBox = styled.div`
  width: 100%;
  height: 45px;
  padding: 0 20px;
  border-radius: 10px;
  border: 1px solid #888;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Input = styled.input`
  width: 90%;
  background: transparent;
  color: #fff;
  border: none;
  outline: none;
`
