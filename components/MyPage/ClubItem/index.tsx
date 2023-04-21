import { MouseEvent } from 'react'
import * as SVG from '@/assets/svg'
import NoCopyImg from '@/components/Common/NoCopyImg'
import { ClubItemType } from '@/type/components/MyPage'
import { useRouter } from 'next/router'
import * as S from './style'

export default function ClubItem({ clubType, data }: ClubItemType) {
  const router = useRouter()

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => e.stopPropagation()

  return (
    <>
      {data?.clubs
        .filter((i) => i.type === clubType)
        .map((item) => (
          <S.ClubItem
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
          </S.ClubItem>
        ))}
    </>
  )
}
