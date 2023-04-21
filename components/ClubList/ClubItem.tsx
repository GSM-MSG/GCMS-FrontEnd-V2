import { ClubListType } from '@/type/common'
import NoCopyImg from '../Common/NoCopyImg'
import * as S from './style'

interface Props {
  club: ClubListType
}

export default function ClubItem({ club }: Props) {
  return (
    <S.ClubItem>
      <S.ClubImg>
        <NoCopyImg
          alt='banner img'
          src={club.bannerImg}
          fill
          sizes='100%'
          priority={true}
        />
      </S.ClubImg>
      <S.ClubTitle>
        <h3>{club.name}</h3>
        <p>{club.content}</p>
      </S.ClubTitle>
    </S.ClubItem>
  )
}
