import styled from '@emotion/styled'

export const Layer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 16px;
`

export const UserContainer = styled.div`
  width: 100%;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`
export const UserWrapper = styled.div`
  width: 100%;
  background: #242427;
  display: flex;
  border-radius: 10px;
`

export const UserBox = styled.div`
  width: ${({ option }: { option: boolean }) => (option ? '80%' : '100%')};
  min-height: 56px;
  background: #2d2d2d;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  gap: 20px;
`

export const UserImgBox = styled.div`
  border-radius: 100%;
  background: #434343;
  overflow: hidden;
  min-width: 32px;
  width: 32px;
  height: 32px;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  width: 20%;
  display: flex;
  justify-content: center;
`

export const OptionBtn = styled.button`
  width: 100%;
  background: none;
  border: none;
  color: #545454;
  transition: 0.2s;

  &:hover {
    color: #4164e1;
  }
`
