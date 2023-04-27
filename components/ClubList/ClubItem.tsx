import { ClubListType } from '@/type/common'
import Image from 'next/image'
import NoCopyBox from '../Common/NoCopyBox'
import * as S from './style'

interface Props {
  club: ClubListType
}

export default function ClubItem({ club }: Props) {
  return (
    <S.ClubItem>
      <S.ClubImg>
        <NoCopyBox>
          <Image
            alt='banner img'
            src={club.bannerImg}
            fill
            sizes='100%'
            priority={true}
          />
        </NoCopyBox>
      </S.ClubImg>
      <S.ClubTitle>
        <h3>{club.name}</h3>
        <p>{club.content}</p>
      </S.ClubTitle>
    </S.ClubItem>
  )
}
