import { CircleProps } from '@/type/components/Statistics'
import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2rem;
  background: #212123;
  padding: 2rem;
  border-radius: 0.75rem;
`

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const Text = styled.div`
  color: rgba(255, 255, 255, 0.5);
`

export const DoughnutGraph = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  background: conic-gradient(#4164e1 0% 25%, #3d3c3c 25% 56%);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ApplyPersonCount = styled.div`
  background: #212123;
  width: 7rem;
  height: 7rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 500;
`

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 550px) {
    display: none;
  }
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Circle = styled.div<CircleProps>`
  width: 0.7rem;
  height: 0.7rem;
  background: ${({ color }) => color};
  border-radius: 100%;
`
