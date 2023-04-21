import * as SVG from '@/assets/svg'
import { ClubType } from '@/type/common'
import AdminDetailType from '@/type/common/AdminDetailType'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MouseEvent } from 'react'
import * as S from './style'

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
              <Image
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
