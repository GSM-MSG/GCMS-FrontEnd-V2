import styled from '@emotion/styled'
import NoCopyImg from '../Common/NoCopyImg'

export const ClubWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 12px 0 16px;
`
export const ClubOptionLayer = styled.form`
  display: inline-flex;
  gap: 24px;
  font-weight: 400;
  font-size: 15px;
  padding: 8px 15px;
  border-radius: 17px;
  background: #313134;
  color: rgba(255, 255, 255, 0.4);
  input[type='radio'] {
    display: none;
  }
  input[type='radio'] + label {
    transition: 0.5s;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    :nth-of-type(2) {
      position: relative;
      ::before,
      ::after {
        content: '';
        width: 2px;
        height: 10px;
        position: absolute;
        right: -12px;
        background: #5a5a5a;
        border-radius: 1px;
      }

      ::after {
        left: -12px;
      }
    }
  }
  input[type='radio']:checked + label {
    font-weight: 700;
    color: #ffffff;
  }
`

export const ClubList = styled.div`
  margin-top: 16px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  @media (max-width: 800px) {
    justify-content: space-around;
  }
`

export const ClubItem = styled.div`
  cursor: pointer;
  margin-top: 17px;
  width: 163.75px;
  aspect-ratio: auto 1 / 1.378;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 800px) {
    width: 180px;
  }
  @media (max-width: 650px) {
    width: 40vw;
  }
  @media (max-width: 420px) {
    width: 80vw;
  }
`
export const ClubImg = styled(NoCopyImg)`
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #2d2d2f;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  img {
    object-fit: cover;
  }
`

export const ClubTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    font-weight: 600;
    font-size: 15px;
    margin: 0;
  }
  p {
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
