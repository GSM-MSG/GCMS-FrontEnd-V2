import styled from '@emotion/styled'

export const Layer = styled.div`
  width: 100%;
  display: flex;
`

export const UserContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  height: calc(100vh - 639px);

  @media (max-height: 961px) {
    height: 323px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`
type UserWrapperType = {
  checked: boolean
  head: boolean
}

export const UserWrapper = styled.div<UserWrapperType>`
  position: relative;
  width: 100%;
  min-height: 56px;
  background: #2d2d2d;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  gap: 20px;

  ::before {
    content: '';
    cursor: pointer;
    position: absolute;
    right: 17px;
    top: 50%;
    width: 12px;
    height: 12px;
    border: 1px solid ${({ checked }) => (checked ? '#8be246' : '#6a6a6a')};
    border-radius: 100%;
    transform: translateY(-50%);
  }
  ::after {
    content: '';
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 21px;
    width: 7px;
    height: 7px;
    background: ${({ checked }) => (checked ? '#575ce0' : 'none')};
    border-radius: 100%;
    transform: translateY(-50%);
  }
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
`
export const CheckBtn = styled.input`
  display: none;
  &:checked + label {
    border: 0.1rem solid #8be246;

    ::after {
      background: #575ce0;
    }
  }
`

export const CheckBtnLabel = styled.label`
  width: 13px;
  height: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #6a6a6a;
  border-radius: 100%;
  cursor: pointer;

  ::after {
    content: '';
    display: block;
    width: 7px;
    height: 7px;
    border-radius: 100%;
  }
`
