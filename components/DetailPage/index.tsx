import { RootState } from '@/store'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import NoCopyBox from '../Common/NoCopyBox'
import SEO from '../SEO'
import ClubActivity from './ClubActivity'
import ClubMember from './ClubMember'
import ClubName from './ClubName'
import Contact from './Contact'
import Description from './Description'
import SideBar from './SideBar'
import * as S from './style'

export default function DetailPage() {
  const { clubDetail } = useSelector((state: RootState) => ({
    clubDetail: state.clubDetail,
  }))

  return (
    <>
      <SEO
        title={`GCMS | ${clubDetail.name}`}
        description={clubDetail.content}
        image={clubDetail.bannerImg}
      />
      <S.Layout>
        <S.Wrapper>
          <S.Section>
            <S.ClubBanner>
              <NoCopyBox>
                <Image
                  alt='banner img'
                  src={clubDetail.bannerImg}
                  fill
                  sizes='100%'
                />
              </NoCopyBox>
            </S.ClubBanner>
            <S.ClubInfo>
              <ClubName />
              <Contact />
              <Description />
            </S.ClubInfo>
            <ClubActivity />
            <ClubMember />
          </S.Section>
          <SideBar />
        </S.Wrapper>
        <S.Footer />
      </S.Layout>
    </>
  )
}
