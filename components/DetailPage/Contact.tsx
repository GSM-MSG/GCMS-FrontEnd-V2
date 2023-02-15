import * as S from './style'
import * as SVG from '@/assets/svg'

export default function Contact() {
  return (
    <S.Contact>
      <div>
        <S.ProfileImg src='https://www.computerhope.com/jargon/h/img.png' />
        <S.ContactInfo>
          <p>연략처</p>
          <span
            onClick={() => {
              navigator.clipboard.writeText('ㄴㅁㅇㅁㅇ')
            }}
          >
            이현빈 #1793
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
