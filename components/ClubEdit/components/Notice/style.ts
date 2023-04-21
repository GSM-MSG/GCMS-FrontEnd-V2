import NoCopyImg from '@/components/Common/NoCopyImg'
import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-weight: 600;
`

export const Label = styled.label`
  font-size: 1.2rem;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 785px) {
    grid-template-columns: auto;
  }
`

export const LeftBox = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
`

export const Left = styled(NoCopyImg)`
  border-radius: 0.75rem;
  object-fit: cover;
  object-position: center;
`

export const Right = styled.div`
  width: 100%;
  min-height: 10rem;
  border-radius: 0.75rem;
  background: #212124;
  color: #fff;
  padding: 1rem;
  font-weight: 300;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h4`
  margin: 0;
`

export const Description = styled.p`
  opacity: 0.51;
  margin: 0.5rem 0;
  word-break: break-all;
`

export const UtilContent = styled.div`
  height: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: start;
  gap: 3rem;
`

export const UtilSection = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
`

export const SwitchInput = styled.input`
  display: none;

  :checked ~ label span:nth-of-type(2) {
    right: auto;
    right: calc(100% - 2rem);
    background: #4164e1;
  }
`

export const Switch = styled.label`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #313032;
  color: #4164e1;
  border-radius: 2rem;
  cursor: pointer;
  position: relative;

  span:nth-of-type(1) {
    color: #939393;
  }
`

export const SwitchBtn = styled.span`
  position: absolute;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background: #545454;
  top: 0;
  right: 0;
  transition: right 0.2s ease-in;
`

export const DeleteBtn = styled.button`
  height: 1.5rem;
  padding: 0;
  color: #4164e1;
  border: none;
  background: transparent;
`
