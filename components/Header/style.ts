import styled from '@emotion/styled'

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
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
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.h1`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  pointer-events: none;
`

export const NavWrapper = styled.nav`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  text-align: center;
  color: #727272;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
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

export const ProfileIMG = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`

export const SampleIMG = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #727272;
`
export const ClientName = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  color: #ffffff;
`
