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
  align-items: start;
  margin-top: 42px;
  @media (max-width: 750px) {
    width: 100%;
    flex-direction: column;
    padding: 15px;
  }
`
export const Section = styled.section`
  width: 510px;
  @media (max-width: 750px) {
    width: 100%;
  }
`

export const ClubBanner = styled.div`
  position: relative;
  width: 100%;
  height: 332px;
  background: #373737;
  border-radius: 10px;
  overflow: hidden;
  img {
    object-fit: cover;
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
  position: relative;
  aspect-ratio: 1/1;
  overflow: hidden;
  background: linear-gradient(0deg, #373737, #373737), url(image.png);
  border-radius: 10px;
  img {
    object-fit: cover;
  }
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
    margin-top: 42px;
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
    width: 100%;
    margin-top: 60px;
  }
`

export const HeadProfile = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: 6px;
`

export const HeadInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
export const MemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 13px;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.5);
  }
`

export const MemberProfile = styled(Image)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  background: #c4c4c4;
  flex: none;
`

export const SampelIMG = styled.div`
  width: 48px;
  background: #c4c4c4;
  height: 48px;
  border-radius: 50%;
  flex: none;
`

export const Footer = styled.footer`
  width: 100%;
  height: 214px;
  background: #242425;
`

export const SideBar = styled.div`
  position: sticky;
  right: 0;
  top: 72px;
  width: 174px;
  background: #242425;
  border-radius: 10px;
  padding: 1rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 750px) {
    position: relative;
    width: 100%;
    max-width: max-content;
    margin: 0 auto;
  }
`
export const SideControl = styled.div`
  padding-top: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const SideTopContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 750px) {
    align-items: center;
  }
`

export const ClubControls = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;

  @media (max-width: 750px) {
    justify-content: center;
  }
`

export const ClubControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`

export const ClubControlTitle = styled.div`
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.8rem;
`

export const ClubTitle = styled.h5`
  font-weight: 700;
  font-size: 13px;
  color: #c7c7c7;
  margin: 0;
`

export const SideBtn = styled.button<ApplyStateType>`
  width: 100%;
  height: 36px;
  border: none;
  font-weight: 600;
  font-size: 13px;
  color: #ffffff;
  background: #4164e1;
  border-radius: 7px;

  ${({ btnMessage }) => {
    if (btnMessage === '지원하기') return ''
    else if (btnMessage === '신청 취소')
      return 'color: #0B0B0B;background: #84D644;border: 1px solid #0B0B0B;'
    return 'color: #B5B5B5;background: #797979; cursor: auto;'
  }}
`

export const NotionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  > * {
    margin: 0;
  }
  > p {
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
    align-items: center;

    p {
      text-align: center;
      word-break: keep-all;
    }
    a {
      white-space: nowrap;
    }
  }
`
