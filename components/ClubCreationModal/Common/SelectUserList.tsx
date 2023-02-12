import { RootState } from '@/store'
import { removeMember } from '@/store/clubCreation'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './SelectUserList.style'
import * as SVG from '@/assets/svg'

const SelectUserList = () => {
  const dispatch = useDispatch()
  const { member } = useSelector((state: RootState) => ({
    member: state.clubCreation.member,
  }))

  const onClick = (uuid: string) => {
    dispatch(removeMember(uuid))
  }

  return (
    <S.Wrapper>
      <S.TotalCount>
        총 <S.CountText>{member.length}명</S.CountText>
      </S.TotalCount>

      <S.Content>
        {member.map((i) => (
          <S.UserWrapper key={i.uuid}>
            <S.RemoveBtn onClick={() => onClick(i.uuid)}>
              <SVG.XMark />
            </S.RemoveBtn>

            {i?.profileImg ? (
              <S.UserImg src={i.profileImg} />
            ) : (
              <S.UserImgSample />
            )}

            <S.Name>{i.name}</S.Name>
          </S.UserWrapper>
        ))}
      </S.Content>
    </S.Wrapper>
  )
}

export default SelectUserList
