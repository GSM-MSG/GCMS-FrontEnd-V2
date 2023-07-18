import styled from '@emotion/styled'

export const Wrapper = styled.div`
  background: #1c1c1e;
  width: 80%;
  max-width: 27rem;
  height: 80%;
  max-height: 45rem;
  border-radius: 0.75rem;
  padding: 1.2rem 1rem;
  display: flex;
  flex-direction: column;
`

export const TopContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export const CloseButton = styled.button`
  width: min-content;
  background: transparent;
  border: none;
`

export const Title = styled.h3`
  margin: 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.54);
  white-space: nowrap;
`
