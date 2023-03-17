import { RootState } from '@/store'
import ClubDetailType from '@/type/common/ClubDetailType'
import { useSelector } from 'react-redux'
import ClubLeaveAndDeleteBtn from './ClubLeaveAndDeleteBtn'
import * as S from './style'
import SwitchBtn from './SwitchBtn'

interface Props {
  data: ClubDetailType | undefined
}

const Notice = ({ data }: Props) => {
  const { user } = useSelector((state: RootState) => ({ ...state }))
  return (
    <>
      <S.Wrapper>
        <S.Label>공고</S.Label>
        <S.Content>
          <S.Left src={data?.bannerImg} />

          <S.Right>
            <S.Title>{data?.name}</S.Title>
            <S.Description>{data?.content}</S.Description>
            <S.UtilContent>
              <S.UtilSection>
                <S.Title>동아리 모집</S.Title>

                <SwitchBtn
                  clubId={data?.id}
                  opened={data?.isOpened}
                  scope={data?.scope}
                />
              </S.UtilSection>

              <S.UtilSection>
                {(data?.scope === 'HEAD' || user.role === 'ROLE_ADMIN') && (
                  <ClubLeaveAndDeleteBtn
                    clubId={data?.id}
                    clubName={data?.name}
                    type='삭제'
                  />
                )}

                {data?.scope === 'MEMBER' && (
                  <ClubLeaveAndDeleteBtn
                    clubId={data?.id}
                    clubName={data?.name}
                    type='탈퇴'
                  />
                )}
              </S.UtilSection>
            </S.UtilContent>
          </S.Right>
        </S.Content>
      </S.Wrapper>
    </>
  )
}

export default Notice
