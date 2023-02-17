import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import * as S from './style'

export default function ClubMember() {
  const { clubDetail } = useSelector((state: RootState) => ({
    clubDetail: state.clubDetail,
  }))

  return (
    <S.ClubMember>
      <h3>동아리 구성원</h3>
      <div>
        {clubDetail.teacher && (
          <S.HeadProfile>
            <S.SampelIMG />
            <S.HeadInfo>
              <p>담당 선생님</p>
              <span>{clubDetail.teacher}</span>
            </S.HeadInfo>
          </S.HeadProfile>
        )}
        <S.HeadProfile>
          {clubDetail.head.profileImg ? (
            <S.MemberProfile src={clubDetail.head.profileImg} />
          ) : (
            <S.SampelIMG />
          )}
          <S.HeadInfo>
            <p>동아리 부장</p>
            <span>{clubDetail.head.name}</span>
          </S.HeadInfo>
        </S.HeadProfile>
      </div>
      <span>
        {clubDetail.member.map((data) =>
          data.profileImg ? (
            <S.MemberProfile key={data.uuid} src={data.profileImg} />
          ) : (
            <S.SampelIMG key={data.uuid} />
          )
        )}
      </span>
    </S.ClubMember>
  )
}
