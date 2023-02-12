import * as S from './UserList.style'
import Image from 'next/image'

export default function UserList() {
  return (
    <S.Layer>
      <S.UserContainer>
        <S.UserWrapper>
          <S.UserImg>
            <Image src='' alt='bannerImg' width={50} height={50} />
          </S.UserImg>
          <S.UserInfo>
            <S.UserName>김현승</S.UserName>
            <small>1학년 4반 13번</small>
          </S.UserInfo>
          <S.CheckBox>{true && <S.CheckBtn />}</S.CheckBox>
        </S.UserWrapper>
      </S.UserContainer>
    </S.Layer>
  )
}
