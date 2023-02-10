import styled from '@emotion/styled'
import { ErrorProps } from '@/type/components/ClubCreationModal'
export { Label } from './Input.style'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const TextareaInput = styled.textarea<ErrorProps>`
  width: 100%;
  height: 13rem;
  background: ${({ error }) => (error ? '#391F21' : 'transparent')};
  border: 0.1rem solid ${({ error }) => (error ? '#FF6666' : '#464646')};
  border-radius: 0.75rem;
  padding: 1rem;
  outline: none;
  font-size: 1rem;
  color: #fff;
  resize: none;

  ::placeholder {
    color: ${({ error }) => (error ? '#FF6666' : '#858585')};
  }
`

export const MaxLength = styled.div<ErrorProps>`
  width: 100%;
  display: flex;
  justify-content: end;
  color: ${({ error }) => (error ? '#FF6666' : 'rgba(255, 255, 255, 0.4)')};
  font-size: 0.9rem;
`
