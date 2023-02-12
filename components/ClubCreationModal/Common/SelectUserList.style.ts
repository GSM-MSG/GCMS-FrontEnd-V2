import styled from '@emotion/styled'

export const Wrapper = styled.div`
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
`

export const UserWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RemoveBtn = styled.button`
  position: absolute;
  width: 1.2rem;
  height: 1.2rem;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 100%;
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
`

export const UserImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  flex-shrink: 0;
`

export const UserImgSample = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  background: #444444;
`

export const Name = styled.div`
  width: 3.5rem;
  margin-top: 0.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
`
