import * as S from './style'
import { setUuid } from '@/store/uuid'
import { useDispatch } from 'react-redux'
import AdminMemberType from '@/type/common/AdminUserListType'
import ProfileImg from '@/components/Common/ProfileImg'

interface Props {
  data: AdminMemberType[]
  value: string
}

export default function UserList({ data, value }: Props) {
  const dispatch = useDispatch()

  return (
    <S.Layer>
      <S.UserContainer>
        {data?.map(
          (item) =>
            item.nickname.includes(value) && (
              <S.ItemWrapper
                key={item.uuid}
                onClick={() => dispatch(setUuid(item.uuid))}
              >
                <S.UserWrapper>
                  <S.UserBox select={false}>
                    <S.UserImgBox>
                      <ProfileImg src={item.profileImg} alt='profileImg' />
                    </S.UserImgBox>
                    <S.UserInfo>
                      <S.UserName>{item.nickname}</S.UserName>
                      <small>
                        {item.grade}학년 {item.classNum}반 {item.number}번
                      </small>
                    </S.UserInfo>
                  </S.UserBox>
                </S.UserWrapper>
              </S.ItemWrapper>
            )
        )}
      </S.UserContainer>
    </S.Layer>
  )
}
