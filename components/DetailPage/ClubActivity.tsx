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
        {clubDetail.activityImgs.map((url, index) => {
          return <S.ActivityImg key={index} src={url} />
        })}
      </div>
    </S.ClubActivity>
  )
}
