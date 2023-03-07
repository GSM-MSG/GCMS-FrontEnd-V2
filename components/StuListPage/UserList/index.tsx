import * as S from './style'

import * as ClubMember from '@/components/ClubMemberPage/UserList/style'

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
    <ClubMember.Layer>
      <ClubMember.UserContainer>
        {data?.map(
          (item) =>
            item.nickname.includes(value) && (
              <S.ItemWrapper
                key={item.uuid}
                onClick={() => dispatch(setUuid(item.uuid))}
              >
                <ClubMember.UserWrapper>
                  <ClubMember.UserBox option={false}>
                    <ClubMember.UserImgBox>
                      {item.profileImg && (
                        <ClubMember.Img
                          src={item.profileImg}
                          alt='profileImg'
                        />
                      )}
                    </ClubMember.UserImgBox>
                    <ClubMember.UserInfo>
                      <ClubMember.UserName>{item.nickname}</ClubMember.UserName>
                      <small>
                        {item.grade}학년 {item.classNum}반 {item.number}번
                      </small>
                    </ClubMember.UserInfo>
                  </ClubMember.UserBox>
                </ClubMember.UserWrapper>
              </S.ItemWrapper>
            )
        )}
      </ClubMember.UserContainer>
    </ClubMember.Layer>
  )
}
