import styled from '@emotion/styled'

export const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  gap: 1rem;
`

interface TabProps {
  select: boolean
}

export const Tab = styled.div<TabProps>`
  color: #313131;
  background: #696969;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;

  ${({ select }) => (select ? `color: #000000;background: #8BE246;` : '')}
`
