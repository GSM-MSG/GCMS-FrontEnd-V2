import * as S from './style'
import Image from 'next/image'
import { ApplicantListType, MemberType } from '@/type/common'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '@/store/applicant'
import { RootState } from '@/store'

interface UserListProps {
  data: ApplicantListType | null
  value: string
}

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
        {data?.신청자List.map(
          (item) =>
            item.name.includes(value) && (
              <S.UserWrapper key={item.uuid}>
                <S.UserImg>
                  {item.profileImg && (
                    <Image
                      src={item.profileImg}
                      alt='profileImg'
                      width={32}
                      height={32}
                    />
                  )}
                </S.UserImg>
                <S.UserInfo>
                  <S.UserName>{item.name}</S.UserName>
                  <small>
                    {item.grade}학년 {item.classNum}반 {item.number}번
                  </small>
                </S.UserInfo>
                <S.CheckBox>
                  {data.userScope === 'HEAD' && (
                    <S.CheckBtn
                      type='checkbox'
                      onChange={() => onChange(item)}
                      checked={!!applicant.find((i) => i.uuid === item.uuid)}
                    />
                  )}
                </S.CheckBox>
              </S.UserWrapper>
            )
        )}
      </S.UserContainer>
    </S.Layer>
  )
}
