import ClubDetailType from '@/type/common/ClubDetailType'
import ClubLeaveAndDeleteBtn from './ClubLeaveAndDeleteBtn'
import * as S from './style'
import Switch from './Switch'

interface Props {
  data: ClubDetailType | null
}

const Notice = ({ data }: Props) => {
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

                <Switch
                  clubId={data?.id}
                  opened={data?.isOpened}
                  scope={data?.scope}
                />
              </S.UtilSection>

              <S.UtilSection>
                {data?.scope === 'HEAD' && (
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
