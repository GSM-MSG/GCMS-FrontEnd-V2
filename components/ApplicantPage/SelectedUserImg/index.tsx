import { XMark } from '@/assets/svg'
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
              {item.profileImg && (
                <S.Img src={item.profileImg} alt='profileImg' />
              )}
            </S.ImgBox>
            <S.Delete onClick={() => dispatch(removeUser(item.uuid))}>
              <XMark width='8' height='7' />
            </S.Delete>
          </S.ImgWrapper>
        ))}
      </S.ImgContainer>
    </S.Layer>
  )
}
