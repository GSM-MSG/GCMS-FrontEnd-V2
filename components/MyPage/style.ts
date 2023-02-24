import styled from '@emotion/styled'

export const Positionier = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
`

export const Layer = styled.div`
  position: relative;
  width: 700px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  small {
    color: rgba(255, 255, 255, 0.31);
  }

  @media (max-width: 740px) {
    width: 100%;
    align-items: center;
    padding: 0 20px;
  }
  @media (max-width: 400px) {
    > div {
      width: 100%;
    }
  }
`

export const ProfileBox = styled.div`
  width: 100%;
  background: #2d2d2d;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  padding: 20px 16px;
`

export const ProfileContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 6px 0;
  }
`

export const ProfileImg = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background: #434343;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const SettingButton = styled.div``

export const ContentBox = styled.div`
  display: flex;
  width: 700px;
  gap: 10px;

  @media (max-width: 740px) {
    width: 100%;
  }
`

export const ClubBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  h2 {
    margin: 0;
  }
`

export const ClubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ClubType = styled.h4`
  color: rgba(255, 255, 255, 0.31);
  margin: 0;
`
