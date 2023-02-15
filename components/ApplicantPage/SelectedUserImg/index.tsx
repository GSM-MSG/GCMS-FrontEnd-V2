import { XMark } from '@/assets/svg'
import { removeUser } from '@/store/applicant'
import { ApplicantInitialState } from '@/type/store/applicant'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import * as S from './style'

export default function SelectedUserImg({
  seleted = [],
}: {
  seleted: ApplicantInitialState[]
}) {
  const dispatch = useDispatch()

  return (
    <S.Layer>
      <S.ImgContainer>
        {seleted.map((item) => {
          return (
            <S.ImgWrapper key={item.uuid}>
              <S.Img>
                {item.profileImg && (
                  <Image
                    src={item.profileImg}
                    alt='profileImg'
                    width='40'
                    height='40'
                  />
                )}
              </S.Img>
              <S.Delete onClick={() => dispatch(removeUser(item.uuid))}>
                <XMark />
              </S.Delete>
            </S.ImgWrapper>
          )
        })}
      </S.ImgContainer>
    </S.Layer>
  )
}
