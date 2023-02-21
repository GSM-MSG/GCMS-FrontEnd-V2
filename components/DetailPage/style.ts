import { ApplyStateType } from '@/type/components/ClubDetailSide'
import styled from '@emotion/styled'
import Image from 'next/image'

export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 100px;
  align-items: center;
`

export const Wrapper = styled.div`
  position: relative;
  width: 700px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 750px) {
    width: 100%;
    flex-direction: column;
    padding: 15px;
  }
`
export const Section = styled.section`
  width: 510px;
  margin-top: 42px;
  @media (max-width: 750px) {
    width: 100%;
  }
`

export const ClubBanner = styled.div`
  width: 100%;
  height: 332px;
  background: #373737;
  border-radius: 10px;
  img {
    object-fit: contain;
  }
`

export const ClubInfo = styled.div`
  width: 100%;
  margin-top: 14px;
`

export const ClubNaem = styled.div`
  width: 100%;

  > * {
    margin: 0;
  }
  svg {
    margin-right: 4px;
    cursor: pointer;
  }
  p {
    font-weight: 600;
    font-size: 13px;
    color: #4164e1;
  }
  h3 {
    margin-top: 6px;
    font-weight: 700;
    font-size: 20px;
  }
`

export const Contact = styled.div`
  width: 100%;
  height: 87px;
  > div {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 7px;
  }
  hr {
    margin: 0;
    border: 1px solid #313131;
    border-radius: 1px;
  }
`
export const ProfileImg = styled(Image)`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  background: #c4c4c4;
`

export const ContactInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > * {
    margin: 0;
  }
  p {
    font-weight: 600;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.4);
  }
  span {
    font-weight: 600;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
  }
`

export const Description = styled.div`
  h3,
  p {
    margin: 0;
  }
  h3 {
    font-weight: 700;
    font-size: 15px;
    margin-top: 29px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    color: #848484;
    margin-top: 10px;
  }
`

export const ClubActivity = styled.div`
  margin-top: 60px;
  h3 {
    margin: 0;
    font-weight: 700;
    font-size: 15px;
  }
  div {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    @media (max-width: 750px) {
      justify-content: space-evenly;
    }
  }
`
export const ActivityImg = styled.div`
  width: 250px;
  aspect-ratio: 1/1;
  object-fit: contain;
  overflow: hidden;
  background: linear-gradient(0deg, #373737, #373737), url(image.png);
  border-radius: 10px;
  @media (max-width: 750px) {
    width: 42vw;
  }
  @media (max-width: 370px) {
    width: 90%;
  }
`

export const ClubMember = styled.div`
  margin-top: 60px;
  > h3 {
    margin: 0;
    font-weight: 700;
    font-size: 15px;
  }
  > div {
    width: 100%;
    margin-top: 20px;
    display: flex;
    gap: 26px;
  }
  > span {
    margin-top: 20px;
    width: 100%;
    display: flex;
    gap: 9px;
    flex-wrap: nowrap;
    overflow-y: hidden;
    overflow-x: scroll;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  @media (max-width: 750px) {
    width: 90%;
    margin: 0 auto;
    margin-top: 60px;
  }
`

export const HeadProfile = styled.div`
  width: 105px;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 6px;
`

export const HeadInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  > * {
    margin: 0;
  }
  p {
    font-weight: 500;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.4);
  }
  span {
    font-weight: 500;
    font-size: 13px;
  }
`

export const MemberProfile = styled(Image)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  background: #c4c4c4;
`

export const SampelIMG = styled.div`
  width: 48px;
  background: #c4c4c4;
  height: 48px;
  border-radius: 50%;
`

export const Footer = styled.footer`
  width: 100%;
  height: 214px;
  background: #242425;
`

export const SideBar = styled.div`
  position: absolute;
  right: 0;
  top: 42px;
  width: 174px;
  height: 224px;
  background: #242425;
  border-radius: 10px;
  padding: 12px 14px 34px;
  > h3 {
    font-weight: 700;
    font-size: 13px;
    color: #c7c7c7;
    margin: 0;
  }
  @media (max-width: 750px) {
    position: relative;
    width: 80%;
    margin: 0 auto;
    height: 140px;
  }
`
export const SideControl = styled.div`
  padding-top: 12px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const SideBtn = styled.button<ApplyStateType>`
  width: 100%;
  height: 36px;
  border: none;
  font-weight: 600;
  font-size: 13px;
  color: #ffffff;
  background: #4164e1;
  ${({ isOpened, isApplied }) =>
    isOpened
      ? isApplied &&
        'color: #FF6666;background: #391F21;border: 1px solid #FF6666;'
      : 'color: #C1C1C1;background: #373737;'}
  border-radius: 7px;
`

export const NotionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  > * {
    margin: 0;
  }
  > p {
    width: 70%;
    font-weight: 400;
    font-size: 13px;
    color: #858585;
  }
  > a {
    font-weight: 500;
    font-size: 13px;
    color: #8be246;
    > i {
      position: relative;
      top: 2px;
      left: 3px;
    }
  }
  @media (max-width: 750px) {
    flex-direction: row;
    a {
      white-space: nowrap;
    }
  }
`

export const NextImg = styled(Image)`
  width: 100% !important;
  height: 100% !important;
`
