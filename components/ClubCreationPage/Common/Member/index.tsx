import * as S from './style'
import MemberType from '@/type/common/MemberType'
import { RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'
import { removeMember, setMember } from '@/store/clubCreation'
import ProfileImg from '@/components/Common/ProfileImg'

interface Props {
  member: MemberType
}

const Member = ({ member }: Props) => {
  const dispatch = useDispatch()
  const { members } = useSelector((state: RootState) => ({
    members: state.clubCreation.member,
  }))

  const onChange = () => {
    if (members.find((i) => i.uuid === member.uuid)) {
      dispatch(removeMember(member.uuid))
      return
    }

    dispatch(setMember(member))
  }

  return (
    <S.Wrapper htmlFor={`check${member.uuid}`}>
      <S.UserInfo>
        <S.UserImg>
          <ProfileImg src={member.profileImg} alt='profile img' />
        </S.UserImg>
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
        checked={!!members.find((i) => i.uuid === member.uuid)}
        onChange={onChange}
      />
      <S.CheckBoxLabel htmlFor={`check${member.uuid}`} />
    </S.Wrapper>
  )
}

export default Member
