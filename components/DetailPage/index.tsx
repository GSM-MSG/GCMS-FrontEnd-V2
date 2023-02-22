import { RootState } from '@/store'
import { useSelector } from 'react-redux'
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
      {clubDetail.id && (
        <S.Layout>
          <S.Wrapper>
            <S.Section>
              <S.ClubBanner src={clubDetail.bannerImg} />
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
      )}
    </>
  )
}
