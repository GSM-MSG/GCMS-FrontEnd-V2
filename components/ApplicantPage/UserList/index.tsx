import * as S from './style'
import { MemberType } from '@/type/common'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '@/store/applicant'
import { RootState } from '@/store'
import { UserListProps } from '@/type/components/ApplicantPage'

export default function UserList({ data, value }: UserListProps) {
  const { applicant } = useSelector((state: RootState) => ({
    applicant: state.applicant,
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
    <S.Layer>
      <S.UserContainer>
        {data?.applicantList.map(
          (item) =>
            item.name.includes(value) && (
              <S.UserWrapper key={item.uuid}>
                <S.UserImgBox>
                  {item.profileImg && (
                    <S.Img src={item.profileImg} alt='profileImg' />
                  )}
                </S.UserImgBox>
                <S.UserInfo>
                  <S.UserName>{item.name}</S.UserName>
                  <small>
                    {item.grade}학년 {item.classNum}반 {item.number}번
                  </small>
                </S.UserInfo>
                <S.CheckBox>
                  {data.userScope === 'HEAD' && (
                    <>
                      <S.CheckBtn
                        id={item.uuid}
                        type='checkbox'
                        onChange={() => onChange(item)}
                        checked={!!applicant.find((i) => i.uuid === item.uuid)}
                      />
                      <S.CheckBtnLabel htmlFor={item.uuid} />
                    </>
                  )}
                </S.CheckBox>
              </S.UserWrapper>
            )
        )}
      </S.UserContainer>
    </S.Layer>
  )
}
