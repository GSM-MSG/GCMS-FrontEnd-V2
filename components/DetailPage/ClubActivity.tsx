import { RootState } from '@/store'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import * as S from './style'
import NoCopyBox from '../Common/NoCopyBox'

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
            <NoCopyBox>
              <Image alt='activity img' src={url} fill sizes='100%' />
            </NoCopyBox>
          </S.ActivityImg>
        ))}
      </div>
    </S.ClubActivity>
  )
}
