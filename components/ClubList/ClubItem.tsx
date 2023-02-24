import { ClubListType } from '@/type/common'
import Image from 'next/image'
import * as S from './style'

interface Props {
  club: ClubListType
}

export default function ClubItem({ club }: Props) {
  return (
    <S.ClubItem>
      <S.ClubImg>
        <Image alt='banerr img' src={club.bannerImg} fill />
      </S.ClubImg>
      <S.ClubTitle>
        <h3>{club.name}</h3>
        <p>{club.content}</p>
      </S.ClubTitle>
    </S.ClubItem>
  )
}
