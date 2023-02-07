import styled from '@emotion/styled'
import { ErrorProps } from '@/type/components/ClubCreationModal'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Label = styled.label<ErrorProps>`
  color: ${({ error }) => (error ? '#FF6666' : '#6d6d6d')};
  font-weight: bold;
`

export const BannerInput = styled.label`
  background: #2d2d2f;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 0.75rem;
  aspect-ratio: 16 / 9;
  cursor: pointer;
`

export const BannerDescription = styled.div`
  color: #696969;
`
