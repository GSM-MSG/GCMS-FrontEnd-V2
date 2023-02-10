import styled from '@emotion/styled'
export { Label } from './Input.style'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const TextareaInput = styled.textarea`
  width: 100%;
  height: 13rem;
  background: transparent;
  border: 0.1rem solid #464646;
  border-radius: 0.75rem;
  padding: 1rem;
  outline: none;
  font-size: 1rem;
  color: #fff;
  resize: none;
`

export const MaxLength = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.9rem;
`
