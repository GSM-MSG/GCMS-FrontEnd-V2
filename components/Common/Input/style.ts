import styled from '@emotion/styled'
import { ErrorProps } from '@/type/components/ClubCreationModal'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`

export const Label = styled.label<ErrorProps>`
  color: ${({ error }) => (error ? '#FF6666' : '#6d6d6d')};
  font-weight: bold;
`

export const DownLoadBtnBox = styled.div`
  position: absolute;
  right: 0;
  width: 9.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`

export const Optional = styled.span`
  font-weight: normal;
`

export const Description = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.35);
`

export const InputTag = styled.input<ErrorProps>`
  width: 100%;
  background: ${({ error }) => (error ? '#391F21' : 'transparent')};
  border: 1px solid ${({ error }) => (error ? '#FF6666' : '#464646')};
  padding: 0.9rem 1rem;
  border-radius: 0.75rem;
  color: #cacaca;
  outline: none;

  ::placeholder {
    color: ${({ error }) => (error ? '#FF6666' : '#858585')};
  }

  :focus {
    border: 1px solid ${({ error }) => (error ? 'FF0000' : '#cacaca')};
  }
`