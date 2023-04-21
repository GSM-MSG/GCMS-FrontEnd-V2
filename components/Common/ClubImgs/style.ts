import { ErrorProps } from '@/type/components/ClubCreationModal'
import styled from '@emotion/styled'
import NoCopyImg from '../NoCopyImg'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const Label = styled.label<ErrorProps>`
  color: ${({ error }) => (error ? '#FF6666' : '#6d6d6d')};
  font-weight: bold;
`

export const Optional = styled.span`
  font-weight: normal;
  color: rgba(255, 255, 255, 0.5);
`

export const Description = styled.div`
  color: #696969;
  font-size: 0.9rem;
`

export const ImgList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

export const ImgInput = styled.label`
  background: #2d2d2f;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border-radius: 0.75rem;
  flex-direction: column;
  cursor: pointer;
`

export const ImgCount = styled.div`
  font-size: 0.9rem;
  color: #6f6f6f;
`

export const ImgCountHightlight = styled.span`
  color: #8be246;
`

interface ImgProps {
  src: string
}

export const Img = styled(NoCopyImg)<ImgProps>`
  width: 5rem;
  height: 5rem;
  border-radius: 0.75rem;
  position: relative;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const RemoveImg = styled.div`
  position: absolute;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 100%;
  background: #000;
  cursor: pointer;
  top: -0.5rem;
  right: -0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
