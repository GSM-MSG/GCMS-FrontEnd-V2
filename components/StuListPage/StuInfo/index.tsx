import * as S from './style'
import * as MyPage from '@/components/MyPage/style'
import * as SVG from '@/assets/svg'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useFetch } from '@/hooks'
import { useEffect } from 'react'
import AdminDetailType from '@/type/common/AdminDetailType'
import ClubItem from './ClubItem'

export default function StuInfo() {
  const { uuid } = useSelector((state: RootState) => ({
    uuid: state.uuid,
  }))

  const { fetch, data } = useFetch<AdminDetailType>({
    url: `/admin/user/${uuid}`,
    method: 'get',
  })

  useEffect(() => {
    fetch()
  }, [uuid])

  return (
    <S.ProfileLayer>
      <MyPage.ProfileBox>
        <SVG.ProfileIcon />
        <MyPage.ProfileContent>
          <MyPage.ProfileImg>
            {data?.profileImg && (
              <Image
                src={data.profileImg}
                alt='profileImg'
                width={60}
                height={60}
              />
            )}
          </MyPage.ProfileImg>
          <p>{data?.nickname && data?.nickname + '님'}</p>
          <small>
            {data?.grade ?? 0}학년 {data?.classNum ?? 0}반 {data?.number ?? 0}번
          </small>
        </MyPage.ProfileContent>
      </MyPage.ProfileBox>
      <MyPage.ClubBox>
        <MyPage.ClubContainer>
          <MyPage.ClubType>전공동아리</MyPage.ClubType>
          {data && <ClubItem clubType='MAJOR' data={data} />}
        </MyPage.ClubContainer>
        <MyPage.ClubContainer>
          <MyPage.ClubType>자율동아리</MyPage.ClubType>
          {data && <ClubItem clubType='FREEDOM' data={data} />}
        </MyPage.ClubContainer>
        <MyPage.ClubContainer>
          <MyPage.ClubType>사설동아리</MyPage.ClubType>
          {data && <ClubItem clubType='EDITORIAL' data={data} />}
        </MyPage.ClubContainer>
      </MyPage.ClubBox>
    </S.ProfileLayer>
  )
}
