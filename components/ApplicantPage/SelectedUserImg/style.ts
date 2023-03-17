import styled from '@emotion/styled'

export const Layer = styled.div`
  width: 100%;
  margin: 20px 0;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const ImgContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`

export const ImgWrapper = styled.div`
  width: 48px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;

  small {
    margin-left: 2.5px;
  }
`

export const ImgBox = styled.div`
  position: relative;
  border-radius: 100%;
  background: #434343;
  overflow: hidden;
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
  cursor: pointer;
`
