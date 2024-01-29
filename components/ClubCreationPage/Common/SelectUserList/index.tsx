import { RootState } from '@/store'
import { removeMember } from '@/store/clubCreation'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './style'
import * as SVG from '@/assets/svg'
import ProfileImg from '@/components/Common/ProfileImg'

const SelectUserList = () => {
  const dispatch = useDispatch()
  const { member } = useSelector((state: RootState) => ({
    member: state.clubCreation.member,
  }))

  const onClick = (uuid: string) => {
    dispatch(removeMember(uuid))
  }

  return (
    <>
      {member.length > 0 ? (
        <S.Wrapper>
          <S.TotalCount>
            총 <S.CountText>{member.length}명</S.CountText>
          </S.TotalCount>

          <S.Content>
            {member.map((i) => (
              <S.UserWrapper key={i.uuid}>
                <S.UserImg>
                  <ProfileImg src={i.profileImg} alt='profile img' />
                </S.UserImg>
                <S.RemoveBtn onClick={() => onClick(i.uuid)}>
                  <SVG.XMark />
                </S.RemoveBtn>
              </S.UserWrapper>
            ))}
          </S.Content>
        </S.Wrapper>
      ) : null}
    </>
  )
}

export default SelectUserList
