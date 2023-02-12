import { ClubListType } from '@/type/common'
import * as S from './style'

interface Props {
  club: ClubListType
}

export default function ClubItem({ club }: Props) {
  return (
    <S.ClubItem>
      {club.bannerImg ? (
        <S.ClubImg src={club.bannerImg} />
      ) : (
        <S.SampleClubImg />
      )}
      <S.ClubTitle>
        <h3>{club.name}</h3>
        <p>{club.content}</p>
      </S.ClubTitle>
    </S.ClubItem>
  )
}
