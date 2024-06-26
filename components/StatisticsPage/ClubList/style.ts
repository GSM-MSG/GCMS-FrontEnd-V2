import styled from '@emotion/styled'
import Link from 'next/link'

export const Wrapper = styled.div``

export const TitleSection = styled.div`
  width: 100%;
  padding: 0 1rem 1rem 1rem;
  display: grid;
  grid-template-columns: 1fr 1.5fr 2fr 5fr;
`

export const Title = styled.span`
  color: rgba(255, 255, 255, 0.5);
  white-space: nowrap;

  &:nth-of-type(1) {
    width: 40px;
    margin-right: 8px;
  }

  &:nth-of-type(3) {
    margin-right: 16px;
  }
`

export const ClubSection = styled(Link)`
  background: #282829;
  padding: 1rem;
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1.5fr 2fr 5fr;
  border-radius: 1rem;

  :nth-of-type(n + 2) {
    margin-top: 1rem;
  }
`

export const ClubBanner = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-right: 8px;
`

export const ClubKind = styled.div`
  color: rgba(255, 255, 255, 0.5);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const ClubTitle = styled.h4`
  margin: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-right: 1rem;
`

export const ClubContent = styled.p`
  width: 100%;
  margin: 0;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 200;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`
