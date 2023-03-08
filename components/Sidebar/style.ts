import { NavActiveType } from '@/type/components/Header'
import styled from '@emotion/styled'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.64);
  display: flex;
  justify-content: end;
  align-items: center;
`

export const Content = styled.ul`
  height: 100%;
  width: 50vw;
  background: #1c1c1e;
  margin-top: 8.7rem;
  list-style: none;
  padding: 0;
`

export const Nav = styled.li<NavActiveType>`
  display: flex;

  a {
    width: 100%;
    padding: 1rem 0;
    padding-left: 2rem;
    color: ${({ active }) =>
      active === 'true' ? '#fff' : 'rgba(255, 255, 255, 0.5)'};
  }
`
