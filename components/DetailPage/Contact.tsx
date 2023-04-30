import * as S from './style'
import * as SVG from '@/assets/svg'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { toast } from 'react-toastify'
import toastOption from '@/lib/toastOption'
import { ProfileSrc } from '@/lib/ProfileSrc'
import NoCopyBox from '../Common/NoCopyBox'

export default function Contact() {
  const { clubDetail } = useSelector((state: RootState) => ({
    clubDetail: state.clubDetail,
  }))

  return (
    <S.Contact>
      <div>
        <NoCopyBox>
          <S.ProfileImg
            alt='progile img'
            src={clubDetail.head.profileImg || ProfileSrc}
            width={33}
            height={33}
          />
        </NoCopyBox>
        <S.ContactInfo>
          <p>연략처</p>
          <span
            onClick={() => {
              toast.info('복사 되었습니다.', toastOption)
              navigator.clipboard.writeText(clubDetail.contact)
            }}
          >
            {clubDetail.contact}
            <i>
              <SVG.CopyIcon />
            </i>
          </span>
        </S.ContactInfo>
      </div>
      <hr />
    </S.Contact>
  )
}
