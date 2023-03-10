import styled from '@emotion/styled'

export const Wrapper = styled.div`
  max-width: 43.75rem;
  width: 90%;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

export const InputWrapper = styled.div`
  border: 0.1rem solid #606060;
  padding: 0.9rem 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  border-radius: 0.75rem;

  input {
    background: transparent;
    border: none;
    height: 100%;
    width: 100%;
    outline: none;
    color: #fff;
    font-size: 1rem;
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
