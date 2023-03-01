import styled from '@emotion/styled'
import * as ClubMemberPage from '@/components/ClubMemberPage/style'

export const StuSearchWrapper = styled.div`
  width: 100%;
`
export const InputBox = styled(ClubMemberPage.InputBox)``

export const InputTag = styled.input`
  width: 100%;
  background: transparent;
  border: 1px solid #464646;
  padding: 0.9rem 1rem;
  border-radius: 0.75rem;
  color: #cacaca;
  outline: none;

  ::placeholder {
    color: #858585;
  }

  :focus {
    border: 1px solid #cacaca;
  }
`
