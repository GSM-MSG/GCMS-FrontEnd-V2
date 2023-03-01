import styled from '@emotion/styled'
import * as MyPage from '@/components/MyPage/style'
import * as ClubMemberPage from '@/components/ClubMemberPage/style'

export const Layout = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 700px;
  @media (max-width: 715px) {
    width: 100%;
    padding: 0 15px;
  }
`

export const Title = styled.h1`
  margin-top: 40px;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
`

export const MemberWrapper = styled.div`
  margin-top: 17px;
  width: 100%;
  display: flex;
  gap: 16px;
  @media (max-width: 740px) {
    flex-direction: column;
  }
`

//Profile

export const ProfileLayer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
  small {
    color: rgba(255, 255, 255, 0.31);
  }
`

export const ProfileBox = styled(MyPage.ProfileBox)``

export const ProfileContent = styled(MyPage.ProfileContent)``

export const ProfileImg = styled(MyPage.ProfileImg)``

export const ClubBox = styled(MyPage.ClubBox)``

export const ClubContainer = styled(MyPage.ClubContainer)``

export const ClubType = styled(MyPage.ClubType)``

//Search

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
