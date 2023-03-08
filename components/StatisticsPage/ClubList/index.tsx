import { useFetch } from '@/hooks'
import { ClubListType } from '@/type/common'
import { ClubOptionType } from '@/type/components/ClubOptionNavigation'
import { useEffect } from 'react'
import * as S from './style'

interface Props {
  type: ClubOptionType
}

const ClubList = ({ type }: Props) => {
  const { fetch, data } = useFetch<ClubListType[]>({
    method: 'get',
    url: `/club?type=${type || 'MAJOR'}`,
  })

  useEffect(() => {
    fetch()
  }, [type])

  return (
    <S.Wrapper>
      <S.TitleSection>
        <S.Title>배너</S.Title>
        <S.Title>유형</S.Title>
        <S.Title>이름</S.Title>
        <S.Title>설명</S.Title>
      </S.TitleSection>
      {data?.map((i) => (
        <S.ClubSection href={`/detail/${i.id}`} key={i.id}>
          <S.ClubBanner src={i.bannerImg} />
          <S.ClubKind>{i.type}</S.ClubKind>
          <S.ClubTitle>{i.name}</S.ClubTitle>
          <S.ClubContent>{i.content}</S.ClubContent>
        </S.ClubSection>
      ))}
    </S.Wrapper>
  )
}

export default ClubList
