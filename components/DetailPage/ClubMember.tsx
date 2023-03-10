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
          <S.MemberProfile
            alt='profile img'
            src={clubDetail.head.profileImg || '/png/Profile.png'}
            width={48}
            height={48}
          />
          <S.HeadInfo>
            <p>동아리 부장</p>
            <span>{clubDetail.head?.name}</span>
          </S.HeadInfo>
        </S.HeadProfile>
      </div>
      <span>
        {clubDetail.member?.map((data) => (
          <S.MemberWrapper key={data.uuid}>
            <S.MemberProfile
              alt='member progile img'
              src={data.profileImg || '/png/Profile.png'}
              width={48}
              height={48}
            />
            <p>{data.name}</p>
          </S.MemberWrapper>
        ))}
      </span>
    </S.ClubMember>
  )
}
