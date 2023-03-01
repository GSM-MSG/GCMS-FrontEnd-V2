import styled from '@emotion/styled'

export const Layout = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 700px;
  @media (max-width: 715px) {
    width: 100%;
    padding: 0 15px;
  }
`

export const Title = styled.h1`
  margin-top: 40px;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
`

export const MemberWrapper = styled.div`
  margin-top: 17px;
  width: 100%;
  display: flex;
  gap: 16px;
  @media (max-width: 740px) {
    flex-direction: column;
  }
`
