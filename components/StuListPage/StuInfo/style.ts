import styled from '@emotion/styled'
import * as ClubItem from '@/components/MyPage/ClubItem/style'
export * from '@/components/MyPage/style'
export * from '@/components/MyPage/ClubItem/style'

export const ProfileLayer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
  small {
    color: rgba(255, 255, 255, 0.31);
  }
`

export const MemberClubItem = styled(ClubItem.ClubItem)`
  width: 100%;
`
