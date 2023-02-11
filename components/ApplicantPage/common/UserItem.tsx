import * as S from './UserItem.style'
import Image from 'next/image'

export default function UserItem() {
  return (
    <S.Layer>
      <S.UserWrapper>
        <S.UserImg>
          <Image src='' alt='bannerImg' width={50} height={50} />
        </S.UserImg>
        <S.UserInfo>
          <S.UserName>김현승</S.UserName>
          <small>1학년 4반 13번</small>
        </S.UserInfo>
        <input type='radio' />
      </S.UserWrapper>
    </S.Layer>
  )
}
