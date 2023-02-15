import styled from '@emotion/styled'

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  position: relative;
  width: 700px;
  @media (max-width: 715px) {
    width: 100%;
    padding: 0 15px;
  }
`
export const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 301px;
  background: #2d2d2d;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  button {
    position: absolute;
    bottom: 0;
    margin: 25px 32px;
    width: 79px;
    height: 27px;
    background: #8be246;
    border: none;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 11px;
    color: #000000;
  }
`
export const NewClubWrapper = styled.div`
  margin-top: 29px;
  width: 100%;
`
export const NewClubHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: 600;
    font-size: 17px;
    margin: 0;
  }
  a {
    font-weight: 500;
    font-size: 13px;
    color: #7a7a7a;
    margin: 0;
  }
`
export const NewClubList = styled.div`
  margin-top: 16px;
  width: 100%;
  height: 164px;
  display: flex;
  gap: 10px;
  flex-wrap: nowrap;
  overflow-y: hidden;
  overflow-x: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const NewClubItem = styled.div`
  width: 100px;
  aspect-ratio: auto 1 / 1.64;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const NewClubImg = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #2d2d2f;
  border-radius: 10px;
  object-fit: contain;
`
export const NewClubTitle = styled.div`
  h3 {
    font-weight: 600;
    font-size: 15px;
    margin: 0;
  }
  p {
    margin: 8px 0 0 0;
    width: 100%;
    font-weight: 500;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.51);
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`
export const ClubWrapper = styled.div`
  margin-top: 76px;
  p {
    font-weight: 600;
    font-size: 17px;
    margin: 0;
  }
`
