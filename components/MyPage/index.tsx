import KebabMenuIcon from '@/public/svg/KebabMenuIcon'
import ProfileIcon from '@/public/svg/profileIcon'
import { ProfileType } from '@/type/common'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import * as S from './style'

export default function MyPage() {
  const userDefaultData = {
    uuid: '',
    email: '',
    name: '',
    grade: 0,
    classNum: 0,
    number: 0,
    profileImg: '',
    clubs: [],
  }
  const [userData, setUserData] = useState<ProfileType>(userDefaultData)

  useEffect(() => {
    setTimeout(async () => {
      const { data } = await axios.get('/user', {
        headers: {
          Authorization: `Bearer ${'authorization'}`,
        },
      })
      setUserData(data)
    })
  }, [])

  const ClubWrapper = (clubtype: string) => {
    return userData.clubs.map((item) => {
      if (item.type === clubtype)
        return (
          <S.ClubWrapper key={item.id}>
            <S.ClubImg>
              <Image
                src={item.bannerImg}
                alt='bannerImg'
                width={50}
                height={50}
              />
            </S.ClubImg>
            <S.ClubName>{item.title}</S.ClubName>
            <KebabMenuIcon />
          </S.ClubWrapper>
        )
    })
  }

  return (
    <S.Positionier>
      <S.Layer>
        <S.ProfileBox>
          <ProfileIcon />
          <S.ProfileContent>
            <S.ProfileImg>
              <Image
                src={userData.profileImg}
                alt='profileImg'
                width={60}
                height={60}
              />
            </S.ProfileImg>
            <p>{userData.name}</p>
            <small>
              {userData.grade}학년 {userData.classNum}반 {userData.number}번
            </small>
          </S.ProfileContent>
          <KebabMenuIcon />
        </S.ProfileBox>
        <S.ClubBox>
          <h2>내 동아리</h2>
          <S.ClubContainer>
            <S.ClubType>전공동아리</S.ClubType>
            {ClubWrapper('MAJOR')}
          </S.ClubContainer>
          <S.ClubContainer>
            <S.ClubType>자율동아리</S.ClubType>
            {ClubWrapper('FREEDOM')}
          </S.ClubContainer>
          <S.ClubContainer>
            <S.ClubType>사설동아리</S.ClubType>
            {ClubWrapper('EDITIONAL')}
          </S.ClubContainer>
        </S.ClubBox>
      </S.Layer>
    </S.Positionier>
  )
}
