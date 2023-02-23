import * as SVG from '@/assets/svg'
import { useFetch } from '@/hooks'
import { ProfileType } from '@/type/common'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import SEO from '../SEO'
import ClubItem from './ClubItem'
import ProfileSetting from './ProfileSetting'
import * as S from './style'

export default function MyPage() {
  const { fetch, data } = useFetch<ProfileType>({
    url: '/user',
    method: 'get',
  })
  const [isSetting, setSetting] = useState<boolean>(false)

  useEffect(() => {
    fetch()
  }, [])

  return (
    <>
      <SEO title={`GCMS | ${data?.name}`} />
      <S.Positionier>
        <S.Layer>
          <S.ProfileBox>
            <SVG.ProfileIcon />
            <S.ProfileContent>
              <S.ProfileImg>
                {data?.profileImg && (
                  <Image
                    src={data.profileImg}
                    alt='profileImg'
                    width={60}
                    height={60}
                  />
                )}
              </S.ProfileImg>
              <p>{data?.name}님</p>
              <small>
                {data?.grade ?? 0}학년 {data?.classNum ?? 0}반{' '}
                {data?.number ?? 0}번
              </small>
            </S.ProfileContent>
            <S.SettingButton onClick={() => setSetting(!isSetting)}>
              <SVG.KebabMenuIcon />
            </S.SettingButton>
          </S.ProfileBox>
          <S.ContentBox>
            <S.ClubBox>
              <h2>내 동아리</h2>
              <S.ClubContainer>
                <S.ClubType>전공동아리</S.ClubType>
                <ClubItem clubType='MAJOR' data={data} />
              </S.ClubContainer>
              <S.ClubContainer>
                <S.ClubType>자율동아리</S.ClubType>
                <ClubItem clubType='FREEDOM' data={data} />
              </S.ClubContainer>
              <S.ClubContainer>
                <S.ClubType>사설동아리</S.ClubType>
                <ClubItem clubType='EDITORIAL' data={data} />
              </S.ClubContainer>
            </S.ClubBox>
            {isSetting && <ProfileSetting />}
          </S.ContentBox>
        </S.Layer>
      </S.Positionier>
    </>
  )
}
