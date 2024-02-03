import styled from '@emotion/styled'
export const Content = styled.div`
  overflow-y: auto;
  height: fit-content;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    height: 30%;
    background: #4164e1;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1);
  }
`
