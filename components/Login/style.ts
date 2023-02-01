import styled from '@emotion/styled'

export const Wrapper = styled.div`
  z-index: 100;
  width: 375px;
  height: 570px;
  background: #1c1c1e;
  border-radius: 10px;
  @media (max-width: 600px) {
    width: 62.5%;
    height: 95vw;
  }
`

export const CancelBtn = styled.div`
  margin: 14px 10px;
  margin-bottom: 0;
  cursor: pointer;
`

export const LogoWarppaer = styled.div`
  width: 100%;
  aspect-ratio: auto 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  pointer-events: none;
`

export const Auth = styled.div`
  margin: 0 20px;
  aspect-ratio: auto 1/0.149;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  color: #2e80cc;
  cursor: pointer;
`

export const ContentInfo = styled.div`
  margin-top: 10%;
  text-align: center;
  color: #606062;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
`
