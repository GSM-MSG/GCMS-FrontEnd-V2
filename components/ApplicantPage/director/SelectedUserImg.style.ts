import styled from '@emotion/styled'
import { UserImg } from '../common/UserList.style'

export const Layer = styled.div`
  width: 100%;
  margin: 20px 0;
`

export const ImgContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const ImgWrapper = styled.div`
  width: 48px;
  position: relative;
`

export const Img = styled(UserImg)`
  width: 40px;
  height: 40px;
`

export const Delete = styled.div`
  width: 16px;
  height: 16px;
  background: #000;
  border-radius: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
