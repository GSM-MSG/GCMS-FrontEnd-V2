import { RootState } from '@/store'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import * as S from './style'
import NoCopyBox from '../Common/NoCopyBox'
import ImageDetail from './ImageDetail'

export default function ClubActivity() {
  const { clubDetail } = useSelector((state: RootState) => ({
    clubDetail: state.clubDetail,
  }))

  return (
    <S.ClubActivity>
      <h3>동아리 활동</h3>
      <div>
        {clubDetail.activityImgs?.map((url, index) => (
          <ImageDetail key={index} url={url}>
            <S.ActivityImg>
              <NoCopyBox>
                <Image alt='activity img' src={url} fill />
              </NoCopyBox>
            </S.ActivityImg>
          </ImageDetail>
        ))}
      </div>
    </S.ClubActivity>
  )
}
