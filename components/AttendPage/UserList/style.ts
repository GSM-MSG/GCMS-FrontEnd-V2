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

export const UserWrapper = styled.label`
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
  cursor: pointer;
`

export const UserImgBox = styled.div`
  position: relative;
  border-radius: 100%;
  background: #434343;
  overflow: hidden;
  min-width: 32px;
  width: 32px;
  height: 32px;
`

export const UserInfo = styled.div`
  width: 100%;
  small {
    font-size: 11px;
  }
`

export const UserName = styled.div<{attendanceStatus?: string}>`
  font-size: 14px;
  margin: 0;
  height: 1rem;
  display: flex;
  gap: 0.25rem;
  
  color: ${(props) =>
    props.attendanceStatus === 'ATTENDED' ? '#4164E1' :
    props.attendanceStatus === 'LATE' ? '#FFD466' :
    props.attendanceStatus === 'REASONABLE_ABSENT' ? '#C1C1C1' :
    props.attendanceStatus === 'ABSENT' ? '#FF6666' :
    'inherit'
  };
    
  svg {
    height: 100%;
  }
`;


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
