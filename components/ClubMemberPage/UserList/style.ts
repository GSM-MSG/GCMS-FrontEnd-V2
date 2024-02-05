import { SelectType } from '@/type/components/ClubCreationPage'
import styled from '@emotion/styled'

export const Layer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 16px;
`

export const UserContainer = styled.div`
  width: 100%;
  max-height: 520px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;

  @media (min-height: 962px) {
    max-height: calc(100vh - 441px);
  }

  &::-webkit-scrollbar {
    display: none;
  }
`
export const UserWrapper = styled.div`
  position: relative;
  width: 100%;
  background: #242427;
  display: flex;
  border-radius: 10px;
  z-index: 0;
`

export const UserBox = styled.div<SelectType>`
  width: ${({ select }) => (select ? '80%' : '100%')};
  min-height: 56px;
  background: #2d2d2d;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  gap: 20px;
  transition: 0.5s;

  @media (max-width: 539px) {
    width: ${({ select }) => (select ? 'calc(100% - 100px)' : '100%')};
  }
`

export const UserImgBox = styled.div`
  border-radius: 100%;
  background: #434343;
  overflow: hidden;
  min-width: 32px;
  width: 32px;
  height: 32px;
  position: relative;
  img {
    object-fit: cover;
  }
`

export const UserInfo = styled.div`
  width: 100%;
  small {
    font-size: 11px;
  }
`

export const UserName = styled.h4`
  font-size: 14px;
  margin: 0;
`
export const CheckBox = styled.div`
  width: 13px;
  height: 16px;
  display: flex;
  align-items: center;
`
export const CheckBtn = styled.input`
  display: none;
  width: 100%;
  height: 100%;
`

export const CheckBtnLabel = styled.label`
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  justify-content: center;
  cursor: pointer;

  span {
    position: relative;
    width: 3px;
    height: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 100%;

    ::before {
      content: '';
      position: absolute;
      display: block;
      width: 3px;
      height: 3px;
      border-radius: 100%;
      background: #fff;
      top: 6px;
    }

    ::after {
      content: '';
      position: relative;
      display: block;
      width: 3px;
      height: 3px;
      border-radius: 100%;
      background: #fff;
      top: 12px;
    }
  }
`

export const OptionBox = styled.div`
  position: absolute;
  right: 0;
  width: 20%;
  min-width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: -1;
`

export const OptionBtn = styled.button`
  width: 101%;
  background: none;
  border: none;
  color: #545454;
  transition: 0.2s;

  &:hover {
    color: #4164e1;
  }
`
