import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import * as S from './style'

export default function ClubActivity() {
  const { clubDetail } = useSelector((state: RootState) => ({
    clubDetail: state.clubDetail,
  }))

  return (
    <S.ClubActivity>
      <h3>동아리 활동</h3>
      <div>
        {clubDetail.activityImgs?.map((url, index) => (
          <S.ActivityImg key={index}>
            <S.NextImg alt='activity img' src={url} width={250} height={250} />
          </S.ActivityImg>
        ))}
      </div>
    </S.ClubActivity>
  )
}
