import styled from '@emotion/styled'
import Link from 'next/link'

export const Layer = styled.div`
  width: 100%;
`

export const InputBox = styled.div`
  position: relative;

  > svg {
    position: absolute;
    left: 20px;
    bottom: 16px;
  }

  input {
    padding: 0.9rem 3rem;
  }
`

export const ClubContainer = styled.div`
  width: 100%;
  max-height: 520px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  margin-top: 30px;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Header = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;

  small {
    :nth-of-type(1) {
      flex-basis: 60px;
    }
    :nth-of-type(2) {
      flex-basis: 15%;
    }
    :nth-of-type(3) {
      flex-basis: 17%;
    }

    @media (max-width: 600px) {
      :nth-of-type(1) {
        flex-basis: 4em;
      }
      :nth-of-type(2) {
        flex-basis: 6.2em;
      }
      :nth-of-type(4) {
        display: none;
      }
    }
  }
`

export const ClubWrapper = styled.div`
  width: 100%;
  background: #242427;
  display: flex;
  border-radius: 10px;
`

export const ClubBox = styled.div`
  width: 100%;
  min-height: 56px;
  background: #2d2d2d;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0 16px;
  transition: 0.5s;
`

export const ClubImgBox = styled.div`
  border-radius: 100%;
  background: #434343;
  overflow: hidden;
  min-width: 40px;
  height: 40px;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ClubInfo = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
`

export const ClubName = styled(Link)`
  font-size: 14px;
  margin: 0;
  white-space: nowrap;
  flex-basis: 9em;
  transition: 0.2s;

  &:hover {
    color: #4164e1;
  }

  @media (max-width: 600px) {
    flex-basis: 6em;
  }
`

export const ClubKind = styled.h4`
  color: #888;
  flex-basis: 8em;
  font-size: 14px;
  margin: 0;
  white-space: nowrap;

  @media (max-width: 600px) {
    flex-basis: 6em;
  }
`
export const ClubDescription = styled(ClubKind)`
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  flex-basis: 20em;

  @media (max-width: 600px) {
    display: none;
  }
`

export const OptionBox = styled.div`
  width: 18%;
  height: 100%;
  display: flex;
  justify-content: end;
`

export const OptionBtn = styled.button`
  min-width: 3em;
  background: none;
  border: none;
  color: #888;
  transition: 0.2s;

  &:hover {
    color: #4164e1;
  }
`
