import { ClubListType } from '@/type/common'
import * as S from './style'

interface Props {
  club: ClubListType
}

export default function ClubItem({ club }: Props) {
  return (
    <S.ClubItem>
      <S.ClubImg>
        <S.NextImg
          alt='banerr img'
          src={club.bannerImg}
          width={100}
          height={100}
        />
      </S.ClubImg>
      <S.ClubTitle>
        <h3>{club.name}</h3>
        <p>{club.content}</p>
      </S.ClubTitle>
    </S.ClubItem>
  )
}
