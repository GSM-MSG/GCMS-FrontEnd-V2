import styled from '@emotion/styled'
import { ClubType, ProfileImg } from '../style'

export const ClubItem = styled.div`
  width: 350px;
  height: 56px;
  background: #2d2d2d;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  @media (max-width: 740px) {
    width: 50%;
  }
  @media (max-width: 530px) {
    width: 100%;
  }

  a {
    width: 9px;
    display: flex;
    justify-content: center;
  }
`
export const ClubImg = styled(ProfileImg)`
  width: 40px;
  height: 40px;
`

export const ClubName = styled(ClubType)`
  width: 72%;
  font-size: 15px;

  @media (max-width: 740px) {
    font-size: 12px;
  }
  @media (max-width: 530px) {
    width: 62%;
  }
`

export const ClubManageBtn = styled.span`
  padding: 0.5rem;
  cursor: pointer;
`
