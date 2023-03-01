import * as S from './style'
import * as SVG from '@/assets/svg'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import ClubItem from '../../MyPage/ClubItem'

export default function StuInfo() {
  const { user } = useSelector((state: RootState) => ({
    user: state.user,
  }))

  return (
    <S.ProfileLayer>
      <S.ProfileBox>
        <SVG.ProfileIcon />
        <S.ProfileContent>
          <S.ProfileImg>
            {user?.profileImg && (
              <Image
                src={user.profileImg}
                alt='profileImg'
                width={60}
                height={60}
              />
            )}
          </S.ProfileImg>
          <p>{user?.name}님</p>
          <small>
            {user?.grade ?? 0}학년 {user?.classNum ?? 0}반 {user?.number ?? 0}번
          </small>
        </S.ProfileContent>
      </S.ProfileBox>
      <S.ClubBox>
        <S.ClubContainer>
          <S.ClubType>전공동아리</S.ClubType>
          <ClubItem clubType='MAJOR' data={user} />
        </S.ClubContainer>
        <S.ClubContainer>
          <S.ClubType>자율동아리</S.ClubType>
          <ClubItem clubType='FREEDOM' data={user} />
        </S.ClubContainer>
        <S.ClubContainer>
          <S.ClubType>사설동아리</S.ClubType>
          <ClubItem clubType='EDITORIAL' data={user} />
        </S.ClubContainer>
      </S.ClubBox>
    </S.ProfileLayer>
  )
}
