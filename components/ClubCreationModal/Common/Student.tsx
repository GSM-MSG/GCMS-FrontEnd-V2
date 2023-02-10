import * as S from './Student.style'
import MemberType from '@/type/common/MemberType'

interface Props {
  student: MemberType
}

const Student = ({ student }: Props) => {
  return (
    <S.Wrapper htmlFor='check'>
      <S.UserInfo>
        {student?.profileImg ? (
          <S.UserImg src={student.profileImg} />
        ) : (
          <S.UserSampleImg />
        )}

        <S.GradeInfo>
          <S.UserName>{student.name}</S.UserName>
          <S.StudentDescription>
            {student.grade}학년 {student.classNum}반 {student.number}번
          </S.StudentDescription>
        </S.GradeInfo>
      </S.UserInfo>

      <S.CheckBox id='check' type='checkbox' />
      <S.CheckBoxLabel htmlFor='check' />
    </S.Wrapper>
  )
}

export default Student
