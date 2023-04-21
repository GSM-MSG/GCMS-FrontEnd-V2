import styled from '@emotion/styled'
import Link from 'next/link'
import NoCopyImg from '../NoCopyImg'

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
  padding-right: 20%;

  small {
    :nth-of-type(1) {
      min-width: 4.2em;
    }
    :nth-of-type(2) {
      flex-basis: 6.5em;
    }
    :nth-of-type(3) {
      flex-basis: 29%;
    }
    :nth-of-type(4) {
      width: 45%;
    }

    @media (max-width: 600px) {
      :nth-of-type(2) {
        flex-basis: 6.7em;
      }
      :nth-of-type(4) {
        display: none;
      }
    }
  }
`

export const ClubWrapper = styled.div`
  width: 100%;
  min-height: 56px;
  background: #2d2d2d;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 0 16px;
`

export const ClubBox = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  gap: 1em;
  transition: 0.5s;
`

export const ClubImgBox = styled(NoCopyImg)`
  border-radius: 100%;
  background: #434343;
  overflow: hidden;
  min-width: 2.5em;
  width: 2.5em;
  height: 2.5em;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ClubInfo = styled.div`
  font-size: 0.9em;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1em;
  overflow: hidden;
`

export const ClubName = styled(Link)`
  margin: 0;
  white-space: nowrap;
  flex-basis: 12em;
  transition: 0.2s;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;

  &:hover {
    color: #4164e1;
  }

  @media (max-width: 600px) {
    flex-basis: auto;
    width: 30%;
  }
`

export const ClubKind = styled.h4`
  color: #888;
  flex-basis: 6em;
  margin: 0;
  white-space: nowrap;
  word-wrap: break-word;

  @media (max-width: 600px) {
    flex-basis: 5em;
  }
`
export const ClubDescription = styled(ClubKind)`
  flex-basis: 20em;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 600px) {
    display: none;
  }
`

export const OptionBox = styled.div`
  width: 20%;
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

  @media (max-width: 740px) {
    min-width: 2.5em;
  }
`
