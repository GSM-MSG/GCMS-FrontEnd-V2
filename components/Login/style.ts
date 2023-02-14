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
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 15px;
  pointer-events: none;
  @media (max-width: 450px) {
    margin: 0 auto;
    width: 80%;
    font-size: 0px;
  }
`

export const Auth = styled.div`
  margin: 0 20px;
  aspect-ratio: auto 1/0.149;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 17px;
  color: #2e80cc;
  cursor: pointer;

  @media (max-width: 450px) {
    margin: 0 auto;
    font-size: 0px;
    width: 20%;
    aspect-ratio: auto 1/1;
    border-radius: 50px;
    gap: 0;
  }
`

export const ContentInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 1vw;
  margin-top: 10%;
  text-align: center;
  color: #606062;
  font-weight: 400;
  font-size: 13px;
  @media (max-width: 450px) {
    margin-top: 15%;
    font-size: 11px;
  }
`
