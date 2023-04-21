import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import * as S from './style'
import NoCopyImg from '../Common/NoCopyImg'

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
            <NoCopyImg alt='activity img' src={url} fill sizes='100%' />
          </S.ActivityImg>
        ))}
      </div>
    </S.ClubActivity>
  )
}
