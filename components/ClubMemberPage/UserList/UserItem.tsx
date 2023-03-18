import ProfileImg from '@/components/Common/ProfileImg'
import { MemberItemProps } from '@/type/components/MemberPage'
import { useRouter } from 'next/router'
import KickUser from './KickUser'
import * as S from './style'
import DelegateUser from './DelegateUser'
import { useState } from 'react'

export default function UserItem({ item, scope }: MemberItemProps) {
  const router = useRouter()
  const clubID = router.query.clubID?.toString() || ''
  const [selected, setSelected] = useState<boolean>(false)

  return (
    <S.UserWrapper>
      <S.UserBox select={selected}>
        <S.UserImgBox>
          <ProfileImg src={item.profileImg} alt='profileImg' />
        </S.UserImgBox>
        <S.UserInfo>
          <S.UserName>{item.name}</S.UserName>
          <small>
            {item.grade}학년 {item.classNum}반 {item.number}번
          </small>
        </S.UserInfo>
        <S.CheckBox>
          {['HEAD', 'ADMIN'].includes(scope) && item.scope !== 'HEAD' && (
            <>
              <S.CheckBtn
                id={item.uuid}
                type='checkbox'
                onChange={() => setSelected(!selected)}
                checked={selected}
              />
              <S.CheckBtnLabel htmlFor={item.uuid}>
                <span />
              </S.CheckBtnLabel>
            </>
          )}
        </S.CheckBox>
      </S.UserBox>
      <S.OptionBox>
        <KickUser clubId={clubID} uuid={item.uuid} />
        <DelegateUser
          clubId={clubID}
          uuid={item.uuid}
          closeSelected={() => setSelected(!selected)}
        />
      </S.OptionBox>
    </S.UserWrapper>
  )
}
