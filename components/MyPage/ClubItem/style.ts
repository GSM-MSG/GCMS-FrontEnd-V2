import styled from '@emotion/styled'
import Link from 'next/link'
import { ClubType, ProfileImg } from '../style'

export const ClubItem = styled.div`
  width: 350px;
  height: 56px;
  background: #2d2d2d;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 16px;
  cursor: pointer;

  @media (max-width: 740px) {
    width: 50%;
  }
  @media (max-width: 530px) {
    width: 100%;
  }

  a {
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

export const ClubManageBtn = styled(Link)`
  padding: 0.5rem;
`
