import Image from 'next/image'
import Link from 'next/link'
import * as S from './style'
import * as SVG from '@/assets/svg'
import { ClubItemType } from '@/type/components/MyPage'

export default function ClubItem({ clubType, data }: ClubItemType) {
  return (
    <>
      {data?.clubs.map((item) => {
        if (item.type === clubType)
          return (
            <Link href={`/detail/${item.id}`}>
              <S.ClubItem key={item.id}>
                <S.ClubImg>
                  <Image
                    src={item.bannerImg}
                    alt='bannerImg'
                    width={50}
                    height={50}
                  />
                </S.ClubImg>
                <S.ClubName>{item.name}</S.ClubName>
                <Link href={`/applicant/${item.id}`}>
                  <SVG.KebabMenuIcon />
                </Link>
              </S.ClubItem>
            </Link>
          )
      })}
    </>
  )
}
