import styled from '@emotion/styled'

export const Positionier = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 80px;
`

export const Layer = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  h4,
  small {
    color: rgba(255, 255, 255, 0.31);
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

export const ClubBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  h2,
  h4 {
    margin: 0;
  }
`

export const ClubContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ClubWrapper = styled.div`
  width: 100%;
  height: 56px;
  background: #2d2d2d;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  h4 {
    width: 72%;
    font-size: 15px;
  }
`

export const ClubImg = styled(ProfileImg)`
  width: 40px;
  height: 40px;
`
