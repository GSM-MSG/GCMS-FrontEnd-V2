import * as S from './style'
import * as SVG from '@/assets/svg'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useFetch } from '@/hooks'
import { useEffect } from 'react'
import AdminDetailType from '@/type/common/AdminDetailType'
import ClubItem from './ClubItem'
import { ProfileSrc } from '@/lib/ProfileSrc'

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
      <S.ProfileBox>
        <SVG.ProfileIcon />
        <S.ProfileContent>
          <S.ProfileImg>
            <Image
              src={data?.profileImg || ProfileSrc}
              alt='profileImg'
              width={60}
              height={60}
            />
          </S.ProfileImg>
          <p>{data?.nickname && data?.nickname + '님'}</p>
          <small>
            {data?.grade ?? 0}학년 {data?.classNum ?? 0}반 {data?.number ?? 0}번
          </small>
        </S.ProfileContent>
      </S.ProfileBox>
      <S.ClubBox>
        <S.ClubContainer>
          <S.ClubType>전공동아리</S.ClubType>
          {data && <ClubItem clubType='MAJOR' data={data} />}
        </S.ClubContainer>
        <S.ClubContainer>
          <S.ClubType>자율동아리</S.ClubType>
          {data && <ClubItem clubType='FREEDOM' data={data} />}
        </S.ClubContainer>
        <S.ClubContainer>
          <S.ClubType>사설동아리</S.ClubType>
          {data && <ClubItem clubType='EDITORIAL' data={data} />}
        </S.ClubContainer>
      </S.ClubBox>
    </S.ProfileLayer>
  )
}
