import { ClubListType } from '@/type/common'
import * as S from './style'

interface Props {
  club: ClubListType
}

export default function NewClubItem({ club }: Props) {
  return (
    <S.NewClubItem>
      <S.NewClubImg src={club.bannerImg} />
      <S.NewClubTitle>
        <h3>{club.name}</h3>
        <p>{club.content}</p>
      </S.NewClubTitle>
    </S.NewClubItem>
  )
}
