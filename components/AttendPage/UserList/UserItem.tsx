import { RootState } from '@/store'
import { addUser, removeUser } from '@/store/applicant'
import { UserItemProps } from '@/type/components/AttendPage'
import ProfileImg from '@/components/Common/ProfileImg'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './style'
import {
  Attend_ABSENT,
  Attend_ATTENDED,
  Attend_REASONABLE_ABSENT,
  Attend_LATE,
} from '@/assets/svg'
import AttendMemberType from '@/type/common/AttendMemberType'

export default function UserItem({ item }: UserItemProps) {
  const { applicant } = useSelector((state: RootState) => ({
    ...state,
  }))
  const dispatch = useDispatch()

  const onChange = (item: AttendMemberType) => {
    if (applicant.find((seleted) => seleted.uuid === item.uuid)) {
      dispatch(removeUser(item.uuid))
      return
    }
    dispatch(addUser(item))
  }

  return (
    <S.UserWrapper htmlFor={item.uuid}>
      <S.UserImgBox>
        <ProfileImg src={''} alt='profileImg' />
      </S.UserImgBox>
      <S.UserInfo>
        <S.UserName attendanceStatus={item.attendanceStatus}>
          {item.name}
          {item.attendanceStatus === 'ATTENDED' ? (
            <Attend_ATTENDED color="true"/>
          ) : item.attendanceStatus === 'LATE' ?(
            <Attend_LATE color="true"/>
          ) : item.attendanceStatus === 'ABSENT' ? (
            <Attend_ABSENT color="true"/>
          ) : item.attendanceStatus === 'REASONABLE_ABSENT' ? (
            <Attend_REASONABLE_ABSENT color="true"/>
          ) : 
          null}
        </S.UserName>
        <small>
          {item.grade}학년 {item.classNum}반 {item.number}번
        </small>
      </S.UserInfo>
      <S.CheckBox>
        <>
          <S.CheckBtn
            id={item.uuid}
            type='checkbox'
            onChange={() => onChange(item)}
            checked={!!applicant.find((i) => i.uuid === item.uuid)}
          />
          <S.CheckBtnLabel htmlFor={item.uuid}></S.CheckBtnLabel>
        </>
      </S.CheckBox>
    </S.UserWrapper>
  )
}
