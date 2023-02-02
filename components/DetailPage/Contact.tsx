import * as S from './style'

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
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  opacity='0.4'
                  d='M6 7C6 5.34315 7.34315 4 9 4H10.7574C11.553 4 12.3161 4.31607 12.8787 4.87868L13.1213 5.12132C13.6839 5.68393 14 6.44699 14 7.24264V11C14 12.6569 12.6569 14 11 14H9C7.34315 14 6 12.6569 6 11V7Z'
                  fill='#7D7D7D'
                />
                <path
                  d='M3 6C3 4.34315 4.34315 3 6 3H7.75736C8.55301 3 9.31607 3.31607 9.87868 3.87868L10.1213 4.12132C10.6839 4.68393 11 5.44699 11 6.24264V10C11 11.6569 9.65685 13 8 13H6C4.34315 13 3 11.6569 3 10V6Z'
                  fill='#6F6F6F'
                />
                <path d='M1 9V5C1 2.79086 2.79086 1 5 1H7' stroke='#C0C0C0' />
              </svg>
            </i>
          </span>
        </S.ContactInfo>
      </div>
      <hr />
    </S.Contact>
  )
}
