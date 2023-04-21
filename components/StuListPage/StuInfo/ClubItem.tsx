import { MouseEvent } from 'react'
import * as S from './style'
import * as SVG from '@/assets/svg'
import AdminDetailType from '@/type/common/AdminDetailType'
import { useRouter } from 'next/router'
import { ClubType } from '@/type/common'
import NoCopyImg from '@/components/Common/NoCopyImg'

interface Props {
  clubType: ClubType
  data: AdminDetailType
}

export default function ClubItem({ clubType, data }: Props) {
  const router = useRouter()

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => e.stopPropagation()
  return (
    <>
      {data?.clubs
        .filter((i) => i.type === clubType)
        .map((item) => (
          <S.MemberClubItem
            key={item.id}
            onClick={() => router.push(`/detail/${item.id}`)}
          >
            <S.ClubImg>
              <NoCopyImg
                src={item.bannerImg}
                alt='bannerImg'
                width={50}
                height={50}
              />
            </S.ClubImg>
            <S.ClubName>{item.name}</S.ClubName>
            <S.ClubManageBtn onClick={onClick} href={`/applicant/${item.id}`}>
              <SVG.KebabMenuIcon />
            </S.ClubManageBtn>
          </S.MemberClubItem>
        ))}
    </>
  )
}
