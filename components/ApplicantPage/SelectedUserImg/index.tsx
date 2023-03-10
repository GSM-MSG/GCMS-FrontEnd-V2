import { XMark } from '@/assets/svg'
import ProfileImg from '@/components/Common/ProfileImg'
import { removeUser } from '@/store/applicant'
import { SelectedProps } from '@/type/components/ApplicantPage'
import { useDispatch } from 'react-redux'
import * as S from './style'

export default function SelectedUserImg({ selected = [] }: SelectedProps) {
  const dispatch = useDispatch()

  return (
    <S.Layer>
      <S.ImgContainer>
        {selected.map((item) => (
          <S.ImgWrapper key={item.uuid}>
            <S.ImgBox>
              <ProfileImg src={item.profileImg} alt='profileImg' />
            </S.ImgBox>
            <S.Delete onClick={() => dispatch(removeUser(item.uuid))}>
              <XMark />
            </S.Delete>
          </S.ImgWrapper>
        ))}
      </S.ImgContainer>
    </S.Layer>
  )
}
