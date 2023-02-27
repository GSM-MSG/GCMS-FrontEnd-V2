import Image from 'next/image'
import Link from 'next/link'
import * as S from './style'
import * as SVG from '@/assets/svg'
import { ClubItemType } from '@/type/components/MyPage'
import { useRouter } from 'next/router'

export default function ClubItem({ clubType, data }: ClubItemType) {
  const router = useRouter()

  return (
    <>
      {data?.clubs
        .filter((i) => i.type === clubType)
        .map((item) => (
          <Link key={item.id} href={`/detail/${item.id}`}>
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
              <S.ClubManageBtn
                onClick={() => router.push(`/applicant/${item.id}`)}
              >
                <SVG.KebabMenuIcon />
              </S.ClubManageBtn>
            </S.ClubItem>
          </Link>
        ))}
    </>
  )
}
