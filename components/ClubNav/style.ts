import styled from '@emotion/styled'
import Link from 'next/link'

export const Layer = styled.div`
  display: flex;
  flex-direction: column;
`

export const NavContainer = styled.div`
  display: flex;
  gap: 40px;
`

export const NavWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const IconBox = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #212431;
  border-radius: 10px;
`

export const NavTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 13px;
`
