import Link from 'next/link'
import NewClubItem from './NewClubItem'
import * as S from './style'

export default function NewClub() {
  return (
    <S.NewClubWrapper>
      <S.NewClubHead>
        <p>새로 생긴 동아리들</p>
        <Link href='#'>
          전체 14개{' '}
          <svg
            width='5'
            height='10'
            viewBox='0 0 5 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0.459786 0.623718C0.232687 0.805559 0.209674 1.12144 0.408386 1.32926L3.56521 4.63075C3.75467 4.82888 3.74926 5.14262 3.55309 5.3341L0.14778 8.65803C-0.0586081 8.85948 -0.0474539 9.1759 0.172693 9.36477C0.39284 9.55363 0.738615 9.54342 0.945003 9.34197L4.70444 5.67237C5.08866 5.29733 5.09955 4.71681 4.72962 4.32992L1.23079 0.670754C1.03207 0.462936 0.686886 0.441878 0.459786 0.623718Z'
              fill='#7A7A7A'
            />
          </svg>
        </Link>
      </S.NewClubHead>
      <S.NewClubList>
        <NewClubItem />
        <NewClubItem />
        <NewClubItem />
        <NewClubItem />
        <NewClubItem />
        <NewClubItem />
        <NewClubItem />
      </S.NewClubList>
    </S.NewClubWrapper>
  )
}
