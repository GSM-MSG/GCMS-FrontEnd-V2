import { RootState } from '@/store'
import { addUser, removeUser } from '@/store/applicant'
import { MemberType } from '@/type/common'
import { UserItemProps } from '@/type/components/ApplicantPage'
import ProfileImg from '@/components/Common/ProfileImg'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './style'

export default function UserItem({ item, userScope }: UserItemProps) {
  const { applicant, user } = useSelector((state: RootState) => ({
    ...state,
  }))
  const dispatch = useDispatch()

  const onChange = (item: MemberType) => {
    if (applicant.find((seleted) => seleted.uuid === item.uuid)) {
      dispatch(removeUser(item.uuid))
      return
    }
    dispatch(addUser(item))
  }

  return (
    <S.UserWrapper htmlFor={item.uuid}>
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
        {(userScope === 'HEAD' || user.role === 'ROLE_ADMIN') && (
          <>
            <S.CheckBtn
              id={item.uuid}
              type='checkbox'
              onChange={() => onChange(item)}
              checked={!!applicant.find((i) => i.uuid === item.uuid)}
            />
            <S.CheckBtnLabel htmlFor={item.uuid}></S.CheckBtnLabel>
          </>
        )}
      </S.CheckBox>
    </S.UserWrapper>
  )
}
