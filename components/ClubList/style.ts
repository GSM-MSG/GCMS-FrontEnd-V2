import styled from '@emotion/styled'

export const ClubWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 12px 0 16px;
`
export const ClubOptionLayer = styled.form`
  display: flex;
  gap: 6px;
  font-weight: 500;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.6);
  input[type='radio'] {
    display: none;
  }
  input[type='radio'] + label {
    cursor: pointer;
    width: 49px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 20px;
  }
  input[type='radio']:checked + label {
    font-weight: 600;
    border: 1px solid #5e7dea;
    color: #5e7dea;
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
  justify-content: space-between;
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
export const ClubImg = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #2d2d2f;
  border-radius: 10px;
  object-fit: cover;
`

export const ClubTitle = styled.div`
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
