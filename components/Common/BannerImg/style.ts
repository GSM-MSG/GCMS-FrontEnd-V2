import styled from '@emotion/styled'
import { ErrorProps } from '@/type/components/ClubCreationPage'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Label = styled.label<ErrorProps>`
  color: ${({ error }) => (error ? '#FF6666' : '#6d6d6d')};
  font-weight: bold;
`

export const BannerInput = styled.label<ErrorProps>`
  background: ${({ error }) => (error ? '#391F21' : '#2d2d2f')};
  ${({ error }) => error && 'border: 1px solid #FF6666;'}
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 0.75rem;
  aspect-ratio: 16 / 9;
  cursor: pointer;
`

export const Img = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  cursor: pointer;
  border-radius: 0.75rem;
  object-fit: cover;
  object-position: center;
`

export const BannerDescription = styled.div<ErrorProps>`
  color: ${({ error }) => (error ? '#FF6666' : '#696969')};
`
