import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  height: 84vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  p {
    margin: 0;
    text-align: center;
    color: rgba(255, 255, 255, 0.35);
  }
`

export const ContentLayout = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 1.25rem;
`

export const CompleteButton = styled.button`
  width: 343px;
  border: 0;
  padding: 16px 0;
  font-size: 0.9375rem;
  background-color: #4164e1;
  color: #fff;
  border-radius: 0.625rem;
`
