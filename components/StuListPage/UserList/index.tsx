import * as S from './style'

import {
  Img,
  UserBox,
  UserImgBox,
  UserInfo,
  UserName,
  UserWrapper,
} from '@/components/ClubMemberPage/UserList/style'

import { setUuid } from '@/store/uuid'
import { useDispatch } from 'react-redux'
import AdminMemberType from '@/type/common/AdminUserListType'

interface Props {
  data: AdminMemberType[]
  value: string
}

export default function UserList({ data, value }: Props) {
  const dispatch = useDispatch()

  return (
    <S.UserListLayer>
      <S.UserListContainer>
        {data?.map(
          (item) =>
            item.nickname.includes(value) && (
              <S.ItemWrapper
                key={item.uuid}
                onClick={() => dispatch(setUuid(item.uuid))}
              >
                <UserWrapper>
                  <UserBox option={false}>
                    <UserImgBox>
                      {item.profileImg && (
                        <Img src={item.profileImg} alt='profileImg' />
                      )}
                    </UserImgBox>
                    <UserInfo>
                      <UserName>{item.nickname}</UserName>
                      <small>
                        {item.grade}학년 {item.classNum}반 {item.number}번
                      </small>
                    </UserInfo>
                  </UserBox>
                </UserWrapper>
              </S.ItemWrapper>
            )
        )}
      </S.UserListContainer>
    </S.UserListLayer>
  )
}
