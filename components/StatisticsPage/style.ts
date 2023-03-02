import styled from '@emotion/styled'

export const Wrapper = styled.div`
  max-width: 43.75rem;
  width: 90%;
  margin: 3rem auto;
`

export const Top = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 550px) {
    justify-content: center;
  }
`

export const ExcelIcon = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.3);
  padding: 0.7rem;
  border-radius: 0.75rem;
  background: #242425;
  cursor: pointer;
`
