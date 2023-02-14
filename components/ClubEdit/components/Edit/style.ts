import styled from '@emotion/styled'

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`

export const Title = styled.h3`
  margin: 0;
`

export const CancelBtn = styled.button`
  color: #606060;
  border: none;
  background: transparent;
  padding: 0;
  margin-right: 1rem;
`

export const EditBtn = styled.button`
  color: #4164e1;
  border: none;
  background: transparent;
  padding: 0;
`

export const BannerAndContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1rem;
`
