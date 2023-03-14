import { IsAdmin, NavActiveType } from '@/type/components/Header'
import styled from '@emotion/styled'
import Link from 'next/link'

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 200;
  width: 100%;
  height: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1c1c1e;
  border-bottom: 1px solid #2d2d2d;
`

export const Wrapper = styled.div`
  width: 710px;
  height: 100%;
  display: flex;
  padding: 0.625rem 1.5rem;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`

export const Navs = styled.div<IsAdmin>`
  display: flex;
  align-items: center;
  justify-content: ${({ isAdmin }) => (isAdmin ? 'center' : 'end')};
  flex: 1;

  @media (max-width: 500px) {
    & > a:nth-child(n + ${({ isAdmin }) => (isAdmin ? 1 : 2)}) {
      display: none;
    }
  }
`

export const Nav = styled(Link)<NavActiveType>`
  padding: 0.5rem 1rem;

  font-size: 0.8rem;
  color: ${({ active }) =>
    active === 'true' ? '#fff' : 'rgba(255, 255, 255, 0.5)'};
`

export const UserInfo = styled.nav`
  font-weight: 500;
  font-size: 13px;
  text-align: center;
  color: #727272;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const LoginButton = styled.button`
  border: none;
  background: transparent;
  color: #727272;
  font-size: 0.9rem;
  padding: 0.3rem;
`

export const SidebarIcon = styled.div`
  display: flex;
  cursor: pointer;

  @media (min-width: 500px) {
    & > svg {
      display: none;
    }
  }
`

export const ProfileWrapper = styled.div`
  width: 108px;
  height: 40px;
  border-radius: 41px;
  background: #2d2d2f;
  padding: 5px;
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`

export const ProfileIMG = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  img {
    object-fit: cover;
    object-position: center;
  }
`

export const ClientName = styled.p`
  font-weight: 500;
  font-size: 13px;
  color: #ffffff;
`
