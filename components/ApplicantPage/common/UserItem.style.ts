import styled from '@emotion/styled'

export const Layer = styled.div`
  width: 100%;
  display: flex;
`
export const UserWrapper = styled.div`
  width: 100%;
  height: 56px;
  background: #2d2d2d;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`

export const UserImg = styled.div`
  border-radius: 100%;
  background: #434343;
  overflow: hidden;
  width: 32px;
  height: 32px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const UserInfo = styled.div`
  width: 84%;

  small {
    font-size: 11px;
  }
`

export const UserName = styled.h4`
  font-size: 14px;
  /* color: rgba(255, 255, 255, 0.31); */
  margin: 0;
`
