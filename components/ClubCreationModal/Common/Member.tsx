import * as S from './Member.style'
import MemberType from '@/type/common/MemberType'
import { RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'
import { removeMember, setMember } from '@/store/clubCreation'

interface Props {
  member: MemberType
}

const Member = ({ member }: Props) => {
  const dispatch = useDispatch()
  const { uuids } = useSelector((state: RootState) => ({
    uuids: state.clubCreation.member,
  }))

  const onChange = () => {
    if (uuids.includes(member.uuid)) {
      dispatch(removeMember(member.uuid))
      return
    }

    dispatch(setMember(member.uuid))
  }

  return (
    <S.Wrapper htmlFor={`check${member.uuid}`}>
      <S.UserInfo>
        {member?.profileImg ? (
          <S.UserImg src={member.profileImg} />
        ) : (
          <S.UserSampleImg />
        )}

        <S.GradeInfo>
          <S.UserName>{member.name}</S.UserName>
          <S.MemberDescription>
            {member.grade}학년 {member.classNum}반 {member.number}번
          </S.MemberDescription>
        </S.GradeInfo>
      </S.UserInfo>

      <S.CheckBox
        id={`check${member.uuid}`}
        type='checkbox'
        checked={uuids.includes(member.uuid)}
        onChange={onChange}
      />
      <S.CheckBoxLabel htmlFor={`check${member.uuid}`} />
    </S.Wrapper>
  )
}

export default Member
