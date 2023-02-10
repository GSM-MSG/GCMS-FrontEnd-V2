import * as S from './Member.style'
import MemberType from '@/type/common/MemberType'

interface Props {
  member: MemberType
}

const Member = ({ member }: Props) => {
  return (
    <S.Wrapper htmlFor='check'>
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

      <S.CheckBox id='check' type='checkbox' />
      <S.CheckBoxLabel htmlFor='check' />
    </S.Wrapper>
  )
}

export default Member
